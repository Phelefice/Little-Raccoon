import type { Metadata } from "next";

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
      <div id="mc_embed_signup">
        <form action="https://gmail.us13.list-manage.com/subscribe/post?u=YOUR_U&amp;id=3af823423b" method="post" target="_blank" style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
          <input type="email" name="EMAIL" placeholder="Your email address" required style={{ width: "100%", maxWidth: "400px", padding: "14px 20px", borderRadius: "8px", border: "1px solid rgba(200,168,75,0.3)", background: "rgba(14,18,12,0.9)", color: "#e8d9a0", fontSize: "1rem", outline: "none" }} />
          <button type="submit" style={{ padding: "14px 40px", borderRadius: "8px", background: "rgba(45,80,38,0.9)", border: "1px solid rgba(80,130,60,0.6)", color: "#c8d89a", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
            Subscribe
          </button>
        </form>
      </div>
    </main>
  );
}
