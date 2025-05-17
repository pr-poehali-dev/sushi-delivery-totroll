
import { RollItem } from "./types";
import { INGREDIENTS as I } from "./types";

/**
 * Роллы категории "Маки"
 */
export const makiRolls: RollItem[] = [
  {
    id: 1014,
    name: "Маки с Лососем",
    price: 330,
    image: "https://cdn.poehali.dev/files/5524e59c-177d-4131-b9a3-94eeac099e16.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SALMON}`,
    weight: 100,
  },
  {
    id: 1015,
    name: "Маки с Креветкой",
    price: 280,
    image: "https://cdn.poehali.dev/files/d205d73b-1d03-4832-8efa-b102fcdb28a2.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SHRIMP}`,
    weight: 100,
  },
  {
    id: 1016,
    name: "Маки с Огурцом",
    price: 180,
    image: "https://cdn.poehali.dev/files/a946b1e8-dab0-47ca-9c1c-713f1e89dfb3.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.CUCUMBER}`,
    weight: 100,
    vegetarian: true,
  },
  {
    id: 1017,
    name: "Маки с Крабом",
    price: 230,
    image: "https://cdn.poehali.dev/files/56da8c94-7158-4294-8606-412d4f3ddc5b.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.CRAB}`,
    weight: 100,
  },
  {
    id: 1018,
    name: "Маки с Угрём",
    price: 280,
    image: "https://cdn.poehali.dev/files/58648c53-72fb-465c-ae6e-326afba64841.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.EEL}, ${I.UNAGI_SAUCE}, ${I.SESAME}`,
    weight: 100,
  },
  {
    id: 1019,
    name: "Маки с Авокадо",
    price: 200,
    image: "https://cdn.poehali.dev/files/f1dea82c-caf4-4cff-9b18-8834e7c95e66.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.AVOCADO}`,
    weight: 100,
    vegetarian: true,
  },
];
