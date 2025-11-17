import { FeaturedCategories } from "@/components/pages/home/featured-categories";
import { HeroSection } from "@/components/pages/home/hero-section";
import { ProductShowcase } from "@/components/pages/home/products-showcase";
import { PromoBanner } from "@/components/pages/home/promo-banner";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedCategories />
      <ProductShowcase />
      <PromoBanner />
      {/* <TrendingProducts />
      <Newsletter /> */}
    </div>
  );
}
