import { redirect } from "next/navigation";

export default async function DiningMenuRedirector() {
  const now = new Date();
  const currentDate =
    `${now.getFullYear()}-` +
    `${(now.getMonth() + 1).toString().padStart(2, "0")}-` +
    now.getDate().toString().padStart(2, "0");
  const currentSlot = (() => {
    const hour = now.getHours();
    if (hour < 9 || (hour === 9 && now.getMinutes() < 30)) return "breakfast";
    else if (hour < 14 || (hour === 14 && now.getMinutes() < 30))
      return "lunch";
    else return "dinner";
  })();

  redirect(`/projects/dining-menu-viewer/${currentDate}/${currentSlot}`);
}
