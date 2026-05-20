"use client";

import Link from "next/link";
import Image from "next/image";

interface Category {
  icon: string;
  label: string;
  sublabel: string;
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
    icon: "/images/icon_survival.png",
    label: "Survival",
    sublabel: "Essentials",
    desc: "Tips & strategies",
    count: 48,
    href: "/survival",
    accentColor: "#D4924A",
    glowColor: "rgba(212,146,74,0.30)",
    borderColor: "rgba(212,146,74,0.20)",
    image: "/images/category-survival.png",
  },
  {
    icon: "/images/icon_farm.png",
    label: "Farms &",
    sublabel: "Automation",
    desc: "Automatic & manual",
    count: 36,
    href: "/farms",
    accentColor: "#D4924A",
    glowColor: "rgba(212,146,74,0.25)",
    borderColor: "rgba(212,146,74,0.18)",
    image: "/images/category-farms.png",
  },
  {
    icon: "/images/icon_builds.png",
    label: "Builds &",
    sublabel: "Designs",
    desc: "Architectural ideas",
    count: 62,
    href: "/builds",
    accentColor: "#D4924A",
    glowColor: "rgba(212,146,74,0.25)",
    borderColor: "rgba(212,146,74,0.18)",
    image: "/images/category_builds.webp",
  },
  {
    icon: "/images/icon_seeds.png",
    label: "Seeds &",
    sublabel: "Worlds",
    desc: "Best world seeds",
    count: 29,
    href: "/seeds",
    accentColor: "#D4924A",
    glowColor: "rgba(212,146,74,0.25)",
    borderColor: "rgba(212,146,74,0.18)",
    image: "/images/category-seeds.png",
  },
  {
    icon: "/images/icon_redstone.png",
    label: "Redstone &",
    sublabel: "Mechanics",
    desc: "Circuits & machines",
    count: 41,
    href: "/redstone",
    accentColor: "#D4924A",
    glowColor: "rgba(212,146,74,0.30)",
    borderColor: "rgba(212,146,74,0.20)",
    image: "/images/category-redstone.png",
  },
  {
    icon: "/images/icon_guides.png",
    label: "Guides for",
    sublabel: "Beginners",
    desc: "Start your journey",
    count: 24,
    href: "/beginners",
    accentColor: "#D4924A",
    glowColor: "rgba(212,146,74,0.25)",
    borderColor: "rgba(212,146,74,0.18)",
    image: "/images/category_guides.webp",
  },
];

export default function Categories() {
  return (
    <section style={{ position: "relative", padding: "80px 0 96px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(14,22,10,0.98) 0%, rgba(6,10,5,1) 100%)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "44px" }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#5a7a4a", fontWeight: 700, margin: "0 0 10px 0" }}>✦ Browse</p>
            <h2 style={{ fontSize: "30px", fontWeight: 900, letterSpacing: "0.07em", color: "#EDE6D6", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>Explore Categories</h2>
          </div>
          <Link href="/categories" style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5a7a4a", textDecoration: "none", fontWeight: 700 }}>
            View All Categories →
          </Link>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "12px" }}>
          {categories.map((cat, i) => (
            <Link
              key={cat.label}
              href={cat.href}
              style={{
                position: "relative",
                display: "block",
                borderRadius: "12px",
                overflow: "hidden",
                border: `1px solid ${cat.borderColor}`,
                boxShadow: "0 2px 16px rgba(0,0,0,0.50)",
                textDecoration: "none",
                height: "220px",
                transition: "transform 0.32s cubic-bezier(0.22,1,0.36,1), box-shadow 0.32s ease, border-color 0.32s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = `0 18px 44px rgba(0,0,0,0.60), 0 0 28px ${cat.glowColor}`;
                el.style.borderColor = cat.accentColor + "55";
                const img = el.querySelector(".cat-img") as HTMLElement;
                if (img) img.style.transform = "scale(1.06)";
                const sh = el.querySelector(".cat-shimmer") as HTMLElement;
                if (sh) sh.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.50)";
                el.style.borderColor = cat.borderColor;
                const img = el.querySelector(".cat-img") as HTMLElement;
                if (img) img.style.transform = "scale(1)";
                const sh = el.querySelector(".cat-shimmer") as HTMLElement;
                if (sh) sh.style.opacity = "0";
              }}
            >
              {/* BG image */}
              <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                <div className="cat-img" style={{ position: "absolute", inset: 0, transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)" }}>
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    sizes="(max-width: 640px) 50vw, 17vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority={i < 3}
                  />
                </div>
              </div>

              {/* Gradient overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.65) 58%, rgba(0,0,0,0.97) 100%)",
                zIndex: 1,
              }} />

              {/* Shimmer */}
              <div className="cat-shimmer" style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: `linear-gradient(90deg, transparent, ${cat.accentColor}88, transparent)`,
                opacity: 0, transition: "opacity 0.32s ease", zIndex: 3,
              }} />

              {/* Content — ícone solto + texto, alinhados ao topo do bloco */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                padding: "0 14px 18px",
                zIndex: 4,
              }}>
                {/* Row: ícone alinhado ao topo da primeira linha do título */}
                <div style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "10px",
                }}>
                  {/* Ícone sem moldura, solto, alinhado ao topo */}
                  <div style={{
                    flexShrink: 0,
                    width: "52px",
                    height: "52px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: "2px",
                    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.7))",
                  }}>
                    <Image
                      src={cat.icon}
                      alt={cat.sublabel}
                      width={48}
                      height={48}
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  {/* Texto */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Título 2 linhas */}
                    <p style={{
                      fontSize: "13px",
                      fontWeight: 900,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#EDE6D6",
                      lineHeight: 1.25,
                      margin: "0 0 5px 0",
                      textShadow: "0 2px 8px rgba(0,0,0,0.95)",
                    }}>
                      {cat.label}<br />{cat.sublabel}
                    </p>

                    {/* Desc */}
                    <p style={{
                      fontSize: "10px",
                      color: "#8a7860",
                      fontStyle: "italic",
                      margin: "0 0 7px 0",
                      textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                      lineHeight: 1.3,
                    }}>
                      {cat.desc}
                    </p>

                    {/* Count */}
                    <p style={{
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: cat.accentColor,
                      margin: 0,
                      textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                    }}>
                      {cat.count} Guides
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .cat-section-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .cat-section-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 400px) {
          .cat-section-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

