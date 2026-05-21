"use client";

import Link from "next/link";
import Image from "next/image";
import type { Article } from "../../../lib/articles";

const tagColors: Record<string, string> = {
  Build: "#8A7A50", Guide: "#5A8A70", Survival: "#9A5858",
  Seeds: "#7A9A50", Redstone: "#8A5A5A", Tips: "#6A7A8A", Farms: "#7A8A5A",
};

type ArticlePreview = Omit<Article, "content">;

interface Props {
  slug: string;
  label: string;
  description: string;
  icon: string;
  accentColor: string;
  articles: ArticlePreview[];
}

const ALL_CATEGORIES = [
  { label: "Survival", slug: "survival" },
  { label: "Farms", slug: "farms" },
  { label: "Builds", slug: "build" },
  { label: "Seeds", slug: "seeds" },
  { label: "Redstone", slug: "redstone" },
  { label: "Guides", slug: "guide" },
];

export default function CategoryPageClient({ slug, label, description, icon, accentColor, articles }: Props) {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0B1410", paddingBottom: 80 }}>

      {/* Header */}
      <div style={{ backgroundColor: "#0C1810", borderBottom: "1px solid #1A2E1A", padding: "48px 40px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <Link href="/" style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "#5A6A55", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#2A3A28", fontSize: 11 }}>›</span>
            <Link href="/articles" style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "#5A6A55", textDecoration: "none" }}>Articles</Link>
            <span style={{ color: "#2A3A28", fontSize: 11 }}>›</span>
            <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "#C4B47E", opacity: 0.7 }}>{label}</span>
          </div>

          {/* Title row */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ width: 64, height: 64, flexShrink: 0 }}>
              <Image src={icon} alt={label} width={64} height={64} style={{ objectFit: "contain", imageRendering: "pixelated" }} />
            </div>
            <div>
              <p style={{ margin: "0 0 6px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: accentColor }}>
                {articles.length} Articles
              </p>
              <h1 style={{ margin: 0, fontFamily: "var(--font-oswald)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#EDE6D6" }}>{label}</h1>
            </div>
          </div>
          <p style={{ margin: "16px 0 0", fontSize: 14, color: "#8A9A85", maxWidth: 640, lineHeight: 1.7 }}>{description}</p>
        </div>
      </div>

      {/* Category nav pills */}
      <div style={{ backgroundColor: "#0A1208", borderBottom: "1px solid #1A2E1A", padding: "0 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 0, overflowX: "auto" }}>
          {ALL_CATEGORIES.map((cat) => {
            const isActive = cat.slug === slug;
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                style={{
                  display: "block",
                  padding: "14px 20px",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: isActive ? "#C4B47E" : "#5A6A55",
                  textDecoration: "none",
                  borderBottom: isActive ? "2px solid #C4B47E" : "2px solid transparent",
                  whiteSpace: "nowrap",
                }}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Articles grid */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 40px 0" }}>
        {articles.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ color: "#5A6A55", fontSize: 14 }}>No articles in this category yet. Check back soon!</p>
            <Link href="/articles" style={{ display: "inline-block", marginTop: 16, padding: "10px 24px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#C4B47E", border: "1px solid #1A2E1A", borderRadius: 8, textDecoration: "none" }}>
              Browse All Articles
            </Link>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {articles.map((article) => {
              const tagColor = tagColors[article.tag] || "#5A8A70";
              return (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  style={{ display: "flex", flexDirection: "column", borderRadius: 10, overflow: "hidden", border: "1px solid #1A2E1A", backgroundColor: "#0C1810", textDecoration: "none" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#2A3E2A"; el.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#1A2E1A"; el.style.transform = "translateY(0)"; }}
                >
                  <div style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "#0E1A10", position: "relative", overflow: "hidden" }}>
                    {article.image
                      ? <Image src={article.image} alt={article.title} fill style={{ objectFit: "cover" }} />
                      : <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0E1A10 0%, #162410 50%, #0A1410 100%)" }} />
                    }
                    <span style={{ position: "absolute", top: 10, left: 10, display: "inline-block", padding: "3px 8px", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: tagColor, backgroundColor: "#0A1208CC", border: `1px solid ${tagColor}50`, borderRadius: 4 }}>{article.tag}</span>
                  </div>
                  <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                    <h2 style={{ margin: 0, fontFamily: "var(--font-oswald)", fontSize: "0.95rem", fontWeight: 700, color: "#EDE6D6", lineHeight: 1.3, textTransform: "none", letterSpacing: "0.02em" }}>{article.title}</h2>
                    <p style={{ margin: 0, fontSize: 12, color: "#8A9A85", lineHeight: 1.5, flex: 1 }}>{article.description}</p>
                    <p style={{ margin: 0, fontSize: 11, color: "#3A4A35", marginTop: "auto" }}>
                      {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
