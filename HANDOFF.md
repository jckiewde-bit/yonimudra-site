# Yoni Mudra — master handoff

**You are an agent picking up Jacqueline Wade's Yoni Mudra marketing-site project.**
This document is everything you need to finish it. Read it top-to-bottom before
touching anything. Nothing else is required context.

---

## 1. The one-paragraph summary

Jacqueline Wade, MA is a creative-arts clinician (art + drama therapy) opening her
own private practice, **Yoni Mudra Creative Arts Counseling & Coaching**, at the
domain `yonimudrahealing.com`. The marketing site has been built in Next.js 16 at
`c:\Users\Veteran\creative-therapy-app\`. Prospective-client intake posts from
the site into Jacqueline's existing EHR software, **EssorCare**
(`C:\Users\Veteran\essorcare\`), via a Supabase Edge Function on her live Supabase
project `yvcduisiodkbtavjgfzl`. Your job is to finish the three things that
remain: the EssorCare-side dashboard pieces, deployment to `yonimudrahealing.com`,
and a set of content fill-ins only Jacqueline can provide.

---

## 2. Ground truth (what already exists)

### 2a. Marketing site — `c:\Users\Veteran\creative-therapy-app\`

Next.js 16 (App Router), React 19, Tailwind 4, TypeScript. Build is clean
(`npx next build` → 9 routes).

| Path | What it is |
|---|---|
| `app/page.tsx` | Home: hero with watercolor-bloom animation, "Who I help" cards, "What a first session looks like" walkthrough, credentials block, closing CTA. |
| `app/about/page.tsx` | About Jacqueline — bio with her Marine + recruiter background. |
| `app/services/page.tsx` | Counseling vs. Coaching distinction (she's pre-licensed — clinical split is legally required). |
| `app/fees/page.tsx` | Fees page. Currently placeholder "Sliding scale — request at consult." |
| `app/book/page.tsx` | Intake form → `public-intake` edge function. |
| `app/contact/page.tsx` | Contact page with crisis-line disclosure. |
| `app/join/[token]/page.tsx` | Vanity URL `yonimudrahealing.com/join/<token>` that server-redirects to EssorCare's Daily.co join flow. |
| `app/layout.tsx` | Root layout: sticky nav, footer with compliance disclosures. |
| `app/globals.css` | Brand tokens (six `--brand-*` hex values) + typography. |
| `components/WatercolorBloom.tsx` | Animated SVG hero background. Respects `prefers-reduced-motion`. |
| `components/IntakeForm.tsx` | Form component: honeypot, consent gates, 13 fields. |
| `lib/site.ts` | **Copy, fee, supervisor, and clinician constants — single source for content edits.** |
| `lib/supabase.ts` | Supabase client factory. |
| `public/brand/` | Logo slot (placeholder SVG), font slot, README. |

### 2b. EssorCare Supabase (project `yvcduisiodkbtavjgfzl`)

Already deployed and live:

- **Table `public.prospective_clients`** — schema in §3b below. RLS: therapist
  sees only their own leads. Inserts go through the edge function under service
  role.
- **Edge Function `public-intake`** (version 1, `verify_jwt=false`) — accepts
  POST from marketing sites; honeypot, rate limit, CORS, validation.
  **Env vars are not yet set — see §4a.**

### 2c. What Jacqueline has given us

Keep these. Don't re-ask.

| | |
|---|---|
| **Domain** | `yonimudrahealing.com` |
| **Business name** | Yoni Mudra Creative Arts Counseling & Coaching |
| **Clinician** | Jacqueline Wade, MA, she/her, pre-licensed in WA |
| **Clinician email** | `jckiewde@gmail.com` (personal); practice inbox `hello@yonimudrahealing.com` to be provisioned |
| **Supabase project** | `yvcduisiodkbtavjgfzl` (this is EssorCare's live project; marketing site writes leads into it) |
| **Jacqueline's `profiles.id`** | `fd53aba7-afcd-49d2-a921-a41603b00fcf` |
| **Brand font** | JA Jayagiri Sans by Juru Aksara (commercial — Canva license does not extend to web hosting; see §5c) |
| **Current PACMH profile** | `https://pacmh.org/therapist/jacqueline-wade/` — bio reference only |

