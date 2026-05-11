"use client";

import Link from "next/link";
import Image from "next/image";

interface Category {
  icon: string;
  label: string;
  desc: string;
  count: number;
  href: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  image: string;
}

const categories: Category[] = [
  {
    icon: "/images/icone_survival.png",
    label: "Survival Essentials",
    desc: "Tips & strategies",
    count: 48,
    href: "/survival",
    accentColor: "#E8845A",
    glowColor: "rgba(232,132,90,0.35)",
    borderColor: "rgba(232,132,90,0.25)",
    image: "/images/category-survival.png",
  },
  {
    icon: "/images/icone_farmsautomation.png",
    label: "Farms & Automation",
    desc: "Automatic & manual",
    count: 36,
    href: "/farms",
    accentColor: "#7BC67A",
    glowColor: "rgba(123,198,122,0.30)",
    borderColor: "rgba(123,198,122,0.22)",
    image: "/images/category-farms.png",
  },
  {
    icon: "/images/icone_buildsdesign.png",
    label: "Builds & Designs",
    desc: "Houses & megabuilds",
    count: 62,
    href: "/builds",
    accentColor: "#D4A96A",
    glowColor: "rgba(212,169,106,0.30)",
    borderColor: "rgba(212,169,106,0.22)",
    image: "/images/category_builds.webp",
  },
  {
    icon: "/images/icone_seeds.png",
    label: "Seeds & Worlds",
    desc: "Best world seeds",
    count: 29,
    href: "/seeds",
    accentColor: "#6AAED4",
    glowColor: "rgba(106,174,212,0.30)",
    borderColor: "rgba(106,174,212,0.22)",
    image: "/images/category-seeds.png",
  },
  {
    icon: "/images/icone_redstone.png",
    label: "Redstone & Mechanics",
    desc: "Circuits & machines",
    count: 41,
    href: "/redstone",
    accentColor: "#D45A5A",
    glowColor: "rgba(212,90,90,0.35)",
    borderColor: "rgba(212,90,90,0.25)",
    image: "/images/category-redstone.png",
  },
  {
    icon: "/images/icone_guides.png",
    label: "Guides for Beginners",
    desc: "Start your journey",
    count: 24,
    href: "/beginners",
    accentColor: "#A08ED4",
    glowColor: "rgba(160,142,212,0.30)",
    borderColor: "rgba(160,142,212,0.22)",
    image: "/images/category_guides.webp",
  },
];

export default function Categories() {
  return (
    <section style={{ position: "relative", padding: "80px 0 90px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(18,30,14,0.97) 0%, rgba(8,12,6,0.99) 100%)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "40px" }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#6a8a5a", marginBottom: "10px", fontWeight: 600 }}>✦ Browse</p>
            <h2 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "0.08em", color: "#EDE6D6", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>Explore Categories</h2>
          </div>
          <Link href="/categories" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6a8a5a", textDecoration: "none", fontWeight: 600 }}>
            View All Categories →
          </Link>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "14px" }}>
          {categories.map((cat, i) => (
            <Link
              key={cat.label}
              href={cat.href}
              style={{
                position: "relative",
                display: "block",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid " + cat.borderColor,
                boxShadow: "0 4px 20px rgba(0,0,0,0.55)",
                textDecoration: "none",
                aspectRatio: "3/4",
                transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px) scale(1.02)";
                el.style.boxShadow = `0 20px 48px rgba(0,0,0,0.65), 0 0 32px ${cat.glowColor}`;
                el.style.borderColor = cat.accentColor + "66";
                const img = el.querySelector(".cat-img") as HTMLElement;
                if (img) img.style.transform = "scale(1.07)";
                const shimmer = el.querySelector(".cat-shimmer") as HTMLElement;
                if (shimmer) shimmer.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.55)";
                el.style.borderColor = cat.borderColor;
                const img = el.querySelector(".cat-img") as HTMLElement;
                if (img) img.style.transform = "scale(1)";
                const shimmer = el.querySelector(".cat-shimmer") as HTMLElement;
                if (shimmer) shimmer.style.opacity = "0";
              }}
            >
              {/* Background image */}
              <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                <div className="cat-img" style={{ position: "absolute", inset: 0, transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}>
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    sizes="(max-width: 640px) 50vw, 17vw"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    priority={i < 2}
                  />
                </div>
              </div>

              {/* Cinematic overlay — escuro embaixo, leve em cima */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, rgba(4,8,4,0.05) 0%, rgba(4,8,4,0.15) 30%, rgba(4,8,4,0.70) 60%, rgba(4,8,4,0.96) 100%)",
                zIndex: 1,
              }} />

              {/* Vignette */}
              <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 40px rgba(0,0,0,0.35)", zIndex: 2, borderRadius: "12px" }} />

              {/* Shimmer top */}
              <div className="cat-shimmer" style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: `linear-gradient(90deg, transparent, ${cat.accentColor}99, transparent)`,
                opacity: 0, transition: "opacity 0.35s ease", zIndex: 3,
              }} />

              {/* Content — bottom left, ícone em cima do texto */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                padding: "14px 14px 16px",
                zIndex: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "6px",
              }}>
                {/* Ícone */}
                <div style={{
                  width: "40px", height: "40px",
                  borderRadius: "50%",
                  background: "rgba(6,10,5,0.75)",
                  border: `1.5px solid ${cat.accentColor}55`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  backdropFilter: "blur(6px)",
                  marginBottom: "2px",
                }}>
                  <Image src={cat.icon} alt="" width={24} height={24} style={{ objectFit: "contain" }} />
                </div>

                {/* Título */}
                <p style={{
                  fontSize: "13px", fontWeight: 800,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  color: "#EDE6D6", lineHeight: 1.2,
                  textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                  margin: 0,
                }}>
                  {cat.label}
                </p>

                {/* Desc */}
                <p style={{
                  fontSize: "10px", color: "#9a8870",
                  fontStyle: "italic", margin: 0,
                  textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                }}>
                  {cat.desc}
                </p>

                {/* Badge */}
                <span style={{
                  display: "inline-block",
                  fontSize: "9px", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: cat.accentColor,
                  border: `1px solid ${cat.accentColor}44`,
                  borderRadius: "4px", padding: "3px 8px",
                  background: "rgba(0,0,0,0.40)",
                  backdropFilter: "blur(4px)",
                  marginTop: "2px",
                }}>
                  {cat.count} guides
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 400px) {
          .cat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
