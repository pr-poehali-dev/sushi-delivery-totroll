
import { RollItem, RollCategory, ROLL_CATEGORY_LABELS } from './types';
import { philadelphiaRolls } from './philadelphia';
import { californiaRolls } from './california';
import { classicRolls } from './classic';
import { makiRolls } from './maki';
import { bakedRolls } from './baked';
import { tempuraRolls } from './tempura';

/**
 * Все роллы, сгруппированные по категории
 */
export const rollsByCategory = {
  [RollCategory.PHILADELPHIA]: philadelphiaRolls,
  [RollCategory.CALIFORNIA]: californiaRolls,
  [RollCategory.CLASSIC]: classicRolls,
  [RollCategory.MAKI]: makiRolls,
  [RollCategory.BAKED]: bakedRolls,
  [RollCategory.TEMPURA]: tempuraRolls,
};

/**
 * Получить все роллы в одном массиве
 */
export const allRolls: RollItem[] = Object.values(rollsByCategory).flat();

/**
 * Получить роллы по категории
 * @param category Категория роллов
 * @returns Массив роллов в категории
 */
export const getRollsByCategory = (category: RollCategory): RollItem[] => {
  return rollsByCategory[category] || [];
};

/**
 * Получить ролл по ID
 * @param id ID ролла
 * @returns Ролл или undefined если не найден
 */
export const getRollById = (id: number): RollItem | undefined => {
  return allRolls.find(roll => roll.id === id);
};

/**
 * Получить название категории роллов
 * @param category Категория роллов
 * @returns Название категории
 */
export const getRollCategoryLabel = (category: RollCategory): string => {
  return ROLL_CATEGORY_LABELS[category] || '';
};

/**
 * Экспорт всех роллов для обратной совместимости
 */
export const rollsItems: RollItem[] = allRolls;

/**
 * Экспорт констант и типов
 */
export * from './types';
