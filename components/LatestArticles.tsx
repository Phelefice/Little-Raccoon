"use client";

import Link from "next/link";


const articles = [
  {
    tag: "Survival",
    tagColor: "#9A5858",
    tagBg: "#1A0E0E",
    icon: "âš”ï¸",
    title: "How to Get Full Netherite Armor Without Dying in the Nether",
    excerpt: "A step-by-step approach to gathering ancient debris while keeping your life points â€” and your sanity.",
    author: "Steve Crafterson",
    date: "May 8, 2026",
    readTime: "7 min",
    views: "8.1k",
    slug: "/guides/netherite-armor-safe",
  },
  {
    tag: "Farms",
    tagColor: "#4A7A40",
    tagBg: "#0C1A0C",
    icon: "ðŸŒ¾",
    title: "AFK Fish Farm: Still Works in 1.21? Full Setup Guide",
    excerpt: "We tested every AFK fish farm design after the latest patch. Here's what actually still gives you treasure.",
    author: "FarmQueen Fiona",
    date: "May 6, 2026",
    readTime: "9 min",
    views: "12.4k",
    slug: "/guides/afk-fish-farm-1-21",
  },
  {
    tag: "Seeds",
    tagColor: "#486888",
    tagBg: "#081420",
    icon: "ðŸŒ",
    title: "Top 10 Seeds With Massive Structures at Spawn (Java 1.21)",
    excerpt: "We hand-tested over 200 seeds so you don't have to. These are the best worlds to start your adventure.",
    author: "SeedFinder Sam",
    date: "May 4, 2026",
    readTime: "5 min",
    views: "31.7k",
    slug: "/seeds/top-10-java-1-21",
  },
  {
    tag: "Redstone",
    tagColor: "#D6C7A1",
    tagBg: "#1A1608",
    icon: "âš¡",
    title: "Automatic Sorting System for Any Base Size",
    excerpt: "Never organize your chest room manually again. This scalable sorter handles up to 54 item types out of the box.",
    author: "Redstone Rita",
    date: "May 2, 2026",
    readTime: "11 min",
    views: "15.9k",
    slug: "/guides/automatic-sorting-system",
  },
];

function ArticleCard({ article }: { article: (typeof articles)[0] }) {
  return (
    <Link
      href={article.slug}
      className="group flex gap-5 p-5"
      style={{
        border: "1px solid #1E3028", borderRadius: "12px",
        backgroundColor: "#132018",
        boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#D6C7A125")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1E3028")}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-2xl self-start"
        style={{ backgroundColor: article.tagBg, border: `1px solid ${article.tagColor}25` }}
      >
        {article.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span
            className="px-2.5 py-0.5 text-[10px] font-semibold uppercase"
            style={{
              backgroundColor: article.tagBg,
              color: article.tagColor,
              letterSpacing: "0.12em",
              border: `1px solid ${article.tagColor}25`,
            }}
          >
            {article.tag}
          </span>
          <span className="text-[11px]" style={{ color: "#4A4440" }}>
            {article.readTime} Â· {article.views} views
          </span>
        </div>

        <h3
          className="font-black text-sm sm:text-base leading-snug mb-2 group-hover:opacity-80"
          style={{ color: "#EDE6D6" }}
        >
          {article.title}
        </h3>

        <p className="text-xs sm:text-sm leading-relaxed mb-3" style={{ color: "#8A8268", lineHeight: "1.65" }}>
          {article.excerpt}
        </p>

        <div className="flex items-center gap-1.5">
          <div
            className="w-5 h-5 flex items-center justify-center text-xs"
            style={{ backgroundColor: "#1E3D26" }}
          >
            ðŸ§‘
          </div>
          <span className="text-[11px]" style={{ color: "#4A4440" }}>
            {article.author} Â· {article.date}
          </span>
        </div>
      </div>

      <div className="flex-shrink-0 self-center hidden sm:block" style={{ color: "#1E3028" }}>
        <svg
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="group-hover:stroke-[#D6C7A1]"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </Link>
  );
}

export default function LatestArticles() {
  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px 48px" }}>
      <div>
        {/* Articles column */}
        <div>
          <div className="flex items-center gap-5 mb-8">
            <div>
              <p
                className="text-[10px] font-semibold uppercase mb-1.5"
                style={{ color: "#D6C7A1", letterSpacing: "0.22em" }}
              >
                Fresh Content
              </p>
              <h2 style={{ color: "#EDE6D6" }}>Latest Articles</h2>
            </div>
            <div
              className="flex-1 h-px"
              style={{ background: "linear-gradient(90deg, #D6C7A130, transparent)" }}
            />
            <Link
              href="/articles"
              className="text-[10px] font-semibold uppercase hidden sm:block"
              style={{ color: "#D6C7A1", letterSpacing: "0.14em" }}
            >
              View all â†’
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {/* Load more */}
          <div className="mt-10 text-center">
            <button
              className="px-8 py-3 text-[11px] font-bold uppercase"
              style={{
                border: "1px solid #1E3028", borderRadius: "12px",
                color: "#D6C7A1",
                backgroundColor: "transparent",
                letterSpacing: "0.16em",
                fontFamily: "var(--font-oswald)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#D6C7A140";
                el.style.backgroundColor = "#132018";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#1E3028";
                el.style.backgroundColor = "transparent";
              }}
            >
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



