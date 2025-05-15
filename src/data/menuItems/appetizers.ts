
import { MenuItem } from '../types';

/**
 * Блюда категории "Закуски"
 */
export const appetizersItems: MenuItem[] = [
  { 
    id: 15, 
    name: "Эдамаме", 
    price: 180, 
    image: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?q=80&w=400&auto=format&fit=crop", 
    description: "Отварные бобы эдамаме с солью",
    weight: 150,
    vegetarian: true
  },
  { 
    id: 27, 
    name: "Гёдза", 
    price: 250, 
    image: "https://images.unsplash.com/photo-1573866926487-a1865558a9cf?q=80&w=400&auto=format&fit=crop", 
    description: "Жареные пельмени с начинкой из свинины и овощей",
    weight: 200
  },
  { 
    id: 28, 
    name: "Такояки", 
    price: 270, 
    image: "https://images.unsplash.com/photo-1614533708409-fdad0805a4e3?q=80&w=400&auto=format&fit=crop", 
    description: "Шарики из теста с кусочками осьминога внутри",
    weight: 180
  }
];
