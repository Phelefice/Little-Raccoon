import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Oswald } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "../components/Header";
import Analytics from "../components/Analytics";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["500", "600", "700"] });
const bebasNeue = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://thelittleraccoon.com"),
  verification: { other: { "msvalidate.01": "76EE311F26EF52D8045CA871A9C70822" } },
  title: {
    default: "The Little Raccoon | Minecraft Guides & Cozy Adventures",
    template: "%s | The Little Raccoon",
  },
  description: "In-depth Minecraft guides, tutorials, and tips to help you explore, build and survive every adventure.",
  keywords: ["minecraft", "guide", "survival", "builds", "redstone", "farms", "seeds", "tutorials", "tips"],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    siteName: "The Little Raccoon",
    title: "The Little Raccoon | Minecraft Guides & Cozy Adventures",
    description: "In-depth Minecraft guides, tutorials, and tips to help you explore, build and survive every adventure.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "The Little Raccoon \u2014 Minecraft Guides & Cozy Adventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Little Raccoon | Minecraft Guides & Cozy Adventures",
    description: "In-depth Minecraft guides, tutorials, and tips to help you explore, build and survive every adventure.",
    images: ["/images/og-default.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${oswald.variable} ${bebasNeue.variable} h-full`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-5219702409402620" />
        <meta name="msvalidate.01" content="76EE311F26EF52D8045CA871A9C70822" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5219702409402620" crossOrigin="anonymous"></script>
      </head>
      <body className="min-h-full flex flex-col antialiased" style={{ backgroundColor: "#0B1411", color: "#EDE6D6" }}>
        <Analytics />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5219702409402620" crossOrigin="anonymous" strategy="afterInteractive" />
        <Header />
        {children}
      </body>
    </html>
  );
}


