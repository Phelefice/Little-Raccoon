"use client";

import Link from "next/link";
import Image from "next/image";

const hero = {
  category: "Survival Guide",
  categoryColor: "#D4924A",
  title: "How to Build an Iron Farm",
  subtitle: "Efficient, easy, and works in 1.21+",
  description: "Step-by-step guide to building the most efficient iron farm in Minecraft. Works on Java and Bedrock, requires no complex redstone, and produces over 400 iron per hour.",
  cta: "Read Guide →",
  href: "/guides/iron-farm",
  image: "/images/category-survival.png",
};

const minis = [
  {
    category: "Guide",
    categoryColor: "#8A6840",
    title: "Villager Trading Hall Step-by-Step",
    href: "/guides/villager-trading-hall",
    image: "/images/category-farms.png",
  },
  {
    category: "Tutorial",
    categoryColor: "#6A8A5A",
    title: "Best Starter House for Survival",
    href: "/guides/starter-house",
    image: "/images/category_builds.webp",
  },
  {
    category: "Guide",
    categoryColor: "#4A8AB0",
    title: "How to Find Diamonds Fast",
    href: "/guides/find-diamonds",
    image: "/images/category-seeds.png",
  },
];

export default function FeaturedGuide() {
  return (
    <section style={{ position: "relative", padding: "0", overflow: "hidden", background: "#0a110d" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "72px 40px 80px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#D4924A", fontWeight: 700, margin: "0 0 8px 0" }}>
              ★ Editor&apos;s Pick
            </p>
            <h2 style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "0.07em", color: "#EDE6D6", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>
              Featured Guide
            </h2>
          </div>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(212,146,74,0.3), transparent)" }} />
        </div>

        {/* Layout: hero left + minis right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "16px", alignItems: "start" }}>

          {/* HERO FEATURED */}
          <Link
            href={hero.href}
            style={{
              position: "relative",
              display: "block",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid rgba(212,146,74,0.18)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
              textDecoration: "none",
              height: "480px",
              transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-4px)";
              el.style.boxShadow = "0 24px 60px rgba(0,0,0,0.7), 0 0 40px rgba(212,146,74,0.15)";
              el.style.borderColor = "rgba(212,146,74,0.40)";
              const img = el.querySelector(".hero-img") as HTMLElement;
              if (img) img.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 8px 40px rgba(0,0,0,0.6)";
              el.style.borderColor = "rgba(212,146,74,0.18)";
              const img = el.querySelector(".hero-img") as HTMLElement;
              if (img) img.style.transform = "scale(1)";
            }}
          >
            {/* BG Image */}
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              <div className="hero-img" style={{ position: "absolute", inset: 0, transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}>
                <Image
                  src={hero.image}
                  alt={hero.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                />
              </div>
            </div>

            {/* Cinematic overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(4,8,4,0.97) 0%, rgba(4,8,4,0.80) 40%, rgba(4,8,4,0.20) 75%, rgba(4,8,4,0.05) 100%)",
              zIndex: 1,
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(4,8,4,0.90) 0%, rgba(4,8,4,0.30) 40%, transparent 70%)",
              zIndex: 1,
            }} />

            {/* Content */}
            <div style={{
              position: "absolute", bottom: 0, left: 0,
              padding: "40px 44px",
              zIndex: 2,
              maxWidth: "520px",
            }}>
              {/* Category badge */}
              <div style={{ marginBottom: "16px" }}>
                <span style={{
                  fontSize: "9px", fontWeight: 700,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  color: hero.categoryColor,
                  border: `1px solid ${hero.categoryColor}55`,
                  borderRadius: "4px", padding: "4px 10px",
                  background: "rgba(0,0,0,0.50)",
                  backdropFilter: "blur(4px)",
                }}>
                  {hero.category}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "32px", fontWeight: 900,
                letterSpacing: "0.03em", textTransform: "uppercase",
                color: "#EDE6D6", lineHeight: 1.15,
                textShadow: "0 2px 16px rgba(0,0,0,0.9)",
                margin: "0 0 10px 0",
              }}>
                {hero.title}
              </h3>

              {/* Subtitle */}
              <p style={{
                fontSize: "13px", fontStyle: "italic",
                color: "#a09070", margin: "0 0 14px 0",
                textShadow: "0 1px 6px rgba(0,0,0,0.8)",
              }}>
                {hero.subtitle}
              </p>

              {/* Description */}
              <p style={{
                fontSize: "13px", color: "#8a7e6a",
                lineHeight: 1.65, margin: "0 0 28px 0",
                textShadow: "0 1px 6px rgba(0,0,0,0.8)",
              }}>
                {hero.description}
              </p>

              {/* CTA */}
              <span style={{
                display: "inline-block",
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#0a110d",
                background: "linear-gradient(135deg, #D4924A, #C07A30)",
                borderRadius: "8px", padding: "12px 24px",
                boxShadow: "0 4px 16px rgba(212,146,74,0.35)",
              }}>
                {hero.cta}
              </span>
            </div>
          </Link>

          {/* MINI CARDS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {minis.map((mini, i) => (
              <Link
                key={i}
                href={mini.href}
                style={{
                  position: "relative",
                  display: "block",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(212,146,74,0.14)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.50)",
                  textDecoration: "none",
                  height: "148px",
                  transition: "transform 0.32s cubic-bezier(0.22,1,0.36,1), box-shadow 0.32s ease, border-color 0.32s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.60), 0 0 20px rgba(212,146,74,0.12)";
                  el.style.borderColor = "rgba(212,146,74,0.35)";
                  const img = el.querySelector(".mini-img") as HTMLElement;
                  if (img) img.style.transform = "scale(1.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.50)";
                  el.style.borderColor = "rgba(212,146,74,0.14)";
                  const img = el.querySelector(".mini-img") as HTMLElement;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                {/* BG Image */}
                <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                  <div className="mini-img" style={{ position: "absolute", inset: 0, transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)" }}>
                    <Image
                      src={mini.image}
                      alt={mini.title}
                      fill
                      sizes="320px"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                </div>

                {/* Overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, rgba(4,8,4,0.10) 0%, rgba(4,8,4,0.60) 50%, rgba(4,8,4,0.95) 100%)",
                  zIndex: 1,
                }} />

                {/* Content */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "14px 16px",
                  zIndex: 2,
                }}>
                  <p style={{
                    fontSize: "9px", fontWeight: 700,
                    letterSpacing: "0.20em", textTransform: "uppercase",
                    color: mini.categoryColor,
                    margin: "0 0 5px 0",
                    textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                  }}>
                    {mini.category}
                  </p>
                  <p style={{
                    fontSize: "12px", fontWeight: 800,
                    letterSpacing: "0.04em", textTransform: "uppercase",
                    color: "#EDE6D6", lineHeight: 1.25,
                    textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                    margin: 0,
                  }}>
                    {mini.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .featured-hero { height: 360px !important; }
          .featured-minis { flex-direction: row !important; }
          .featured-minis a { flex: 1 !important; height: 180px !important; }
        }
        @media (max-width: 640px) {
          .featured-minis { flex-direction: column !important; }
          .featured-minis a { height: 140px !important; }
        }
      `}</style>
    </section>
  );
}
