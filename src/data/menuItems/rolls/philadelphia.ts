
import { RollItem } from "./types";
import { INGREDIENTS as I } from "./types";

/**
 * Роллы семейства "Филадельфия"
 */
export const philadelphiaRolls: RollItem[] = [
  {
    id: 1002,
    name: "Филадельфия с Лососем",
    price: 490,
    image: "https://cdn.poehali.dev/files/a232ebb0-63d1-4525-a9e9-b0c3ee53ff48.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SALMON}, ${I.CREAM_CHEESE}, ${I.AVOCADO}`,
    weight: 250,
    tags: ["bestseller", "philadelphia"],
  },
  {
    id: 1003,
    name: "Филадельфия с Угрем",
    price: 520,
    image: "https://cdn.poehali.dev/files/2889afaa-6dad-42de-a221-15f9b0e83d15.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.EEL}, ${I.CREAM_CHEESE}, ${I.AVOCADO}, ${I.UNAGI_SAUCE}, ${I.SESAME}`,
    weight: 250,
    tags: ["premium", "philadelphia"],
  },
  {
    id: 1004,
    name: "Филадельфия с Креветкой",
    price: 490,
    image: "https://cdn.poehali.dev/files/3e24ec79-a21c-42a6-aa06-aab5b618ca24.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SHRIMP}, ${I.CREAM_CHEESE}, ${I.AVOCADO}`,
    weight: 250,
    tags: ["philadelphia"],
  },
];
