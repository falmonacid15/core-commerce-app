import { SidebarTrigger } from "@/components/ui/sidebar";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";

export default function AppNavbar() {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <SidebarTrigger />
      </NavbarBrand>
      <NavbarContent justify="start">
        <NavbarItem></NavbarItem>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarItem></NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem></NavbarItem>
        <NavbarItem></NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
