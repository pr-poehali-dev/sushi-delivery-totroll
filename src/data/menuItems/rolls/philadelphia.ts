
import { RollItem } from "./types";
import { INGREDIENTS as I } from "./types";

/**
 * Роллы категории "Филадельфия"
 */
export const philadelphiaRolls: RollItem[] = [
  {
    id: 1001,
    name: "Филадельфия",
    price: 660,
    image: "https://cdn.poehali.dev/files/9df56186-c740-42d6-9dca-23d508b8b69e.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SALMON}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}`,
    weight: 240,
  },
  {
    id: 1002,
    name: "Фила Эби",
    price: 670,
    image: "https://cdn.poehali.dev/files/5e277c1b-3cb3-4834-ba53-02d2302749aa.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SHRIMP}, ${I.SALMON}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}`,
    weight: 250,
  },
  {
    id: 1003,
    name: "Фила микс",
    price: 690,
    image: "https://cdn.poehali.dev/files/2f3aef97-43a4-4aed-8f04-19a93e54e536.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SHRIMP}, ${I.SALMON}, ${I.CREAM_CHEESE}, ${I.AVOCADO}, ${I.TOBIKO}`,
    weight: 260,
  },
  {
    id: 1004,
    name: "Фила Премиум",
    price: 820,
    image: "https://cdn.poehali.dev/files/0789fa8b-b9e5-465b-befe-2f70afe7b402.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SALMON}, ${I.CREAM_CHEESE}, ${I.AVOCADO}`,
    weight: 260,
  },
];
