
/**
 * Основной файл для экспорта данных меню
 * 
 * Централизованный экспорт всех данных для упрощения импорта
 * в других частях приложения.
 */

// Реэкспорт типов
export * from './types';

// Реэкспорт данных
export { promotions } from './promotions';
export { categories, getCategoryById, getCategoryName } from './categories';
export { menuItems } from './menuItems';

// Реэкспорт утилитарных функций
export {
  getAllMenuItems,
  getMenuItemById,
  getPopularItems,
  getSpicyItems,
  getVegetarianItems
} from './menuItems';

/**
 * Пример использования:
 * 
 * import { promotions, categories, menuItems, getMenuItemById } from '@/data/menuData';
 * 
 * // Получение элемента по ID
 * const item = getMenuItemById(1);
 * 
 * // Получение всех блюд в категории
 * const sushiMenu = menuItems.sushi;
 */
