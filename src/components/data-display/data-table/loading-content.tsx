import { Spinner } from "@heroui/react";

export default function LoadingContent() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-2">
      <Spinner variant="wave" size="lg" />
      <p className="text-sm">Cargando registros...</p>
    </div>
  );
}
