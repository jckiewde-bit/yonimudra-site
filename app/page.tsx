import Link from "next/link";
import { WatercolorBloom } from "@/components/WatercolorBloom";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoIHelp />
      <FirstSession />
      <TrustSignals />
      <ClosingCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate">
      <WatercolorBloom />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <p className="text-sm uppercase tracking-[0.18em] text-sage-ink mb-4">
          {site.brand} · {site.locationShort}
        </p>
        <h1 className="font-display text-[2.4rem] sm:text-6xl leading-[1.05] text-ink max-w-3xl">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-charcoal leading-relaxed">
          One-on-one art and drama therapy, and creative-arts coaching, with{" "}
          {site.clinician.name}. In person in Seattle, and via telehealth across Washington.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center rounded-full bg-sage text-cream px-6 py-3 text-base font-medium hover:bg-sage-ink transition-colors shadow-[var(--shadow-soft)]"
          >
            Book a free 15-min consult
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-full border border-sage/60 text-sage-ink px-6 py-3 text-base hover:bg-sage/10"
          >
            How we work
          </Link>
        </div>
        <p className="mt-6 text-sm text-charcoal/80 max-w-xl">
          You don&apos;t have to know what&apos;s wrong to start. If words feel like too much
          right now, we can begin with image, movement, or play.
        </p>
      </div>
    </section>
  );
}

function WhoIHelp() {
  const cards = [
    {
      title: "The people words keep failing",
      body: "Veterans, first responders, survivors, and anyone carrying something that talk therapy has bumped up against. We use image, movement, and story to reach what language hasn't.",
    },
    {
      title: "High-functioners quietly unraveling",
      body: "You look fine on the outside. You're not. You're tired of being the one who holds it together, and you're quietly wondering if this is just… your life now.",
    },
    {
      title: "People rediscovering themselves",
      body: "After the thing that changed everything — a loss, a diagnosis, an ending, a spiritual shift — and you need space to meet the person you're becoming.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
      <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-2xl">
        Who I work with
      </h2>
      <p className="mt-3 text-charcoal max-w-2xl">
        One-on-one sessions. Creative where you need the reach, conversational where you need the
        clarity. Always yours to steer.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.title}
            className="rounded-2xl bg-white border border-line p-6 shadow-[var(--shadow-soft)]"
          >
            <h3 className="font-display text-xl text-ink">{c.title}</h3>
            <p className="mt-3 text-charcoal leading-relaxed">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FirstSession() {
  const steps = [
    {
      n: "01",
      title: "Book a free 15-min consult",
      body: "On the phone or on video, whichever feels easier. No pressure to schedule anything afterward.",
    },
    {
      n: "02",
      title: "We talk about fit",
      body: "What's bringing you in, what you've tried, and whether creative-arts work is the right shape for you right now.",
    },
    {
      n: "03",
      title: "If we're a fit, we schedule",
      body: "You get a secure intake packet to fill out at your own pace. First session runs 60 minutes.",
    },
    {
      n: "04",
      title: "Session one",
      body: "We begin gently. You bring whatever you bring. I bring materials, questions, and a quiet room.",
    },
  ];
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-2xl">
          What a first session looks like
        </h2>
        <p className="mt-3 text-charcoal max-w-2xl">
          Most of the anxiety about starting therapy is about not knowing what happens. Here&apos;s
          what happens.
        </p>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl bg-cream border border-line p-6"
            >
              <div className="font-display text-sage-ink text-sm tracking-widest">
                {s.n}
              </div>
              <h3 className="mt-2 font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-charcoal leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TrustSignals() {
  const modalities = [
    "Art therapy",
    "Drama therapy",
    "Jungian & depth work",
    "Narrative",
    "Transpersonal",
    "CBT when it fits",
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
      <div className="grid gap-12 lg:grid-cols-5 items-start">
        <div className="lg:col-span-3">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">
            About the work
          </h2>
          <p className="mt-4 text-charcoal leading-relaxed">
            I&apos;m {site.clinician.name}, {site.clinician.credentials}. I work at the intersection
            of art and drama therapy with depth-psychological roots — Jungian, narrative,
            transpersonal — and I use CBT and somatic tools when they&apos;re what the moment
            calls for. Before this, I was a Marine, then spent eleven years as a recruiter, which
            is a long way of saying I know what it&apos;s like to carry high-functioning
            versions of yourself and need somewhere to put them down.
          </p>
          <p className="mt-4 text-charcoal leading-relaxed">
            I practice in Seattle and offer telehealth across Washington. Sessions are
            private-pay; I provide superbills on request.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {modalities.map((m) => (
              <span
                key={m}
                className="inline-flex items-center rounded-full border border-line bg-white px-3 py-1 text-xs text-charcoal"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
        <aside className="lg:col-span-2 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-soft)]">
          <h3 className="font-display text-xl text-ink">Credentials</h3>
          <dl className="mt-4 space-y-3 text-sm text-charcoal">
            <div>
              <dt className="font-medium text-ink">Education</dt>
              <dd>Antioch University Seattle — MA, Clinical Mental Health Counseling (Art Therapy & Drama Therapy emphasis)</dd>
            </div>
            <div>
              <dt className="font-medium text-ink">Licensure</dt>
              <dd>Pre-licensed clinician (Washington State); counseling offered under clinical supervision.</dd>
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

function ClosingCTA() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cream" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 py-20 text-center">
        <h2 className="font-display text-3xl sm:text-5xl text-ink">
          We can talk first — no pressure to book.
        </h2>
        <p className="mt-5 text-lg text-charcoal">
          A 15-minute consult. On video or on the phone. Free.
        </p>
        <div className="mt-8">
          <Link
            href="/book"
            className="inline-flex items-center rounded-full bg-sage text-cream px-7 py-3 text-base font-medium hover:bg-sage-ink transition-colors shadow-[var(--shadow-soft)]"
          >
            Book a free 15-min consult
          </Link>
        </div>
      </div>
    </section>
  );
}
