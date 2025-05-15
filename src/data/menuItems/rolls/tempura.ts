
import { RollItem } from "./types";
import { INGREDIENTS as I } from "./types";

/**
 * Роллы в темпуре
 */
export const tempuraRolls: RollItem[] = [
  {
    id: 1024,
    name: "Темпура с Креветкой",
    price: 450,
    image: "https://cdn.poehali.dev/files/aaa9b91a-d952-4007-bd01-18a7eb2bf5b5.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SHRIMP}, ${I.CRAB}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.TEMPURA}`,
    weight: 240,
  },
  {
    id: 1025,
    name: "Темпура с Лососем",
    price: 460,
    image: "https://cdn.poehali.dev/files/d5e14363-3757-4c9c-8160-3c8e0eefd40e.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SALMON}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.TEMPURA}`,
    weight: 230,
  },
];
