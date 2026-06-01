import type { Metadata } from "next";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | The Little Raccoon",
  description: "Privacy Policy for The Little Raccoon — learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ fontSize: "0.9rem", color: "#8a7a5a", marginBottom: "40px" }}>
          Last updated: June 1, 2026
        </p>

        {/* 1. Introduction */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>1. Introduction</h2>
          <p style={pStyle}>
            Welcome to <strong style={{ color: "#e8d9a0" }}>The Little Raccoon</strong> (&quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;). The Little Raccoon is a Minecraft guide website
            dedicated to helping players of all skill levels explore, build, farm, and survive their
            adventures. Our site is accessible at{" "}
            <a href="https://thelittleraccoon.com" style={{ color: "#C4A840" }}>
              thelittleraccoon.com
            </a>
            .
          </p>
          <p style={pStyle}>
            This Privacy Policy explains what information we collect when you visit our website, how we
            use that information, and the choices you have regarding your data. By using our website,
            you agree to the practices described in this policy. If you do not agree, please discontinue
            use of the site.
          </p>
          <p style={pStyle}>
            We are committed to protecting your privacy and handling your data in an open and transparent
            manner. This policy applies to all visitors of The Little Raccoon website and covers data
            collected through website visits, newsletter sign-ups, and any other interaction with our
            content.
          </p>
        </div>

        {/* 2. Information We Collect */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>2. Information We Collect</h2>
          <p style={pStyle}>
            We collect different types of information depending on how you interact with our website.
            Below is a breakdown of the data we may collect:
          </p>
          <p style={{ ...pStyle, marginBottom: "8px" }}>
            <strong style={{ color: "#e8d9a0" }}>Automatically Collected Data</strong>
          </p>
          <p style={pStyle}>
            When you visit The Little Raccoon, certain technical information is automatically collected
            by our servers and third-party analytics tools. This includes:
          </p>
          <ul style={ulStyle}>
            <li>Your IP address (anonymized where possible)</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages you visit and time spent on each page</li>
            <li>Referring URL (the website that sent you to ours)</li>
            <li>Date and time of your visit</li>
            <li>Device type (desktop, mobile, tablet)</li>
          </ul>
          <p style={{ ...pStyle, marginBottom: "8px" }}>
            <strong style={{ color: "#e8d9a0" }}>Cookies and Tracking Technologies</strong>
          </p>
          <p style={pStyle}>
            We use cookies — small text files stored on your device — and similar tracking technologies
            to improve your browsing experience, analyze traffic, and serve relevant advertisements.
            Cookies may be set by us (first-party) or by third-party services we use (third-party). You
            can control cookie preferences through your browser settings or through our cookie consent
            banner.
          </p>
          <p style={{ ...pStyle, marginBottom: "8px" }}>
            <strong style={{ color: "#e8d9a0" }}>Newsletter Data</strong>
          </p>
          <p style={pStyle}>
            If you choose to subscribe to our newsletter, we collect your email address for the purpose
            of sending you updates about new guides, articles, and site news. Subscription is entirely
            voluntary, and you may unsubscribe at any time by clicking the unsubscribe link in any
            email we send you.
          </p>
        </div>

        {/* 3. How We Use Your Information */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>3. How We Use Your Information</h2>
          <p style={pStyle}>We use the information we collect for the following purposes:</p>
          <ul style={ulStyle}>
            <li>
              <strong style={{ color: "#e8d9a0" }}>To operate and improve our website:</strong> We
              analyze traffic patterns and user behavior to understand which content is most helpful and
              to improve the user experience.
            </li>
            <li>
              <strong style={{ color: "#e8d9a0" }}>To send newsletters:</strong> If you subscribed, we
              use your email address to send periodic updates about new Minecraft guides, tutorials, and
              site announcements.
            </li>
            <li>
              <strong style={{ color: "#e8d9a0" }}>To serve relevant advertisements:</strong> We use
              Google AdSense to display ads on our website. This service may use cookies to personalize
              ads based on your browsing history.
            </li>
            <li>
              <strong style={{ color: "#e8d9a0" }}>To comply with legal obligations:</strong> We may
              retain certain data as required by applicable laws and regulations.
            </li>
            <li>
              <strong style={{ color: "#e8d9a0" }}>To protect the security of our website:</strong> We
              monitor for suspicious activity, spam, and potential security threats.
            </li>
          </ul>
          <p style={pStyle}>
            We do not sell, rent, or trade your personal information to third parties for their
            marketing purposes.
          </p>
        </div>

        {/* 4. Google AdSense & Advertising */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>4. Google AdSense &amp; Advertising</h2>
          <p style={pStyle}>
            The Little Raccoon uses <strong style={{ color: "#e8d9a0" }}>Google AdSense</strong> to
            display advertisements. Google AdSense is an advertising program operated by Google LLC.
            When you visit pages on our site, Google and its partners may use cookies and web beacons
            to collect data about your visit in order to show you relevant advertisements.
          </p>
          <p style={pStyle}>
            Google may use the DoubleClick cookie to serve ads based on your prior visits to our website
            and other sites on the internet. You can opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" style={{ color: "#C4A840" }}>
              Google Ads Settings
            </a>
            . Alternatively, you can opt out of third-party vendor cookies by visiting the{" "}
            <a href="http://www.networkadvertising.org/managing/opt_out.asp" style={{ color: "#C4A840" }}>
              Network Advertising Initiative opt-out page
            </a>
            .
          </p>
          <p style={pStyle}>
            The advertising cookies used by Google AdSense may include information such as:
          </p>
          <ul style={ulStyle}>
            <li>Your browsing behavior across websites that display Google ads</li>
            <li>Your approximate geographic location (based on IP address)</li>
            <li>Your device type and browser information</li>
            <li>Interactions with ads (clicks, impressions, conversions)</li>
          </ul>
          <p style={pStyle}>
            For more information about how Google uses data from advertising cookies, please visit the
            Google Privacy &amp; Terms page at{" "}
            <a href="https://policies.google.com/technologies/ads" style={{ color: "#C4A840" }}>
              policies.google.com/technologies/ads
            </a>
            .
          </p>
        </div>

        {/* 5. Google Analytics */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>5. Google Analytics</h2>
          <p style={pStyle}>
            We use <strong style={{ color: "#e8d9a0" }}>Google Analytics</strong> to understand how
            visitors use our website. Google Analytics collects anonymous data about your visit,
            including the pages you view, the time you spend on our site, and how you arrived at our
            website. This data helps us improve our content and user experience.
          </p>
          <p style={pStyle}>
            Google Analytics uses cookies to collect this information. The data is transmitted to and
            stored on Google servers, which may be located outside your country of residence. Google
            uses this data in accordance with its own privacy policy, which you can review at{" "}
            <a href="https://policies.google.com/privacy" style={{ color: "#C4A840" }}>
              policies.google.com/privacy
            </a>
            .
          </p>
          <p style={pStyle}>
            We have enabled IP anonymization in Google Analytics, which means your full IP address is
            never stored. You can opt out of Google Analytics tracking by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              style={{ color: "#C4A840" }}
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </div>

        {/* 6. Third-Party Links */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>6. Third-Party Links</h2>
          <p style={pStyle}>
            Our website may contain links to external websites, including Minecraft-related resources,
            YouTube videos, social media platforms, and other third-party sites. These links are
            provided for your convenience and informational purposes only.
          </p>
          <p style={pStyle}>
            The Little Raccoon has no control over the content, privacy policies, or practices of any
            third-party websites. We are not responsible for the privacy practices or content of those
            sites. We strongly encourage you to review the privacy policy of every website you visit
            through links on our site.
          </p>
        </div>

        {/* 7. Children's Privacy */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>7. Children&apos;s Privacy</h2>
          <p style={pStyle}>
            The Little Raccoon is a Minecraft guide website intended for general audiences. While
            Minecraft is enjoyed by players of all ages, our website is designed for users aged 13 and
            older. We do not knowingly collect personal information from children under the age of 13.
          </p>
          <p style={pStyle}>
            If you are a parent or guardian and believe that your child under 13 has provided us with
            personal information (such as an email address through our newsletter form), please contact
            us immediately at{" "}
            <a href="mailto:hello@thelittleraccoon.com" style={{ color: "#C4A840" }}>
              hello@thelittleraccoon.com
            </a>
            . We will promptly delete such information from our records.
          </p>
          <p style={pStyle}>
            If you are between 13 and 18 years old, we recommend reviewing this policy with a parent
            or guardian before using our site or subscribing to our newsletter.
          </p>
        </div>

        {/* 8. Your Rights (GDPR) */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>8. Your Rights (GDPR)</h2>
          <p style={pStyle}>
            If you are located in the European Economic Area (EEA), United Kingdom, or another
            jurisdiction with data protection laws, you have certain rights regarding your personal
            data. These rights include:
          </p>
          <ul style={ulStyle}>
            <li>
              <strong style={{ color: "#e8d9a0" }}>Right of Access:</strong> You have the right to
              request a copy of the personal data we hold about you.
            </li>
            <li>
              <strong style={{ color: "#e8d9a0" }}>Right to Rectification:</strong> You have the right
              to request that we correct any inaccurate or incomplete data we hold about you.
            </li>
            <li>
              <strong style={{ color: "#e8d9a0" }}>Right to Erasure:</strong> You have the right to
              request that we delete your personal data, subject to certain exceptions.
            </li>
            <li>
              <strong style={{ color: "#e8d9a0" }}>Right to Restrict Processing:</strong> You have the
              right to request that we limit the way we use your personal data.
            </li>
            <li>
              <strong style={{ color: "#e8d9a0" }}>Right to Data Portability:</strong> You have the
              right to receive your personal data in a structured, commonly used, and machine-readable
              format.
            </li>
            <li>
              <strong style={{ color: "#e8d9a0" }}>Right to Object:</strong> You have the right to
              object to our processing of your personal data for direct marketing purposes or where we
              rely on our legitimate interests as the legal basis for processing.
            </li>
            <li>
              <strong style={{ color: "#e8d9a0" }}>Right to Withdraw Consent:</strong> Where we process
              your data based on your consent (such as for newsletter subscriptions or analytics
              cookies), you may withdraw that consent at any time.
            </li>
          </ul>
          <p style={pStyle}>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:hello@thelittleraccoon.com" style={{ color: "#C4A840" }}>
              hello@thelittleraccoon.com
            </a>
            . We will respond to your request within 30 days. Please note that we may need to verify
            your identity before processing your request.
          </p>
        </div>

        {/* 9. Contact Us */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>9. Contact Us</h2>
          <p style={pStyle}>
            If you have any questions, concerns, or requests regarding this Privacy Policy or the way
            we handle your personal data, please do not hesitate to get in touch with us:
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
            We take all privacy inquiries seriously and aim to respond promptly. If you are not
            satisfied with our response, you have the right to lodge a complaint with your local data
            protection authority.
          </p>
        </div>

        {/* 10. Changes to This Policy */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>10. Changes to This Policy</h2>
          <p style={pStyle}>
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            technology, legal requirements, or other factors. When we make significant changes, we will
            update the &quot;Last updated&quot; date at the top of this page.
          </p>
          <p style={pStyle}>
            We encourage you to review this Privacy Policy periodically to stay informed about how we
            protect your information. Your continued use of The Little Raccoon after any changes to
            this policy constitutes your acceptance of the updated terms.
          </p>
          <p style={pStyle}>
            If we make material changes to how we handle your personal information, we will make
            reasonable efforts to notify you, which may include posting a notice on our website or
            sending an email to subscribers.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
