import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Little Raccoon",
  description: "Learn about The Little Raccoon — your cozy Minecraft guide hub for survival tips, builds, farms, seeds, and more.",
};

export default function AboutPage() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#e8d9a0", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
        About The Little Raccoon
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#c8b898", lineHeight: 1.8, marginBottom: "20px" }}>
        The Little Raccoon is a cozy Minecraft guide hub built for explorers, builders, and survivors of all skill levels.
      </p>
      <p style={{ fontSize: "1.1rem", color: "#c8b898", lineHeight: 1.8, marginBottom: "20px" }}>
        Whether you are just starting out or looking for advanced redstone contraptions and mega builds, you will find in-depth guides, tutorials, and tips to help you make the most of every adventure.
      </p>
      <p style={{ fontSize: "1.1rem", color: "#c8b898", lineHeight: 1.8 }}>
        Explore. Build. Survive. 🦝
      </p>
    </main>
  );
}
