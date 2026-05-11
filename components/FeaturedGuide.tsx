"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const hero = {
  category: "Survival Guide",
  categoryColor: "#D4924A",
  title: "How to Build\nan Iron Farm",
  subtitle: "Efficient, easy, and works in 1.21+",
  description: "Step-by-step guide to building the most efficient iron farm in Minecraft. Works on Java and Bedrock, no complex redstone required.",
  cta: "Read Guide",
  href: "/guides/iron-farm",
  image: "/images/category-survival.png",
};

const minis = [
  {
    category: "Guide",
    title: "Villager Trading Hall Step-by-Step",
    href: "/guides/villager-trading-hall",
    image: "/images/category-farms.png",
    objectPosition: "center top",
    overlayStrength: "rgba(4,8,4,0.92)",
  },
  {
    category: "Tutorial",
    title: "Best Starter House for Survival",
    href: "/guides/starter-house",
    image: "/images/category_builds.webp",
    objectPosition: "center",
    overlayStrength: "rgba(4,8,4,0.88)",
  },
  {
    category: "Guide",
    title: "How to Find Diamonds Fast",
    href: "/guides/find-diamonds",
    image: "/images/category-seeds.png",
    objectPosition: "center bottom",
    overlayStrength: "rgba(4,8,4,0.90)",
  },
];

