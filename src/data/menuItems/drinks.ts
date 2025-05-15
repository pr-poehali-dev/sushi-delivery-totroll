
import { MenuItem } from '../types';

/**
 * Блюда категории "Напитки"
 */
export const drinksItems: MenuItem[] = [
  { 
    id: 18, 
    name: "Кола", 
    price: 120, 
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=400&auto=format&fit=crop", 
    description: "Coca-Cola, 0.5л",
    weight: 500
  },
  { 
    id: 19, 
    name: "Зеленый чай", 
    price: 150, 
    image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=400&auto=format&fit=crop", 
    description: "Зеленый чай Matcha, 0.5л",
    weight: 500
  }
];
