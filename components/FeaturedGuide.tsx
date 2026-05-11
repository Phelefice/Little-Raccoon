"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const hero = {
  category: "Survival Guide",
  categoryColor: "#D4924A",
  title: "How to Build an Iron Farm",
  subtitle: "Efficient, easy, and works in 1.21+",
  description: "Step-by-step guide to building the most efficient iron farm in Minecraft. Works on Java and Bedrock, requires no complex redstone, and produces over 400 iron per hour.",
  cta: "Read Guide",
  href: "/guides/iron-farm",
  image: "/images/category-survival.png",
};

const minis = [
  {
    category: "Guide",
    categoryColor: "#D4924A",
    title: "Villager Trading Hall Step-by-Step",
    href: "/guides/villager-trading-hall",
    image: "/images/category-farms.png",
    objectPosition: "center top",
  },
  {
    category: "Tutorial",
    categoryColor: "#D4924A",
    title: "Best Starter House for Survival",
    href: "/guides/starter-house",
    image: "/images/category_builds.webp",
    objectPosition: "center",
  },
  {
    category: "Guide",
    categoryColor: "#D4924A",
    title: "How to Find Diamonds Fast",
    href: "/guides/find-diamonds",
    image: "/images/category-seeds.png",
    objectPosition: "center bottom",
  },
];

function MiniCard({ mini }: { mini: typeof minis[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={mini.href}
      style={{
        position: "relative",
        display: "block",
        borderRadius: "10px",
        overflow: "hidden",
        border: `1px solid ${hovered ? "rgba(212,146,74,0.35)" : "rgba(255,255,255,0.06)"}`,
        boxShadow: hovered ? "0 10px 30px rgba(0,0,0,0.60), 0 0 20px rgba(212,146,74,0.08)" : "0 2px 14px rgba(0,0,0,0.45)",
        textDecoration: "none",
        height: "148px",
        transition: "transform 0.40s cubic-bezier(0.22,1,0.36,1), box-shadow 0.40s ease, border-color 0.40s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* BG */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          transition: "transform 0.70s cubic-bezier(0.22,1,0.36,1)",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}>
          <Image src={mini.image} alt={mini.title} fill sizes="320px"
            style={{ objectFit: "cover", objectPosition: mini.objectPosition }} />
        </div>
      </div>

      {/* Overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(4,8,4,0.05) 0%, rgba(4,8,4,0.50) 45%, rgba(4,8,4,0.96) 100%)", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 24px rgba(0,0,0,0.40)", zIndex: 2, borderRadius: "10px" }} />

      {/* Shimmer */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(212,146,74,0.60), transparent)",
        opacity: hovered ? 1 : 0, transition: "opacity 0.40s ease", zIndex: 3,
      }} />

      {/* Content */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "13px 15px 15px", zIndex: 4 }}>
        <p style={{
          fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em",
          textTransform: "uppercase", color: mini.categoryColor,
          margin: "0 0 4px 0", textShadow: "0 1px 4px rgba(0,0,0,0.9)",
        }}>{mini.category}</p>
        <p style={{
          fontSize: "12px", fontWeight: 800, letterSpacing: "0.04em",
          textTransform: "uppercase", color: "#EDE6D6", lineHeight: 1.25,
          textShadow: "0 2px 10px rgba(0,0,0,0.95)", margin: 0,
        }}>{mini.title}</p>
      </div>
    </Link>
  );
}

