import StoreSettingsContent from "@/components/pages/store-settings/content";
import HeaderPage from "@/components/shared/header-page";
import { Settings } from "lucide-react";

export default function StoreSettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <HeaderPage
        title="Ajustes de la tienda"
        description="Actualiza los datos de tu tienda"
        icon={Settings}
        backwardRoute="/"
      />
      <StoreSettingsContent />
    </div>
  );
}
