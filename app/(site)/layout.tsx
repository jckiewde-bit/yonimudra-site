import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-cream/85 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/home" className="flex items-center gap-3 group">
          <img src="/brand/logo.svg" alt="" aria-hidden className="h-8 w-8" />
          <span className="font-display text-xl text-ink tracking-tight group-hover:text-sage-ink transition-colors">
            {site.brand}
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-4">
          {nav.map((item) =>
            item.cta ? (
              <Link key={item.href} href={item.href}
                className="ml-2 inline-flex items-center rounded-full bg-sage text-cream px-4 py-2 text-sm font-medium hover:bg-sage-ink transition-colors">
                {item.label}
              </Link>
            ) : (
              <Link key={item.href} href={item.href}
                className="hidden sm:inline-block px-3 py-2 text-sm text-charcoal hover:text-sage-ink">
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const sup = site.supervisor;
  return (
    <footer className="mt-24 border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-charcoal">
        <div>
          <div className="font-display text-xl text-ink mb-2">{site.brand}</div>
          <p>With {site.clinician.name}, {site.clinician.credentials}.</p>
        </div>
        <div>
          <div className="font-medium text-ink mb-2">Practice</div>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:text-sage-ink">About</Link></li>
            <li><Link href="/services" className="hover:text-sage-ink">Services</Link></li>
            <li><Link href="/fees" className="hover:text-sage-ink">Fees</Link></li>
            <li><Link href="/book" className="hover:text-sage-ink">Book</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-ink mb-2">Contact</div>
          <a href={`mailto:${site.contact.email}`} className="hover:text-sage-ink">{site.contact.email}</a>
          <p className="mt-1">{site.serviceArea}</p>
        </div>
        <div>
          <div className="font-medium text-ink mb-2">Legal</div>
          <p>
            {site.clinician.name}, {site.clinician.credentials}
            {sup.name
              ? ` — counseling under supervision of ${sup.name}, ${sup.credentials}${sup.licenseNumber ? ` (${sup.state} #${sup.licenseNumber})` : ""}.`
              : " — [supervisor disclosure pending]"}
          </p>
          <p className="mt-1">Mental-health emergency: call or text 988.</p>
        </div>
      </div>
      <div className="border-t border-line text-xs text-charcoal/70 px-5 sm:px-8 py-4 max-w-6xl mx-auto">
        © {new Date().getFullYear()} {site.longName}
      </div>
    </footer>
  );
}
