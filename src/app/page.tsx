import LogoLoop from "@/components/LogoLoop";
import { FeaturedCategories } from "@/components/pages/home/featured-categories";
import { HeroSection } from "@/components/pages/home/hero-section";
import { ProductShowcase } from "@/components/pages/home/products-showcase";
import { PromoBanner } from "@/components/pages/home/promo-banner";
import { Icon } from "@iconify/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio - Core Commerce",
  description: "Core Commerce - Pagina principal",
};

export default function Home() {
  const techLogos = [
    {
      node: <Icon icon="mdi:react" />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <Icon icon="ri:nextjs-fill" />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <Icon icon="akar-icons:typescript-fill" />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <Icon icon="lineicons:tailwindcss" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <HeroSection />
      {/* <div className="flex">
        <LogoLoop
          logos={techLogos}
          direction="right"
          hoverSpeed={0}
          logoHeight={90}
          gap={120}
          fadeOut
          scaleOnHover
          fadeOutColor="bg-background"
        />
      </div> */}
      <FeaturedCategories />
      <ProductShowcase />
      <PromoBanner />
      {/* <TrendingProducts />
      <Newsletter /> */}
    </div>
  );
}
