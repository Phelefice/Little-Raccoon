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
      style={{ backgroundColor: "#0F1F19", borderBottom: "1px solid #1E3028" }}
    >
      {/* Depth gradient — bottom fades into page bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #0B1411 0%, transparent 18%, transparent 75%, #0B1411 100%)",
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
          className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 text-[10px] font-semibold uppercase"
          style={{
            border: "1px solid #D6C7A130",
            color: "#D6C7A1",
            backgroundColor: "#D6C7A108",
            letterSpacing: "0.22em",
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
          }}
        >
          Your Adventure
          <br />
          <span style={{ color: "#D6C7A1" }}>Starts Here</span>
        </h1>

        <p
          className="text-base sm:text-lg mb-12 max-w-xl mx-auto"
          style={{ color: "#8A8268", lineHeight: "1.75", letterSpacing: "0.01em" }}
        >
          Survival strategies, mega builds, hidden seeds, Redstone contraptions and more —
          everything a true crafter needs.
        </p>

        {/* Search bar */}
        <div className="max-w-lg mx-auto mb-8">
          <div
            className="flex"
            style={{ border: "1px solid #1E3028", backgroundColor: "#0B1411" }}
          >
            <div className="flex items-center pl-4" style={{ color: "#4A4440" }}>
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
              className="flex-1 px-4 py-3.5 bg-transparent text-sm"
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
            style={{ color: "#4A4440", letterSpacing: "0.16em" }}
          >
            Popular:
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 text-[10px] font-semibold uppercase"
              style={{
                backgroundColor: "transparent",
                color: "#8A8268",
                border: "1px solid #1E3028",
                letterSpacing: "0.1em",
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
