export type RawMenuData = Record<string, RawDayMenuEntry[]>;

export interface RawDayMenuEntry {
  venue: string;
  meal: string | null;
  slot: "breakfast" | "lunch" | "dinner" | "anytime";
  items: RawMenuItem[];
}

export interface RawMenuItem {
  name: string;
  allergens: {
    url: string;
    alt: string;
  }[];
}

export type TimeSlot = "breakfast" | "lunch" | "dinner" | "anytime";

export interface MenuItem {
  name: string;
  allergens: string[];
}

export interface MenuSection {
  venue: string;
  slot: TimeSlot;
  items: MenuItem[];
}

export type MenuByDate = Record<string, MenuSection[]>;
