"use client";
import { ReactNode } from "react";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { SidebarProvider } from "../ui/sidebar";
import { ThemeProvider } from "./theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { Session } from "next-auth";

export default function Providers({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <HeroUIProvider>
          <ToastProvider />
          <SidebarProvider>{children}</SidebarProvider>
        </HeroUIProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
