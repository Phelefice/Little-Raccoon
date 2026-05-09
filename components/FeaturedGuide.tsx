"use client";

import Link from "next/link";

const featured = {
  tag: "Survival",
  tagColor: "#9A5858",
  tagBg: "#1A0E0E",
  readTime: "12 min read",
  title: "The Ultimate Survival Guide: From Day 1 to Netherite in 7 Days",
  excerpt:
    "Everything you need to know to go from a naked newbie to a fully armored Netherite warrior in just one week. We cover resource gathering, base building, mining strategies, and how to survive your first Nether run.",
  author: "Steve Crafterson",
  date: "May 7, 2026",
  views: "24.3k",
  slug: "/guides/ultimate-survival-7-days",
  steps: [
    "Gather essential resources",
    "Build your first shelter",
    "Set up a food source",
    "Enter the Nether safely",
  ],
};

const secondary = [
  {
    tag: "Redstone",
    tagColor: "#D6C7A1",
    tagBg: "#1A1608",
    readTime: "8 min",
    title: "Compact Flying Machine That Fits in a 3×3 Space",
    author: "Redstone Rita",
    date: "May 5, 2026",
    slug: "/guides/compact-flying-machine",
  },
  {
    tag: "Builds",
    tagColor: "#8A6840",
    tagBg: "#1A1208",
    readTime: "15 min",
    title: "Medieval Castle: Full Blueprint for Beginners",
    author: "BuildMaster Ben",
    date: "May 3, 2026",
    slug: "/guides/medieval-castle-blueprint",
  },
  {
    tag: "Farms",
    tagColor: "#4A7A40",
    tagBg: "#0C1A0C",
    readTime: "10 min",
    title: "Zero-Tick Sugar Cane Farm — 1,000 Per Hour",
    author: "FarmQueen Fiona",
    date: "May 1, 2026",
    slug: "/guides/zero-tick-sugarcane-farm",
  },
];

function TagBadge({ tag, color, bg }: { tag: string; color: string; bg: string }) {
  return (
    <span
      className="inline-block px-2.5 py-0.5 text-[10px] font-semibold uppercase"
      style={{ backgroundColor: bg, color, letterSpacing: "0.12em", border: `1px solid ${color}25` }}
    >
      {tag}
    </span>
  );
}

export default function FeaturedGuide() {
  return (
    <section style={{ backgroundColor: "#0F1F19", borderTop: "1px solid #1E3028", borderBottom: "1px solid #1E3028" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Header */}
        <div className="flex items-center gap-5 mb-10">
          <div>
            <p
              className="text-[10px] font-semibold uppercase mb-1.5"
              style={{ color: "#D6C7A1", letterSpacing: "0.22em" }}
            >
              Editor&apos;s Pick
            </p>
            <h2 style={{ color: "#EDE6D6" }}>Featured Guide</h2>
          </div>
          <div
            className="flex-1 h-px"
            style={{ background: "linear-gradient(90deg, #D6C7A130, transparent)" }}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Main featured */}
          <Link
            href={featured.slug}
            className="lg:col-span-2 group flex flex-col"
            style={{
              border: "1px solid #1E3028",
              backgroundColor: "#132018",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#D6C7A125")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1E3028")}
          >
            {/* Image area — cinematic gradient */}
            <div
              className="relative h-56 sm:h-72 flex items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1E3D26 0%, #0F1F19 55%, #0B1411 100%)",
              }}
            >
              {/* Subtle grain overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #EDE6D6 0px, transparent 1px, transparent 4px, #EDE6D6 5px)",
                }}
              />
              <div className="relative text-center">
                <div className="text-6xl mb-4 opacity-90">⛏️</div>
                <div
                  className="px-4 py-1.5 text-[10px] font-bold uppercase"
                  style={{
                    backgroundColor: "#D6C7A1",
                    color: "#0B1411",
                    letterSpacing: "0.18em",
                    fontFamily: "var(--font-oswald)",
                  }}
                >
                  Featured Article
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-5">
                <TagBadge tag={featured.tag} color={featured.tagColor} bg={featured.tagBg} />
                <span className="text-xs" style={{ color: "#4A4440" }}>
                  {featured.readTime}
                </span>
              </div>

              <h3
                className="text-xl sm:text-2xl font-black mb-4 group-hover:opacity-80"
                style={{ color: "#EDE6D6", lineHeight: "1.25", letterSpacing: "0.01em" }}
              >
                {featured.title}
              </h3>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "#C0B89A", lineHeight: "1.75" }}>
                {featured.excerpt}
              </p>

              {/* Steps preview */}
              <div
                className="p-4 mb-6"
                style={{ backgroundColor: "#0B1411", border: "1px solid #1E3028" }}
              >
                <p
                  className="text-[10px] font-semibold uppercase mb-3"
                  style={{ color: "#D6C7A1", letterSpacing: "0.18em" }}
                >
                  What you&apos;ll learn
                </p>
                <ul className="space-y-2">
                  {featured.steps.map((step, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm" style={{ color: "#C0B89A" }}>
                      <span style={{ color: "#D6C7A1", fontSize: "10px" }}>▶</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 flex items-center justify-center text-sm"
                    style={{ backgroundColor: "#1E3D26", border: "1px solid #2F5D3A" }}
                  >
                    🧑
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: "#EDE6D6" }}>
                      {featured.author}
                    </p>
                    <p className="text-[11px]" style={{ color: "#4A4440" }}>
                      {featured.date} · {featured.views} views
                    </p>
                  </div>
                </div>
                <span
                  className="text-[11px] font-bold uppercase px-4 py-2"
                  style={{
                    backgroundColor: "#2F5D3A",
                    color: "#EDE6D6",
                    letterSpacing: "0.1em",
                    fontFamily: "var(--font-oswald)",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = "#3A7048")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = "#2F5D3A")}
                >
                  Read Guide →
                </span>
              </div>
            </div>
          </Link>

          {/* Secondary articles */}
          <div className="flex flex-col gap-4">
            {secondary.map((article) => (
              <Link
                key={article.slug}
                href={article.slug}
                className="group flex flex-col p-6 flex-1"
                style={{
                  border: "1px solid #1E3028",
                  backgroundColor: "#132018",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#D6C7A125")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1E3028")}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <TagBadge tag={article.tag} color={article.tagColor} bg={article.tagBg} />
                  <span className="text-[11px]" style={{ color: "#4A4440" }}>
                    {article.readTime}
                  </span>
                </div>
                <h3
                  className="font-bold text-sm leading-snug mb-4 group-hover:opacity-75"
                  style={{ color: "#EDE6D6", flex: 1 }}
                >
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 mt-auto">
                  <div
                    className="w-5 h-5 flex items-center justify-center text-xs"
                    style={{ backgroundColor: "#1E3D26" }}
                  >
                    🧑
                  </div>
                  <span className="text-[11px]" style={{ color: "#4A4440" }}>
                    {article.author} · {article.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
