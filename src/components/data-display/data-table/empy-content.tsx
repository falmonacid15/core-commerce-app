import { Inbox } from "lucide-react";

export default function EmptyContent() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-2">
      <Inbox className="size-9" />
      <p className="text-sm">No hay registros para mostrar.</p>
    </div>
  );
}
