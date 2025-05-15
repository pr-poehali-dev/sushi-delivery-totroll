
import { MenuItem } from '../types';

/**
 * Блюда категории "Пицца"
 */
export const pizzaItems: MenuItem[] = [
  { 
    id: 7, 
    name: "Маргарита", 
    price: 450, 
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop", 
    description: "Классическая пицца с томатами и моцареллой",
    weight: 450,
    vegetarian: true
  },
  { 
    id: 8, 
    name: "Пепперони", 
    price: 520, 
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=400&auto=format&fit=crop", 
    description: "Пицца с томатным соусом и пепперони",
    weight: 480,
    spicy: true,
    tags: ["popular"]
  },
  { 
    id: 9, 
    name: "Четыре сыра", 
    price: 550, 
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=400&auto=format&fit=crop", 
    description: "Пицца с четырьмя видами сыра",
    weight: 470,
    vegetarian: true
  }
];
