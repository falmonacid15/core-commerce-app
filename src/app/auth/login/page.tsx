import LoginForm from "@/components/forms/auth/login-form";
import GoogleAuthButton from "@/components/ui/google-auth-button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inicio de sesión",
  description: "Core Commerce - Inicio de sesión",
};

export default function LoginPage() {
  return (
    <>
      <div className="hidden lg:flex lg:w-1/2 bg-gray-200 items-center justify-center">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="150"
            y1="0"
            x2="150"
            y2="300"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="150"
            x2="300"
            y2="150"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="35"
            y1="35"
            x2="265"
            y2="265"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="265"
            y1="35"
            x2="35"
            y2="265"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="75"
            y1="15"
            x2="225"
            y2="285"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="225"
            y1="15"
            x2="75"
            y2="285"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="15"
            y1="75"
            x2="285"
            y2="225"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="285"
            y1="75"
            x2="15"
            y2="225"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="110"
            y1="10"
            x2="190"
            y2="290"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="190"
            y1="10"
            x2="110"
            y2="290"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="10"
            y1="110"
            x2="290"
            y2="190"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="290"
            y1="110"
            x2="10"
            y2="190"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-6 lg:w-1/2 lg:px-20">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M24 4L20 12L12 16L20 20L24 28L28 20L36 16L28 12L24 4Z"
                fill="currentColor"
              />
              <path
                d="M24 20L20 28L12 32L20 36L24 44L28 36L36 32L28 28L24 20Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <h1 className="text-center text-3xl font-semibold tracking-tight text-balance">
            Inicio de sesión
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
          <LoginForm />
          <p className="text-center text-sm text-muted-foreground">
            Al continuar, aceptas los términos y condiciones de
            corecommerce.com.
            <Link href="/terms" className="underline hover:text-foreground">
              {" "}
              Términos y condiciones
            </Link>{" "}
            y{" "}
            <Link href="/privacy" className="underline hover:text-foreground">
              Política de privacidad
            </Link>
          </p>
          <p className="text-center text-sm">
            ¿No tienes una cuenta?{" "}
            <Link
              href="/auth/register"
              className="font-medium underline hover:text-foreground"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
