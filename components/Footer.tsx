"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ position: "relative", overflow: "hidden", backgroundColor: "#060A07", minHeight: 380 }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <Image src="/images/foot_01.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,10,7,0.7) 0%, transparent 30%, transparent 55%, rgba(6,10,7,0.95) 100%)" }} />
      </div>
      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", minHeight: 380, paddingBottom: 40, paddingTop: 220 }}>

        {/* Logo image no lugar do texto */}
        <div style={{ marginBottom: 16 }}>
          <Image src="/images/LOGO_HORIZONTAL.png" alt="The Little Raccoon" width={280} height={70} style={{ objectFit: "contain", opacity: 0.92 }} />
        </div>

        <p style={{ margin: "0 0 2px", textAlign: "center", fontSize: 13, color: "#8A7840" }}>Minecraft Guides &amp; Cozy Adventures</p>
        <p style={{ margin: "0 0 20px", textAlign: "center", fontSize: 13, color: "#4A4228" }}>Making Minecraft adventures cozy, creative and unforgettable</p>

        <nav style={{ display: "flex", alignItems: "center", margin: "0 0 20px" }}>
          {[{ label: "Guides", href: "/guides" },{ label: "Survival", href: "/survival" },{ label: "Builds", href: "/builds" },{ label: "Exploration", href: "/seeds" },{ label: "About", href: "/about" }].map((link, i, arr) => (
            <span key={link.href} style={{ display: "flex", alignItems: "center" }}>
              <Link href={link.href} style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "#2E2A1E", textDecoration: "none", padding: "0 14px", transition: "color 0.15s" }} onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C4A840")} onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#2E2A1E")}>{link.label}</Link>
              {i < arr.length - 1 && <span style={{ color: "#1A1810", fontSize: 7 }}>&#9679;</span>}
            </span>
          ))}
        </nav>

        <div style={{ width: 100, height: 1, background: "linear-gradient(90deg, transparent, #2A2418, transparent)", marginBottom: 16 }} />

        <p style={{ margin: 0, fontSize: 11, color: "#1E1C12", textAlign: "center", lineHeight: 1.7 }}>
          &#169; 2024 Little Raccoon. All rights reserved.<br />
          <span style={{ fontSize: 10 }}>Not affiliated with Mojang or Microsoft.</span>
        </p>
      </div>
    </footer>
  );
}
