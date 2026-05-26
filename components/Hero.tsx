"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const tagColors: Record<string, string> = {
  Build: "#8A7A50", Guide: "#5A8A70", Survival: "#9A5858",
  Seeds: "#7A9A50", Redstone: "#8A5A5A", Tips: "#6A7A8A", Farms: "#7A8A5A",
};

interface ArticleResult {
  slug: string;
  title: string;
  tag: string;
  description: string;
  image: string;
}

const popularTags = [
  { label: "Mob Farms",        href: "/category/farms" },
  { label: "Starter House",    href: "/category/build" },
  { label: "Iron Farm",        href: "/articles/how-to-build-an-iron-farm" },
  { label: "Enchanting",       href: "/articles/complete-enchanting-guide" },
  { label: "Villager Trading", href: "/articles/villager-trading-hall-guide" },
  { label: "Redstone",         href: "/category/redstone" },
  { label: "Seeds",            href: "/category/seeds" },
];

export default function Hero() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ArticleResult[]>([]);
  const [allArticles, setAllArticles] = useState<ArticleResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Load article data once on mount
  useEffect(() => {
    fetch("/api/search")
      .then((r) => r.json())
      .then((data: ArticleResult[]) => setAllArticles(data))
      .catch(() => {});
  }, []);

  // Filter on query change
  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setResults([]);
      setIsOpen(false);
      setActiveIndex(-1);
      return;
    }
    const filtered = allArticles
      .filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.tag.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q)
      )
      .slice(0, 6);
    setResults(filtered);
    setIsOpen(filtered.length > 0);
    setActiveIndex(-1);
  }, [query, allArticles]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, -1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (activeIndex >= 0 && results[activeIndex]) {
          router.push(`/articles/${results[activeIndex].slug}`);
          setIsOpen(false);
          setQuery("");
        } else if (query.trim()) {
          router.push(`/articles?q=${encodeURIComponent(query.trim())}`);
          setIsOpen(false);
        }
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    },
    [isOpen, activeIndex, results, query, router]
  );

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#0B1411",
        borderBottom: "1px solid #1E3028",
        backgroundImage: "url('/banner2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(11,20,17,0.80) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 35%, rgba(11,20,17,0.75) 100%)" }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-28 sm:py-36 text-center">
        <div className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 text-[12px] font-semibold uppercase" style={{ border: "1px solid #D6C7A130", color: "#D6C7A1", backgroundColor: "rgba(11,20,17,0.20)", letterSpacing: "0.22em", textShadow: "0 1px 4px rgba(0,0,0,0.8)", borderRadius: "20px" }}>
          <span>⛏</span>
          <span>Minecraft Guide &amp; Resource Hub</span>
          <span>⛏</span>
        </div>

        <h1 className="font-normal leading-none mb-6 uppercase" style={{ fontFamily: "var(--font-bebas), var(--font-oswald), sans-serif", fontSize: "clamp(4.5rem, 11vw, 9rem)", letterSpacing: "0.03em", color: "#EDE6D6", textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)" }}>
          Your Adventure
          <br />
          <span style={{ color: "#D6C7A1" }}>Starts Here</span>
        </h1>

        <p className="text-base sm:text-lg mb-12 max-w-xl mx-auto" style={{ color: "rgba(245,238,220,0.78)", fontWeight: 400, fontSize: "1.1rem", lineHeight: "1.8", letterSpacing: "0.01em", textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}>
          Survival strategies, mega builds, hidden seeds, Redstone contraptions and more — everything a true crafter needs.
        </p>

        {/* Search bar + dropdown */}
        <div className="max-w-lg mx-auto mb-8" ref={wrapperRef} style={{ position: "relative" }}>
          <div className="flex overflow-hidden" style={{ border: "1px solid rgba(245,238,220,0.12)", backgroundColor: "rgba(12,18,14,0.82)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", borderRadius: "20px", boxShadow: "0 8px 24px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
            <div className="flex items-center pl-4" style={{ color: "rgba(255,248,230,0.68)" }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => results.length > 0 && setIsOpen(true)}
              placeholder="Search guides, builds, seeds..."
              className="hero-search-input flex-1 px-4 py-3.5 bg-transparent text-sm"
              style={{ color: "#EDE6D6", outline: "none", letterSpacing: "0.01em" }}
              aria-label="Search articles"
              aria-autocomplete="list"
              aria-expanded={isOpen}
            />
            <button
              className="px-6 py-3.5 text-[11px] font-bold uppercase"
              style={{ backgroundColor: "#2F5D3A", color: "#EDE6D6", minWidth: "88px", letterSpacing: "0.12em", fontFamily: "var(--font-oswald)", borderRadius: "0 16px 16px 0", boxShadow: "0 4px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#3A7048")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#2F5D3A")}
              onClick={() => {
                if (query.trim()) {
                  router.push(`/articles?q=${encodeURIComponent(query.trim())}`);
                  setIsOpen(false);
                }
              }}
            >
              Search
            </button>
          </div>

          {/* Dropdown */}
          {isOpen && results.length > 0 && (
            <div
              role="listbox"
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: 0,
                right: 0,
                backgroundColor: "#0C1810",
                border: "1px solid #1A2E1A",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
                zIndex: 50,
              }}
            >
              {results.map((article, i) => {
                const tagColor = tagColors[article.tag] || "#5A8A70";
                const isActive = i === activeIndex;
                return (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    role="option"
                    aria-selected={isActive}
                    onClick={() => { setIsOpen(false); setQuery(""); }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 14px",
                      textDecoration: "none",
                      backgroundColor: isActive ? "#0E1A10" : "transparent",
                      borderBottom: "1px solid #1A2E1A20",
                    }}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    {/* Thumbnail */}
                    <div style={{ width: 44, height: 44, borderRadius: 6, overflow: "hidden", position: "relative", flexShrink: 0, backgroundColor: "#0A1208" }}>
                      {article.image
                        ? <Image src={article.image} alt={article.title} fill style={{ objectFit: "cover" }} />
                        : <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#0E1A10,#162410)" }} />
                      }
                    </div>
                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                      <p style={{ margin: "0 0 2px", fontSize: 13, color: "#EDE6D6", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{article.title}</p>
                      <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: tagColor }}>{article.tag}</span>
                    </div>
                    <svg width="12" height="12" fill="none" stroke="#3A4A35" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                );
              })}

              {/* View all results link */}
              <Link
                href={`/articles?q=${encodeURIComponent(query)}`}
                onClick={() => { setIsOpen(false); }}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 14px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#5A6A55", textDecoration: "none", backgroundColor: "#0A1208" }}
              >
                View all results for &ldquo;{query}&rdquo; →
              </Link>
            </div>
          )}
        </div>

        {/* Popular tags */}
        <div className="flex flex-wrap justify-center gap-2 items-center">
          <span className="text-[10px] uppercase" style={{ color: "#4A4440", letterSpacing: "0.16em", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>Popular:</span>
          {popularTags.map((tag) => (
            <Link key={tag.label} href={tag.href} className="px-4 py-1 text-[10px] font-semibold uppercase" style={{ backgroundColor: "rgba(20,28,18,0.55)", color: "#8A8268", border: "1px solid rgba(214,199,161,0.2)", borderRadius: "20px", letterSpacing: "0.1em", textShadow: "0 1px 4px rgba(0,0,0,0.8)", textDecoration: "none" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#D6C7A1"; el.style.borderColor = "#D6C7A140"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#8A8268"; el.style.borderColor = "rgba(214,199,161,0.2)"; }}
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

