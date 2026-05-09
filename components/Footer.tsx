"use client";

import Link from "next/link";

const footerSections = [
  {
    title: "Guides",
    links: [
      { label: "Survival Basics",  href: "/survival" },
      { label: "Nether Guide",     href: "/guides/nether" },
      { label: "The End",          href: "/guides/the-end" },
      { label: "Enchanting",       href: "/guides/enchanting" },
      { label: "Potions",          href: "/guides/potions" },
    ],
  },
  {
    title: "Builds",
    links: [
      { label: "Starter Houses",   href: "/builds/starter" },
      { label: "Medieval Builds",  href: "/builds/medieval" },
      { label: "Modern Builds",    href: "/builds/modern" },
      { label: "Mega Projects",    href: "/builds/mega" },
      { label: "Interior Design",  href: "/builds/interior" },
    ],
  },
  {
    title: "Farms",
    links: [
      { label: "Mob Farms",  href: "/farms/mob" },
      { label: "Food Farms", href: "/farms/food" },
      { label: "XP Farms",   href: "/farms/xp" },
      { label: "Iron Farms", href: "/farms/iron" },
      { label: "Gold Farms", href: "/farms/gold" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord Server",  href: "#" },
      { label: "Reddit",          href: "#" },
      { label: "Submit a Guide",  href: "/submit" },
      { label: "About Us",        href: "/about" },
      { label: "Contact",         href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B1411", borderTop: "1px solid #1E3028" }}>
      <div style={{ borderBottom: "1px solid #1E3028" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 flex items-center justify-center text-lg"
                  style={{ backgroundColor: "#1E3D26", border: "1px solid #2F5D3A" }}
                >
                  🦝
                </div>
                <div className="leading-none">
                  <span
                    className="block text-[10px] font-semibold uppercase"
                    style={{ color: "#D6C7A1", letterSpacing: "0.22em" }}
                  >
                    The
                  </span>
                  <span
                    className="block font-bold"
                    style={{ color: "#EDE6D6", fontFamily: "var(--font-oswald)", letterSpacing: "0.05em" }}
                  >
                    Little Raccoon
                  </span>
                </div>
              </Link>

              <p className="text-sm mb-5" style={{ color: "#4A4440", lineHeight: "1.7" }}>
                Your ultimate Minecraft companion. Guides, builds, seeds and everything in between.
              </p>

              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-semibold uppercase"
                style={{
                  backgroundColor: "#0F1F19",
                  border: "1px solid #2F5D3A",
                  color: "#4A7A40",
                  letterSpacing: "0.12em",
                }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#4A7A40" }}
                />
                Java 1.21 Ready
              </div>
            </div>

            {/* Link columns */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4
                  className="text-[10px] font-bold uppercase mb-5"
                  style={{
                    color: "#D6C7A1",
                    letterSpacing: "0.2em",
                    fontFamily: "var(--font-oswald)",
                  }}
                >
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm"
                        style={{ color: "#4A4440" }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D6C7A1")}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#4A4440")}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs" style={{ color: "#1E3028" }}>
          © 2026 The Little Raccoon — Not affiliated with Mojang Studios or Microsoft.
        </p>
        <div className="flex items-center gap-5">
          {["Privacy", "Terms", "Sitemap"].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="text-[11px]"
              style={{ color: "#4A4440" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D6C7A1")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#4A4440")}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
