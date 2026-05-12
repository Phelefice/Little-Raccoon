import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedGuide from "@/components/FeaturedGuide";
import Sidebar from "@/components/Sidebar";
import LatestArticles from "@/components/LatestArticles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 40px", display: "grid", gridTemplateColumns: "1fr 340px", gap: "24px", alignItems: "start" }}>
          <FeaturedGuide />
          <Sidebar />
        </section>
        <LatestArticles />
      </main>
      <Footer />
    </>
  );
}


