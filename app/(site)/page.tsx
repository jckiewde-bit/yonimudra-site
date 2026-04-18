import Link from "next/link";
import { SplashOverlay } from "@/components/SplashOverlay";
import { site } from "@/lib/site";

// Home. The splash overlay sits on top and fades away on tap to reveal this.
export default function HomePage() {
  return (
    <>
      <SplashOverlay />

      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-20 pb-16">
        <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] text-ink max-w-3xl">
          Creative arts therapy for the people words keep failing.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-charcoal">
          Art and drama therapy with {site.clinician.name}. Seattle and telehealth across Washington.
        </p>
        <div className="mt-8">
          <Link
            href="/book"
            className="inline-flex items-center rounded-full bg-sage text-cream px-6 py-3 text-base font-medium hover:bg-sage-ink transition-colors"
          >
            Book a free 15-min consult
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 sm:px-8 py-12 grid gap-5 sm:grid-cols-3">
        {[
          ["For the people words keep failing", "Veterans, survivors, anyone talk therapy has bumped up against."],
          ["For high-functioners quietly unraveling", "You look fine. You're not. This is for that."],
          ["For people becoming someone new", "After the thing that changed everything."],
        ].map(([t, b]) => (
          <article key={t} className="rounded-2xl bg-white border border-line p-5">
            <h3 className="font-display text-lg text-ink">{t}</h3>
            <p className="mt-2 text-sm text-charcoal leading-relaxed">{b}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-5 sm:px-8 py-12 text-center">
        <h2 className="font-display text-3xl text-ink">We can talk first.</h2>
        <p className="mt-3 text-charcoal">Fifteen minutes. Video or phone. Free.</p>
        <div className="mt-6">
          <Link
            href="/book"
            className="inline-flex items-center rounded-full bg-sage text-cream px-6 py-3 font-medium hover:bg-sage-ink transition-colors"
          >
            Book a consult
          </Link>
        </div>
      </section>
    </>
  );
}
