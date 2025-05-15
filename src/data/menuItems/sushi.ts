
import { MenuItem } from '../types';

/**
 * Блюда категории "Суши-Роллы"
 */
export const sushiItems: MenuItem[] = [
  { 
    id: 1, 
    name: "Филадельфия", 
    price: 670, 
    image: "https://cdn.poehali.dev/files/fcdbc0d0-f143-40ab-bb61-2ee92799df15.jpg", 
    description: "Нежный и сытный ролл с лососем, сливочным сыром и огурцом",
    weight: 250,
    tags: ["popular", "bestseller"]
  },
  { 
    id: 2, 
    name: "Фила Эби", 
    price: 670, 
    image: "https://cdn.poehali.dev/files/339b33ff-642f-4454-aa94-ab3a96052dae.jpg", 
    description: "Нежное сочетание креветки и творожного сыра",
    weight: 240
  },
  { 
    id: 3, 
    name: "Фила Премиум", 
    price: 770, 
    image: "https://cdn.poehali.dev/files/f2e08ecc-8fc8-4f21-81ef-526a60ebda01.jpg", 
    description: "Элегантное соединение авокадо и сыра",
    weight: 260,
    tags: ["premium"]
  }
];
