import CategoriesSection from "./components/home/categories";
import HeroSection from "./components/home/hero";
import ProductsSection from "./components/home/products";

export default async function Home() {
 
  return (
    <main>
      <HeroSection />
      <CategoriesSection/>
      <ProductsSection/>
    </main>
  );
}