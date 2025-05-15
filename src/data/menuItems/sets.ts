
import { MenuItem } from '../types';

/**
 * Блюда категории "Наборы"
 */
export const setsItems: MenuItem[] = [
  { 
    id: 20, 
    name: "Сет Ассорти", 
    price: 1250, 
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=400&auto=format&fit=crop", 
    description: "Набор из 32 роллов: Филадельфия, Калифорния, Дракон, Сяке Маки",
    weight: 800,
    tags: ["bestseller"]
  },
  { 
    id: 21, 
    name: "Сет Фирменный", 
    price: 1400, 
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=400&auto=format&fit=crop", 
    description: "Фирменный набор из 40 роллов и суши с лососем",
    weight: 1000,
    tags: ["premium"]
  },
  { 
    id: 22, 
    name: "Сет Запеченный", 
    price: 1100, 
    image: "https://images.unsplash.com/photo-1562802378-063ec186a863?q=80&w=400&auto=format&fit=crop", 
    description: "28 запеченных роллов с различными начинками",
    weight: 750,
    spicy: true
  }
];
