import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.clinician.name}, creative arts clinician and coach at ${site.brand}.`,
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
      <p className="text-sm uppercase tracking-[0.18em] text-sage-ink">About</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl text-ink">
        Hi, I&apos;m {site.clinician.name}.
      </h1>

      <div className="mt-10 prose prose-stone max-w-none text-charcoal leading-relaxed space-y-5 text-[1.06rem]">
        <p>
          I&apos;m a creative arts clinician and coach. I work with people whose
          inner lives have more to say than language alone can hold — veterans,
          first responders, survivors, high-functioners quietly unraveling, and
          anyone in the middle of becoming someone new.
        </p>
        <p>
          My training is in art therapy and drama therapy, rooted in
          depth-psychological work — Jungian, narrative, and transpersonal —
          and I fold in CBT and somatic tools when they&apos;re what the
          moment calls for. We might work with paint, clay, or pastels. We
          might work with reenactment, voice, or movement. We might just talk.
          The modality serves you, not the other way around.
        </p>

        <h2 className="font-display text-2xl text-ink pt-4">Before this</h2>
        <p>
          I spent four years in the United States Marine Corps, then eleven
          years as a corporate recruiter and headhunter. I know what it&apos;s
          like to hold high-functioning versions of yourself together for so
          long that you forget you&apos;re doing it. I know what it&apos;s like
          to come home from things nobody wants to hear about. I bring all of
          that to the room.
        </p>

        <h2 className="font-display text-2xl text-ink pt-4">What I believe</h2>
        <p>
          You don&apos;t have to know what&apos;s wrong to start. You don&apos;t
          have to be artistic — you just have to be willing to put something
          down that isn&apos;t words for a few minutes. The image, the
          movement, the story — these aren&apos;t decorative. They&apos;re how
          the parts of you that can&apos;t speak yet get a first vote.
        </p>

        <h2 className="font-display text-2xl text-ink pt-4">Practical</h2>
        <ul>
          <li>In person in Seattle; telehealth across Washington.</li>
          <li>Counseling offered under clinical supervision (pre-licensed status).</li>
          <li>Coaching offered independently (non-clinical, for growth and discovery).</li>
          <li>Private-pay; superbills provided on request.</li>
          <li>First 15-minute consult is free.</li>
        </ul>
      </div>

      <div className="mt-12">
        <Link
          href="/book"
          className="inline-flex items-center rounded-full bg-sage text-cream px-6 py-3 text-base font-medium hover:bg-sage-ink transition-colors shadow-[var(--shadow-soft)]"
        >
          Book a free 15-min consult
        </Link>
      </div>
    </article>
  );
}
