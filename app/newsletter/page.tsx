import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter | The Little Raccoon",
  description: "Subscribe to The Little Raccoon newsletter and get new Minecraft guides and cozy updates straight to your inbox.",
};

export default function NewsletterPage() {
  return (
    <main style={{ maxWidth: "600px", margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#e8d9a0", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
        Stay Updated
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#c8b898", lineHeight: 1.8, marginBottom: "40px" }}>
        Get new Minecraft guides, cozy builds, and survival tips straight to your inbox. No spam, just adventures. 🦝
      </p>
      <NewsletterForm />
    </main>
  );
}
