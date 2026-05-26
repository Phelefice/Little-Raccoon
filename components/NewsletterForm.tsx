"use client";

import { useState } from "react";

interface Props {
  compact?: boolean;
}

export default function NewsletterForm({ compact = false }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div style={{ padding: compact ? "12px" : "20px", textAlign: "center", backgroundColor: "#0A1208", border: "1px solid #2A4A2A", borderRadius: 8 }}>
        <div style={{ fontSize: 24, marginBottom: 8 }}>ðŸŽ‰</div>
        <p style={{ margin: 0, fontSize: compact ? 12 : 14, color: "#7AB87A", fontWeight: 700 }}>{message}</p>
        <p style={{ margin: "4px 0 0", fontSize: 11, color: "#5A6A55" }}>We&apos;ll send you the best Minecraft guides.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        disabled={status === "loading"}
        style={{
          width: "100%",
          padding: compact ? "8px 12px" : "10px 12px",
          backgroundColor: "#0A1208",
          border: status === "error" ? "1px solid #8A5A5A" : "1px solid #1A2E1A",
          borderRadius: 6,
          color: "#BDB5A0",
          fontSize: compact ? 12 : 16,
          boxSizing: "border-box",
          outline: "none",
        }}
      />
      {status === "error" && (
        <p style={{ margin: 0, fontSize: 11, color: "#9A6A6A" }}>{message}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          width: "100%",
          padding: compact ? "8px" : "14px",
          backgroundColor: status === "loading" ? "#8A7A50" : "#C4B47E",
          color: "#0B1410",
          fontSize: compact ? 11 : 15,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          border: "none",
          borderRadius: 6,
          cursor: status === "loading" ? "not-allowed" : "pointer",
          transition: "background-color 0.15s",
        }}
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
}




