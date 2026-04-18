import type { Metadata } from "next";
import { IntakeForm } from "@/components/IntakeForm";
import { site, supabaseUrl, therapistId } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a consult",
  description:
    "Request a free 15-minute consult with Jacqueline Wade. Short form, no pressure to schedule anything.",
};

export default function BookPage() {
  const endpoint = `${supabaseUrl}/functions/v1/public-intake`;

  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
      <p className="text-sm uppercase tracking-[0.18em] text-sage-ink">Book</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl text-ink">
        Let&apos;s talk first.
      </h1>
      <p className="mt-5 text-charcoal leading-relaxed text-[1.06rem] max-w-2xl">
        Tell me a little about what&apos;s bringing you in and how to reach you.
        I&apos;ll reply within one to two business days with a few windows for a
        free 15-minute consult. No obligation to schedule anything afterward.
      </p>

      <div className="mt-10">
        {supabaseUrl ? (
          <IntakeForm endpoint={endpoint} therapistId={therapistId} />
        ) : (
          <div className="rounded-2xl border border-rose/50 bg-white p-6">
            <p className="text-sm text-ink">
              The booking form isn&apos;t configured yet. Email{" "}
              <a className="underline" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>{" "}
              and I&apos;ll get right back to you.
            </p>
            <p className="mt-2 text-xs text-charcoal">
              (Admin: set <code>NEXT_PUBLIC_SUPABASE_URL</code> in <code>.env.local</code>.)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
