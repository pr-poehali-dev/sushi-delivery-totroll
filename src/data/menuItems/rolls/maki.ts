
import { RollItem } from "./types";
import { INGREDIENTS as I } from "./types";

/**
 * Маки роллы (традиционные небольшие роллы)
 */
export const makiRolls: RollItem[] = [
  {
    id: 1014,
    name: "Сяке Маки",
    price: 320,
    image: "https://cdn.poehali.dev/files/60c25e0e-dfbb-40cc-866c-c891f66ce711.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SALMON}`,
    weight: 110,
    tags: ["maki", "classic"],
  },
  {
    id: 1015,
    name: "Каппа Маки",
    price: 260,
    image: "https://cdn.poehali.dev/files/aff48498-e2d2-4992-a52e-1e08f1d76c45.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.CUCUMBER}`,
    weight: 110,
    vegetarian: true,
    tags: ["maki", "vegetarian"],
  },
  {
    id: 1016,
    name: "Авокадо Маки",
    price: 280,
    image: "https://cdn.poehali.dev/files/8bc4b45d-38a6-422c-b290-e2cd5b7f7ca9.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.AVOCADO}`,
    weight: 110,
    vegetarian: true,
    tags: ["maki", "vegetarian"],
  },
];
