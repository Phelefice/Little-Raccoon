"use client";

import Link from "next/link";

const categories = [
  {
    icon: "⚔️",
    label: "Survival",
    desc: "Tips & strategies",
    count: 48,
    href: "/survival",
    color: "#9A5858",
    bg: "#1A0E0E",
  },
  {
    icon: "🌾",
    label: "Farms",
    desc: "Automatic & manual",
    count: 36,
    href: "/farms",
    color: "#4A7A40",
    bg: "#0C1A0C",
  },
  {
    icon: "🏰",
    label: "Builds",
    desc: "Houses & megabuilds",
    count: 62,
    href: "/builds",
    color: "#8A6840",
    bg: "#1A1208",
  },
  {
    icon: "🌍",
    label: "Seeds",
    desc: "Best world seeds",
    count: 29,
    href: "/seeds",
    color: "#486888",
    bg: "#081420",
  },
  {
    icon: "⚡",
    label: "Redstone",
    desc: "Circuits & machines",
    count: 41,
    href: "/redstone",
    color: "#D6C7A1",
    bg: "#1A1608",
  },
  {
    icon: "📖",
    label: "Beginners",
    desc: "Start your journey",
    count: 24,
    href: "/beginners",
    color: "#7060A0",
    bg: "#100E1C",
  },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* Section header */}
      <div className="flex items-center gap-5 mb-10">
        <div>
          <p
            className="text-[10px] font-semibold uppercase mb-1.5"
            style={{ color: "#D6C7A1", letterSpacing: "0.22em" }}
          >
            Browse
          </p>
          <h2 style={{ color: "#EDE6D6" }}>Explore Categories</h2>
        </div>
        <div
          className="flex-1 h-px"
          style={{ background: "linear-gradient(90deg, #D6C7A130, transparent)" }}
        />
        <Link
          href="/categories"
          className="text-[10px] font-semibold uppercase hidden sm:block"
          style={{ color: "#D6C7A1", letterSpacing: "0.14em" }}
        >
          View all →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            href={cat.href}
            className="group flex flex-col items-center text-center p-6"
            style={{
              backgroundColor: "#132018",
              border: "1px solid #1E3028",
              boxShadow: "0 2px 12px rgba(0,0,0,0.35)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#D6C7A125";
              el.style.backgroundColor = "#19291F";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#1E3028";
              el.style.backgroundColor = "#132018";
            }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center text-2xl mb-4"
              style={{ backgroundColor: cat.bg, border: `1px solid ${cat.color}30` }}
            >
              {cat.icon}
            </div>
            <p className="font-bold text-sm mb-1" style={{ color: "#EDE6D6", letterSpacing: "0.02em" }}>
              {cat.label}
            </p>
            <p className="text-xs mb-3" style={{ color: "#4A4440" }}>
              {cat.desc}
            </p>
            <span
              className="text-[10px] font-semibold px-2 py-0.5 uppercase"
              style={{
                backgroundColor: cat.bg,
                color: cat.color,
                letterSpacing: "0.1em",
                border: `1px solid ${cat.color}25`,
              }}
            >
              {cat.count} guides
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
