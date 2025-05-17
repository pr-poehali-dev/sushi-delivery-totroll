
import { RollItem } from "./types";
import { INGREDIENTS as I } from "./types";

/**
 * Классические роллы
 */
export const classicRolls: RollItem[] = [
  {
    id: 1001,
    name: "Филадельфия Классик",
    price: 470,
    image: "https://cdn.poehali.dev/files/570b01b8-2a95-4a26-8930-b0b1f40c4afd.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SALMON}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}`,
    weight: 240,
    tags: ["popular", "classic"],
  },
  {
    id: 1008,
    name: "Дракон Ролл",
    price: 550,
    image: "https://cdn.poehali.dev/files/b7a05fb5-cc38-49ef-b61c-d43f8fad2f99.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.EEL}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.AVOCADO}, ${I.UNAGI_SAUCE}, ${I.SESAME}`,
    weight: 230,
    tags: ["classic", "premium"],
  },
  {
    id: 1013,
    name: "Вегетарианский Ролл",
    price: 350,
    image: "https://cdn.poehali.dev/files/baea7e68-5ea2-41f6-867e-21fde5cd1e95.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.AVOCADO}, ${I.CUCUMBER}, болгарский перец, салат, ${I.SESAME}`,
    weight: 200,
    vegetarian: true,
    tags: ["vegetarian", "light"],
  },
];
