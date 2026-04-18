import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Jacqueline Wade at Yoni Mudra.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 sm:px-8 py-16 sm:py-24">
      <p className="text-sm uppercase tracking-[0.18em] text-sage-ink">Contact</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl text-ink">Get in touch</h1>

      <p className="mt-6 text-charcoal leading-relaxed text-[1.06rem]">
        The fastest way to reach me is the short booking form — it lands straight
        in my practice dashboard and I read it within one to two business days.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/book"
          className="inline-flex items-center rounded-full bg-sage text-cream px-6 py-3 text-base font-medium hover:bg-sage-ink transition-colors shadow-[var(--shadow-soft)]"
        >
          Book a free 15-min consult
        </Link>
        <a
          href={`mailto:${site.contact.email}`}
          className="inline-flex items-center rounded-full border border-sage/60 text-sage-ink px-6 py-3 text-base hover:bg-sage/10"
        >
          Email instead
        </a>
      </div>

      <section className="mt-14 rounded-2xl border border-line bg-white p-6">
        <h2 className="font-display text-xl text-ink">Please note</h2>
        <ul className="mt-3 space-y-2 text-sm text-charcoal leading-relaxed">
          <li>Email is not a secure channel. Please don&apos;t share detailed clinical information before we&apos;ve set up a secure intake.</li>
          <li>In a mental-health emergency, call or text <strong>988</strong>. This practice does not provide 24/7 crisis coverage.</li>
          <li>If you&apos;re in immediate danger, call <strong>911</strong> or go to your nearest emergency room.</li>
        </ul>
      </section>
    </div>
  );
}
