
import { MenuItem } from "../../types";

/**
 * Тип для роллов с дополнительными свойствами (если потребуется в будущем)
 */
export type RollItem = MenuItem;

/**
 * Категории роллов
 */
export enum RollCategory {
  CLASSIC = "classic",
  PHILADELPHIA = "philadelphia",
  CALIFORNIA = "california",
  TEMPURA = "tempura",
  BAKED = "baked",
  MAKI = "maki"
}

/**
 * Описание категорий для отображения в UI
 */
export const ROLL_CATEGORY_LABELS = {
  [RollCategory.CLASSIC]: "Классические роллы",
  [RollCategory.PHILADELPHIA]: "Филадельфия",
  [RollCategory.CALIFORNIA]: "Калифорния",
  [RollCategory.TEMPURA]: "Темпура",
  [RollCategory.BAKED]: "Запеченные",
  [RollCategory.MAKI]: "Маки роллы"
};

/**
 * Ключевые составляющие роллов
 */
export const INGREDIENTS = {
  RICE: "Рис",
  NORI: "нори",
  CUCUMBER: "огурец",
  SALMON: "лосось",
  CREAM_CHEESE: "творожный сыр",
  AVOCADO: "авокадо",
  EEL: "угорь",
  SHRIMP: "тигровая креветка",
  CRAB: "краб микс",
  TOBIKO: "тобико",
  UNAGI_SAUCE: "унаги",
  SESAME: "кунжут",
  TEMPURA: "темпура",
  BAKING_SAUCE: "соус для запекания",
  CHICKEN: "курица"
};
