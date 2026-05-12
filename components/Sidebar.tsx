"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const quickGuides = [
  { icon: "/images/lantern.png",     title: "How to Make a Lantern", slug: "/guides/lantern"     },
  { icon: "/images/brewing.png",     title: "Brewing Guide",         slug: "/guides/brewing"     },
  { icon: "/images/enchanting.png",  title: "Enchanting Explained",  slug: "/guides/enchanting"  },
  { icon: "/images/food.png",        title: "Food Guide",            slug: "/guides/food"        },
  { icon: "/images/mob_farming.png", title: "Mob Farming 101",       slug: "/guides/mob-farming" },
];

const card: React.CSSProperties = {
  background: "rgba(14,18,12,0.92)",
  border: "1px solid rgba(200,168,75,0.12)",
  borderRadius: "24px",
  overflow: "hidden",
  position: "relative",
  boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
};

function QuickGuides() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div style={card}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,168,75,0.35), transparent)" }} />
      <div style={{ padding: "20px 20px 6px" }}>
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c8a84b", margin: "0 0 4px", display: "flex", alignItems: "center", gap: "6px" }}>
          <span>Quick Guides</span>
        </p>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#e8d9a0", margin: "0 0 8px" }}>Jump Into a Guide</h3>
      </div>
      <ul style={{ margin: "0 0 10px", padding: 0, listStyle: "none" }}>
        {quickGuides.map((g, i) => (
          <li key={i} style={{ borderTop: i > 0 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
            <Link href={g.slug} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 20px", textDecoration: "none", background: hovered === i ? "rgba(200,168,75,0.05)" : "transparent", transition: "all 0.22s ease" }} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
              <div style={{ width: "52px", height: "52px", flexShrink: 0, borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", background: hovered === i ? "rgba(200,168,75,0.12)" : "rgba(255,255,255,0.05)", border: hovered === i ? "1px solid rgba(200,168,75,0.35)" : "1px solid rgba(255,255,255,0.08)", boxShadow: hovered === i ? "0 0 16px rgba(200,168,75,0.18)" : "none", transition: "all 0.22s ease" }}>
                <Image src={g.icon} alt={g.title} width={38} height={38} style={{ objectFit: "contain", imageRendering: "pixelated", filter: hovered === i ? "drop-shadow(0 0 6px rgba(200,168,75,0.5)) brightness(1.2)" : "brightness(0.9)", transition: "filter 0.22s ease" }} />
              </div>
              <span style={{ fontSize: "14px", fontWeight: 600, flex: 1, color: hovered === i ? "#e8d9a0" : "#a89660", transition: "color 0.22s ease" }}>{g.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewHere() {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ background: "rgba(10,20,12,0.95)", border: "1px solid rgba(60,100,50,0.35)", borderRadius: "16px", position: "relative", overflow: "hidden", marginTop: "16px" }}>
      <div style={{ position: "absolute", right: "0px", bottom: "0px", width: "55%", height: "110%", zIndex: 2, pointerEvents: "none" }}>
        <Image src="/images/New_here.png" alt="Raccoon mascot" fill style={{ objectFit: "contain", objectPosition: "bottom right" }} />
      </div>
      <div style={{ padding: "24px 18px 24px", position: "relative", zIndex: 1 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#e8d9a0", textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.1, margin: "0 0 10px", maxWidth: "140px" }}>New Here?</h3>
        <p style={{ fontSize: "12px", color: "#7a6e4a", lineHeight: 1.6, margin: "0 0 18px", maxWidth: "150px" }}>Start your adventure with our Beginner Guides!</p>
        <Link href="/beginner-guides" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "8px", background: hovered ? "rgba(60,100,50,0.6)" : "rgba(45,80,38,0.5)", border: "1px solid rgba(80,130,60,0.5)", color: "#c8d89a", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.22s ease" }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <QuickGuides />
      <NewHere />
    </aside>
  );
}







