import UsersPageContent from "@/components/pages/admin/users/users-content";
import HeaderPage from "@/components/shared/header-page";
import { Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usuarios",
  description: "Core Commerce - Panel de administración de usuarios",
};

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-8">
      <HeaderPage
        title="Gestión de usuarios"
        description="Administración de los usuarios de la aplicación."
        icon={Users}
      />
      <UsersPageContent />
    </div>
  );
}
