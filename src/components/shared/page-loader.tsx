import { Store } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative flex flex-col items-center gap-8 px-4">
        <div className="relative animate-pulse">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-primary shadow-2xl shadow-primary/50 ">
            <Store className="size-18" />
          </div>
          <p className="text-center text-sm font-medium mt-2">Cargando</p>
        </div>
      </div>
    </div>
  );
}
