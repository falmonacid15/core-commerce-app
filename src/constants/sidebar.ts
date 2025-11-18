import { NavigationItems } from "@/types/sidebar";
import {
  BadgePercent,
  BookOpenText,
  Box,
  Building2,
  ClipboardList,
  Database,
  DollarSign,
  FileSpreadsheet,
  FileText,
  Folders,
  HelpCircle,
  Home,
  Info,
  LayoutDashboard,
  LifeBuoy,
  Mail,
  Package,
  Settings,
  SlidersHorizontal,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  Truck,
  UserCog,
  Users,
} from "lucide-react";

export const adminNavItems: NavigationItems = {
  title: "Administrador",
  icon: Store,
  items: [],
  collapsible: [
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
  ],
};

export const ownerNavItems: NavigationItems = {
  title: "Dueño",
  icon: Store,
  items: [],
  collapsible: [
    {
      title: "Tienda",
      icon: Store,
      items: [
        {
          name: "Pagina principal",
          href: "/owner/home-page-settings",
          icon: LayoutDashboard,
        },
        {
          name: "Ajustes de tienda",
          href: "/owner/store-settings",
          icon: Settings,
        },
        { name: "Personal", href: "/owner/staff", icon: UserCog },
        { name: "Clientes", href: "/owner/customers", icon: Users },
        { name: "Proveedores", href: "/owner/suppliers", icon: Truck },
      ],
    },
    {
      title: "Facturación",
      icon: FileText,
      items: [
        { name: "Ordenes", href: "/owner/orders", icon: ClipboardList },
        { name: "Documentos", href: "/owner/invoices", icon: FileSpreadsheet },
      ],
    },
    {
      title: "Mantenedores",
      icon: Database,
      items: [
        { name: "Usuarios", href: "/owner/maintainers/users", icon: Users },
        { name: "Productos", href: "/owner/products", icon: Package },
        {
          name: "Atributos",
          href: "/owner/attributes",
          icon: SlidersHorizontal,
        },
        { name: "Categorías", href: "/owner/categories", icon: Folders },
      ],
    },
  ],
};

export const sellerNavItems: NavigationItems = {
  title: "Vendedor",
  icon: Store,
  items: [
    {
      name: "Nueva Venta",
      icon: DollarSign,
      href: "/new-sell",
    },
  ],
  collapsible: [
    {
      title: "Tienda",
      icon: Store,
      items: [
        { name: "Clientes", href: "/seller/customers", icon: Users },
        { name: "Proveedores", href: "/seller/suppliers", icon: Truck },
      ],
    },
    {
      title: "Facturación",
      icon: FileText,
      items: [
        { name: "Ordenes", href: "/seller/orders", icon: ClipboardList },
        { name: "Documentos", href: "/seller/invoices", icon: FileSpreadsheet },
      ],
    },
    {
      title: "Mantenedores",
      icon: Database,
      items: [
        { name: "Categorías", href: "/admin/categories", icon: Folders },
        { name: "Productos", href: "/admin/products", icon: Package },
        {
          name: "Atributos",
          href: "/admin/attributes",
          icon: SlidersHorizontal,
        },
      ],
    },
  ],
};

export const clientNavItems: NavigationItems = {
  title: "Cliente",
  icon: Box,
  items: [],
  collapsible: [
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
  ],
};

export const publicNavItems: NavigationItems = {
  title: "Navegación",
  icon: Box,
  items: [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Ofertas", href: "/deals", icon: BadgePercent },
    { name: "Novedades", href: "/new", icon: Sparkles },
    { name: "Mejores valorados", href: "/top-rated", icon: Star },
    { name: "Lo más vendido", href: "/best-sellers", icon: TrendingUp },
  ],
  collapsible: [
    {
      title: "Productos",
      icon: Store,
      items: [
        {
          name: "Los mas vendidos",
          href: "/admin/home-page-settings",
          icon: LayoutDashboard,
        },
        {
          name: "Mejores valorados",
          href: "/admin/store-settings",
          icon: Settings,
        },
        { name: "Mas comentados", href: "/admin/staff", icon: UserCog },
        { name: "Mas recientes", href: "/admin/customers", icon: Users },
        { name: "Ofertas", href: "/admin/suppliers", icon: Truck },
      ],
    },
    {
      title: "Información",
      icon: Info,
      items: [
        { name: "Sobre nosotros", icon: Building2, href: "/about" },
        { name: "Guías de compra", icon: BookOpenText, href: "/guides" },
        { name: "FAQ", icon: HelpCircle, href: "/faq" },
        { name: "Soporte", icon: LifeBuoy, href: "/support" },
        { name: "Contacto", icon: Mail, href: "/contact" },
      ],
    },
  ],
};
