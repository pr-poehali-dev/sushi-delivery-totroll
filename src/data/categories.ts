import { Category } from "./types";

/**
 * Категории меню
 */
export const categories: Category[] = [
  { id: "sushi", name: "Суши-Роллы" },
  { id: "sets", name: "Наборы" },
  { id: "pizza", name: "Пицца" },
  { id: "hot", name: "Горячее" },
  { id: "salads", name: "Салаты" },
  { id: "appetizers", name: "Закуски" },
  { id: "toppings", name: "Топпинги" },
  { id: "drinks", name: "Напитки" },
];

/**
 * Получить категорию по ID
 * @param id Идентификатор категории
 * @returns Категория или undefined если не найдена
 */
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((category) => category.id === id);
};

/**
 * Получить имя категории по ID
 * @param id Идентификатор категории
 * @returns Название категории или пустая строка если не найдена
 */
export const getCategoryName = (id: string): string => {
  const category = getCategoryById(id);
  return category ? category.name : "";
};
