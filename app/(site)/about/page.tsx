import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.clinician.name}.`,
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 sm:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl text-ink">
        Hi, I&apos;m {site.clinician.name}.
      </h1>

      <div className="mt-8 space-y-5 text-charcoal leading-relaxed">
        <p>
          Creative-arts clinician and coach. Art therapy, drama therapy, depth-psychological work.
        </p>
        <p>
          Before this — four years in the Marines, eleven as a recruiter. I know what high-functioning camouflage looks like from the inside.
        </p>
        <p>
          I work with people whose inner lives have more to say than words can hold. Paint, clay, story, movement — whatever serves you.
        </p>

        <ul className="pt-2 space-y-1 text-sm text-charcoal">
          <li>· Seattle in-person; telehealth across Washington.</li>
          <li>· Counseling under clinical supervision.</li>
          <li>· Coaching offered independently.</li>
          <li>· Private-pay; superbills available.</li>
        </ul>
      </div>

      <div className="mt-10">
        <Link
          href="/book"
          className="inline-flex items-center rounded-full bg-sage text-cream px-6 py-3 font-medium hover:bg-sage-ink transition-colors"
        >
          Book a free 15-min consult
        </Link>
      </div>
    </article>
  );
}
