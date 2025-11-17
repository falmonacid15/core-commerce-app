import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="flex flex-col w-full">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm w-fit">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="font-medium">Nueva Colección 2024</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Descubre tu estilo perfecto
            </h1>

            <p className="text-lg text-muted-foreground text-pretty max-w-xl">
              Explora nuestra exclusiva selección de productos premium. Calidad
              excepcional, diseño innovador y los mejores precios del mercado.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/products">
                  Explorar Productos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/deals">Ver Ofertas</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold">50K+</p>
                <p className="text-sm text-muted-foreground">
                  Clientes Felices
                </p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm text-muted-foreground">Productos</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold">4.8★</p>
                <p className="text-sm text-muted-foreground">Valoración</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
              <img
                src="/modern-shopping-hero-image.jpg"
                alt="Hero"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-accent p-6 text-accent-foreground shadow-lg">
              <p className="text-sm font-medium">Envío Gratis</p>
              <p className="text-2xl font-bold">En compras +$50</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
