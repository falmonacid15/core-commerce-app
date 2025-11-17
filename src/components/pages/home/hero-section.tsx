"use client";

import CountUp from "@/components/CountUp";
import FadeContent from "@/components/FadeContent";
import SplitText from "@/components/SplitText";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Chip } from "@heroui/react";
import { Sparkles, Truck } from "lucide-react";
import Image from "next/image";
import Atropos from "atropos/react";
import GlassSurface from "@/components/GlassSurface";

export interface HeroData {
  badge: string;
  title: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  image: string;
  promo: {
    title: string;
    subtitle: string;
  };
}

export function HeroSection() {
  const heroData: HeroData = {
    badge: "Tecnología 2024",
    title: "Potencia tu setup con hardware de alto rendimiento",
    description:
      "Encuentra tarjetas gráficas, procesadores, periféricos y todo lo que necesitas para llevar tu experiencia al siguiente nivel.",
    stats: [
      { label: "Clientes Satisfechos", value: "80K+" },
      { label: "Productos Tecnológicos", value: "15K+" },
      { label: "Valoración", value: "4.9★" },
    ],
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=1200&auto=format&fit=crop",
    promo: {
      title: "Envío Gratis",
      subtitle: "En compras superiores a $100",
    },
  };
  return (
    <section className="relative overflow-visible bg-background">
      <div className="relative w-full px-4 py-16 md:px-6">
        <div className="mx-auto max-w-7xl grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <div className="flex flex-col space-y-6">
            <FadeContent duration={2000} easing="ease-out" initialOpacity={0}>
              <Chip>
                <div className="flex gap-2 items-center">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="font-medium">{heroData.badge}</span>
                </div>
              </Chip>
            </FadeContent>
            <FadeContent duration={2000} easing="ease-out" initialOpacity={0}>
              <SplitText
                text={heroData.title}
                className="text-4xl text-start font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
                delay={100}
                duration={2}
                ease="bounce.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </FadeContent>
            <FadeContent duration={2000} easing="ease-out" initialOpacity={0}>
              <p className="text-lg text-muted-foreground max-w-xl">
                {heroData.description}
              </p>
            </FadeContent>
            <FadeContent duration={2000} easing="ease-out" initialOpacity={0}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <InteractiveHoverButton className="font-bold rounded-xl">
                  Ver Hardware
                </InteractiveHoverButton>
              </div>
            </FadeContent>
            <FadeContent duration={2000} easing="ease-out" initialOpacity={0}>
              <div className="flex items-center gap-8 pt-4">
                {heroData.stats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-8">
                    <div>
                      <CountUp
                        from={0}
                        to={parseInt(stat.value)}
                        separator=","
                        direction="up"
                        duration={1}
                        className="text-2xl font-extrabold"
                      />
                      <span className="text-2xl font-extrabold">K</span>
                      <p className="text-sm text-default-500">{stat.label}</p>
                    </div>
                    {i < heroData.stats.length - 1 && (
                      <div className="h-12 w-px bg-divider" />
                    )}
                  </div>
                ))}
              </div>
            </FadeContent>
          </div>
          <div className="relative">
            <FadeContent
              blur
              duration={2000}
              easing="ease-out"
              initialOpacity={0}
            >
              <Atropos
                className="atropos-banner"
                shadow={false}
                highlight={false}
                duration={1000}
              >
                <div className="aspect-square overflow-hidden relative p-4">
                  <Image
                    src={heroData.image}
                    alt="Hardware setup"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    data-atropos-offset="1"
                  />
                </div>

                <div
                  className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-background/5 backdrop-blur-xs backdrop:saturate-150 rounded-xl p-4 sm:p-6 shadow-md w-[180px] sm:w-[280px] z-10"
                  data-atropos-offset="10"
                >
                  <div className="flex items-center gap-4">
                    <Truck
                      data-atropos-offset="10"
                      className="size-24 text-primary"
                    />
                    <div className="flex flex-col gap-4">
                      <p className="text-xs sm:text-sm font-bold text-default-100">
                        {heroData.promo.title}
                      </p>
                      <p
                        className="text-medium sm:text-lg font-medium text-default-300"
                        data-atropos-offset="10"
                      >
                        {heroData.promo.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </Atropos>
            </FadeContent>
          </div>
        </div>
      </div>
    </section>
  );
}
