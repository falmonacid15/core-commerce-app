import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";

import "./globals.css";
import "atropos/css";

import Providers from "@/components/shared/providers";
import AppLayout from "@/components/shared/app-layout";

import { auth } from "@/auth";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CoreCommerce",
    template: "%s - CoreCommerce",
  },
  description: "Core Commerce E-commerce",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="es">
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <Providers session={session}>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
