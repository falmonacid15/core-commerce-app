import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Store } from "lucide-react";

export default function AppSidebarHeader() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem className="pointer-events-none">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground pointer-none"
            variant="outline"
          >
            <div className="bg-default-500 flex aspect-square size-8 items-center justify-center rounded-lg">
              <Store strokeWidth={2.5} className="size-6" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate text-base font-extrabold">
                Core Commerce
              </span>
              <span className="truncate text-xs">E-commerce en tus manos</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
