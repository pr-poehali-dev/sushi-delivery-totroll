
import { RollItem } from "./types";
import { INGREDIENTS as I } from "./types";

/**
 * Роллы в темпуре (горячие роллы)
 */
export const tempuraRolls: RollItem[] = [
  {
    id: 1010,
    name: "Горячий Лосось",
    price: 450,
    image: "https://cdn.poehali.dev/files/1c5d7c39-46ee-4b47-ade9-ec6a27d23733.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SALMON}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.TEMPURA}, спайси соус, ${I.UNAGI_SAUCE}`,
    weight: 250,
    tags: ["hot", "tempura"],
  },
  {
    id: 1011,
    name: "Горячий Краб",
    price: 430,
    image: "https://cdn.poehali.dev/files/25e2380e-0fc9-4cb7-91ff-d9c5d0d8aa3c.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.CRAB}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.TEMPURA}, спайси соус, ${I.UNAGI_SAUCE}`,
    weight: 250,
    tags: ["hot", "tempura"],
  },
  {
    id: 1012,
    name: "Горячий Угорь",
    price: 470,
    image: "https://cdn.poehali.dev/files/a7c03a51-18b7-454e-b4d2-f4ba2fd62d7d.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.EEL}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.TEMPURA}, ${I.UNAGI_SAUCE}, ${I.SESAME}`,
    weight: 250,
    tags: ["hot", "tempura", "premium"],
  },
];
