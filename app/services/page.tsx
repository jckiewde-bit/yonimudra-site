import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Creative arts counseling and creative arts coaching — what each is for, what's different between them, and how to pick.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16 sm:py-24">
      <p className="text-sm uppercase tracking-[0.18em] text-sage-ink">Services</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl text-ink max-w-3xl">
        Two kinds of work. You choose.
      </h1>
      <p className="mt-5 max-w-2xl text-charcoal leading-relaxed text-[1.06rem]">
        I offer creative arts <em>counseling</em> and creative arts
        <em> coaching</em>. They rhyme, but they&apos;re different. Here&apos;s
        how to pick.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <ServiceCard
          kind="Counseling"
          tag="Clinical · under supervision"
          lede="Psychotherapy for mental-health concerns — trauma, depression, spiritual crisis, anxiety, grief."
          bullets={[
            "Art and drama therapy, integrated with depth and somatic work",
            "Suitable if you're experiencing clinical symptoms or carrying trauma",
            "Private-pay; superbills provided for out-of-network insurance",
            "Offered under clinical supervision (WA pre-licensed status)",
          ]}
          note="Counseling is regulated. I work under supervision until my independent licensure is complete; the supervisor of record is listed in the site footer."
          fit="Right if you want treatment — symptom relief, stabilization, working through trauma, clinical depth."
        />
        <ServiceCard
          kind="Coaching"
          tag="Growth · non-clinical · independent"
          lede="Creative-arts coaching for people pivoting, rebuilding, or reaching for something they can't yet name."
          bullets={[
            "Drama-based role work, imaginal work, narrative coaching",
            "Suitable for career transitions, creative blocks, personal reinvention",
            "Private-pay (not insurance-reimbursable, because it isn't psychotherapy)",
            "Offered independently — no supervision required because this isn't clinical work",
          ]}
          note="Coaching is not psychotherapy and does not diagnose or treat mental-health conditions. If coaching work surfaces clinical material, we can pause and refer or move you to counseling."
          fit="Right if you're functionally OK and what you need is a structured creative container for change."
        />
      </div>

      <section className="mt-16 rounded-2xl border border-line bg-white p-8">
        <h2 className="font-display text-2xl text-ink">Modalities I draw from</h2>
        <p className="mt-2 text-charcoal">
          Named for the clinicians reading — but you&apos;ll never be asked to track these in the room.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-charcoal">
          <li>· Art therapy (mark-making, collage, clay, image-based work)</li>
          <li>· Drama therapy (role, reenactment, narrative embodiment)</li>
          <li>· Jungian & depth psychology (archetype, shadow, active imagination)</li>
          <li>· Narrative therapy (restorying, externalization)</li>
          <li>· Transpersonal therapy (meaning, spirituality, existential work)</li>
          <li>· Cognitive-behavioral tools (when structure helps)</li>
          <li>· Dream work</li>
          <li>· Somatic and movement-based exploration</li>
        </ul>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          href="/book"
          className="inline-flex items-center rounded-full bg-sage text-cream px-6 py-3 text-base font-medium hover:bg-sage-ink transition-colors shadow-[var(--shadow-soft)]"
        >
          Book a free 15-min consult
        </Link>
        <Link
          href="/fees"
          className="inline-flex items-center rounded-full border border-sage/60 text-sage-ink px-6 py-3 text-base hover:bg-sage/10"
        >
          See fees & insurance
        </Link>
      </div>
    </div>
  );
}

function ServiceCard({
  kind, tag, lede, bullets, note, fit,
}: {
  kind: string;
  tag: string;
  lede: string;
  bullets: string[];
  note: string;
  fit: string;
}) {
  return (
    <article className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-soft)] flex flex-col">
      <p className="text-xs uppercase tracking-[0.18em] text-sage-ink">{tag}</p>
      <h2 className="mt-2 font-display text-3xl text-ink">{kind}</h2>
      <p className="mt-3 text-charcoal leading-relaxed">{lede}</p>
      <ul className="mt-5 space-y-2 text-sm text-charcoal">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2"><span className="text-sage">·</span> {b}</li>
        ))}
      </ul>
      <p className="mt-5 text-xs text-charcoal/80 border-l-2 border-sage/40 pl-3 italic">
        {note}
      </p>
      <p className="mt-5 text-sm font-medium text-ink">
        <span className="text-sage-ink">Fit:</span> {fit}
      </p>
    </article>
  );
}
