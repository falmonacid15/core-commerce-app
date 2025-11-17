"use client";

import { ReactNode } from "react";
import { SidebarInset } from "../ui/sidebar";
import AppSidebar from "./sidebar/app-sidebar";
import AppNavbar from "./navbar/app-navbar";
import { usePathname } from "next/navigation";
import { useIsFetching } from "@tanstack/react-query";
import { LoadingScreen } from "./page-loader";

export default function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isFetching = useIsFetching({ queryKey: ["home-page"] });

  const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/reset-password",
  ];
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  if (isAuthRoute) {
    return <div className="min-h-screen w-full flex">{children}</div>;
  }

  return (
    <div className="flex w-full min-h-screen">
      <AppSidebar />
      <SidebarInset>
        <AppNavbar />

        {isFetching > 0 ? (
          <LoadingScreen />
        ) : (
          <main className="flex-1 overflow-auto flex flex-col gap-4 pt-2 pb-4 px-2 sm:px-4 md:px-8 lg:px-16 transition-all">
            <div className="w-full mx-auto py-8">{children}</div>
          </main>
        )}
      </SidebarInset>
    </div>
  );
}
