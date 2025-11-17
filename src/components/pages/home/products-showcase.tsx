import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Auriculares Premium",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviews: 124,
    image: "/premium-headphones.png",
    badge: "Nuevo",
  },
  {
    id: 2,
    name: "Smartwatch Pro",
    price: 349.99,
    originalPrice: 499.99,
    rating: 4.9,
    reviews: 89,
    image: "/modern-smartwatch.png",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Laptop Ultrabook",
    price: 1299.99,
    rating: 4.7,
    reviews: 56,
    image: "/ultrabook-laptop.jpg",
    badge: "Oferta",
  },
  {
    id: 4,
    name: "Cámara Digital 4K",
    price: 899.99,
    rating: 4.9,
    reviews: 203,
    image: "/4k-camera.png",
    badge: "Destacado",
  },
];

export function ProductShowcase() {
  return (
    <section className="border-y">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance">
            Productos Destacados
          </h2>
          <p className="mt-2 text-muted-foreground">
            Los favoritos de nuestros clientes
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
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
                  <h3 className="font-semibold text-balance">{product.name}</h3>
                </Link>

                <div className="mt-2 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

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
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/products">Ver Todos los Productos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
