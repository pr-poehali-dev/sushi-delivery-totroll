
import { MenuItem } from './types';

/**
 * Отформатировать цену для отображения
 * @param price Цена в рублях
 * @returns Отформатированная строка с ценой
 */
export const formatPrice = (price: number): string => {
  return `${price} ₽`;
};

/**
 * Отформатировать вес для отображения
 * @param weight Вес в граммах
 * @returns Отформатированная строка с весом
 */
export const formatWeight = (weight?: number): string => {
  if (!weight) return '';
  return weight >= 1000 ? `${weight / 1000} кг` : `${weight} г`;
};

/**
 * Найти блюда по поисковому запросу
 * @param query Поисковый запрос
 * @param items Массив блюд для поиска
 * @returns Отфильтрованный массив блюд
 */
export const searchMenuItems = (query: string, items: MenuItem[]): MenuItem[] => {
  if (!query.trim()) return items;
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  return items.filter(item => {
    const searchableText = `${item.name} ${item.description}`.toLowerCase();
    return searchTerms.every(term => searchableText.includes(term));
  });
};

/**
 * Сортировать блюда по цене
 * @param items Массив блюд для сортировки
 * @param ascending Порядок сортировки (по возрастанию/убыванию)
 * @returns Отсортированный массив блюд
 */
export const sortByPrice = (items: MenuItem[], ascending: boolean = true): MenuItem[] => {
  return [...items].sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
};
