"use client";

import { addToast, Button, Input } from "@heroui/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

type RegisterFormFields = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormFields>();

  const registerMutation = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: RegisterFormFields) => {
      const res = await axios.post("/api/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      return res.data;
    },
    onSuccess: () => {
      addToast({
        title: "Operación exitosa",
        description: "Cuenta creada exitosamente",
        color: "primary",
      });
      router.push("/auth/login");
    },
    onError: () => {
      addToast({
        title: "Operación fallida",
        description: "Hubo un error al crear la cuenta",
        color: "primary",
      });
    },
  });

  const onSubmit = async (data: RegisterFormFields) => {
    await registerMutation.mutateAsync(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        variant="faded"
        label="Nombre"
        placeholder="Ingresa tu nombre"
        isInvalid={!!errors.name}
        errorMessage={errors.name?.message}
        {...register("name", { required: "Este campo es requerido" })}
      />

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

      <Input
        type="password"
        variant="faded"
        label="Confirmar contraseña"
        placeholder="Confirma tu contraseña"
        isInvalid={!!errors.confirmPassword}
        errorMessage={errors.confirmPassword?.message}
        {...register("confirmPassword", {
          required: "Este campo es requerido",
        })}
      />

      <Button
        type="submit"
        color="primary"
        fullWidth
        className="mt-6"
        variant="flat"
        isLoading={registerMutation.isPending}
      >
        Crear cuenta
      </Button>
    </form>
  );
}
