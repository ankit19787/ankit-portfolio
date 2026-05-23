import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankit Bansal — Headless & Composable Commerce",
  description:
    "Technical Lead with 14+ years architecting enterprise commerce platforms on Shopify Plus, BigCommerce, commercetools and Magento. Building Commerce Unifier — a multi-provider headless middleware.",
  keywords: [
    "Ankit Bansal",
    "Technical Lead",
    "Headless Commerce",
    "Composable Commerce",
    "Shopify Plus",
    "BigCommerce",
    "commercetools",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AI eCommerce",
  ],
  authors: [{ name: "Ankit Bansal" }],
  openGraph: {
    title: "Ankit Bansal — Headless & Composable Commerce",
    description:
      "14+ years building enterprise commerce on Shopify Plus, BigCommerce & commercetools. Currently leading Commerce Unifier.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <div className="noise pointer-events-none fixed inset-0 z-[1] opacity-40 mix-blend-overlay" />
        <div className="relative z-[2]">{children}</div>
      </body>
    </html>
  );
}
