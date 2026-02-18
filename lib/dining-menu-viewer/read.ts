import { MenuByDate, RawMenuData } from "@/types/dining-menu-viewer";

export async function readDiningMenu() {
  const menuData: RawMenuData = await (
    await fetch("https://diningdata.cedarville.edu/api/menus?days=5", {
      next: {
        revalidate: 3600,
      },
    })
  ).json();

  const normalized: MenuByDate = {};

  for (const [date, entries] of Object.entries(menuData)) {
    normalized[date] = entries.map((entry) => ({
      venue: entry.venue,
      slot: entry.slot,
      items: entry.items.map((item) => ({
        name: item.name,
        allergens: item.allergens.map((allergen) => allergen.alt),
      })),
    }));
  }

  return normalized;
}
