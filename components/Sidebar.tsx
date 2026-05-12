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
  { label: "YouTube",   emoji: "▶", href: "#", hoverColor: "#CC4444" },
  { label: "Discord",   emoji: "💬", href: "#", hoverColor: "#6070C8" },
  { label: "Instagram", emoji: "📷", href: "#", hoverColor: "#C06080" },
  { label: "Pinterest", emoji: "📌", href: "#", hoverColor: "#C04040" },
  { label: "X",         emoji: "✕", href: "#", hoverColor: "#C0B89A" },
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
      <div style={{ padding: "18px 20px 0" }}>
        <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c8a84b", margin: "0 0 3px" }}>⚡ Quick Guides</p>
        <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#e8d9a0", fontFamily: "Georgia, serif", margin: 0 }}>Jump Into a Guide</h3>
      </div>
      <ul style={{ margin: "14px 0 10px", padding: 0, listStyle: "none" }}>
        {quickGuides.map((g, i) => (
          <li key={i}>
            <Link href={g.slug} style={{ display: "flex", alignItems: "center", gap: "13px", padding: "11px 20px", textDecoration: "none", transition: "all 0.22s ease", transform: hovered === i ? "translateX(5px)" : "translateX(0)", background: hovered === i ? "rgba(200,168,75,0.06)" : "transparent", borderLeft: hovered === i ? "2px solid rgba(200,168,75,0.45)" : "2px solid transparent" }} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
              <div style={{ width: "34px", height: "34px", flexShrink: 0, borderRadius: "8px", background: hovered === i ? "rgba(200,168,75,0.10)" : "rgba(255,255,255,0.03)", border: hovered === i ? "1px solid rgba(200,168,75,0.28)" : "1px solid rgba(255,255,255,0.06)", transition: "all 0.22s ease", boxShadow: hovered === i ? "0 0 10px rgba(200,168,75,0.15)" : "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src={g.icon} alt={g.title} width={26} height={26} style={{ objectFit: "contain", imageRendering: "pixelated", filter: hovered === i ? "drop-shadow(0 0 4px rgba(200,168,75,0.5)) brightness(1.15)" : "brightness(0.85)", transition: "filter 0.22s ease" }} />
              </div>
              <span style={{ fontSize: "12px", fontWeight: 500, flex: 1, color: hovered === i ? "#d4c080" : "#7a6e4a", transition: "color 0.22s ease" }}>{g.title}</span>
              <span style={{ fontSize: "11px", flexShrink: 0, color: hovered === i ? "rgba(200,168,75,0.8)" : "rgba(255,255,255,0.1)", transform: hovered === i ? "translateX(3px)" : "translateX(0)", transition: "all 0.22s ease" }}>→</span>
            </Link>
          </li>
        ))}
      </ul>
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
      <div style={{ padding: "20px", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "22px", marginBottom: "10px" }}>🦝</div>
        <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c8a84b", margin: "0 0 3px" }}>✉ Stay Updated</p>
        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#e8d9a0", fontFamily: "Georgia, serif", margin: "0 0 6px" }}>Cozy Updates,<br />Every Week</h3>
        <p style={{ fontSize: "11px", color: "#5a5030", lineHeight: 1.65, margin: "0 0 16px" }}>New guides, seed picks and survival tips — straight to your inbox.</p>
        {subscribed ? (
          <div style={{ padding: "12px", borderRadius: "12px", background: "rgba(200,168,75,0.08)", border: "1px solid rgba(200,168,75,0.25)", textAlign: "center", color: "#c8a84b", fontSize: "12px", fontWeight: 600 }}>✓ You are in! Welcome to the den.</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" style={{ width: "100%", padding: "10px 14px", borderRadius: "12px", border: "1px solid rgba(200,168,75,0.18)", background: "rgba(255,255,255,0.03)", color: "#e8d9a0", fontSize: "12px", outline: "none", boxSizing: "border-box" }} onFocus={(e) => { e.target.style.borderColor = "rgba(200,168,75,0.45)"; }} onBlur={(e) => { e.target.style.borderColor = "rgba(200,168,75,0.18)"; }} />
            <button onClick={() => { if (email) setSubscribed(true); }} onMouseEnter={() => setBtnHover(true)} onMouseLeave={() => setBtnHover(false)} style={{ width: "100%", padding: "11px", borderRadius: "12px", border: "1px solid rgba(200,168,75,0.35)", background: btnHover ? "rgba(200,168,75,0.20)" : "rgba(200,168,75,0.10)", color: btnHover ? "#e8d9a0" : "#c8a84b", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s ease" }}>Subscribe →</button>
            <p style={{ fontSize: "9px", textAlign: "center", color: "#3a3420", margin: 0 }}>No spam. Unsubscribe anytime.</p>
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
      <div style={{ padding: "16px 20px 0" }}>
        <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c8a84b", margin: "0 0 3px" }}>🌿 Follow the Raccoon</p>
        <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#e8d9a0", fontFamily: "Georgia, serif", margin: 0 }}>Join the Adventure</h3>
      </div>
      <div style={{ padding: "14px 16px 8px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px" }}>
        {socials.map((s) => (
          <a key={s.label} href={s.href} style={{ display: "flex", alignItems: "center", gap: "7px", padding: "9px 12px", borderRadius: "999px", border: hovered === s.label ? "1px solid rgba(200,168,75,0.35)" : "1px solid rgba(255,255,255,0.07)", background: hovered === s.label ? "rgba(200,168,75,0.08)" : "rgba(255,255,255,0.02)", color: hovered === s.label ? "#d4c080" : "#6a5e38", fontSize: "11px", fontWeight: 600, textDecoration: "none", transition: "all 0.22s ease" }} onMouseEnter={() => setHovered(s.label)} onMouseLeave={() => setHovered(null)}>
            <span>{s.emoji}</span><span>{s.label}</span>
          </a>
        ))}
      </div>
      <p style={{ textAlign: "center", fontSize: "10px", color: "#3a3420", padding: "8px 16px 16px", margin: 0 }}>Made with ♥ for Minecraft explorers.</p>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <QuickGuides />
      <Newsletter />
      <FollowUs />
    </aside>
  );
}
