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

        <p className="text-base sm:text-lg mb-12 max-w-xl mx-auto" style={{ color: "rgba(245,238,220,0.78)", fontWeight: 400, fontSize: "1.1rem", lineHeight: "1.8", letterSpacing: "0.01em", textShadow: "0 1px 8px rgba(0