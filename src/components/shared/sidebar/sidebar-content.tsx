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
  Box,
  ChevronRight,
  ClipboardList,
  Database,
  FileSpreadsheet,
  FileText,
  Folders,
  Home,
  LayoutDashboard,
  Package,
  Settings,
  SlidersHorizontal,
  Store,
  Truck,
  UserCog,
  Users,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function AppSidebarContent() {
  const router = useRouter();
  const pathName = usePathname();
  const { data: session } = useSession();
  const { setOpen, open } = useSidebar();

  const clientNavItems = [
    {
      title: "Productos",
      icon: Box,
      items: [{ name: "Mejores valorados", href: "/products", icon: Box }],
    },
    {
      title: "Categorías",
      icon: Box,
      items: [{ name: "Mejores valorados", icon: Box, href: "/categories" }],
    },
  ];

  const adminNavItems = [
    {
      title: "Tienda",
      icon: Store,
      items: [
        {
          name: "Pagina principal",
          href: "/admin/home-page-settings",
          icon: LayoutDashboard,
        },
        {
          name: "Ajustes de tienda",
          href: "/admin/store-settings",
          icon: Settings,
        },
        { name: "Personal", href: "/admin/staff", icon: UserCog },
        { name: "Clientes", href: "/admin/customers", icon: Users },
        { name: "Proveedores", href: "/admin/suppliers", icon: Truck },
      ],
    },
    {
      title: "Facturación",
      icon: FileText,
      items: [
        { name: "Ordenes", href: "/admin/orders", icon: ClipboardList },
        { name: "Documentos", href: "/admin/invoices", icon: FileSpreadsheet },
      ],
    },
    {
      title: "Mantenedores",
      icon: Database,
      items: [
        { name: "Usuarios", href: "/admin/maintainers/users", icon: Users },
        { name: "Productos", href: "/admin/products", icon: Package },
        {
          name: "Atributos",
          href: "/admin/attributes",
          icon: SlidersHorizontal,
        },
        { name: "Categorías", href: "/admin/categories", icon: Folders },
      ],
    },
  ];

  const renderCollapsibleNavGroup = (
    navItems: typeof adminNavItems,
    groupLabel: string
  ) => (
    <SidebarGroup>
      <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>
      <SidebarMenu>
        {navItems.map((group) => (
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
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="cursor-pointer"
              onClick={() => router.push("/")}
              isActive={pathName === "/"}
            >
              <Home className="w-4 h-4" />
              <span>Inicio</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>

      {session?.user.role === "CLIENT"
        ? renderCollapsibleNavGroup(adminNavItems, "Administrador")
        : renderCollapsibleNavGroup(clientNavItems, "Navegación")}
    </SidebarContent>
  );
}
