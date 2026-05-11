"use client";

import Link from "next/link";
import Image from "next/image";

interface Category {
  icon: string;
  label: string;
  desc: string;
  count: number;
  href: string;
  color: string;
  glow: string;
  gradient: string;
  border: string;
  shimmer: string;
  image: string;
}

const categories: Category[] = [
  {
    icon: "⚔️",
    label: "Survival",
    desc: "Tips & strategies",
    count: 48,
    href: "/survival",
    color: "#C0524A",
    glow: "rgba(192,82,74,0.25)",
    gradient: "linear-gradient(135deg, #2a0e0e 0%, #1a0808 100%)",
    border: "rgba(192,82,74,0.22)",
    shimmer: "rgba(192,82,74,0.08)",
    image: "/images/category-survival.png",
  },
  {
    icon: "⚙️",
    label: "Farms & Automation",
    desc: "Automatic & manual",
    count: 36,
    href: "/farms",
    color: "#5A9E48",
    glow: "rgba(90,158,72,0.18)",
    gradient: "linear-gradient(135deg, #0e1f0a 0%, #081408 100%)",
    border: "rgba(90,158,72,0.22)",
    shimmer: "rgba(90,158,72,0.08)",
    image: "/images/category-farms.png",
  },
  {
    icon: "🏰",
    label: "Builds",
    desc: "Houses & megabuilds",
    count: 62,
    href: "/builds",
    color: "#C8944A",
    glow: "rgba(200,148,74,0.18)",
    gradient: "linear-gradient(135deg, #221608 0%, #160e04 100%)",
    border: "rgba(200,148,74,0.22)",
    shimmer: "rgba(200,148,74,0.08)",
    image: "/images/category_builds.webp",
  },
  {
    icon: "🌍",
    label: "Seeds",
    desc: "Best world seeds",
    count: 29,
    href: "/seeds",
    color: "#4A8AB0",
    glow: "rgba(74,138,176,0.18)",
    gradient: "linear-gradient(135deg, #081828 0%, #040e1a 100%)",
    border: "rgba(74,138,176,0.22)",
    shimmer: "rgba(74,138,176,0.08)",
    image: "/images/category-seeds.png",
  },
  {
    icon: "⚡",
    label: "Redstone",
    desc: "Circuits & machines",
    count: 41,
    href: "/redstone",
    color: "#D44A4A",
    glow: "rgba(212,74,74,0.18)",
    gradient: "linear-gradient(135deg, #200808 0%, #140404 100%)",
    border: "rgba(212,74,74,0.22)",
    shimmer: "rgba(212,74,74,0.08)",
    image: "/images/category-redstone.png",
  },
  {
    icon: "📖",
    label: "Beginners",
    desc: "Start your journey",
    count: 24,
    href: "/beginners",
    color: "#8A78C8",
    glow: "rgba(138,120,200,0.18)",
    gradient: "linear-gradient(135deg, #120e24 0%, #0c0818 100%)",
    border: "rgba(138,120,200,0.22)",
    shimmer: "rgba(138,120,200,0.08)",
    image: "/images/category_guides.webp",
  },
];

export default function Categories() {
  return (
    <section
      style={{
        position: "relative",
        padding: "80px 0 90px",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(20,35,15,0.95) 0%, rgba(10,16,8,0.98) 100%)", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 30% at 20% 80%, rgba(45,90,30,0.08) 0%, transparent 70%)", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(8,12,6,0.7) 100%)", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a9e7a", marginBottom: "8px" }}>Browse</p>
            <h2 style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "0.06em", color: "#EDE6D6", textTransform: "uppercase" }}>Explore Categories</h2>
          </div>
          <Link href="/categories" style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a9e7a", textDecoration: "none" }}>View All →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "16px" }}>
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "28px 16px 24px", background: cat.gradient, border: "1px solid " + cat.border, borderRadius: "12px", boxShadow: "0 4px 24px rgba(0,0,0,0.5)", textDecoration: "none", overflow: "hidden", transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer", minHeight: "180px", justifyContent: "flex-end" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.6), 0 0 32px " + cat.glow;
                el.style.borderColor = cat.color + "55";
                const bgImg = el.querySelector(".cat-bg-img") as HTMLElement;
                if (bgImg) { bgImg.style.transform = "scale(1.06)"; bgImg.style.filter = "brightness(1.15)"; }
                const sh = el.querySelector(".cat-shimmer") as HTMLElement;
                if (sh) sh.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.5)";
                el.style.borderColor = cat.border;
                const bgImg = el.querySelector(".cat-bg-img") as HTMLElement;
                if (bgImg) { bgImg.style.transform = "scale(1)"; bgImg.style.filter = "brightness(1)"; }
                const sh = el.querySelector(".cat-shimmer") as HTMLElement;
                if (sh) sh.style.opacity = "0";
              }}
            >
              {/* ✅ Next.js Image em vez de <img> */}
              <div className="cat-bg-img" style={{ position: "absolute", inset: 0, transition: "transform 0.5s ease, filter 0.5s ease" }}>
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 16vw"
                  className="object-cover"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority={cat.label === "Survival"}
                />
              </div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,4,4,0.95) 0%, rgba(8,4,4,0.5) 50%, rgba(8,4,4,0.1) 100%)" }} />
              <div className="cat-shimmer" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, " + cat.color + "80, transparent)", opacity: 0, transition: "opacity 0.3s ease", zIndex: 2 }} />
              <div style={{ position: "relative", zIndex: 2, width: "100%", paddingTop: "100px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#EDE6D6", marginBottom: "4px" }}>{cat.label}</p>
                <p style={{ fontSize: "11px", color: "#a08870", marginBottom: "12px", fontStyle: "italic" }}>{cat.desc}</p>
                <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: cat.color, border: "1px solid " + cat.border, borderRadius: "4px", padding: "4px 10px" }}>{cat.count} guides</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
