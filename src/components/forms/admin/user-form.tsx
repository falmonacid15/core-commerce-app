import { Input } from "@heroui/react";

export default function UserForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input
        isRequired
        label="Nombre"
        placeholder="Ingrese el nombre del usuario"
      />
      <Input
        isRequired
        label="Correo electrónico"
        placeholder="Ingrese el correo electrónico del usuario"
      />
      <Input
        isRequired
        label="Contraseña"
        placeholder="Ingrese la Contraseña del usuario"
      />
    </form>
  );
}
