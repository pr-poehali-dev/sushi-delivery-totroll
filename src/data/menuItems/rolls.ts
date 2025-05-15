
import { MenuItem } from '../types';

/**
 * Блюда категории "Роллы"
 */
export const rollsItems: MenuItem[] = [
  { 
    id: 106, 
    name: "Филадельфия Классическая", 
    price: 350, 
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=400&auto=format&fit=crop", 
    description: "Состав: Рис, Нори, Сливочный сыр, Лосось",
    weight: 250
  },
  { 
    id: 107, 
    name: "Филадельфия с Огурцом", 
    price: 370, 
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=400&auto=format&fit=crop", 
    description: "Состав: Рис, Нори, Сливочный сыр, Лосось, Огурец",
    weight: 260
  },
  { 
    id: 108, 
    name: "Филадельфия с Авокадо", 
    price: 390, 
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=400&auto=format&fit=crop", 
    description: "Состав: Рис, Нори, Сливочный сыр, Лосось, Авокадо",
    weight: 270
  }
];
