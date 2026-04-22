import Link from "next/link";
import { SplashOverlay } from "@/components/SplashOverlay";
import { site } from "@/lib/site";

// Home, redesigned in the Growthway template's visual language:
// big confident hero + method tags + (parentheses) CTA buttons +
// 4-card services grid + 4-step process + trust block + final CTA.
// Pink (#ff66c4) + black + blush cream palette.
export default function HomePage() {
  return (
    <>
      <SplashOverlay />
      <Hero />
      <Modalities />
      <Process />
      <Trust />
      <FinalCTA />
    </>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  const tags = ["Art Therapy", "Drama Therapy", "Creative Coaching"];
  return (
    <section className="relative overflow-hidden">
      {/* Soft pink bloom behind */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(closest-side, #ff66c4, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(closest-side, #ffd1e5, transparent 70%)" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-24 pb-20 sm:pt-28 sm:pb-24">
        {/* Method tags */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {tags.map((t) => (
            <span key={t} className="inline-flex items-center rounded-full border border-ink/20 px-3 py-1 text-xs uppercase tracking-[0.15em] text-ink/80">
              {t}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="mt-8 font-display text-[3rem] sm:text-[5.5rem] text-ink max-w-4xl tracking-tight">
          A creative path through what words can&apos;t reach.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-charcoal">
          One-on-one art and drama therapy with {site.clinician.name}. Seattle and telehealth across Washington.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/book" className="btn-parens btn-primary">Book a consult</Link>
          <Link href="/about" className="btn-parens btn-outline">About Jacqueline</Link>
        </div>
      </div>
    </section>
  );
}

// ── Modalities (4-card grid) ─────────────────────────────────────────────────

function Modalities() {
  const cards = [
    {
      tag: "01",
      title: "Art Therapy",
      body: "Paint, clay, collage, mark-making. For when language hasn't been able to reach it.",
    },
    {
      tag: "02",
      title: "Drama Therapy",
      body: "Role, voice, reenactment. For rehearsing new ways of being in the world.",
    },
    {
      tag: "03",
      title: "Depth Counseling",
      body: "Jungian, narrative, and transpersonal work for trauma, loss, and becoming.",
    },
    {
      tag: "04",
      title: "Creative Coaching",
      body: "Non-clinical. Structured containers for transitions, blocks, and reinvention.",
    },
  ];
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display text-4xl sm:text-5xl text-ink max-w-2xl">
            Four ways we can work together.
          </h2>
          <span className="text-xs uppercase tracking-[0.2em] text-charcoal">How I help</span>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <article key={c.title} className="group rounded-2xl bg-cream border border-line p-6 hover:border-sage transition-colors">
              <div className="text-xs uppercase tracking-[0.2em] text-sage-ink">{c.tag}</div>
              <h3 className="mt-3 font-display text-2xl text-ink">{c.title}</h3>
              <p className="mt-3 text-sm text-charcoal leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Process (4-step) ──────────────────────────────────────────────────────────

function Process() {
  const steps = [
    { n: "01", h: "Consult", b: "Fifteen minutes, free. We talk about fit — no pressure to schedule anything after." },
    { n: "02", h: "Intake",  b: "A secure packet of paperwork you fill out at your own pace before our first session." },
    { n: "03", h: "Begin",   b: "Session one runs sixty minutes. You bring yourself. I bring materials and a quiet room." },
    { n: "04", h: "Continue", b: "Weekly, biweekly, or monthly — a cadence we shape together around your life." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <h2 className="font-display text-4xl sm:text-5xl text-ink max-w-2xl">
          How we&apos;ll start.
        </h2>
        <span className="text-xs uppercase tracking-[0.2em] text-charcoal">The process</span>
      </div>

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="rounded-2xl bg-white border border-line p-6">
            <div className="font-display text-5xl text-sage">{s.n}</div>
            <h3 className="mt-4 font-display text-xl text-ink">{s.h}</h3>
            <p className="mt-2 text-sm text-charcoal leading-relaxed">{s.b}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ── Trust ──────────────────────────────────────────────────────────────────────

function Trust() {
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <span className="text-xs uppercase tracking-[0.2em] text-charcoal">About the work</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-ink">
            Trained in creative therapies, rooted in depth psychology.
          </h2>
          <p className="mt-6 text-charcoal leading-relaxed max-w-xl">
            {site.clinician.name}, {site.clinician.credentials}. Art and drama
            therapy with Jungian, narrative, and transpersonal roots — and the
            willingness to sit with whatever you bring, words or not.
          </p>
          <p className="mt-4 text-charcoal leading-relaxed max-w-xl">
            Before this: four years in the U.S. Marine Corps and eleven years
            as a recruiter. I know what high-functioning camouflage looks like
            from the inside.
          </p>

          <div className="mt-8">
            <Link href="/about" className="btn-parens btn-outline">Read more</Link>
          </div>
        </div>

        <aside className="lg:col-span-2 rounded-2xl border border-line bg-cream p-6">
          <h3 className="font-display text-xl text-ink">Credentials</h3>
          <dl className="mt-4 space-y-4 text-sm text-charcoal">
            <div>
              <dt className="font-medium text-ink">Education</dt>
              <dd>Antioch University Seattle — MA, Clinical Mental Health Counseling (Art & Drama Therapy).</dd>
            </div>
            <div>
              <dt className="font-medium text-ink">Licensure</dt>
              <dd>Pre-licensed in Washington. Counseling offered under clinical supervision.</dd>
            </div>
            <div>
              <dt className="font-medium text-ink">Veteran</dt>
              <dd>Former U.S. Marine Corps.</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

// ── Final CTA ──────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{ background: "radial-gradient(circle at 50% 80%, #ff66c4 0%, transparent 55%)" }}
      />
      <div className="mx-auto max-w-4xl px-5 sm:px-8 py-28 text-center">
        <h2 className="font-display text-5xl sm:text-7xl text-ink leading-[1]">
          Start growing<br/>into your fuller self.
        </h2>
        <p className="mt-6 text-lg text-charcoal">
          Fifteen-minute consult. Video or phone. Free.
        </p>
        <div className="mt-10">
          <Link href="/book" className="btn-parens btn-primary text-base px-8 py-4">
            Book a consult
          </Link>
        </div>
      </div>
    </section>
  );
}
