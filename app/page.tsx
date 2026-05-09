import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedGuide from "@/components/FeaturedGuide";
import LatestArticles from "@/components/LatestArticles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedGuide />
        <LatestArticles />
      </main>
      <Footer />
    </>
  );
}
