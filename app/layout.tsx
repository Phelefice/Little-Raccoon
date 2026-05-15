import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Oswald } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["500", "600", "700"] });
const bebasNeue = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "The Little Raccoon - Minecraft Guide",
  description: "Your ultimate Minecraft guide. Survival tips, farm designs, epic builds, seeds, and Redstone tutorials all in one place.",
  keywords: ["minecraft", "guide", "survival", "builds", "redstone", "farms", "seeds"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${oswald.variable} ${bebasNeue.variable} h-full`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-5219702409402620" />
      </head>
      <body className="min-h-full flex flex-col antialiased" style={{ backgroundColor: "#0B1411", color: "#EDE6D6" }}>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5219702409402620" crossOrigin="anonymous" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
