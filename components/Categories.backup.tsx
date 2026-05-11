Get-Content "C:\Users\Leicht\Downloads\Categories_1.tsx" -Encoding UTF8 | Set-Content "components\Categories.tsx" -Encoding UTF8"use client";

import Link from "next/link";

const categories = [
  {
    icon: "⚔️",
    label: "Survival",
    desc: "Tips & strategies",
    count: 48,
    href: "/survival",
    image: "/category-survival.png",
    accent: "rgba(192,82,74,0.6)",
    fallback: "linear-gradient(160deg, #1a0808 0%, #2a0e0e 100%)",
  },
  {
    icon: "🌾",
    label: "Farms",
    desc: "Automatic & manual",
    count: 36,
    href: "/farms",
    image: null,
    accent: "rgba(90,158,72,0.6)",
    fallback: "linear-gradient(160deg, #081408 0%, #0e1f0a 100%)",
  },
  {
    icon: "🏰",
    label: "Builds",
    desc: "Houses & megabuilds",
    count: 62,
    href: "/builds",
    image: null,
    accent: "rgba(200,148,74,0.6)",
    fallback: "linear-gradient(160deg, #160e04 0%, #221608 100%)",
  },
  {
    icon: "🌍",
    label: "Seeds",
    desc: "Best world seeds",
    count: 29,
    href: "/seeds",
    image: null,
    accent: "rgba(74,138,176,0.6)",
    fallback: "linear-gradient(160deg, #040e1a 0%, #081828 100%)",
  },
  {
    icon: "⚡",
    label: "Redstone",
    desc: "Circuits & machines",
    count: 41,
    href: "/redstone",
    image: null,
    accent: "rgba(212,74,74,0.6)",
    fallback: "linear-gradient(160deg, #140404 0%, #200808 100%)",
  },
  {
    icon: "📖",
    label: "Beginners",
    desc: "Start your journey",
    count: 24,
    href: "/beginners",
    image: null,
    accent: "rgba(138,120,200,0.6)",
    fallback: "linear-gradient(160deg, #0c0818 0%, #120e24 100%)",
  },
];

export default function Categories() {
  return (
    <section style={{
      position: "relative",
      padding: "88px 0 96px",
      background: "linear-gradient(180deg, #080d06 0%, #0c1209 60%, #080d06 100%)",
    }}>
      {/* Atmospheric fog */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(25,45,18,0.35) 0%, transparent 70%)",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "44px" }}>
          <div>
            <p style={{
              fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase",
              color: "#C8A96E", marginBottom: "10px", fontFamily: "monospace", opacity: 0.85,
            }}>Browse</p>
            <h2 style={{
              fontSize: "26px", fontWeight: 700, letterSpacing: "0.08em",
              color: "#EDE6D6", textTransform: "uppercase", margin: 0,
              textShadow: "0 2px 20px rgba(200,169,110,0.15)",
            }}>Explore Categories</h2>
          </div>
          <Link href="/categories"
            style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C8A96E", textDecoration: "none", fontFamily: "monospace", opacity: 0.75 }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
          >View All →</Link>
        </div>

        {/* Cards row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "14px",
        }}>
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              style={{
                position: "relative",
                display: "block",
                height: "200px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(218,190,128,0.18)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                textDecoration: "none",
                cursor: "pointer",
                background: cat.fallback,
                transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.65), 0 0 30px " + cat.accent + ", inset 0 1px 0 rgba(255,255,255,0.08)";
                el.style.borderColor = "rgba(218,190,128,0.45)";
                const img = el.querySelector(".tile-img") as HTMLElement;
                if (img) img.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)";
                el.style.borderColor = "rgba(218,190,128,0.18)";
                const img = el.querySelector(".tile-img") as HTMLElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
              {/* Full-cover background image */}
              {cat.image && (
                <div className="tile-img" style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "url(" + cat.image + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.5s ease",
                }} />
              )}

              {/* No image — animated noise texture fallback */}
              {!cat.image && (
                <div className="tile-img" style={{
                  position: "absolute", inset: 0,
                  background: cat.fallback,
                  transition: "transform 0.5s ease",
                }} />
              )}

              {/* Cinematic gradient overlay — dark bottom, transparent top */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(4,6,4,0.96) 0%, rgba(4,6,4,0.65) 35%, rgba(4,6,4,0.2) 65%, rgba(4,6,4,0.05) 100%)",
              }} />

              {/* Top shimmer */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "1px",
                background: "linear-gradient(90deg, transparent 0%, rgba(218,190,128,0.4) 50%, transparent 100%)",
              }} />

              {/* Guide count — top right */}
              <div style={{
                position: "absolute", top: "12px", right: "12px",
                fontFamily: "monospace", fontSize: "9px", letterSpacing: "0.1em",
                textTransform: "uppercase", color: "rgba(218,190,128,0.85)",
                background: "rgba(4,6,4,0.75)", border: "1px solid rgba(218,190,128,0.2)",
                borderRadius: "100px", padding: "3px 8px",
              }}>
                {cat.count}
              </div>

              {/* Bottom-left content */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "16px 16px 18px",
                display: "flex",
                alignItems: "flex-end",
                gap: "10px",
              }}>
                {/* Icon circle */}
                <div style={{
                  width: "36px", height: "36px", borderRadius: "50%", flexShrink: 0,
                  background: "rgba(8,12,8,0.88)",
                  border: "1px solid rgba(218,190,128,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
                }}>
                  {cat.icon}
                </div>

                {/* Text */}
                <div style={{ minWidth: 0 }}>
                  <p style={{
                    fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: "#EDE6D6", margin: "0 0 2px 0",
                    lineHeight: 1.2, textShadow: "0 1px 6px rgba(0,0,0,0.9)",
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                  }}>{cat.label}</p>
                  <p style={{
                    fontSize: "10px", color: "rgba(200,169,110,0.7)", margin: 0,
                    fontStyle: "italic", letterSpacing: "0.02em",
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                  }}>{cat.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
