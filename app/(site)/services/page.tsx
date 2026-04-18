import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Creative arts counseling and coaching.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl text-ink">Two kinds of work.</h1>
      <p className="mt-4 text-charcoal max-w-2xl">
        They rhyme. They&apos;re different. Here&apos;s how to pick.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Card kind="Counseling" tag="Clinical · under supervision"
          lede="Psychotherapy for trauma, depression, anxiety, grief, spiritual crisis."
          fit="If you want treatment." />
        <Card kind="Coaching" tag="Growth · independent"
          lede="Creative-arts coaching for transitions, creative blocks, reinvention."
          fit="If you want a structured container for change." />
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/book"
          className="inline-flex items-center rounded-full bg-sage text-cream px-6 py-3 font-medium hover:bg-sage-ink transition-colors">
          Book a consult
        </Link>
        <Link href="/fees"
          className="inline-flex items-center rounded-full border border-sage/60 text-sage-ink px-6 py-3 hover:bg-sage/10">
          Fees
        </Link>
      </div>
    </div>
  );
}

function Card({ kind, tag, lede, fit }: { kind: string; tag: string; lede: string; fit: string }) {
  return (
    <article className="rounded-2xl border border-line bg-white p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-sage-ink">{tag}</p>
      <h2 className="mt-2 font-display text-3xl text-ink">{kind}</h2>
      <p className="mt-3 text-charcoal">{lede}</p>
      <p className="mt-4 text-sm font-medium text-ink">
        <span className="text-sage-ink">Fit:</span> {fit}
      </p>
    </article>
  );
}
