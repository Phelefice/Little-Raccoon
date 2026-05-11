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
        <section style={{ backgroundColor: "#0F1F19", borderTop: "1px solid #1E3028", borderBottom: "1px solid #1E3028" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 40px", display: "grid", gridTemplateColumns: "1fr 380px", gap: "32px", alignItems: "start" }}>
            <FeaturedGuide />
            <Sidebar />
          </div>
        </section>
        <LatestArticles />
      </main>
      <Footer />
    </>
  );
}
