import { LucideIcon } from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface CollapsibleGroup {
  title: string;
  icon: LucideIcon;
  items: NavItem[];
}

export interface NavigationItems {
  title: string;
  icon: LucideIcon;
  items: NavItem[];
  collapsible?: CollapsibleGroup[];
}
