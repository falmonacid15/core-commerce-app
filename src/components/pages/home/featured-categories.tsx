import Link from "next/link";
import { Laptop, Headphones, Cpu, Keyboard } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollFloat from "@/components/ScrollFloat";
import PixelCard from "@/components/PixelCard";
import CountUp from "@/components/CountUp";
import FadeContent from "@/components/FadeContent";

const categories = [
  {
    name: "Hardware PC",
    icon: Cpu,
    href: "/products?category=hardware",
    image:
      "https://images.unsplash.com/photo-1587202372775-98909b33f3ae?q=80&w=1200&auto=format&fit=crop",
    color: "from-blue-500/20 to-indigo-500/20",
    products: 90,
  },
  {
    name: "Periféricos",
    icon: Keyboard,
    href: "/products?category=perifericos",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1200&auto=format&fit=crop",
    color: "from-purple-500/20 to-pink-500/20",
    products: 90,
  },
  {
    name: "Laptops",
    icon: Laptop,
    href: "/products?category=laptops",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    color: "from-orange-500/20 to-red-500/20",
    products: 90,
  },
  {
    name: "Audio & Streaming",
    icon: Headphones,
    href: "/products?category=audio",
    image:
      "https://images.unsplash.com/photo-1583397291207-d3c6c8f9c9a0?q=80&w=1200&auto=format&fit=crop",
    color: "from-green-500/20 to-emerald-500/20",
    products: 90,
  },
];

export function FeaturedCategories() {
  return (
    <section className="relative overflow-hidden rounded-xl">
      <div className="relative w-full px-4 py-16 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <FadeContent
              blur
              duration={500}
              easing="ease-out"
              initialOpacity={0}
            >
              <h1 className="text-3xl font-extrabold">Categorías Destacadas</h1>
            </FadeContent>
            <FadeContent
              blur
              duration={500}
              easing="ease-out"
              initialOpacity={0}
              delay={100}
            >
              <p className="mt-2 text-default-500 font-medium">
                Encuentra exactamente lo que buscas
              </p>
            </FadeContent>
          </div>
          <FadeContent
            blur
            duration={500}
            easing="ease-out"
            initialOpacity={0}
            delay={200}
          >
            <Link
              href="/products"
              className="hidden text-sm font-medium text-primary hover:underline md:block"
            >
              Ver todas →
            </Link>
          </FadeContent>
        </div>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center ">
          {categories.map((category, index) => (
            <FadeContent
              duration={1000}
              easing="ease-out"
              threshold={0.5}
              initialOpacity={0}
              delay={index * 200}
              key={index}
            >
              <Link
                key={category.name}
                href={category.href}
                className="group w-full"
              >
                <PixelCard
                  variant="blue"
                  className="group overflow-hidden rounded-xl border-none relative w-full"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                    <div
                      className={cn(
                        "mb-4 flex h-12 w-12 items-center justify-center rounded-lg",
                        category.color
                      )}
                    >
                      <category.icon className="h-12 w-12 group-hover:text-primary transition-all duration-700 group-hover:scale-150" />
                    </div>

                    <h3 className="text-xl text-center line-clamp-1 font-extrabold text-default-500 group-hover:text-foreground transition-colors duration-500">
                      {category.name}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-sm text-center text-default-500 group-hover:text-foreground transition-colors duration-500">
                      Explora la colección
                    </p>
                    <div className="flex flex-col justify-center mt-4 text-default-500 group-hover:text-foreground transition-colors duration-700">
                      <CountUp
                        from={0}
                        to={category.products}
                        separator=","
                        direction="up"
                        duration={2}
                        className="text-2xl font-extrabold text-center"
                      />
                      <p>Productos</p>
                    </div>
                  </div>
                </PixelCard>
              </Link>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
