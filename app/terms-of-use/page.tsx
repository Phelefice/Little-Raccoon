import type { Metadata } from "next";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use | The Little Raccoon",
  description: "Terms of Use for The Little Raccoon — understand your rights and responsibilities when using our Minecraft guide website.",
};

export default function TermsOfUsePage() {
  const sectionStyle = { marginBottom: "36px" };
  const h2Style = {
    fontSize: "1.4rem",
    fontWeight: 800,
    color: "#e8d9a0",
    marginBottom: "12px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.04em",
  };
  const pStyle = { fontSize: "1rem", color: "#c8b898", lineHeight: 1.8, marginBottom: "14px" };
  const ulStyle = { color: "#c8b898", lineHeight: 1.8, paddingLeft: "20px", marginBottom: "14px" };

  return (
    <>
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "60px 24px 80px" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 900,
            color: "#e8d9a0",
            marginBottom: "8px",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          Terms of Use
        </h1>
        <p style={{ fontSize: "0.9rem", color: "#8a7a5a", marginBottom: "40px" }}>
          Last updated: June 1, 2026
        </p>

        {/* 1. Acceptance of Terms */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>1. Acceptance of Terms</h2>
          <p style={pStyle}>
            By accessing and using{" "}
            <strong style={{ color: "#e8d9a0" }}>The Little Raccoon</strong> website (
            <a href="https://thelittleraccoon.com" style={{ color: "#C4A840" }}>
              thelittleraccoon.com
            </a>
            ), you agree to be bound by these Terms of Use, our{" "}
            <a href="/privacy-policy" style={{ color: "#C4A840" }}>
              Privacy Policy
            </a>
            , and all applicable laws and regulations. If you do not agree with any of these terms,
            you are prohibited from using or accessing this site.
          </p>
          <p style={pStyle}>
            These Terms of Use constitute a legally binding agreement between you (the visitor or user)
            and The Little Raccoon. We reserve the right to update or modify these terms at any time
            without prior notice. Your continued use of the website following any changes constitutes
            your acceptance of the revised terms.
          </p>
          <p style={pStyle}>
            We encourage you to read these terms carefully and to check back periodically for any
            updates. The date of the most recent revision appears at the top of this page.
          </p>
        </div>

        {/* 2. Use of Content */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>2. Use of Content</h2>
          <p style={pStyle}>
            All content published on The Little Raccoon — including articles, guides, tutorials, images,
            videos, and any other materials — is provided for informational and personal entertainment
            purposes only. Our content is intended to help Minecraft players improve their gameplay,
            discover new strategies, and enjoy the game more fully.
          </p>
          <p style={pStyle}>
            You are permitted to:
          </p>
          <ul style={ulStyle}>
            <li>Read and use our content for your personal, non-commercial enjoyment</li>
            <li>Share links to our articles on social media or other websites</li>
            <li>Quote brief excerpts from our content with proper attribution and a link back to the original article</li>
          </ul>
          <p style={pStyle}>
            You are <strong style={{ color: "#e8d9a0" }}>not</strong> permitted to:
          </p>
          <ul style={ulStyle}>
            <li>Copy, reproduce, or republish our content in full without explicit written permission</li>
            <li>Use our content for commercial purposes without our prior written consent</li>
            <li>Scrape, crawl, or systematically download content from our website using automated tools</li>
            <li>Modify or create derivative works based on our content without permission</li>
          </ul>
        </div>

        {/* 3. Intellectual Property */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>3. Intellectual Property</h2>
          <p style={pStyle}>
            All content, design elements, graphics, logos, and other materials on The Little Raccoon
            are the intellectual property of The Little Raccoon or its content creators, unless
            otherwise noted. This includes but is not limited to written guides, original artwork,
            photography, and the overall look and feel of the website.
          </p>
          <p style={pStyle}>
            The Little Raccoon logo, brand name, and mascot are original works belonging to this site.
            They may not be used, reproduced, or distributed without express written permission.
          </p>
          <p style={pStyle}>
            Please note that Minecraft is a registered trademark of Mojang Studios (a Microsoft
            subsidiary). The Little Raccoon is a fan-made guide website and is in no way affiliated
            with, endorsed by, or sponsored by Mojang Studios or Microsoft Corporation. All Minecraft
            game content referenced on this site remains the property of Mojang Studios.
          </p>
        </div>

        {/* 4. User Conduct */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>4. User Conduct</h2>
          <p style={pStyle}>
            When using The Little Raccoon, you agree to behave in a respectful and lawful manner. You
            must not:
          </p>
          <ul style={ulStyle}>
            <li>Use the website for any unlawful purpose or in violation of any applicable regulations</li>
            <li>
              Attempt to gain unauthorized access to any part of the website, its servers, or any
              related systems or networks
            </li>
            <li>Transmit any viruses, malware, or other malicious code</li>
            <li>
              Engage in any conduct that could damage, disable, overburden, or impair the functionality
              of the website
            </li>
            <li>
              Collect or harvest any personal information from other users of the website
            </li>
            <li>
              Use our newsletter subscription form to submit false or misleading information
            </li>
            <li>
              Impersonate The Little Raccoon, its team, or any other person or entity
            </li>
          </ul>
          <p style={pStyle}>
            We reserve the right to terminate access to the website for any user who violates these
            conduct standards, at our sole discretion.
          </p>
        </div>

        {/* 5. Disclaimer */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>5. Disclaimer</h2>
          <p style={pStyle}>
            The information provided on The Little Raccoon is offered &quot;as is&quot; without any
            warranty of any kind, express or implied. While we strive to provide accurate, up-to-date,
            and helpful Minecraft guides, we make no representations or warranties regarding the
            accuracy, completeness, reliability, or suitability of any information on this site.
          </p>
          <p style={pStyle}>
            Minecraft is a constantly evolving game. Features, mechanics, crafting recipes, and game
            behavior may change with new updates. The Little Raccoon cannot guarantee that all content
            reflects the most current version of the game at any given time. We recommend verifying
            information with the official Minecraft Wiki or in-game testing for the most current
            details.
          </p>
          <p style={pStyle}>
            Any reliance you place on the information found on this website is strictly at your own
            risk.
          </p>
        </div>

        {/* 6. Limitation of Liability */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>6. Limitation of Liability</h2>
          <p style={pStyle}>
            To the fullest extent permitted by applicable law, The Little Raccoon and its operators
            shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages, including but not limited to loss of data, loss of profits, loss of goodwill, or
            business interruption, arising out of or in connection with your use of or inability to use
            this website or its content.
          </p>
          <p style={pStyle}>
            This limitation of liability applies regardless of whether the claim is based on contract,
            tort, negligence, strict liability, or any other legal theory, even if The Little Raccoon
            has been advised of the possibility of such damages.
          </p>
        </div>

        {/* 7. External Links */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>7. External Links</h2>
          <p style={pStyle}>
            Our website may contain links to third-party websites, YouTube videos, social media
            profiles, and other external resources for your convenience and reference. These links do
            not constitute an endorsement of those websites or their content by The Little Raccoon.
          </p>
          <p style={pStyle}>
            We have no control over the content, privacy practices, or availability of external
            websites. Accessing any external links from our website is done at your own risk, and we
            accept no responsibility or liability for any loss or damage caused by your use of, or
            reliance on, content available on third-party sites.
          </p>
        </div>

        {/* 8. Modifications to Terms */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>8. Modifications to Terms</h2>
          <p style={pStyle}>
            The Little Raccoon reserves the right to revise, update, or replace any part of these
            Terms of Use at any time by posting updated terms on this page. Changes take effect
            immediately upon posting. It is your responsibility to check these terms periodically for
            updates.
          </p>
          <p style={pStyle}>
            Significant changes will be indicated by an updated &quot;Last updated&quot; date at the
            top of this page. Your continued use of the website after any modifications to the Terms of
            Use constitutes your acceptance of those changes.
          </p>
        </div>

        {/* 9. Governing Law */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>9. Governing Law</h2>
          <p style={pStyle}>
            These Terms of Use shall be governed by and construed in accordance with applicable laws.
            Any disputes arising from these terms or your use of The Little Raccoon website shall be
            resolved through good-faith negotiation wherever possible.
          </p>
          <p style={pStyle}>
            If you are accessing this website from outside the United States, you are responsible for
            compliance with your local laws. These terms do not restrict any rights you may have under
            applicable consumer protection laws in your jurisdiction.
          </p>
        </div>

        {/* 10. Contact */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>10. Contact</h2>
          <p style={pStyle}>
            If you have any questions about these Terms of Use, or if you believe there has been a
            violation of these terms, please contact us:
          </p>
          <p style={pStyle}>
            <strong style={{ color: "#e8d9a0" }}>The Little Raccoon</strong>
            <br />
            Email:{" "}
            <a href="mailto:hello@thelittleraccoon.com" style={{ color: "#C4A840" }}>
              hello@thelittleraccoon.com
            </a>
            <br />
            Website:{" "}
            <a href="https://thelittleraccoon.com" style={{ color: "#C4A840" }}>
              thelittleraccoon.com
            </a>
          </p>
          <p style={pStyle}>
            We aim to respond to all inquiries within 5 business days.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
