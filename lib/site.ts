// Single source of truth for copy-facing constants. Edit here, not in pages.

export const site = {
  brand: "Yoni Mudra",
  longName: "Yoni Mudra Creative Arts Counseling & Coaching",
  tagline: "Creative arts therapy for the people words keep failing.",
  locationShort: "Seattle, WA",
  serviceArea: "in person in Seattle and via telehealth across Washington",
  clinician: {
    name: "Jacqueline Wade",
    credentials: "MA",
    pronouns: "she/her",
    bookingUrl: "/book",
  },
  // Legally-required disclosure for pre-licensed counselors in WA. Filled in
  // before launch by Jacqueline; until then the site's Counseling pages render
  // with a "scheduling paused" banner.
  supervisor: {
    name: null as string | null,
    credentials: null as string | null,
    licenseNumber: null as string | null,
    state: "WA",
  },
  contact: {
    email: "hello@yonimudrahealing.com",
    phone: null as string | null,
  },
  // Psychology Today listing — this is where PT's "Website" button points
  // back to. Update once the PT profile is live.
  psychologyTodayUrl: null as string | null,
};

export const fees = {
  counselingRange: "Sliding scale available — request fee sheet at consult.",
  coachingRange: "Sliding scale available — request fee sheet at consult.",
  insuranceStance:
    "Private pay. Superbills provided on request for out-of-network reimbursement.",
  consultNote: "First 15-minute consult is free.",
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fees", label: "Fees" },
  { href: "/book", label: "Book a consult", cta: true },
];

export const therapistId = process.env.NEXT_PUBLIC_THERAPIST_ID || "";
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
