import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedGuide from "@/components/FeaturedGuide";
import Sidebar from "@/components/Sidebar";
import LatestArticles from "@/components/LatestArticles";
import Footer from "@/components/Footer";
import { getAllArticles } from "@/lib/articles";

function getCategoryCounts(): Record<string, number> {
  const articles = getAllArticles();
  const counts: Record<string, number> = {
    survival: 0,
    farms: 0,
    build: 0,
    seeds: 0,
    redstone: 0,
    guide: 0,
  };
  for (const article of articles) {
    const tag = (article.tag || "").toLowerCase();
    if (tag.startsWith("surviv")) counts.survival++;
    else if (tag.startsWith("farm")) counts.farms++;
    else if (tag.startsWith("build")) counts.build++;
    else if (tag.startsWith("seed")) counts.seeds++;
    else if (tag.startsWith("redstone")) counts.redstone++;
    else counts.guide++;
  }
  return counts;
}

export default function Home() {
  const categoryCounts = getCategoryCounts();
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Categories counts={categoryCounts} />
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
