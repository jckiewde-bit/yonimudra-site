import Link from "next/link";
import type { Metadata } from "next";
import { fees } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fees & insurance",
  description:
    "Session fees, sliding-scale information, and how insurance works with a private-pay practice.",
};

export default function FeesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
      <p className="text-sm uppercase tracking-[0.18em] text-sage-ink">Fees</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl text-ink">
        Fees & insurance
      </h1>
      <p className="mt-5 text-charcoal leading-relaxed text-[1.06rem]">
        I keep fees visible because it matters. You shouldn&apos;t have to fill
        out a contact form to find out whether this is affordable for you.
      </p>

      <dl className="mt-10 divide-y divide-line border-y border-line">
        <Row label="15-min consult">Free. No obligation to schedule.</Row>
        <Row label="Counseling session (60 min)">{fees.counselingRange}</Row>
        <Row label="Coaching session (60 min)">{fees.coachingRange}</Row>
        <Row label="Insurance">{fees.insuranceStance}</Row>
      </dl>

      <section className="mt-12 rounded-2xl border border-line bg-white p-6">
        <h2 className="font-display text-xl text-ink">How a superbill works</h2>
        <p className="mt-3 text-sm text-charcoal leading-relaxed">
          A superbill is an itemized receipt with the codes your insurance needs to
          reimburse you for an out-of-network mental-health visit. You pay me at the
          time of session; I send you a superbill monthly; you submit it to your
          insurance for partial reimbursement. Some plans cover a meaningful share
          of out-of-network therapy; many don&apos;t. Call the number on the back of
          your insurance card and ask: <em>&quot;What is my out-of-network mental-health
          benefit for CPT 90791 and 90837?&quot;</em>
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-line bg-white p-6">
        <h2 className="font-display text-xl text-ink">Sliding scale</h2>
        <p className="mt-3 text-sm text-charcoal leading-relaxed">
          A limited number of sliding-scale spots are available. If fee is a
          barrier, say so at consult — we&apos;ll talk about it directly, no
          paperwork.
        </p>
      </section>

      <div className="mt-12">
        <Link
          href="/book"
          className="inline-flex items-center rounded-full bg-sage text-cream px-6 py-3 text-base font-medium hover:bg-sage-ink transition-colors shadow-[var(--shadow-soft)]"
        >
          Book a free 15-min consult
        </Link>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-6">
      <dt className="font-medium text-ink">{label}</dt>
      <dd className="mt-1 sm:mt-0 sm:col-span-2 text-charcoal">{children}</dd>
    </div>
  );
}
