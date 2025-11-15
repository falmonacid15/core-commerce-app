"use client";
import { ReactNode } from "react";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { SidebarProvider } from "../ui/sidebar";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider locale="es-ES">
      <ToastProvider />
      <SidebarProvider>{children}</SidebarProvider>
    </HeroUIProvider>
  );
}
