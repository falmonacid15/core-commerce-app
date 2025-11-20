"use client";

import DataTable from "@/components/data-display/data-table/data-table";
import { usersColumns } from "@/constants/tables-columns";
import { Button, useDisclosure } from "@heroui/react";
import { UserPlus } from "lucide-react";
import { useRef, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { User } from "@/types/database";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PaginatedResponse } from "@/types/responses";
import { BaseRow } from "@/types/data-table";
import FormModal from "@/components/ui/form-modal";
import ConfirmModal from "@/components/ui/confirm-modal";
import UserForm from "@/components/forms/admin/user-form";

export default function UsersPageContent() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const formRef = useRef<HTMLFormElement | null>(null);

  const debouncedSearch = useDebounce(search, 200);

  const formModalDisclosure = useDisclosure();
  const confirmModalDisclosure = useDisclosure();

  const { data: users, isLoading: dataTableLoading } = useQuery({
    queryKey: ["admin-users-table", debouncedSearch, page, itemsPerPage],
    queryFn: async () => {
      const res = await axios.get<PaginatedResponse<User & BaseRow>>(
        `/api/admin/users?where=${JSON.stringify({
          OR: [
            { name: { contains: debouncedSearch, mode: "insensitive" } },
            { email: { contains: debouncedSearch, mode: "insensitive" } },
          ],
        })}&page=${page}&perPage=${itemsPerPage}`
      );
      return res.data;
    },
  });

  const handleTopAction = () => {
    setSelectedUser(null);
    formModalDisclosure.onOpen();
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    formModalDisclosure.onOpen();
  };

  const handleDeleteUser = (user: User) => {
    setSelectedUser(user);
    confirmModalDisclosure.onOpen();
  };

  const handleConfirmDelete = async () => {};

  return (
    <div className="flex flex-col">
      <DataTable<User & BaseRow>
        key="admin-users-table"
        columns={usersColumns}
        rows={users?.data || []}
        totalCount={users?.pagination?.totalCount || 0}
        isLoading={dataTableLoading}
        page={page}
        onPageChange={setPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
        searchable
        searchQuery={search}
        onSearchQueryChange={setSearch}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
        onExcelExportItem={() => {}}
        onPdfExportItem={() => {}}
        columnsActions
        headerActions={
          <Button
            startContent={<UserPlus className="size-8" />}
            variant="solid"
            color="primary"
            onPress={handleTopAction}
          >
            Nuevo usuario
          </Button>
        }
      />
      <FormModal
        key="user-form-modal"
        title={selectedUser ? "Editando usuario" : "Nuevo usuario"}
        form={<UserForm />}
        formRef={formRef}
        onOpenChange={formModalDisclosure.onOpenChange}
        isOpen={formModalDisclosure.isOpen}
      />
      <ConfirmModal
        key="user-confirm-modal"
        title="Confirmar acción"
        message="¿Estas seguro que deseas eliminar este usuario?"
        type="danger"
        onConfirm={handleConfirmDelete}
        onOpenChange={confirmModalDisclosure.onOpenChange}
        isOpen={confirmModalDisclosure.isOpen}
        isLoading={false}
      />
    </div>
  );
}
