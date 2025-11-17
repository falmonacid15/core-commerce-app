import { SidebarTrigger } from "@/components/ui/sidebar";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import NavbarShoppingCart from "./navbar-shopping-cart";

export default function AppNavbar() {
  return (
    <Navbar
      maxWidth="full"
      className="bg-sidebar/40 backdrop-blur-md shadow-sm"
    >
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
        <NavbarItem>
          <NavbarShoppingCart />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
