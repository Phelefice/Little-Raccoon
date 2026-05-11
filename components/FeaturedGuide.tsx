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

function MiniCard({ mini, index }: { mini: typeof minis[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={mini.href}
      style={{
        position: "relative",
        display: "block",
        borderRadius: "12px",
        overflow: "hidden",
        border: `1px solid ${hovered ? "rgba(212,146,74,0.38)" : "rgba(212,146,74,0.13)"}`,
        boxShadow: hovered ? "0 12px 36px rgba(0,0,0,0.65), 0 0 24px rgba(212,146,74,0.10)" : "0 4px 20px rgba(0,0,0,0.50)",
        textDecoration: "none",
        height: "148px",
        transition: "transform 0.38s cubic-bezier(0.22,1,0.36,1), box-shadow 0.38s ease, border-color 0.38s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* BG Image */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          transition: "transform 0.65s cubic-bezier(0.22,1,0.36,1)",
          transform: hovered ? "scale(1.07)" : "scale(1)",
        }}>
          <Image
            src={mini.image}
            alt={mini.title}
            fill
            sizes="320px"
            style={{ objectFit: "cover", objectPosition: mini.objectPosition }}
          />
        </div>
      </div>

      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(4,8,4,0.08) 0%, rgba(4,8,4,0.55) 45%, rgba(4,8,4,0.96) 100%)",
        zIndex: 1,
      }} />

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        boxShadow: "inset 0 0 28px rgba(0,0,0,0.45)",
        zIndex: 2, borderRadius: "12px",
      }} />

      {/* Shimmer top on hover */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(212,146,74,0.70), transparent)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.38s ease",
        zIndex: 3,
      }} />

      {/* Content */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "14px 16px 16px",
        zIndex: 4,
      }}>
        <p style={{
          fontSize: "9px", fontWeight: 700,
          letterSpacing: "0.22em", textTransform: "uppercase",
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
          textShadow: "0 2px 10px rgba(0,0,0,0.95)",
          margin: 0,
        }}>
          {mini.title}
        </p>
      </div>
    </Link>
  );
}

export default function FeaturedGuide() {
  const [heroHovered, setHeroHovered] = useState(false);

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "#090e0b" }}>
      {/* Ambient glow top */}
      <div style={{
        position: "absolute", top: 0, left: "20%", right: "20%", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(212,146,74,0.25), transparent)",
        zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "72px 40px 80px" }}>

        {/* Section header */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#D4924A", fontWeight: 700, margin: "0 0 8px 0" }}>
              ★ Editor&apos;s Pick
            </p>
            <h2 style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "0.07em", color: "#EDE6D6", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>
              Featured Guide
            </h2>
          </div>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(212,146,74,0.28), transparent)" }} />
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "16px", alignItems: "start" }}>

          {/* HERO */}
          <Link
            href={hero.href}
            style={{
              position: "relative",
              display: "block",
              borderRadius: "14px",
              overflow: "hidden",
              border: `1px solid ${heroHovered ? "rgba(212,146,74,0.42)" : "rgba(212,146,74,0.16)"}`,
              boxShadow: heroHovered
                ? "0 28px 70px rgba(0,0,0,0.75), 0 0 50px rgba(212,146,74,0.12), inset 0 1px 0 rgba(212,146,74,0.12)"
                : "0 8px 40px rgba(0,0,0,0.60), inset 0 1px 0 rgba(255,255,255,0.03)",
              textDecoration: "none",
              height: "480px",
              transition: "transform 0.40s cubic-bezier(0.22,1,0.36,1), box-shadow 0.40s ease, border-color 0.40s ease",
              transform: heroHovered ? "translateY(-5px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHeroHovered(true)}
            onMouseLeave={() => setHeroHovered(false)}
          >
            {/* BG Image */}
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: "14px" }}>
              <div style={{
                position: "absolute", inset: 0,
                transition: "transform 0.70s cubic-bezier(0.22,1,0.36,1)",
                transform: heroHovered ? "scale(1.05)" : "scale(1)",
              }}>
                <Image
                  src={hero.image}
                  alt={hero.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 65vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                />
              </div>
            </div>

            {/* Cinematic overlays */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(4,8,4,0.97) 0%, rgba(4,8,4,0.82) 38%, rgba(4,8,4,0.22) 72%, rgba(4,8,4,0.04) 100%)",
              zIndex: 1,
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(4,8,4,0.95) 0%, rgba(4,8,4,0.35) 35%, transparent 65%)",
              zIndex: 1,
            }} />

            {/* Vignette */}
            <div style={{
              position: "absolute", inset: 0,
              boxShadow: "inset 0 0 80px rgba(0,0,0,0.55), inset 0 -2px 0 rgba(212,146,74,0.06)",
              zIndex: 2, borderRadius: "14px",
            }} />

            {/* Grain texture */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 2, opacity: 0.025,
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              backgroundSize: "128px 128px",
            }} />

            {/* Shimmer top */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "1px",
              background: "linear-gradient(90deg, rgba(212,146,74,0.60), transparent 60%)",
              zIndex: 3,
            }} />

            {/* Content — bottom left, editorial */}
            <div style={{
              position: "absolute",
              bottom: 0, left: 0,
              padding: "48px 48px 44px",
              zIndex: 4,
              maxWidth: "500px",
            }}>
              {/* Category */}
              <div style={{ marginBottom: "18px" }}>
                <span style={{
                  fontSize: "9px", fontWeight: 700,
                  letterSpacing: "0.24em", textTransform: "uppercase",
                  color: hero.categoryColor,
                  border: `1px solid ${hero.categoryColor}44`,
                  borderRadius: "3px", padding: "4px 10px",
                  background: "rgba(0,0,0,0.45)",
                  backdropFilter: "blur(6px)",
                }}>
                  {hero.category}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "30px", fontWeight: 900,
                letterSpacing: "0.03em", textTransform: "uppercase",
                color: "#EDE6D6", lineHeight: 1.18,
                textShadow: "0 2px 20px rgba(0,0,0,0.95)",
                margin: "0 0 10px 0",
              }}>
                {hero.title}
              </h3>

              {/* Subtitle */}
              <p style={{
                fontSize: "13px", fontStyle: "italic",
                color: "#9a8060", margin: "0 0 14px 0",
                textShadow: "0 1px 8px rgba(0,0,0,0.9)",
              }}>
                {hero.subtitle}
              </p>

              {/* Description */}
              <p style={{
                fontSize: "13px", color: "#7a7060",
                lineHeight: 1.70, margin: "0 0 32px 0",
                textShadow: "0 1px 6px rgba(0,0,0,0.8)",
              }}>
                {hero.description}
              </p>

              {/* CTA — ghost editorial */}
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: heroHovered ? "10px" : "6px",
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#D4924A",
                border: "1px solid rgba(212,146,74,0.45)",
                borderRadius: "6px", padding: "11px 22px",
                background: "rgba(212,146,74,0.06)",
                backdropFilter: "blur(6px)",
                boxShadow: heroHovered ? "0 0 20px rgba(212,146,74,0.18)" : "none",
                transition: "all 0.35s ease",
              }}>
                {hero.cta}
                <span style={{
                  transition: "transform 0.35s ease",
                  transform: heroHovered ? "translateX(3px)" : "translateX(0)",
                  display: "inline-block",
                }}>→</span>
              </span>
            </div>
          </Link>

          {/* MINI CARDS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {minis.map((mini, i) => (
              <MiniCard key={i} mini={mini} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
