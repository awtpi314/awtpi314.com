import { redirect } from "next/navigation";

const TZ = "America/New_York";

export default async function DiningMenuRedirector() {
  const now = new Date();
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: TZ,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    })
      .formatToParts(now)
      .filter((p) => p.type !== "literal")
      .map((p) => [p.type, parseInt(p.value, 10)])
  );
  const currentDate = `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}`;
  const currentSlot = (() => {
    const { hour, minute } = parts;
    if (hour < 9 || (hour === 9 && minute < 30)) return "breakfast";
    else if (hour < 14 || (hour === 14 && minute < 30)) return "lunch";
    else return "dinner";
  })();

  redirect(`/projects/dining-menu-viewer/${currentDate}/${currentSlot}`);
}
