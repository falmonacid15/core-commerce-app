"use client";

import DataTable from "@/components/data-display/data-table/data-table";
import { usersColumns } from "@/constants/tables-columns";
import { Button } from "@heroui/react";
import { UserPlus } from "lucide-react";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { User } from "@/types/database";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PaginatedResponse } from "@/types/responses";
import { BaseRow } from "@/types/data-table";

export default function UsersPageContent() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const debouncedSearch = useDebounce(search, 200);

  const { data: users, isLoading: dataTableLoading } = useQuery({
    queryKey: ["admin-users-table", debouncedSearch, page, itemsPerPage],
    queryFn: async () => {
      const res = await axios.get<PaginatedResponse<User>>(
        `/api/admin/users?where=${JSON.stringify(
          {}
        )}&page=${page}&perPage=${itemsPerPage}`
      );
      return res.data;
    },
  });

  const handleEditUser = (user: User) => {};
  const handleDeleteUser = (user: User) => {};

  return (
    <div className="p-2">
      <DataTable<User & BaseRow>
        key="admin-users-table"
        columns={usersColumns}
        rows={users?.data || []}
        totalCount={users?.pagination.totalCount}
        isLoading={dataTableLoading}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
        page={page}
        onPageChange={setPage}
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
          >
            Nuevo usuario
          </Button>
        }
      />
    </div>
  );
}
