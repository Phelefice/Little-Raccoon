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

const socials = [
  { label: "YouTube",   emoji: "▶", href: "#" },
  { label: "Discord",   emoji: "💬", href: "#" },
  { label: "Instagram", emoji: "📷", href: "#" },
  { label: "Pinterest", emoji: "📌", href: "#" },
  { label: "X",         emoji: "✕", href: "#" },
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
    <div style={{
      ...card,
      padding: "32px",
    }}>
      {/* top accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(200,168,75,0.35), transparent)",
      }} />

      {/* header */}
      <p style={{
        fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em",
        textTransform: "uppercase", color: "#c8a84b", margin: "0 0 6px",
      }}>⚡ Quick Guides</p>
      <h3 style={{
        fontSize: "20px", fontWeight: 700, color: "#e8d9a0",
        fontFamily: "Georgia, serif", margin: "0 0 28px", lineHeight: 1.2,
      }}>Jump Into a Guide</h3>

      {/* 2-column grid of cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "12px",
      }}>
        {quickGuides.map((g, i) => (
          <Link
            key={i}
            href={g.slug}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "12px",
              padding: "20px 12px",
              textDecoration: "none",
              borderRadius: "18px",
              border: hovered === i
                ? "1px solid rgba(200,168,75,0.30)"
                : "1px solid rgba(255,255,255,0.05)",
              background: hovered === i
                ? "rgba(200,168,75,0.07)"
                : "rgba(255,255,255,0.02)",
              boxShadow: hovered === i
                ? "0 8px 28px rgba(0,0,0,0.35), 0 0 0 1px rgba(200,168,75,0.08)"
                : "none",
              transform: hovered === i ? "translateY(-3px)" : "translateY(0)",
              transition: "all 0.25s ease",
              // last item spans full width if odd
              gridColumn: i === 4 ? "1 / -1" : "auto",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* circular icon */}
            <div style={{
              width: "72px",
              height: "72px",
              borderRadius: "9999px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: hovered === i
                ? "radial-gradient(circle, rgba(200,168,75,0.15) 0%, rgba(14,18,12,0.9) 100%)"
                : "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(14,18,12,0.8) 100%)",
              border: hovered === i
                ? "1px solid rgba(200,168,75,0.35)"
                : "1px solid rgba(255,255,255,0.08)",
              boxShadow: hovered === i
                ? "0 0 20px rgba(200,168,75,0.20), inset 0 1px 0 rgba(200,168,75,0.12)"
                : "inset 0 1px 0 rgba(255,255,255,0.05)",
              transition: "all 0.25s ease",
            }}>
              <Image
                src={g.icon}
                alt={g.title}
                width={40}
                height={40}
                style={{
                  objectFit: "contain",
                  imageRendering: "pixelated",
                  filter: hovered === i
                    ? "drop-shadow(0 0 8px rgba(200,168,75,0.6)) brightness(1.2)"
                    : "brightness(0.88)",
                  transition: "filter 0.25s ease",
                }}
              />
            </div>

            {/* title */}
            <span style={{
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: 1.35,
              color: hovered === i ? "#e8d9a0" : "#8a7d52",
              transition: "color 0.25s ease",
            }}>
              {g.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  return (
    <div style={{ ...card, background: "rgba(12,16,10,0.95)" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,168,75,0.3), transparent)" }} />
      <div style={{ padding: "24px", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "22px", marginBottom: "10px" }}>🦝</div>
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c8a84b", margin: "0 0 4px" }}>✉ Stay Updated</p>
        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#e8d9a0", fontFamily: "Georgia, serif", margin: "0 0 8px" }}>Cozy Updates,<br />Every Week</h3>
        <p style={{ fontSize: "12px", color: "#5a5030", lineHeight: 1.65, margin: "0 0 16px" }}>New guides, seed picks and survival tips — straight to your inbox.</p>
        {subscribed ? (
          <div style={{ padding: "12px", borderRadius: "12px", background: "rgba(200,168,75,0.08)", border: "1px solid rgba(200,168,75,0.25)", textAlign: "center", color: "#c8a84b", fontSize: "12px", fontWeight: 600 }}>
            You are in! Welcome to the den.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com"
              style={{ width: "100%", padding: "11px 14px", borderRadius: "12px", border: "1px solid rgba(200,168,75,0.18)", background: "rgba(255,255,255,0.03)", color: "#e8d9a0", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
              onFocus={(e) => { e.target.style.borderColor = "rgba(200,168,75,0.45)"; }}
              onBlur={(e) => { e.target.style.borderColor = "rgba(200,168,75,0.18)"; }}
            />
            <button onClick={() => { if (email) setSubscribed(true); }} onMouseEnter={() => setBtnHover(true)} onMouseLeave={() => setBtnHover(false)}
              style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid rgba(200,168,75,0.35)", background: btnHover ? "rgba(200,168,75,0.20)" : "rgba(200,168,75,0.10)", color: btnHover ? "#e8d9a0" : "#c8a84b", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s ease" }}>
              Subscribe →
            </button>
            <p style={{ fontSize: "10px", textAlign: "center", color: "#3a3420", margin: 0 }}>No spam. Unsubscribe anytime.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function FollowUs() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div style={card}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,168,75,0.25), transparent)" }} />
      <div style={{ padding: "20px 24px 0" }}>
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c8a84b", margin: "0 0 4px" }}>🌿 Follow the Raccoon</p>
        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#e8d9a0", fontFamily: "Georgia, serif", margin: 0 }}>Join the Adventure</h3>
      </div>
      <div style={{ padding: "14px 16px 8px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
        {socials.map((s) => (
          <a key={s.label} href={s.href}
            style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderRadius: "999px", border: hovered === s.label ? "1px solid rgba(200,168,75,0.35)" : "1px solid rgba(255,255,255,0.07)", background: hovered === s.label ? "rgba(200,168,75,0.08)" : "rgba(255,255,255,0.02)", color: hovered === s.label ? "#d4c080" : "#6a5e38", fontSize: "12px", fontWeight: 600, textDecoration: "none", transform: hovered === s.label ? "translateY(-2px)" : "translateY(0)", transition: "all 0.22s ease" }}
            onMouseEnter={() => setHovered(s.label)}
            onMouseLeave={() => setHovered(null)}
          >
            <span>{s.emoji}</span><span>{s.label}</span>
          </a>
        ))}
      </div>
      <p style={{ textAlign: "center", fontSize: "10px", color: "#3a3420", padding: "10px 16px 18px", margin: 0 }}>Made with ♥ for Minecraft explorers.</p>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      <QuickGuides />
      <Newsletter />
      <FollowUs />
    </aside>
  );
}
