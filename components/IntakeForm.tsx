"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type Props = {
  endpoint: string;         // full URL to the Supabase Edge Function
  therapistId: string;      // passed through so the lead attaches to the right clinician
};

export function IntakeForm({ endpoint, therapistId }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const fd = new FormData(e.currentTarget);

    const payload = {
      therapist_id: therapistId || undefined,
      full_name: fd.get("full_name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      preferred_contact_method: fd.get("preferred_contact_method"),
      preferred_times: fd.get("preferred_times"),
      presenting_concern: fd.get("presenting_concern"),
      service_interest: fd.get("service_interest"),
      has_insurance: fd.get("has_insurance") === "yes"
        ? true
        : fd.get("has_insurance") === "no"
        ? false
        : null,
      insurance_carrier: fd.get("insurance_carrier"),
      in_washington_state: fd.get("in_washington_state") === "yes"
        ? true
        : fd.get("in_washington_state") === "no"
        ? false
        : null,
      consent_to_contact: fd.get("consent_to_contact") === "on",
      age_confirmed_18_plus: fd.get("age_confirmed_18_plus") === "on",
      source: "yonimudrahealing.com",
      source_url: typeof window !== "undefined" ? window.location.href : null,
      website: fd.get("website"),  // honeypot — must stay empty
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          data?.error === "validation_failed"
            ? "Please check the required fields."
            : data?.error === "rate_limited"
            ? "Too many submissions from this network. Try again in a few minutes."
            : "Something went wrong. Please email us instead.",
        );
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Couldn't reach the server. Please email us instead.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sage/40 bg-white p-8 text-center">
        <h2 className="font-display text-2xl text-ink">Got it. Thank you.</h2>
        <p className="mt-3 text-charcoal leading-relaxed">
          Your note arrived. I read these personally within one to two business
          days, and I&apos;ll reply with a few windows for a free 15-minute
          consult. If anything shifts before then, you can always write back.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot: visually hidden but in the DOM. Real users won't fill it; bots often will. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field label="Your name" name="full_name" required autoComplete="name" />
      <Field label="Email" name="email" type="email" required autoComplete="email" />
      <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />

      <Select
        label="Best way to reach you"
        name="preferred_contact_method"
        defaultValue="email"
        options={[
          ["email", "Email"],
          ["phone", "Phone call"],
          ["text", "Text"],
          ["no_preference", "No preference"],
        ]}
      />

      <Field
        label="Times that usually work for you"
        name="preferred_times"
        placeholder="e.g. weekday mornings, Tuesday evenings, anything after 5pm PT"
      />

      <Select
        label="What are you most interested in?"
        name="service_interest"
        defaultValue="unsure"
        helper="Not sure yet is a valid answer. We'll talk about fit on the consult."
        options={[
          ["counseling", "Counseling (therapy for a mental-health concern)"],
          ["coaching", "Coaching (growth, transition, creative work)"],
          ["either", "Either — I'd like your read"],
          ["unsure", "I'm not sure yet"],
        ]}
      />

      <Textarea
        label="What's bringing you in? (optional)"
        name="presenting_concern"
        rows={5}
        placeholder="A sentence or a paragraph — as much or as little as you want. You won't be graded."
      />

      <fieldset className="grid gap-3 sm:grid-cols-2">
        <RadioGroup
          label="Are you located in Washington State?"
          name="in_washington_state"
          options={[["yes", "Yes"], ["no", "No"], ["", "Not sure"]]}
        />
        <RadioGroup
          label="Do you have insurance?"
          name="has_insurance"
          options={[["yes", "Yes"], ["no", "No"], ["", "Prefer not to say"]]}
        />
      </fieldset>

      <Field
        label="If you have insurance, which carrier? (optional)"
        name="insurance_carrier"
        helper="I'm private-pay, but this helps me estimate your out-of-network reimbursement."
      />

      <div className="space-y-3 rounded-xl bg-white border border-line p-5">
        <Checkbox
          name="age_confirmed_18_plus"
          required
          label="I am 18 years or older."
        />
        <Checkbox
          name="consent_to_contact"
          required
          label="I agree to be contacted by email or phone about scheduling. I understand this form is not encrypted email and that I should not share detailed clinical information here."
        />
      </div>

      {errorMsg && (
        <p className="rounded-lg bg-rose/20 border border-rose/40 px-4 py-3 text-sm text-ink">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center rounded-full bg-sage text-cream px-7 py-3 text-base font-medium hover:bg-sage-ink transition-colors shadow-[var(--shadow-soft)] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send — let's talk"}
      </button>

      <p className="text-xs text-charcoal/70">
        In a mental-health emergency, call or text <strong>988</strong>. This
        form is not for crisis support and is not monitored 24/7.
      </p>
    </form>
  );
}

// ─── primitives ───────────────────────────────────────────────────────────────

function Field({
  label, name, type = "text", required, autoComplete, placeholder, helper,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  helper?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink">
        {label}{required && <span className="text-sage-ink"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-lg border border-line bg-white px-4 py-2.5 text-ink placeholder:text-charcoal/50 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30"
      />
      {helper && <span className="mt-1 block text-xs text-charcoal/80">{helper}</span>}
    </label>
  );
}

function Textarea({
  label, name, rows = 4, placeholder, helper,
}: { label: string; name: string; rows?: number; placeholder?: string; helper?: string }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink">{label}</span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-lg border border-line bg-white px-4 py-2.5 text-ink placeholder:text-charcoal/50 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30"
      />
      {helper && <span className="mt-1 block text-xs text-charcoal/80">{helper}</span>}
    </label>
  );
}

function Select({
  label, name, options, defaultValue, helper,
}: {
  label: string;
  name: string;
  options: [string, string][];
  defaultValue?: string;
  helper?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink">{label}</span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="mt-2 block w-full rounded-lg border border-line bg-white px-4 py-2.5 text-ink focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30"
      >
        {options.map(([value, label]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
      {helper && <span className="mt-1 block text-xs text-charcoal/80">{helper}</span>}
    </label>
  );
}

function RadioGroup({
  label, name, options,
}: { label: string; name: string; options: [string, string][] }) {
  return (
    <div>
      <span className="block text-sm font-medium text-ink">{label}</span>
      <div className="mt-2 flex flex-wrap gap-3">
        {options.map(([value, labelText]) => (
          <label key={value || labelText} className="inline-flex items-center gap-2 text-sm text-charcoal">
            <input
              type="radio"
              name={name}
              value={value}
              className="accent-sage"
              defaultChecked={value === ""}
            />
            {labelText}
          </label>
        ))}
      </div>
    </div>
  );
}

function Checkbox({ name, label, required }: { name: string; label: string; required?: boolean }) {
  return (
    <label className="flex items-start gap-3 text-sm text-charcoal">
      <input
        type="checkbox"
        name={name}
        required={required}
        className="mt-1 accent-sage"
      />
      <span>{label}{required && <span className="text-sage-ink"> *</span>}</span>
    </label>
  );
}
