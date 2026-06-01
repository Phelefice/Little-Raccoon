import type { Metadata } from "next";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Contact | The Little Raccoon",
  description: "Get in touch with The Little Raccoon team. Questions, suggestions, or partnership inquiries — we'd love to hear from you.",
};

const faqs = [
  {
    q: "How often do you publish new guides?",
    a: "We publish new Minecraft guides and tutorials regularly, typically several times per week. Subscribe to our newsletter to get notified whenever a new guide goes live.",
  },
  {
    q: "Which version of Minecraft do your guides cover?",
    a: "Our guides primarily focus on Minecraft Java Edition (the latest release), but most survival, farming, and building content also applies to Bedrock Edition. We note version-specific differences whenever relevant.",
  },
  {
    q: "Can I suggest a topic for a guide?",
    a: "Absolutely! We love hearing from our community. Send us an email at hello@thelittleraccoon.com with your guide idea and we'll consider it for a future article.",
  },
  {
    q: "Can I republish or share your content?",
    a: "You are welcome to share links to our articles anywhere you'd like. However, reproducing the full text of our guides without permission is not allowed. For any collaboration or content partnership requests, please contact us directly.",
  },
];


export default function ContactPage() {
  return (
    <>
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "60px 24px 80px" }}>
        {/* Header */}
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 900,
            color: "#e8d9a0",
            marginBottom: "16px",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          Get in Touch
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#c8b898", lineHeight: 1.8, marginBottom: "40px", maxWidth: "600px" }}>
          Have a question, a guide suggestion, or want to talk partnerships? We&apos;d love to hear
          from you. The Little Raccoon is a community-driven project and your feedback helps us create
          better Minecraft content.
        </p>

        {/* Email contact */}
        <div
          style={{
            background: "rgba(196,168,64,0.08)",
            border: "1px solid rgba(196,168,64,0.2)",
            borderRadius: "12px",
            padding: "32px",
            marginBottom: "60px",
            display: "flex",
            flexDirection: "column" as const,
            gap: "8px",
          }}
        >
          <p style={{ fontSize: "0.85rem", color: "#8a7a5a", textTransform: "uppercase" as const, letterSpacing: "0.12em", margin: 0 }}>
            Email us at
          </p>
          <a
            href="mailto:hello@thelittleraccoon.com"
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#C4A840",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            hello@thelittleraccoon.com
          </a>
          <p style={{ fontSize: "0.95rem", color: "#a89878", margin: 0 }}>
            We typically respond within 2–3 business days.
          </p>
        </div>

        {/* FAQ */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#e8d9a0",
            marginBottom: "24px",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "24px", marginBottom: "60px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderLeft: "3px solid rgba(196,168,64,0.3)",
                paddingLeft: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#e8d9a0",
                  marginBottom: "8px",
                }}
              >
                {faq.q}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#c8b898", lineHeight: 1.7, margin: 0 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Social links */}
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#e8d9a0",
            marginBottom: "20px",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          Follow Us
        </h2>
        <p style={{ fontSize: "1rem", color: "#c8b898", lineHeight: 1.7 }}>
          We&apos;re just getting started! Social channels coming soon. In the meantime, subscribe to our{" "}
          <a href="/newsletter" style={{ color: "#C4A840" }}>newsletter</a>{" "}
          to stay updated.
        </p>
      </main>
      <Footer />
    </>
  );
}
