import type { Metadata } from "next";
import { IntakeForm } from "@/components/IntakeForm";
import { site, supabaseUrl, therapistId } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a consult",
  description: "Request a free 15-minute consult.",
};

export default function BookPage() {
  const endpoint = `${supabaseUrl}/functions/v1/public-intake`;

  return (
    <div className="mx-auto max-w-2xl px-5 sm:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl text-ink">Let&apos;s talk first.</h1>
      <p className="mt-4 text-charcoal max-w-xl">
        A few questions so I can reach you. Fifteen-minute consult, free, no pressure.
      </p>

      <div className="mt-8">
        {supabaseUrl ? (
          <IntakeForm endpoint={endpoint} therapistId={therapistId} />
        ) : (
          <div className="rounded-2xl border border-rose/50 bg-white p-6">
            <p className="text-sm text-ink">
              Form isn&apos;t configured yet. Email{" "}
              <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
