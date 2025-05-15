
import { RollItem } from "./types";
import { INGREDIENTS as I } from "./types";

/**
 * Запеченные роллы
 */
export const bakedRolls: RollItem[] = [
  {
    id: 1020,
    name: "Запечённая Парочка",
    price: 480,
    image: "https://cdn.poehali.dev/files/98aeb368-2672-4c69-8468-30ce421a10f4.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SHRIMP}, кальмар, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.BAKING_SAUCE}, ${I.TOBIKO}, ${I.SESAME}, Спайси соус, ${I.UNAGI_SAUCE}`,
    weight: 240,
  },
  {
    id: 1021,
    name: "Курочка в Кунжуте",
    price: 400,
    image: "https://cdn.poehali.dev/files/d7cfab80-f993-42c5-8d2a-3919f5718d7f.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.CHICKEN}, ${I.CUCUMBER}, ${I.CREAM_CHEESE}, ${I.SESAME}, ${I.BAKING_SAUCE}, ${I.UNAGI_SAUCE}`,
    weight: 240,
  },
  {
    id: 1022,
    name: "Запечённый Тар-Тар",
    price: 520,
    image: "https://cdn.poehali.dev/files/8a92a63c-0872-417b-82a9-8e2523793207.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SALMON}~мидия~${I.EEL}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.BAKING_SAUCE}, ${I.UNAGI_SAUCE}, ${I.SESAME}`,
    weight: 250,
  },
];
