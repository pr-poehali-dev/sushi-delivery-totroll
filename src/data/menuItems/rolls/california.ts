
import { RollItem } from "./types";
import { INGREDIENTS as I } from "./types";

/**
 * Роллы категории "Калифорния"
 */
export const californiaRolls: RollItem[] = [
  {
    id: 1005,
    name: "Калифорния",
    price: 440,
    image: "https://cdn.poehali.dev/files/70e8515d-c6f8-4a1a-b12a-5473c33570d3.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.CRAB}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.TOBIKO}`,
    weight: 220,
  },
  {
    id: 1006,
    name: "Калифорния Лосось",
    price: 470,
    image: "https://cdn.poehali.dev/files/c8cdfe7c-4281-4642-81ca-981a0febd6b7.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SALMON}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.TOBIKO}`,
    weight: 220,
  },
  {
    id: 1007,
    name: "Калифорния Креветка",
    price: 470,
    image: "https://cdn.poehali.dev/files/131259ab-e7fc-41c5-a135-df0390de9f9c.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SHRIMP}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.TOBIKO}`,
    weight: 220,
  },
  {
    id: 1023,
    name: "Калифорния Темпура",
    price: 410,
    image: "https://cdn.poehali.dev/files/7cd14276-1e20-4a30-81e2-61de7905f686.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.CRAB}, ${I.CUCUMBER}, ${I.TEMPURA}`,
    weight: 230,
  },
];