export default function FeaturedGuide() {
  const [heroHovered, setHeroHovered] = useState(false);

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #07100a 0%, #0a1410 50%, #07100a 100%)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>

      {/* Ambient top line */}
      <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,146,74,0.20), transparent)", zIndex: 0 }} />

      {/* Ambient glow blob */}
      <div style={{ position: "absolute", top: "20%", left: "-5%", width: "40%", height: "60%", background: "radial-gradient(ellipse, rgba(212,146,74,0.04) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "68px 40px 76px" }}>

        {/* Section header */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "36px" }}>
          <div>
            <p style={{ fontSize: "9px", letterSpacing: "0.30em", textTransform: "uppercase", color: "#D4924A", fontWeight: 700, margin: "0 0 7px 0", opacity: 0.85 }}>
              ★  Editor&apos;s Pick
            </p>
            <h2 style={{ fontSize: "24px", fontWeight: 900, letterSpacing: "0.09em", color: "#EDE6D6", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>
              Featured Guide
            </h2>
          </div>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(212,146,74,0.22), transparent)" }} />
          <Link href="/guides" style={{ fontSize: "9px", letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(212,146,74,0.65)", textDecoration: "none", fontWeight: 700, flexShrink: 0 }}>
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 308px", gap: "14px", alignItems: "start" }}>

          {/* HERO */}
          <Link
            href={hero.href}
            style={{
              position: "relative", display: "block",
              borderRadius: "14px", overflow: "hidden",
              border: `1px solid ${heroHovered ? "rgba(212,146,74,0.38)" : "rgba(255,255,255,0.07)"}`,
              boxShadow: heroHovered
                ? "0 24px 64px rgba(0,0,0,0.75), 0 0 48px rgba(212,146,74,0.10), inset 0 1px 0 rgba(212,146,74,0.10)"
                : "0 6px 36px rgba(0,0,0,0.58), inset 0 1px 0 rgba(255,255,255,0.03)",
              textDecoration: "none", height: "480px",
              transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1), box-shadow 0.42s ease, border-color 0.42s ease",
              transform: heroHovered ? "translateY(-5px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHeroHovered(true)}
            onMouseLeave={() => setHeroHovered(false)}
          >
            {/* BG Image */}
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: "14px" }}>
              <div style={{
                position: "absolute", inset: 0,
                transition: "transform 0.75s cubic-bezier(0.22,1,0.36,1)",
                transform: heroHovered ? "scale(1.04)" : "scale(1)",
              }}>
                <Image src={hero.image} alt={hero.title} fill
                  sizes="(max-width: 768px) 100vw, 65vw"
                  style={{ objectFit: "cover", objectPosition: "center" }} priority />
              </div>
            </div>

            {/* Cinematic overlays */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(4,10,6,0.98) 0%, rgba(4,10,6,0.85) 35%, rgba(4,10,6,0.25) 68%, rgba(4,10,6,0.05) 100%)", zIndex: 1 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(4,10,6,0.97) 0%, rgba(4,10,6,0.40) 32%, transparent 60%)", zIndex: 1 }} />

            {/* Vignette */}
            <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 90px rgba(0,0,0,0.50), inset 0 -1px 0 rgba(212,146,74,0.07)", zIndex: 2, borderRadius: "14px" }} />

            {/* Grain */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 2, opacity: 0.022, borderRadius: "14px",
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: "160px 160px",
            }} />

            {/* Top shimmer */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, rgba(212,146,74,0.55), transparent 55%)", zIndex: 3 }} />

            {/* Text glow behind content */}
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "55%", height: "60%", background: "radial-gradient(ellipse at bottom left, rgba(212,146,74,0.06) 0%, transparent 70%)", zIndex: 2, pointerEvents: "none" }} />

            {/* Content */}
            <div style={{ position: "absolute", bottom: 0, left: 0, padding: "44px 48px 42px", zIndex: 4, maxWidth: "490px" }}>

              {/* Eyebrow + separator */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span style={{
                  fontSize: "9px", fontWeight: 700, letterSpacing: "0.24em",
                  textTransform: "uppercase", color: hero.categoryColor,
                  border: `1px solid ${hero.categoryColor}40`,
                  borderRadius: "3px", padding: "3px 9px",
                  background: "rgba(0,0,0,0.50)", backdropFilter: "blur(8px)",
                }}>{hero.category}</span>
                <div style={{ width: "24px", height: "1px", background: "rgba(212,146,74,0.30)" }} />
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "28px", fontWeight: 900, letterSpacing: "0.025em",
                textTransform: "uppercase", color: "#EDE6D6", lineHeight: 1.18,
                textShadow: "0 2px 24px rgba(0,0,0,0.98)", margin: "0 0 9px 0",
              }}>{hero.title}</h3>

              {/* Subtitle */}
              <p style={{
                fontSize: "12px", fontStyle: "italic", color: "#8a7255",
                margin: "0 0 13px 0", textShadow: "0 1px 8px rgba(0,0,0,0.9)",
                letterSpacing: "0.02em",
              }}>{hero.subtitle}</p>

              {/* Thin separator */}
              <div style={{ width: "40px", height: "1px", background: "rgba(212,146,74,0.25)", margin: "0 0 13px 0" }} />

              {/* Description */}
              <p style={{
                fontSize: "13px", color: "#6a6050", lineHeight: 1.72,
                margin: "0 0 28px 0", textShadow: "0 1px 6px rgba(0,0,0,0.8)",
                maxWidth: "400px",
              }}>{hero.description}</p>

              {/* CTA — ghost editorial */}
              <span style={{
                display: "inline-flex", alignItems: "center",
                gap: heroHovered ? "10px" : "7px",
                fontSize: "10px", fontWeight: 700, letterSpacing: "0.20em",
                textTransform: "uppercase", color: "#D4924A",
                border: "1px solid rgba(212,146,74,0.38)",
                borderRadius: "5px", padding: "10px 20px",
                background: "rgba(212,146,74,0.05)",
                backdropFilter: "blur(8px)",
                boxShadow: heroHovered ? "0 0 24px rgba(212,146,74,0.14)" : "none",
                transition: "all 0.40s ease",
              }}>
                {hero.cta}
                <span style={{
                  display: "inline-block",
                  transition: "transform 0.40s ease",
                  transform: heroHovered ? "translateX(4px)" : "translateX(0)",
                }}>→</span>
              </span>
            </div>
          </Link>

          {/* MINI CARDS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            {minis.map((mini, i) => <MiniCard key={i} mini={mini} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
