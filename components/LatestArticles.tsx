"use client";

import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    tag: "Seeds",
    tagColor: "#7A9A50",
    slug: "/seeds/top-10-survival-1-21",
    title: "Top 10 Survival Seeds in 1.21",
    date: "May 12, 2024",
    image: "",
  },
  {
    tag: "Build",
    tagColor: "#8A7A50",
    slug: "/guides/cozy-cabin-build",
    title: "Cozy Cabin Build Tutorial",
    date: "May 10, 2024",
    image: "",
  },
  {
    tag: "Guide",
    tagColor: "#5A8A70",
    slug: "/guides/complete-villager-guide",
    title: "Complete Guide to Villagers",
    date: "May 8, 2024",
    image: "",
  },
  {
    tag: "Survival",
    tagColor: "#9A5858",
    slug: "/guides/stay-safe-at-night",
    title: "How to Stay Safe at Night",
    date: "May 6, 2024",
    image: "",
  },
];

function ArticleCard({ article }: { article: (typeof articles)[0] }) {
  return (
    <Link
      href={article.slug}
      className="group"
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid #1A2E1A",
        backgroundColor: "#0C1810",
        textDecoration: "none",
        transition: "border-color 0.2s, transform 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#C4B47E40";
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#1A2E1A";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", backgroundColor: "#0E1A10", overflow: "hidden" }}>
        {article.image ? (
          <Image src={article.image} alt={article.title} fill style={{ objectFit: "cover" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #0E1A10 0%, #162410 50%, #0A1410 100%)" }} />
        )}
        {/* Category badge */}
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <span style={{
            display: "inline-block",
            padding: "3px 8px",
            fontSize: 9,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: article.tagColor,
            backgroundColor: "#0A1208CC",
            border: `1px solid ${article.tagColor}50`,
            borderRadius: 4,
          }}>{article.tag}</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        <h3 style={{
          margin: 0,
          fontFamily: "var(--font-oswald)",
          fontSize: "0.95rem",
          fontWeight: 700,
          color: "#EDE6D6",
          lineHeight: 1.3,
          letterSpacing: "0.02em",
        }}>{article.title}</h3>
        <p style={{ margin: 0, fontSize: 11, color: "#3A3425", marginTop: "auto" }}>{article.date}</p>
      </div>
    </Link>
  );
}

export default function LatestArticles() {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 56px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
        <div>
          <p style={{ margin: 0, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "#C4B47E", marginBottom: 6, opacity: 0.8 }}>Fresh Content</p>
          <h2 style={{ margin: 0, color: "#EDE6D6", fontFamily: "var(--font-oswald)", fontSize: "1.6rem", letterSpacing: "0.04em" }}>Latest Articles</h2>
        </div>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #C4B47E20, transparent)" }} />
        <Link href="/articles" style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#C4B47E", textDecoration: "none", opacity: 0.8 }}>View all articles &#x2192;</Link>
      </div>

      {/* 4-column grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {/* View all button */}
      <div style={{ marginTop: 32, textAlign: "center" }}>
        <Link
          href="/articles"
          style={{
            display: "inline-block",
            padding: "12px 36px",
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#C4B47E",
            border: "1px solid #1A2E1A",
            borderRadius: 8,
            textDecoration: "none",
            fontFamily: "var(--font-oswald)",
            transition: "border-color 0.2s, background-color 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "#C4B47E40";
            el.style.backgroundColor = "#0C1810";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "#1A2E1A";
            el.style.backgroundColor = "transparent";
          }}
        >View All Articles &#x2192;</Link>
      </div>
    </section>
  );
}
