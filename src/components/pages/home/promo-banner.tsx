import GlareHover from "@/components/GlareHover";
import { Button } from "@/components/ui/button";
import { Tag, Clock } from "lucide-react";
import Link from "next/link";

export function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-accent text-accent-foreground rounded-xl">
      <div className="absolute inset-0 bg-grid-white/5" />
      <div className="container relative px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1.5 text-sm backdrop-blur">
            <Tag className="h-4 w-4" />
            <span className="font-medium">Oferta por Tiempo Limitado</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Hasta 50% de Descuento
          </h2>
          <p className="mt-4 text-lg text-balance opacity-90">
            En productos seleccionados de tecnología y accesorios. No dejes
            pasar esta oportunidad única.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/deals">Ver Ofertas</Link>
            </Button>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>Termina en: 2 días 14 horas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
