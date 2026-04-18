import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-5 sm:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl text-ink">Contact</h1>

      <p className="mt-6 text-charcoal">Fastest way to reach me is the booking form.</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/book"
          className="inline-flex items-center rounded-full bg-sage text-cream px-6 py-3 font-medium hover:bg-sage-ink transition-colors">
          Book a consult
        </Link>
        <a href={`mailto:${site.contact.email}`}
          className="inline-flex items-center rounded-full border border-sage/60 text-sage-ink px-6 py-3 hover:bg-sage/10">
          Email
        </a>
      </div>

      <p className="mt-10 text-sm text-charcoal leading-relaxed">
        Mental-health emergency: call or text <strong>988</strong>. This line is not monitored 24/7.
      </p>
    </div>
  );
}
