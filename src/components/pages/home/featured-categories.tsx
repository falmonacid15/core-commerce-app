import Link from "next/link";
import { Shirt, Watch, Laptop, Headphones, Zap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Ropa",
    icon: Shirt,
    href: "/products?category=ropa",
    image: "/diverse-fashion-collection.png",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    name: "Accesorios",
    icon: Watch,
    href: "/products?category=accesorios",
    image: "/watches-accessories.jpg",
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    name: "Tecnología",
    icon: Laptop,
    href: "/products?category=tecnologia",
    image: "/technology-laptop.jpg",
    color: "from-orange-500/10 to-red-500/10",
  },
  {
    name: "Audio",
    icon: Headphones,
    href: "/products?category=audio",
    image: "/headphones-audio.png",
    color: "from-green-500/10 to-emerald-500/10",
  },
];

export function FeaturedCategories() {
  return (
    <section className="container px-4 py-12 md:px-6 md:py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-balance">
            Categorías Destacadas
          </h2>
          <p className="mt-2 text-muted-foreground">
            Encuentra exactamente lo que buscas
          </p>
        </div>
        <Link
          href="/products"
          className="hidden text-sm font-medium text-primary hover:underline md:block"
        >
          Ver todas →
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg"
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100",
                category.color
              )}
            />
            <div className="relative p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Explora la colección
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
