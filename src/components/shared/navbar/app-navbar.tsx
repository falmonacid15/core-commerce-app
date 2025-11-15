import { SidebarTrigger } from "@/components/ui/sidebar";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";

export default function AppNavbar() {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <SidebarTrigger />
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>item</NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
