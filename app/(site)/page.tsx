import Link from "next/link";
import { SplashOverlay } from "@/components/SplashOverlay";
import { Marquee } from "@/components/Marquee";
import { HeroShapes } from "@/components/HeroShapes";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SplashOverlay />
      <Hero />
      <Marquee items={[
        "Art Therapy",
        "Drama Therapy",
        "Depth Counseling",
        "Creative Coaching",
        "Seattle · Telehealth WA",
      ]} />
      <Modalities />
      <Process />
      <Reflections />
      <Trust />
      <FinalCTA />
    </>
  );
}

// ── Hero: two-column, big type, decorative shapes right ──────────────────────

function Hero() {
  const tags = ["(Art)", "(Drama)", "(Depth)", "(Coaching)"];
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.25em] text-charcoal">
            {tags.map((t) => <span key={t}>{t}</span>)}
          </div>

          <h1 className="mt-8 font-display text-[3.5rem] sm:text-[6.5rem] lg:text-[7.5rem] text-ink leading-[0.95] tracking-tight">
            Therapy for<br/>
            <span className="italic text-sage-ink">what words</span><br/>
            can&apos;t reach.
          </h1>

          <p className="mt-8 max-w-lg text-lg text-charcoal">
            One-on-one art and drama therapy with {site.clinician.name}. Seattle and telehealth across Washington.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/book" className="btn-parens btn-primary">Book a consult</Link>
            <Link href="/about" className="btn-parens btn-outline">About Jacqueline</Link>
          </div>
        </div>

        <div className="relative">
          <HeroShapes />
        </div>
      </div>
    </section>
  );
}

// ── Modalities (4 cards) ──────────────────────────────────────────────────────

function Modalities() {
  const cards = [
    { n: "01", title: "Art Therapy", body: "Paint, clay, collage, mark-making — when words haven't been able to reach it." },
    { n: "02", title: "Drama Therapy", body: "Role, voice, reenactment — rehearsing new ways of being in the world." },
    { n: "03", title: "Depth Counseling", body: "Jungian, narrative, and transpersonal work for trauma, loss, and becoming." },
    { n: "04", title: "Creative Coaching", body: "Non-clinical. Structured containers for transitions, blocks, and reinvention." },
  ];
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-sage-ink">(Programs)</span>
            <h2 className="mt-4 font-display text-5xl sm:text-7xl text-ink leading-[0.95]">
              Four ways we can work together.
            </h2>
          </div>
          <Link href="/services" className="btn-parens btn-outline">See all services</Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <article key={c.title} className="group relative rounded-3xl bg-white border border-line p-8 hover:border-sage transition-colors">
              <div className="font-display text-7xl text-sage">{c.n}</div>
              <h3 className="mt-8 font-display text-2xl text-ink">{c.title}</h3>
              <p className="mt-3 text-sm text-charcoal leading-relaxed">{c.body}</p>
              <Link href="/services" className="mt-6 inline-flex items-center gap-1 text-sm text-ink underline underline-offset-4 decoration-sage group-hover:decoration-sage-ink">
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Process ──────────────────────────────────────────────────────────────────

function Process() {
  const steps = [
    { n: "01", h: "Consult",  b: "Fifteen minutes, free. We talk about fit — no pressure to schedule anything." },
    { n: "02", h: "Intake",   b: "A secure packet you fill out at your own pace before our first session." },
    { n: "03", h: "Begin",    b: "Sixty minutes. You bring yourself. I bring materials and a quiet room." },
    { n: "04", h: "Continue", b: "Weekly, biweekly, or monthly — shaped around your life." },
  ];
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-sage-ink">(Process)</span>
            <h2 className="mt-4 font-display text-5xl sm:text-7xl text-ink leading-[0.95]">
              A path that creates real change.
            </h2>
          </div>
        </div>

        <ol className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line border border-line rounded-3xl overflow-hidden">
          {steps.map((s) => (
            <li key={s.n} className="p-8 bg-cream">
              <div className="font-display text-[4.5rem] text-sage leading-none">{s.n}</div>
              <h3 className="mt-6 font-display text-2xl text-ink">{s.h}</h3>
              <p className="mt-2 text-sm text-charcoal leading-relaxed">{s.b}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ── Reflections (HIPAA-safe alternative to testimonials) ─────────────────────

function Reflections() {
  const quotes = [
    "Something I couldn't say out loud came through the paint.",
    "I didn't know I was still carrying that. Putting it down on the page helped.",
    "By week four, the character I'd been playing for years started to look like just a costume.",
  ];
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-sage-ink">(What emerges)</span>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[0.95]">
            What often arrives in the room.
          </h2>
          <p className="mt-5 text-charcoal">
            De-identified reflections of the kind of movement that happens in this work — not individual client stories.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-3xl bg-white border border-line p-8">
              <div className="font-display text-6xl text-sage leading-none -mt-2">“</div>
              <blockquote className="mt-4 font-display text-xl text-ink leading-snug">
                {q}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Trust ──────────────────────────────────────────────────────────────────────

function Trust() {
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28 grid gap-14 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <span className="text-xs uppercase tracking-[0.25em] text-sage-ink">(About the work)</span>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[0.95]">
            Rooted in depth psychology.
          </h2>
          <p className="mt-6 text-charcoal leading-relaxed max-w-xl text-lg">
            {site.clinician.name}, {site.clinician.credentials}. Art and drama therapy with Jungian, narrative, and transpersonal roots — and the willingness to sit with whatever you bring, words or not.
          </p>
          <p className="mt-4 text-charcoal leading-relaxed max-w-xl">
            Before this: four years in the U.S. Marine Corps and eleven years as a recruiter. I know what high-functioning camouflage looks like from the inside.
          </p>
          <div className="mt-10">
            <Link href="/about" className="btn-parens btn-outline">Read more</Link>
          </div>
        </div>

        <aside className="lg:col-span-2 rounded-3xl border border-line bg-cream p-8">
          <h3 className="font-display text-2xl text-ink">Credentials</h3>
          <dl className="mt-6 space-y-5 text-sm text-charcoal">
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

// ── Final CTA ─────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{ background: "radial-gradient(circle at 50% 100%, #ff66c4 0%, transparent 55%)" }}
      />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 py-32 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-sage-ink">(Begin)</span>
        <h2 className="mt-4 font-display text-[3.5rem] sm:text-[7rem] text-ink leading-[0.95]">
          Start growing<br/>into your fuller self.
        </h2>
        <p className="mt-8 text-lg text-charcoal">
          Fifteen-minute consult. Video or phone. Free.
        </p>
        <div className="mt-12">
          <Link href="/book" className="btn-parens btn-primary text-base px-10 py-4">
            Book a consult
          </Link>
        </div>
      </div>
    </section>
  );
}
