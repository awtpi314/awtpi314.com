import { readDiningMenu } from "@/lib/dining-menu-viewer";
import { MenuByDate } from "@/types/dining-menu-viewer";
import {
  IconEgg,
  IconFish,
  IconLeaf,
  IconMilk,
  IconPlant,
  IconWheat,
} from "@tabler/icons-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const allergenIcons: Partial<Record<string, typeof IconWheat>> = {
  gluten: IconWheat,
  dairy: IconMilk,
  egg: IconEgg,
  soy: IconLeaf,
  fish: IconFish,
  "tree nut": IconPlant,
};

const allergenBadgeClass: Record<string, string> = {
  gluten: "badge-warning",
  dairy: "badge-info",
  egg: "badge-primary",
  soy: "badge-success",
  fish: "badge-accent",
  "tree nut": "badge-secondary",
};

const SLOTS = ["breakfast", "lunch", "dinner"] as const;
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatDateLabel(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return `${DAYS[d.getDay()]} ${month}/${day}`;
}

export default async function DiningMenuViewer({
  params,
}: {
  params: Promise<{ date: string; slot: string }>;
}) {
  const { date, slot } = await params;
  let menuData: MenuByDate;
  try {
    menuData = await readDiningMenu();
  } catch (e) {
    return (
      <main className="p-6 md:p-8 max-w-3xl mx-auto">
        <p className="text-base-content/50 text-center">
          Failed to load dining menu data from the remote server. Please try again later.
        </p>
      </main>
    )
  }
  const availableDates = Object.keys(menuData).sort();
  const currentMenu =
    menuData[date]?.filter(
      (section) => section.slot === slot || section.slot === "anytime",
    ) ?? [];

  if (
    currentMenu.length === 0 ||
    !SLOTS.includes(slot as (typeof SLOTS)[number]) ||
    !availableDates.includes(date)
  ) {
    redirect("/projects/dining-menu-viewer");
  }

  return (
    <main>
      {/* Sticky date + slot navigation */}
      <div className="sticky top-16 z-40 card card-border bg-base-200 w-md max-w-[calc(100vw-3rem)] my-3 mx-auto shadow-sm">
        {/* Date strip */}
        <div className="overflow-x-scroll no-scrollbar touch-pan-x px-4 pt-3 pb-2">
          <div className="flex gap-1">
            {availableDates.map((d) => (
              <Link
                key={d}
                href={`/projects/dining-menu-viewer/${d}/${slot}`}
                className={`btn btn-sm flex-none ${d === date ? "btn-primary" : "btn-ghost"}`}
              >
                {formatDateLabel(d)}
              </Link>
            ))}
          </div>
        </div>
        {/* Slot tabs */}
        <div className="w-full max-w-md flex justify-center px-4 pb-3">
          {SLOTS.map((s) => (
            <Link
              key={s}
              href={`/projects/dining-menu-viewer/${date}/${s}`}
              className={`btn btn-sm flex-1 ${s === slot ? "btn-primary" : "btn-ghost"}`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* Menu content */}
      <div className="p-6 pt-0! md:p-8 max-w-3xl mx-auto">
        {currentMenu.length === 0 ? (
          <p className="text-base-content/50">
            No menu data available for this slot.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {currentMenu.map((section, idx) => (
              <div key={idx} className="card card-border bg-base-200 shadow-sm">
                <div className="card-body">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="card-title">{section.venue}</h2>
                    {section.slot === "anytime" && (
                      <span className="badge badge-ghost badge-sm">
                        All Day
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    {section.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="py-2.5 border-t border-base-300 first:border-t-0"
                      >
                        <p className="font-medium text-sm">{item.name}</p>
                        {item.allergens.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {item.allergens.map((allergen, allergenIdx) => {
                              const key = allergen.toLowerCase();
                              const IconComponent =
                                allergenIcons[key] ?? IconPlant;
                              const badgeClass =
                                allergenBadgeClass[key] ?? "badge-ghost";
                              return (
                                <span
                                  key={allergenIdx}
                                  className={`badge badge-sm gap-1 ${badgeClass}`}
                                >
                                  <IconComponent size={11} />
                                  {allergen}
                                </span>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
