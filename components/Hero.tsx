"use client";

import { useState } from "react";

const popularTags = [
  "Mob Farms",
  "Starter House",
  "Iron Farm",
  "Nether Portal",
  "Enchanting",
  "Villager Trading",
  "Automatic Farm",
];

export default function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#0B1411",
        borderBottom: "1px solid #1E3028",
        backgroundImage: "url('/banner2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay — readability gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(11,20,17,0.80) 100%)",
        }}
      />

      {/* Vignette — cinematic side darkening */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 35%, rgba(11,20,17,0.75) 100%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-28 sm:py-36 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 text-[12px] font-semibold uppercase"
          style={{
            border: "1px solid #D6C7A130",
            color: "#D6C7A1",
            backgroundColor: "rgba(11,20,17,0.20)",
            letterSpacing: "0.22em",
            textShadow: "0 1px 4px rgba(0,0,0,0.8)",
            borderRadius: "20px",
          }}
        >
          <span>⛏</span>
          <span>Minecraft Guide &amp; Resource Hub</span>
          <span>⛏</span>
        </div>

        {/* Hero title — Bebas Neue, cinematic scale */}
        <h1
          className="font-normal leading-none mb-6 uppercase"
          style={{
            fontFamily: "var(--font-bebas), var(--font-oswald), sans-serif",
            fontSize: "clamp(4.5rem, 11vw, 9rem)",
            letterSpacing: "0.03em",
            color: "#EDE6D6",
            textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)",
          }}
        >
          Your Adventure
          <br />
          <span style={{ color: "#D6C7A1" }}>Starts Here</span>
        </h1>

        <p
          className="text-base sm:text-lg mb-12 max-w-xl mx-auto"
          style={{
            color: "rgba(245,238,220,0.78)",
            fontWeight: 400,
            fontSize: "1.1rem",
            lineHeight: "1.8",
            letterSpacing: "0.01em",
            textShadow: "0 1px 8px rgba(0,0,0,0.35)",
          }}
        >
          Survival strategies, mega builds, hidden seeds, Redstone contraptions and more —
          everything a true crafter needs.
        </p>

        {/* Search bar */}
        <div className="max-w-lg mx-auto mb-8">
          <div
            className="flex overflow-hidden"
            style={{
              border: "1px solid rgba(245,238,220,0.12)",
              backgroundColor: "rgba(12,18,14,0.82)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              borderRadius: "20px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <div className="flex items-center pl-4" style={{ color: "rgba(255,248,230,0.68)" }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guides, builds, seeds..."
              className="hero-search-input flex-1 px-4 py-3.5 bg-transparent text-sm"
              style={{ color: "#EDE6D6", outline: "none", letterSpacing: "0.01em" }}
            />
            <button
              className="px-6 py-3.5 text-[11px] font-bold uppercase"
              style={{
                backgroundColor: "#2F5D3A",
                color: "#EDE6D6",
                minWidth: "88px",
                letterSpacing: "0.12em",
                fontFamily: "var(--font-oswald)",
                borderRadius: "0 16px 16px 0",
                boxShadow: "0 4px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#3A7048")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#2F5D3A")}
            >
              Search
            </button>
          </div>
        </div>

        {/* Popular tags */}
        <div className="flex flex-wrap justify-center gap-2 items-center">
          <span
            className="text-[10px] uppercase"
            style={{ color: "#4A4440", letterSpacing: "0.16em", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
          >
            Popular:
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              className="px-4 py-1 text-[10px] font-semibold uppercase"
              style={{
                backgroundColor: "rgba(20,28,18,0.55)",
                color: "#8A8268",
                border: "1px solid rgba(214,199,161,0.2)",
                borderRadius: "20px",
                letterSpacing: "0.1em",
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#D6C7A1";
                el.style.borderColor = "#D6C7A140";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#8A8268";
                el.style.borderColor = "#1E3028";
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