function MiniCard({ mini, index }: { mini: typeof minis[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const heights = [152, 144, 152];
  return (
    <Link
      href={mini.href}
      style={{
        position: "relative",
        display: "block",
        borderRadius: "10px",
        overflow: "hidden",
        border: `1px solid ${hovered ? "rgba(212,146,74,0.28)" : "rgba(255,255,255,0.05)"}`,
        boxShadow: hovered
          ? "0 10px 32px rgba(0,0,0,0.65), 0 0 18px rgba(212,146,74,0.07)"
          : "0 2px 12px rgba(0,0,0,0.45)",
        textDecoration: "none",
        height: `${heights[index]}px`,
        transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1), box-shadow 0.42s ease, border-color 0.42s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        marginLeft: index === 1 ? "6px" : "0",
        marginRight: index === 1 ? "-6px" : "0",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* BG */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: "-4px",
          transition: "transform 0.70s cubic-bezier(0.22,1,0.36,1)",
          transform: hovered ? "scale(1.07)" : "scale(1)",
        }}>
          <Image src={mini.image} alt={mini.title} fill sizes="320px"
            style={{ objectFit: "cover", objectPosition: mini.objectPosition }} />
        </div>
      </div>

      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to bottom, rgba(4,8,4,0.04) 0%, rgba(4,8,4,0.48) 42%, ${mini.overlayStrength} 100%)`,
        zIndex: 1,
      }} />

      {/* Vignette */}
      <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 22px rgba(0,0,0,0.38)", zIndex: 2, borderRadius: "10px" }} />

      {/* Shimmer */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(212,146,74,0.55), transparent)",
        opacity: hovered ? 1 : 0, transition: "opacity 0.42s ease", zIndex: 3,
      }} />

      {/* Content */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 15px 15px", zIndex: 4 }}>
        <p style={{
          fontSize: "8px", fontWeight: 700, letterSpacing: "0.24em",
          textTransform: "uppercase", color: "rgba(212,146,74,0.80)",
          margin: "0 0 4px 0",
        }}>{mini.category}</p>
        <p style={{
          fontSize: "11px", fontWeight: 800, letterSpacing: "0.05em",
          textTransform: "uppercase", color: "#EDE6D6", lineHeight: 1.28,
          textShadow: "0 2px 12px rgba(0,0,0,0.98)", margin: 0,
        }}>{mini.title}</p>
      </div>
    </Link>
  );
}

export default function FeaturedGuide() {
  const [heroHovered, setHeroHovered] = useState(false);

  return (
    <section style={{
      position: "relative", overflow: "visible",
      background: "linear-gradient(180deg, #060d08 0%, #09120d 40%, #060d08 100%)",
      borderTop: "1px solid rgba(255,255,255,0.035)",
    }}>
      {/* Fade top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "180px", background: "linear-gradient(to bottom, rgba(8,14,10,0) 0%, transparent 100%)", zIndex: 0, pointerEvents: "none" }} />
      {/* Fade bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "180px", background: "linear-gradient(to top, rgba(8,14,10,0) 0%, transparent 100%)", zIndex: 0, pointerEvents: "none" }} />
      {/* Dark bg subtle */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(10,18,12,0.82) 0%, rgba(6,10,8,0.55) 60%, transparent 100%)", zIndex: 0, pointerEvents: "none" }} />
      {/* Ambient blobs */}
      <div style={{ position: "absolute", top: "-60px", left: "-80px", width: "500px", height: "400px", background: "radial-gradient(ellipse, rgba(212,146,74,0.035) 0%, transparent 68%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-40px", right: "10%", width: "400px", height: "300px", background: "radial-gradient(ellipse, rgba(90,150,80,0.025) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "64px 40px 72px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" }}>
          <div>
            <p style={{ fontSize: "9px", letterSpacing: "0.30em", textTransform: "uppercase", color: "rgba(212,146,74,0.75)", fontWeight: 700, margin: "0 0 6px 0" }}>
              ★  Editor&apos;s Pick
            </p>
            <h2 style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "0.10em", color: "#EDE6D6", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>
              Featured Guide
            </h2>
          </div>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(212,146,74,0.18), transparent)" }} />
          <Link href="/guides" style={{ fontSize: "9px", letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(212,146,74,0.55)", textDecoration: "none", fontWeight: 700 }}>
            All Guides →
          </Link>
        </div>

        {/* Main layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "14px", alignItems: "start" }}>

          {/* HERO — sem borda forte, integrado ao fundo */}
          <Link
            href={hero.href}
            style={{
              position: "relative", display: "block",
              borderRadius: "16px", overflow: "hidden",
              border: `1px solid ${heroHovered ? "rgba(212,146,74,0.30)" : "rgba(255,255,255,0.045)"}`,
              boxShadow: heroHovered
                ? "0 32px 80px rgba(0,0,0,0.80), 0 0 60px rgba(212,146,74,0.08)"
                : "0 8px 48px rgba(0,0,0,0.65)",
              textDecoration: "none", height: "460px",
              transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease, border-color 0.45s ease",
              transform: heroHovered ? "translateY(-6px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHeroHovered(true)}
            onMouseLeave={() => setHeroHovered(false)}
          >
            {/* BG — imagem domina */}
            <div style={{ position: "absolute", inset: "-2px", overflow: "hidden", borderRadius: "16px" }}>
              <div style={{
                position: "absolute", inset: 0,
                transition: "transform 0.80s cubic-bezier(0.22,1,0.36,1)",
                transform: heroHovered ? "scale(1.05)" : "scale(1.01)",
              }}>
                <Image src={hero.image} alt={hero.title} fill
                  sizes="(max-width: 768px) 100vw, 65vw"
                  style={{ objectFit: "cover", objectPosition: "center" }} priority />
              </div>
            </div>

            {/* Overlays orgânicos — não uniformes */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(4,10,6,0.97) 0%, rgba(4,10,6,0.88) 30%, rgba(4,10,6,0.30) 62%, rgba(4,10,6,0.06) 100%)", zIndex: 1 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(4,10,6,0.98) 0%, rgba(4,10,6,0.55) 28%, rgba(4,10,6,0.10) 55%, transparent 75%)", zIndex: 1 }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 15% 85%, rgba(4,10,6,0.60) 0%, transparent 100%)", zIndex: 1 }} />

            {/* Vignette */}
            <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 100px rgba(0,0,0,0.45)", zIndex: 2, borderRadius: "16px" }} />

            {/* Grain */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 2, opacity: 0.020, borderRadius: "16px",
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: "140px",
            }} />

            {/* Top accent */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "45%", height: "1px", background: "linear-gradient(90deg, rgba(212,146,74,0.50), transparent)", zIndex: 3 }} />

            {/* Ambient glow behind text */}
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "60%", height: "70%", background: "radial-gradient(ellipse at bottom left, rgba(212,146,74,0.055) 0%, transparent 65%)", zIndex: 2, pointerEvents: "none" }} />

            {/* Content — livre, editorial */}
            <div style={{ position: "absolute", bottom: 0, left: 0, padding: "40px 44px 40px", zIndex: 4, maxWidth: "480px" }}>

              {/* Category */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <span style={{
                  fontSize: "8px", fontWeight: 700, letterSpacing: "0.26em",
                  textTransform: "uppercase", color: hero.categoryColor,
                  border: "1px solid rgba(212,146,74,0.36)",
                  borderRadius: "3px", padding: "3px 9px",
                  background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)",
                }}>{hero.category}</span>
                <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(212,146,74,0.22), transparent)", maxWidth: "48px" }} />
              </div>

              {/* Title — mais livre */}
              <h3 style={{
                fontSize: "30px", fontWeight: 900, letterSpacing: "0.02em",
                textTransform: "uppercase", color: "#EDE6D6", lineHeight: 1.14,
                textShadow: "0 2px 28px rgba(0,0,0,1)", margin: "0 0 8px 0",
                whiteSpace: "pre-line",
              }}>{hero.title}</h3>

              {/* Subtitle */}
              <p style={{
                fontSize: "11px", fontStyle: "italic", color: "rgba(160,130,80,0.80)",
                margin: "0 0 10px 0", letterSpacing: "0.03em",
                textShadow: "0 1px 8px rgba(0,0,0,0.95)",
              }}>{hero.subtitle}</p>

              {/* Thin rule */}
              <div style={{ width: "32px", height: "1px", background: "rgba(212,146,74,0.22)", margin: "0 0 12px 0" }} />

              {/* Description */}
              <p style={{
                fontSize: "12px", color: "rgba(140,120,90,0.75)", lineHeight: 1.74,
                margin: "0 0 26px 0", maxWidth: "380px",
              }}>{hero.description}</p>

              {/* CTA — ghost, not a button */}
              <span style={{
                display: "inline-flex", alignItems: "center",
                gap: heroHovered ? "10px" : "6px",
                fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "rgba(212,146,74,0.90)",
                border: "1px solid rgba(212,146,74,0.30)",
                borderRadius: "4px", padding: "10px 20px",
                background: "rgba(212,146,74,0.04)",
                backdropFilter: "blur(10px)",
                boxShadow: heroHovered ? "0 0 28px rgba(212,146,74,0.12)" : "none",
                transition: "all 0.42s ease",
              }}>
                {hero.cta}
                <span style={{
                  display: "inline-block",
                  transition: "transform 0.42s ease",
                  transform: heroHovered ? "translateX(4px)" : "translateX(0)",
                }}>→</span>
              </span>
            </div>
          </Link>

          {/* MINI CARDS — ritmo variado */}
          <div style={{ display: "flex", flexDirection: "column", gap: "11px", paddingTop: "4px" }}>
            {minis.map((mini, i) => <MiniCard key={i} mini={mini} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

