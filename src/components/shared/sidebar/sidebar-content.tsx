"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  adminNavItems,
  clientNavItems,
  ownerNavItems,
  publicNavItems,
  sellerNavItems,
} from "@/constants/sidebar";
import { NavigationItems } from "@/types/sidebar";
import { ChevronRight } from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function AppSidebarContent() {
  const router = useRouter();
  const pathName = usePathname();
  const { data: session } = useSession();
  const { setOpen, open } = useSidebar();

  const renderSidebarMenu = (navItems: NavigationItems, groupLabel: string) => (
    <SidebarGroup>
      <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>
      <SidebarMenu>
        {navItems.items?.map((navItem) => (
          <SidebarMenuItem key={navItem.name}>
            <SidebarMenuButton
              className="cursor-pointer"
              onClick={() => router.push(navItem.href)}
              isActive={pathName === navItem.href}
              tooltip={navItem.name}
            >
              <navItem.icon className="w-4 h-4" />
              <span>{navItem.name}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        {navItems.collapsible?.map((group) => (
          <Collapsible key={group.title} className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger
                asChild
                onClick={() => {
                  if (!open) setOpen(true);
                }}
              >
                <SidebarMenuButton tooltip={group.title}>
                  {group.icon && <group.icon className="w-4 h-4" />}
                  <span>{group.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarMenuSub>
                  {group.items.map((item) => (
                    <SidebarMenuSubItem key={item.name}>
                      <SidebarMenuSubButton
                        asChild
                        className="cursor-pointer"
                        onClick={() => router.push(item.href)}
                        isActive={pathName === item.href}
                      >
                        <a>
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.name}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );

  return (
    <SidebarContent>
      {session &&
        session.user.role === "ADMIN" &&
        renderSidebarMenu(adminNavItems, "Administrador")}
      {session &&
        session.user.role === "OWNER" &&
        renderSidebarMenu(ownerNavItems, "Dueño")}
      {session &&
        session.user.role === "SELLER" &&
        renderSidebarMenu(sellerNavItems, "Vendedor")}
      {session &&
        session.user.role === "CLIENT" &&
        renderSidebarMenu(clientNavItems, "Cliente")}
      {session && session?.user.role === "ADMIN"
        ? null
        : renderSidebarMenu(publicNavItems, "Navegación")}
    </SidebarContent>
  );
}
