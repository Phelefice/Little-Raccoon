"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type CookiePreferences = {
  analytics: boolean;
  advertising: boolean;
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    analytics: true,
    advertising: true,
  });

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const saveConsent = (preferences: CookiePreferences) => {
    try {
      localStorage.setItem(
        "cookie_consent",
        JSON.stringify({ ...preferences, timestamp: Date.now() })
      );
    } catch {
      // localStorage not available
    }
    setVisible(false);
    setShowModal(false);
  };

  const acceptAll = () => saveConsent({ analytics: true, advertising: true });

  if (!visible) return null;

  return (
    <>
      {/* Banner */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: "#0f1a0f",
          borderTop: "1px solid rgba(196,168,64,0.25)",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p
          style={{
            color: "#c8b898",
            fontSize: "0.88rem",
            lineHeight: 1.6,
            margin: 0,
            flex: "1 1 300px",
          }}
        >
          We use cookies to improve your experience and show relevant ads. By
          continuing, you accept our use of cookies.{" "}
          <Link href="/privacy-policy" style={{ color: "#C4A840", textDecoration: "underline" }}>
            Learn more
          </Link>
          .
        </p>
        <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
          <button
            onClick={() => setShowModal(true)}
            style={{
              background: "transparent",
              border: "1px solid rgba(196,168,64,0.4)",
              color: "#c8b898",
              padding: "8px 16px",
              borderRadius: "6px",
              fontSize: "0.85rem",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Manage Preferences
          </button>
          <button
            onClick={acceptAll}
            style={{
              background: "#C4A840",
              border: "none",
              color: "#0f1a0f",
              padding: "8px 20px",
              borderRadius: "6px",
              fontSize: "0.85rem",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            Accept All
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              background: "#0f1a0f",
              border: "1px solid rgba(196,168,64,0.3)",
              borderRadius: "12px",
              padding: "32px",
              maxWidth: "480px",
              width: "100%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                color: "#e8d9a0",
                fontSize: "1.2rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "8px",
              }}
            >
              Cookie Preferences
            </h2>
            <p style={{ color: "#a89878", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "24px" }}>
              Choose which cookies you want to allow. Necessary cookies are always enabled
              as they are essential for the site to function.
            </p>

            {/* Necessary — always on */}
            <div style={{ marginBottom: "16px", padding: "14px", background: "rgba(255,255,255,0.03)", borderRadius: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <span style={{ color: "#e8d9a0", fontWeight: 700, fontSize: "0.9rem" }}>Necessary</span>
                <span style={{ color: "#8a7a5a", fontSize: "0.8rem" }}>Always enabled</span>
              </div>
              <p style={{ color: "#a89878", fontSize: "0.82rem", margin: 0, lineHeight: 1.5 }}>
                Required for the website to function properly. Cannot be disabled.
              </p>
            </div>

            {/* Analytics */}
            <div style={{ marginBottom: "16px", padding: "14px", background: "rgba(255,255,255,0.03)", borderRadius: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <span style={{ color: "#e8d9a0", fontWeight: 700, fontSize: "0.9rem" }}>Analytics (Google Analytics)</span>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={prefs.analytics}
                    onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                    style={{ accentColor: "#C4A840", width: "16px", height: "16px" }}
                  />
                  <span style={{ color: prefs.analytics ? "#C4A840" : "#666", fontSize: "0.82rem" }}>
                    {prefs.analytics ? "On" : "Off"}
                  </span>
                </label>
              </div>
              <p style={{ color: "#a89878", fontSize: "0.82rem", margin: 0, lineHeight: 1.5 }}>
                Helps us understand how visitors use the site so we can improve our content.
              </p>
            </div>

            {/* Advertising */}
            <div style={{ marginBottom: "24px", padding: "14px", background: "rgba(255,255,255,0.03)", borderRadius: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <span style={{ color: "#e8d9a0", fontWeight: 700, fontSize: "0.9rem" }}>Advertising (Google AdSense)</span>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={prefs.advertising}
                    onChange={(e) => setPrefs((p) => ({ ...p, advertising: e.target.checked }))}
                    style={{ accentColor: "#C4A840", width: "16px", height: "16px" }}
                  />
                  <span style={{ color: prefs.advertising ? "#C4A840" : "#666", fontSize: "0.82rem" }}>
                    {prefs.advertising ? "On" : "Off"}
                  </span>
                </label>
              </div>
              <p style={{ color: "#a89878", fontSize: "0.82rem", margin: 0, lineHeight: 1.5 }}>
                Used by Google AdSense to show you relevant advertisements based on your interests.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button
                onClick={() => saveConsent(prefs)}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(196,168,64,0.4)",
                  color: "#c8b898",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Save Preferences
              </button>
              <button
                onClick={acceptAll}
                style={{
                  background: "#C4A840",
                  border: "none",
                  color: "#0f1a0f",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
