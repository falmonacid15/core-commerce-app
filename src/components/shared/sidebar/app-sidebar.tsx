import { Sidebar, SidebarFooter } from "@/components/ui/sidebar";
import AppSidebarHeader from "./sidebar-header";
import SidebarProfile from "./sidebar-profile";
import AppSidebarContent from "./sidebar-content";

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <AppSidebarHeader />
      <AppSidebarContent />
      <SidebarFooter>
        <SidebarProfile />
      </SidebarFooter>
    </Sidebar>
  );
}
