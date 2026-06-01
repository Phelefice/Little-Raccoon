import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "About | The Little Raccoon",
  description: "Learn about The Little Raccoon — your cozy Minecraft guide hub for survival tips, builds, farms, seeds, and more.",
};

export default function AboutPage() {
  return (
    <>
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px 80px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#e8d9a0", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          About The Little Raccoon
        </h1>

        <p style={{ fontSize: "1.1rem", color: "#c8b898", lineHeight: 1.8, marginBottom: "24px" }}>
          The Little Raccoon is a cozy Minecraft guide hub built for explorers, builders, and
          survivors of all skill levels. Whether you are just starting out on your very first night
          or looking for advanced redstone contraptions and mega builds, you will find in-depth
          guides, tutorials, and practical tips to help you make the most of every adventure.
        </p>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#e8d9a0", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          Our Mission
        </h2>
        <p style={{ fontSize: "1.05rem", color: "#c8b898", lineHeight: 1.8, marginBottom: "20px" }}>
          Minecraft is one of the most creative, open-ended games ever made — but it can also be
          overwhelming. There is a lot to learn, and not all of it is obvious. Our mission at
          The Little Raccoon is simple: make Minecraft more enjoyable by explaining things clearly.
          No filler, no vague tips. Just straightforward, well-tested guides that help you actually
          accomplish what you want to do in the game.
        </p>
        <p style={{ fontSize: "1.05rem", color: "#c8b898", lineHeight: 1.8, marginBottom: "24px" }}>
          We cover every corner of the game — survival basics for newcomers, farm builds and
          automation for mid-game players, enchanting and gear optimization for those pushing into
          the late game, and creative builds for players who just want to make something beautiful.
        </p>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#e8d9a0", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          Who We Are
        </h2>
        <p style={{ fontSize: "1.05rem", color: "#c8b898", lineHeight: 1.8, marginBottom: "20px" }}>
          The Little Raccoon is run by a small team of passionate Minecraft players who have spent
          thousands of hours in the game across every version and edition. We test everything we
          write about. If a farm design is in one of our guides, we have built it ourselves and
          verified that it works. If a strategy is in one of our survival articles, we have used it
          in our own worlds.
        </p>
        <p style={{ fontSize: "1.05rem", color: "#c8b898", lineHeight: 1.8, marginBottom: "24px" }}>
          We are not affiliated with Mojang Studios or Microsoft. We are just players who love this
          game and want to share what we know with the rest of the community.
        </p>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#e8d9a0", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          What We Cover
        </h2>
        <ul style={{ color: "#c8b898", lineHeight: 2, paddingLeft: "20px", marginBottom: "28px", fontSize: "1.05rem" }}>
          <li><strong style={{ color: "#e8d9a0" }}>Survival</strong> — First night tips, biome strategies, resource management, combat, and progression guides</li>
          <li><strong style={{ color: "#e8d9a0" }}>Farms</strong> — Automated crop farms, mob farms, iron farms, XP farms, and more</li>
          <li><strong style={{ color: "#e8d9a0" }}>Builds</strong> — Step-by-step build tutorials ranging from starter houses to medieval castles</li>
          <li><strong style={{ color: "#e8d9a0" }}>Redstone</strong> — Beginner circuits, pistons, comparators, and complex contraptions</li>
          <li><strong style={{ color: "#e8d9a0" }}>Seeds</strong> — Curated seed lists for each major Minecraft version with unique spawns and great terrain</li>
          <li><strong style={{ color: "#e8d9a0" }}>Guides</strong> — In-depth references for enchanting, brewing, villager trading, and other game systems</li>
        </ul>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#e8d9a0", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          Get in Touch
        </h2>
        <p style={{ fontSize: "1.05rem", color: "#c8b898", lineHeight: 1.8, marginBottom: "24px" }}>
          We love hearing from our readers. If you have a guide suggestion, spotted an error, or
          just want to share your latest Minecraft creation, head over to our{" "}
          <Link href="/contact" style={{ color: "#C4A840" }}>Contact page</Link>.
          We read every message we receive.
        </p>

        <p style={{ fontSize: "1.1rem", color: "#c8b898", lineHeight: 1.8, fontStyle: "italic", borderLeft: "3px solid rgba(196,168,64,0.3)", paddingLeft: "16px" }}>
          Explore. Build. Survive. 🦝
        </p>
      </main>
      <Footer />
    </>
  );
}
