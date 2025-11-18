"use client";

import DataTable from "@/components/data-display/data-table/data-table";
import { usersColumns } from "@/constants/tables-columns";
import { Button } from "@heroui/react";
import { UserPlus } from "lucide-react";

export default function UsersPageContent() {
  return (
    <div>
      <DataTable
        key="admin-users-table"
        columns={usersColumns}
        rows={[]}
        searchable
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
