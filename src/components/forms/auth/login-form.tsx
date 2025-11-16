"use client";

import { addToast, Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

type LoginFormFields = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormFields>();

  const onSubmit = async (data: LoginFormFields) => {
    setIsLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      ...data,
    });

    if (result.error) {
      setError("email", {});
      setError("password", {});
      addToast({
        title: "Operación invalida",
        description: "Credenciales invalidas",
        color: "danger",
      });
    } else {
      router.refresh();
      addToast({
        title: "Operación exitosa",
        description: "Bienvenido de nuevo",
        color: "success",
      });
    }

    setIsLoading(false);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        variant="faded"
        label="Correo electrónico"
        placeholder="Ingresa tu correo electrónico"
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
        {...register("email", { required: "Este campo es requerido" })}
      />

      <Input
        type="password"
        variant="faded"
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        isInvalid={!!errors.password}
        errorMessage={errors.password?.message}
        {...register("password", { required: "Este campo es requerido" })}
      />

      <Button
        type="submit"
        color="primary"
        fullWidth
        className="mt-6"
        variant="flat"
        isLoading={isLoading}
      >
        Iniciar sesión
      </Button>
    </form>
  );
}
