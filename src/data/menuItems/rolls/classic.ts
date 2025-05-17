
import { RollItem } from "./types";
import { INGREDIENTS as I } from "./types";

/**
 * Классические роллы
 */
export const classicRolls: RollItem[] = [
  {
    id: 1008,
    name: "Канада",
    price: 660,
    image: "https://cdn.poehali.dev/files/e3eca12a-85f5-42d3-a229-f58118a0641a.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.EEL}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.UNAGI_SAUCE}, ${I.SESAME}`,
    weight: 220,
  },
  {
    id: 1009,
    name: "Канада с Лососем",
    price: 710,
    image: "https://cdn.poehali.dev/files/8740d6bc-cdd1-4c01-8f03-2e757065f96d.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SALMON}, ${I.EEL}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.UNAGI_SAUCE}, ${I.SESAME}`,
    weight: 220,
  },
  {
    id: 1010,
    name: "Тигровый",
    price: 590,
    image: "https://cdn.poehali.dev/files/d989ab30-12e6-4f3a-96fe-0a20847b64ac.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SHRIMP}, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.TOBIKO}`,
    weight: 240,
  },
  {
    id: 1011,
    name: "Двойное Удовольствие",
    price: 660,
    image: "https://cdn.poehali.dev/files/541554c6-c250-48e8-a591-74ce82d6bddd.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SALMON}, ${I.EEL}, ${I.CREAM_CHEESE}, ${I.UNAGI_SAUCE}, ${I.SESAME}`,
    weight: 240,
  },
  {
    id: 1012,
    name: "Лососевый Бум",
    price: 710,
    image: "https://cdn.poehali.dev/files/de066edf-9154-4385-aa03-be527368926c.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, ${I.SALMON}, ${I.CUCUMBER}, ${I.TOBIKO}`,
    weight: 240,
  },
  {
    id: 1013,
    name: "Лосось Терияки",
    price: 460,
    image: "https://cdn.poehali.dev/files/1a7451ad-3197-427c-b4ef-1a4dacc31b54.jpg",
    description: `Состав: ${I.RICE}, ${I.NORI}, жареный лосось терияки, ${I.CREAM_CHEESE}, ${I.CUCUMBER}, ${I.SESAME}`,
    weight: 220,
  },
];
