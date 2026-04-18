import { redirect } from "next/navigation";

// Thin vanity route. Clients get a yonimudra.com/join/<token> link in their
// appointment reminders; we bounce them to the EssorCare Daily.co telehealth
// flow which is where the real join page lives. Keeping the redirect on the
// server side avoids flashing an intermediate page.
export default async function JoinByToken({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const essorcareBase =
    process.env.NEXT_PUBLIC_ESSORCARE_APP_URL || "https://app.essorcare.com";

  const clean = encodeURIComponent(token);
  redirect(`${essorcareBase}/join/${clean}`);
}