### 2d. What Jacqueline has NOT provided yet (blockers for launch)

- Logo export (PNG/SVG) from Canva
- Brand color hex codes from the Canva palette
- Supervisor of record (name, credentials, WA license number) — **required** to publish counseling services
- Final fee numbers (she's still thinking; keep "sliding scale" wording until she decides)
- Psychology Today listing URL
- Real `hello@yonimudrahealing.com` or whichever practice inbox she wants on the Contact page
- Headshot photograph

Ask her for these only when you actually need them for a specific step.

---

## 3. What you're building / deploying (in order)

### 3a. First: deploy the site to Vercel at `yonimudrahealing.com`

Why first: she wants to see it live. The site works without the EssorCare
dashboard work — the intake form will insert rows into `prospective_clients`
and Jacqueline can view them via the Supabase dashboard table editor until §3c
ships. Deployment is independent of §3c.

Steps:

1. **Make the directory a git repo and push to GitHub.**
   ```bash
   cd c:\Users\Veteran\creative-therapy-app
   git init
   git add -A
   git commit -m "Initial Yoni Mudra site"
   gh repo create yonimudra-site --private --source=. --remote=origin --push
   ```
   (Use Jacqueline's GitHub account. If `gh` is not authed, run `gh auth login` first.)

2. **Connect the repo to Vercel.**
   - Log into Vercel with Jacqueline's account.
   - "Add New Project" → import `yonimudra-site`. Framework preset auto-detects as Next.js 16.
   - Root directory: leave at repo root.
   - Build command: `npm run build` (default). Output: default.

3. **Set environment variables in Vercel** (Settings → Environment Variables).
   Copy from `.env.example`; fill in real values:
   ```
   NEXT_PUBLIC_SUPABASE_URL         = https://yvcduisiodkbtavjgfzl.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY    = <from Supabase dashboard → Project Settings → API → anon/public key>
   NEXT_PUBLIC_THERAPIST_ID         = fd53aba7-afcd-49d2-a921-a41603b00fcf
   NEXT_PUBLIC_SITE_URL             = https://yonimudrahealing.com
   NEXT_PUBLIC_SITE_NAME            = Yoni Mudra Creative Arts Counseling & Coaching
   NEXT_PUBLIC_ESSORCARE_APP_URL    = <wherever the EssorCare therapist app is deployed; ask Jacqueline>
   ```
   Mark them **Production** + **Preview** + **Development**.

4. **Point the domain at Vercel.**
   - In Vercel → Project → Settings → Domains → Add `yonimudrahealing.com` and `www.yonimudrahealing.com`.
   - At Jacqueline's DNS registrar (ask her which — likely Namecheap, GoDaddy, or Squarespace):
     - `A` record for apex `@` → `76.76.21.21`
     - `CNAME` for `www` → `cname.vercel-dns.com`
   - Wait for DNS to propagate (5 min – 1 hr). Vercel auto-provisions the SSL cert.

5. **Verify end-to-end** — open `https://yonimudrahealing.com` and submit a test intake.
   It will 500 until you complete §4a (allowed-origins). Do §4a first if you
   want the test to succeed, or submit from `http://localhost:3000` which is
   already in the default allowlist.

### 3b. Second: set the `public-intake` edge-function secrets

From any shell with the Supabase CLI logged in:

```bash
supabase secrets set \
  PUBLIC_INTAKE_ALLOWED_ORIGINS="https://yonimudrahealing.com,https://www.yonimudrahealing.com,http://localhost:3000" \
  PUBLIC_INTAKE_DEFAULT_THERAPIST_ID="fd53aba7-afcd-49d2-a921-a41603b00fcf" \
  --project-ref yvcduisiodkbtavjgfzl
```

After §3c ships and she's happy with it, strip `localhost:3000` from the
allowlist.

**Optional (phase 2):** set `PUBLIC_INTAKE_NOTIFY_EMAIL` and wire a
transactional email (Resend / Postmark / Supabase built-in SMTP) inside the
edge function so Jacqueline gets an email ping on every new lead. MVP-wise,
the dashboard (§3c) is enough.

### 3c. Third: EssorCare dashboard — the prospective-clients queue

This is the work that happens inside `C:\Users\Veteran\essorcare\apps\therapist\`.

**Schema of `public.prospective_clients`** (already in Supabase — don't re-create):

| Column | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `therapist_id` | uuid → `profiles.id` | |
| `full_name`, `email`, `phone` | text | |
| `preferred_contact_method` | text | `email` / `phone` / `text` / `no_preference` |
| `preferred_times` | text | free-text ("weekday mornings") |
| `presenting_concern` | text | free-text |
| `service_interest` | text | `counseling` / `coaching` / `either` / `unsure` |
| `has_insurance`, `insurance_carrier` | bool, text | |
| `in_washington_state` | bool | |
| `consent_to_contact`, `age_confirmed_18_plus` | bool | always true at insert — edge function validates |
| `source`, `source_url`, `utm_*`, `referrer_name` | text | marketing attribution |
| `status` | text | `new` / `contacted` / `scheduled_consult` / `converted` / `declined` / `spam` / `archived` |
| `therapist_notes` | text | clinician-only |
| `promoted_client_id` | uuid → `profiles.id` | set when lead is promoted |
| `promoted_at` | timestamptz | |
| `request_ip`, `user_agent` | inet, text | anti-abuse |
| `created_at`, `updated_at` | timestamptz | auto (trigger on update) |

**Components to build:**

1. **`ProspectiveClientsPage.tsx`** — new route under `apps/therapist/src/pages/`,
   mounted inside the authenticated `AppShell`.
   - Queue of `prospective_clients` rows.
   - Filter by status (default: `new` + `contacted`).
   - Sort `created_at desc`.
   - Each row = card with: name, email, phone, presenting-concern snippet,
     service-interest badge, WA/insurance flags, source pill, "X hours ago."
   - Empty state.
   - Wire into `apps/therapist/src/App.tsx` routing.
   - Add a "New leads" sidebar item with a count badge for `status='new'`
     (poll every 60s, or use Supabase realtime).

2. **`ProspectiveClientDrawer.tsx`** — right-side drawer, opens on row click.
   - Full form body (all fields the person filled out).
   - Status buttons: Mark contacted · Schedule consult · Decline · Mark spam · Archive.
   - Therapist-notes textarea, debounced autosave into `therapist_notes`.
   - Primary action: **"Promote to client & schedule consult"** — see §3c-iii.

3. **New edge function `promote-prospective-client`** —
   `C:\Users\Veteran\essorcare\supabase\functions\promote-prospective-client\`.
   Inputs: `prospective_id`, `session_start_iso`, `duration_minutes` (default 30),
   `is_telehealth` (default true).

   Execute as one logical transaction (wrap in a PL/pgSQL function if strict
   atomicity matters):
   - Look up the `prospective_clients` row.
   - `INSERT` into `profiles` with `role='client'`, copying `full_name`,
     `email`, `phone`.
   - `INSERT` into `therapist_clients` linking the new profile to
     `prospective.therapist_id`.
   - `INSERT` into `appointments` with `session_type='consultation'`,
     `status='scheduled'`, `scheduled_at=session_start_iso`,
     `duration_minutes=30`, `is_telehealth=true`, `title='Initial consult'`.
   - `UPDATE prospective_clients SET status='converted', promoted_client_id=<new id>, promoted_at=now()`.
   - Return `{ client_id, appointment_id }`.

   After success, the dashboard can toast "Scheduled" and optionally fire the
   existing `send-onboarding-email` edge function to attach an intake packet.
   The existing `daily-room` function will create the Daily.co room when the
   appointment is persisted (hooks in the existing flow already handle this).

4. **Home-dashboard nudge** — add a small card reading
   `N new lead(s) from yonimudrahealing.com`, linking to `ProspectiveClientsPage`.

**Existing EssorCare code you'll reference:**

- `apps/therapist/src/components/clients/AddClientModal.tsx` — existing
  manual client-add flow. Your promote function should do the same inserts
  that this modal does, plus the appointment row.
- `apps/therapist/src/components/schedule/AppointmentModal.tsx` — appointment
  insert pattern.
- `apps/therapist/src/App.tsx` — routing.
- Existing edge functions to reuse: `daily-room`, `send-onboarding-email`, `create-client`.

---

## 4. Content fill-ins — request from Jacqueline, one per step

Don't batch-ask. Request each one when you reach the point that blocks on it.

### 4a. Supervisor of record (blocks publishing counseling services)

Ask: **"What's your supervisor's full name, credentials, and Washington license
number?"**

Edit `c:\Users\Veteran\creative-therapy-app\lib\site.ts`, replace the `null`s
in `site.supervisor`:

```ts
supervisor: {
  name: "Dr. Example Person",
  credentials: "PhD, LMHC",
  licenseNumber: "LH00000000",
  state: "WA",
},
```

Until this is set, the footer renders `[SUPERVISOR DISCLOSURE PENDING —
required before publishing counseling services]`. **Do not deploy to production
with that bracket visible** unless Jacqueline explicitly approves a
coaching-only launch (in which case, edit `app/services/page.tsx` to remove
the Counseling card or gate it behind "coming soon" copy).

### 4b. Fee numbers

Ask: **"What's your counseling session rate? Your coaching session rate? Any
sliding-scale tiers?"**

Edit `lib/site.ts` `fees`:

```ts
export const fees = {
  counselingRange: "$150 / 60-minute session",          // or "$120–180 sliding scale"
  coachingRange:   "$200 / 60-minute session",
  insuranceStance: "Private pay. Superbills provided on request for out-of-network reimbursement.",
  consultNote:     "First 15-minute consult is free.",
};
```

### 4c. Logo + brand palette

Ask: **"Please export your Canva logo as (a) `logo.svg` or `logo.png` with
transparent background, (b) `logo-wordmark.svg` if you have a horizontal
wordmark variant, and (c) the six brand color hex codes from your Canva palette."**

- Drop image files in `c:\Users\Veteran\creative-therapy-app\public\brand\`.
- Edit the six `--brand-*` values at the top of
  `c:\Users\Veteran\creative-therapy-app\app\globals.css`. Nothing else in the
  codebase references color directly — tokens flow from there.

### 4d. Font (JA Jayagiri Sans) — optional, reversible

See `c:\Users\Veteran\creative-therapy-app\public\brand\fonts\README.md`
for the full licensing options. Short version: Canva's license doesn't cover
web hosting. Two paths:

- **Recommended:** bake the font into the logo PNG/SVG (Canva takes care of
  license there). Headings stay in Cormorant Garamond — the current pairing.
- **If she wants site-wide display font:** she licenses the webfont from Juru
  Aksara on Creative Market (~$20–40), you convert to `.woff2`, drop at
  `public/brand/fonts/ja-jayagiri-sans.woff2`, and swap two lines in
  `app/layout.tsx` per the comment there. Caveat: it's a display/poster font;
  body text must stay Inter regardless.

### 4e. Headshot

Ask: **"Please send a warm, well-lit, authentic headshot — roughly 1200×1500
px portrait. Environmental (you in your therapy space with art materials
visible) is even better than studio."**

Drop at `public/brand/headshot.jpg`. Then edit `app/about/page.tsx` and the
home-page `TrustSignals` section to render it.

### 4f. Psychology Today URL

Ask: **"What's the URL of your live Psychology Today listing?"**

Edit `lib/site.ts` `site.psychologyTodayUrl`. Also: on her PT profile, the
"Website" button should point at `https://yonimudrahealing.com/book`.

### 4g. Contact inbox

The current `hello@yonimudrahealing.com` in `lib/site.ts` is a placeholder.
Ask: **"What email should clients see on the Contact page, and is that
mailbox provisioned?"** Update the constant.

---

## 5. Notes / gotchas

### 5a. EssorCare migration workflow

Per Jacqueline's standing preference: the `migrations/` folder in her EssorCare
repo is **not** the source of truth. The live Supabase project is. Use
`npx supabase db pull` to sync schema, and apply new migrations via the
Supabase MCP or dashboard, not by hand-writing SQL in that folder.

### 5b. Her pre-licensed status

Jacqueline is pre-licensed in Washington (LMHCI-track graduate student at
Antioch University Seattle, currently interning at PACMH). Under WA WAC
246-809, advertised counseling services must display supervisor-of-record
information. The site is built with this in mind — the Counseling section
and footer both pull from `site.supervisor`. Do not launch the counseling side
without that disclosure present.

### 5c. Why there's no splash screen

Her original request included a logo-reveal splash before the main site. Deep
research (sources in the research report — SimplePractice, Brighter Vision,
Healing Pathways, etc.) showed splash gates measurably hurt therapy-site
conversion because they read as "a delay between me and help" to an activated
nervous system. Current design puts the artistic motion *inside* the hero
(watercolor-bloom behind the headline, CTA visible from first frame).
`prefers-reduced-motion` is respected. **Don't add a splash gate back without
explicit direction from Jacqueline.**

### 5d. Framer Motion version

`framer-motion@12` with React 19 occasionally throws type warnings on build.
Current build is clean. If you upgrade deps and hit issues, the minimum
versions that work are: `next@16.2.1`, `react@19.2.4`, `framer-motion@12.23`.

### 5e. Telehealth

Marketing site doesn't run telehealth. `yonimudrahealing.com/join/<token>` is
a **server-side redirect** to EssorCare's existing `/join/<token>` page
(Daily.co). Set `NEXT_PUBLIC_ESSORCARE_APP_URL` in Vercel to wherever the
EssorCare therapist app is deployed. Confirm this URL with Jacqueline — it
may still be `localhost:5173` during dev.

### 5f. Don't commit secrets

The Supabase **service role** key must never go in the marketing-site repo or
Vercel env. Only the **anon** key. The edge function uses the service role
on the server side — that's already handled.

---

## 6. Pre-launch checklist (copy into your task system)

- [ ] **Deploy:** GitHub repo created, Vercel project connected, env vars set, domain pointed, SSL live.
- [ ] **Secrets:** `PUBLIC_INTAKE_ALLOWED_ORIGINS` + `PUBLIC_INTAKE_DEFAULT_THERAPIST_ID` set on Supabase.
- [ ] **Smoke test:** submit a real entry at `yonimudrahealing.com/book`; confirm row appears in `prospective_clients` (SQL editor OK until §3c ships).
- [ ] **EssorCare dashboard:** `ProspectiveClientsPage`, drawer, `promote-prospective-client` edge fn, sidebar badge, home-dashboard nudge all shipped.
- [ ] **Supervisor disclosure** filled in (`lib/site.ts` → `site.supervisor`) — or counseling content gated.
- [ ] **Fees** filled in (`lib/site.ts` → `fees`).
- [ ] **Logo assets** in `public/brand/` (logo.svg, logo-wordmark.svg, og.png, headshot.jpg).
- [ ] **Brand palette** hexes swapped in `app/globals.css`.
- [ ] **Psychology Today** listing's "Website" button points at `yonimudrahealing.com/book`; `site.psychologyTodayUrl` updated.
- [ ] **Contact inbox** set (`site.contact.email`) and actually provisioned at the registrar / mail host.
- [ ] **Allowlist cleaned** — strip `localhost:3000` from `PUBLIC_INTAKE_ALLOWED_ORIGINS` after confirming production works.
- [ ] **Telehealth bridge** verified: send a test `/join/<token>` through and land in the EssorCare Daily.co session.

---

## 7. Phase-2 nice-to-haves (do NOT block launch on these)

- Realtime Supabase subscription on `prospective_clients` so new rows animate into the dashboard without a refresh.
- Dedup detection: warn on same lowercase email as an existing `profile` or recent lead.
- Lead-notification email (Resend/Postmark) via `public-intake` or a database webhook.
- SMS ping via Twilio.
- Stripe consult fee if she ever stops giving consults free.
- "Also available on Psychology Today" badge on the home page wired to `site.psychologyTodayUrl`.
- Analytics: Plausible or Fathom (both HIPAA-safer than GA). Avoid Google Analytics on a healthcare site without a BAA.
- Sitemap + `robots.txt` + structured data (LocalBusiness / Physician schema).
- Accessibility audit pass: color-contrast check on the brand palette once real hexes land.

---

## 8. When you're done

- Delete `localhost:3000` from the Supabase allowlist.
- Delete the `[SUPERVISOR DISCLOSURE PENDING]` bracket (automatic once `site.supervisor` is set).
- Verify the `/book` form, the `/join/<token>` redirect, and the promote-to-client flow all work end-to-end.
- Let Jacqueline know what URL to put on her business cards.
