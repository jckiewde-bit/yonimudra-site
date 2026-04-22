import type { Metadata } from "next";
import { DM_Sans, Fredoka } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

// Body font: DM Sans — the Growthway template's primary. Geometric, warm,
// readable at small sizes. Pairs cleanly with Fredoka for display.
const inter = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Display font: Fredoka — rounded, bold, warm. Stand-in for JA Jayagiri Sans
// (Jacqueline's actual brand font from Canva). Both share the same visual
// DNA: rounded terminals, generous counters, friendly weight. When the real
// JA Jayagiri Sans webfont license + .woff2 file arrive, swap this block for
// next/font/local pointing at public/brand/fonts/ja-jayagiri-sans.woff2 —
// --font-display is the single consumer, so no other files change.
const display = Fredoka({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: site.longName, template: `%s · ${site.brand}` },
  description:
    "Art and drama therapy with Jacqueline Wade — Seattle and telehealth across Washington.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
