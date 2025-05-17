import { Menu } from "../types";
// Импортируем из нового местоположения, через файл-прокси
import { rollsItems } from "./rolls";
import { setsItems } from "./sets";
import { pizzaItems } from "./pizza";
import { hotItems } from "./hot";
import { saladsItems } from "./salads";
import { appetizersItems } from "./appetizers";
import { toppingsItems } from "./toppings";
import { drinksItems } from "./drinks";
import { sushiItems } from "./sushi";

/**
 * Объединение всех категорий меню в один объект
 */
export const menuItems: Menu = {
  sushi: sushiItems,
  rolls: rollsItems,
  sets: setsItems,
  pizza: pizzaItems,
  hot: hotItems,
  salads: saladsItems,
  appetizers: appetizersItems,
  toppings: toppingsItems,
  drinks: drinksItems,
};

/**
 * Получить все блюда из всех категорий в виде единого массива
 */
export const getAllMenuItems = () => {
  return Object.values(menuItems).flat();
};

/**
 * Найти блюдо по ID
 * @param id ID блюда для поиска
 * @returns Блюдо или undefined если не найдено
 */
export const getMenuItemById = (id: number) => {
  return getAllMenuItems().find((item) => item.id === id);
};

/**
 * Получить популярные блюда (помеченные тегом "popular" или "bestseller")
 */
export const getPopularItems = () => {
  return getAllMenuItems().filter(
    (item) =>
      item.tags?.includes("popular") || item.tags?.includes("bestseller"),
  );
};

/**
 * Получить острые блюда
 */
export const getSpicyItems = () => {
  return getAllMenuItems().filter((item) => item.spicy);
};

/**
 * Получить вегетарианские блюда
 */
export const getVegetarianItems = () => {
  return getAllMenuItems().filter((item) => item.vegetarian);
};
