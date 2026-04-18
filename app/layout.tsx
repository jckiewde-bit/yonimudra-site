import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { nav, site } from "@/lib/site";

// Body font. Readable humanist sans; stays put.
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Display font. Temporary stand-in. When the JA Jayagiri Sans license + .woff2
// file arrive, replace this block with:
//
//   import localFont from "next/font/local";
//   const display = localFont({
//     variable: "--font-display",
//     src: "../public/brand/fonts/ja-jayagiri-sans.woff2",
//     display: "swap",
//   });
//
// ...and nothing else in the codebase needs to change — every heading reads
// from var(--font-display) via app/globals.css.
const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.longName,
    template: `%s · ${site.brand}`,
  },
  description:
    "One-on-one art and drama therapy, and creative-arts coaching, with Jacqueline Wade — in person in Seattle and via telehealth across Washington.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-cream/85 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo slot. Drop logo.svg (or .png) into public/brand/ and it renders here. */}
          <span
            aria-hidden
            className="inline-block h-8 w-8 rounded-full bg-sage"
            style={{
              backgroundImage: "url(/brand/logo.svg)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <span className="font-display text-xl text-ink tracking-tight group-hover:text-sage-ink transition-colors">
            {site.brand}
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-4">
          {nav.map((item) =>
            item.cta ? (
              <Link
                key={item.href}
                href={item.href}
                className="ml-2 inline-flex items-center rounded-full bg-sage text-cream px-4 py-2 text-sm font-medium hover:bg-sage-ink transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="hidden sm:inline-block px-3 py-2 text-sm text-charcoal hover:text-sage-ink"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  const sup = site.supervisor;
  return (
    <footer className="mt-24 border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm text-charcoal">
        <div>
          <div className="font-display text-xl text-ink mb-2">{site.brand}</div>
          <p className="leading-relaxed">
            Creative arts counseling & coaching with {site.clinician.name}, {site.clinician.credentials}.
          </p>
        </div>
        <div>
          <div className="font-medium text-ink mb-2">Practice</div>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:text-sage-ink">About</Link></li>
            <li><Link href="/services" className="hover:text-sage-ink">Services</Link></li>
            <li><Link href="/fees" className="hover:text-sage-ink">Fees & insurance</Link></li>
            <li><Link href="/book" className="hover:text-sage-ink">Book a consult</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-ink mb-2">Contact</div>
          <ul className="space-y-1">
            <li><a href={`mailto:${site.contact.email}`} className="hover:text-sage-ink">{site.contact.email}</a></li>
            <li>{site.serviceArea}</li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-ink mb-2">Legal</div>
          <ul className="space-y-1 leading-relaxed">
            <li>
              {site.clinician.name}, {site.clinician.credentials}
              {sup.name ? (
                <>
                  {" "}provides counseling under clinical supervision of {sup.name}, {sup.credentials}
                  {sup.licenseNumber ? ` (${sup.state} #${sup.licenseNumber})` : ""}.
                </>
              ) : (
                <>
                  {" "}[SUPERVISOR DISCLOSURE PENDING — required before publishing counseling services]
                </>
              )}
            </li>
            <li>Coaching services are not psychotherapy.</li>
            <li>In a mental-health emergency, call or text 988.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5 text-xs text-charcoal/70 flex flex-wrap gap-3 justify-between">
          <span>© {new Date().getFullYear()} {site.longName}</span>
          <span>This site does not provide emergency services.</span>
        </div>
      </div>
    </footer>
  );
}
