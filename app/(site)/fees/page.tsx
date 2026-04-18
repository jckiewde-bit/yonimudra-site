import Link from "next/link";
import type { Metadata } from "next";
import { fees } from "@/lib/site";

export const metadata: Metadata = { title: "Fees" };

export default function FeesPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 sm:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl text-ink">Fees</h1>

      <dl className="mt-8 divide-y divide-line border-y border-line">
        <Row label="15-min consult">Free.</Row>
        <Row label="Counseling (60 min)">{fees.counselingRange}</Row>
        <Row label="Coaching (60 min)">{fees.coachingRange}</Row>
        <Row label="Insurance">{fees.insuranceStance}</Row>
      </dl>

      <p className="mt-8 text-sm text-charcoal leading-relaxed">
        Sliding-scale spots available. If fee is a barrier, say so at consult.
      </p>

      <div className="mt-10">
        <Link href="/book"
          className="inline-flex items-center rounded-full bg-sage text-cream px-6 py-3 font-medium hover:bg-sage-ink transition-colors">
          Book a consult
        </Link>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-6">
      <dt className="font-medium text-ink">{label}</dt>
      <dd className="mt-1 sm:mt-0 sm:col-span-2 text-charcoal">{children}</dd>
    </div>
  );
}
