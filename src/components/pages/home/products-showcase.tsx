"use client";

import FadeContent from "@/components/FadeContent";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Chip } from "@heroui/react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Tarjeta Gráfica NVIDIA GeForce RTX 4070",
    price: 699.99,
    originalPrice: 799.99,
    brand: "NVIDIA",
    rating: 4.9,
    reviews: 312,
    image: "/products/rtx-4070.png",
    badge: "Oferta",
  },
  {
    id: 2,
    name: "Procesador AMD Ryzen 7 7800X3D",
    price: 449.99,
    originalPrice: 499.99,
    brand: "AMD",
    rating: 4.9,
    reviews: 256,
    image: "/products/ryzen-7800x3d.png",
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Memoria RAM Corsair Vengeance RGB 32GB (2×16) 6000MHz",
    price: 159.99,
    brand: "Corsair",
    rating: 4.8,
    reviews: 187,
    image: "/products/ram-corsair-vengeance.png",
    badge: "Nuevo",
  },
  {
    id: 4,
    name: "SSD NVMe Samsung 990 PRO 2TB",
    price: 179.99,
    originalPrice: 229.99,
    brand: "Samsung",
    rating: 4.9,
    reviews: 421,
    image: "/products/samsung-990-pro.png",
    badge: "Destacado",
  },
  {
    id: 5,
    name: "Monitor Gamer LG UltraGear 27'' 165Hz IPS",
    price: 299.99,
    originalPrice: 349.99,
    brand: "LG",
    rating: 4.7,
    reviews: 198,
    image: "/products/lg-ultragear-27.png",
    badge: "Popular",
  },
  {
    id: 6,
    name: "Fuente de Poder EVGA 750W Gold Modular",
    price: 119.99,
    brand: "EVGA",
    rating: 4.8,
    reviews: 142,
    image: "/products/evga-750w-gold.png",
    badge: "Recomendado",
  },
];

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden w-full">
      <div className="container px-4 py-12 md:px-6 md:py-16 ">
        <div className="mb-8 text-center">
          <FadeContent blur duration={500} easing="ease-out" initialOpacity={0}>
            <h1 className="text-4xl font-extrabold tracking-tight text-balance">
              Productos Destacados
            </h1>
          </FadeContent>
          <FadeContent blur duration={500} easing="ease-out" initialOpacity={0}>
            <p className="mt-2 text-default-500 font-medium">
              Los favoritos de nuestros clientes
            </p>
          </FadeContent>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <FadeContent
              key={index}
              duration={1000}
              easing="ease-out"
              threshold={0.5}
              initialOpacity={0}
              delay={index * 200}
            >
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  {/* <Badge className="absolute left-3 top-3">{product.badge}</Badge> */}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-4">
                  <Link
                    href={`/products/${product.id}`}
                    className="hover:underline"
                  >
                    <h3 className="font-semibold text-balance">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="mt-2 mb-2 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  <Chip size="sm">{product.brand}</Chip>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xl font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <Button className="mt-4 w-full" size="sm">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Añadir al Carrito
                  </Button>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
        <div className="mt-8 text-center">
          <InteractiveHoverButton className="font-bold rounded-xl">
            Ver Todos los Productos
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
