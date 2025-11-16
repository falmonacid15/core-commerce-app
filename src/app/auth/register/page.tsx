import RegisterForm from "@/components/forms/auth/register-form";
import GoogleAuthButton from "@/components/ui/google-auth-button";
import { ShoppingBag } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creación de cuenta",
  description: "Core Commerce - Creación de cuenta",
};

export default function RegisterPage() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center px-6 lg:w-1/2 lg:px-20">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-center">
            <ShoppingBag className="size-18 text-primary" />
          </div>

          <h1 className="text-center text-3xl font-semibold tracking-tight text-balance">
            Creación de cuenta
          </h1>
          <GoogleAuthButton />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-4 text-muted-foreground">
                o
              </span>
            </div>
          </div>

          <RegisterForm />

          <p className="text-center text-sm text-default-500">
            Al continuar, aceptas los términos y condiciones de
            corecommerce.com.
            <Link href="/terms" className="underline hover:text-primary">
              {" "}
              Términos y condiciones
            </Link>{" "}
            y{" "}
            <Link href="/privacy" className="underline hover:text-primary">
              Política de privacidad
            </Link>
          </p>
          <p className="text-center text-sm text-default-600">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href="/auth/login"
              className="font-medium underline hover:text-primary"
            >
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 bg-content2 items-center justify-center">
        <ShoppingBag className="size-48 text-primary" />
      </div>
    </>
  );
}
