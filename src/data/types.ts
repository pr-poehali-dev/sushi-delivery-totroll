
/**
 * Типы данных для меню и содержимого сайта
 */

// Тип для акционного баннера
export interface Promotion {
  id: number;
  text: string;
  image: string;
  alt?: string; // Опциональное описание для изображения
}

// Тип для категории меню
export interface Category {
  id: string;
  name: string;
  icon?: string; // Опциональная иконка для категории
}

// Тип для блюда в меню
export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  weight?: number; // Вес блюда в граммах
  spicy?: boolean; // Флаг для острого блюда
  vegetarian?: boolean; // Флаг для вегетарианского блюда
  tags?: string[]; // Дополнительные теги (бестселлер, новинка и т.д.)
}

// Тип для всего меню
export interface Menu {
  [category: string]: MenuItem[];
}
