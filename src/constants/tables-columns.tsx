import { Column } from "@/types/data-table";
import { User } from "@prisma/client";

export const usersColumns: Column<User>[] = [
  { key: "name", label: "NOMBRE", align: "start" },
  { key: "email", label: "CORREO ELECTRÓNICO", align: "start" },
  { key: "image", label: "IMAGEN", align: "center" },
  { key: "actions", label: "ACCIONES", align: "center" },
];
