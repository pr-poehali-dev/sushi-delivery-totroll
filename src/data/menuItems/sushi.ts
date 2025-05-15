
import { MenuItem } from '../types';

/**
 * Блюда категории "Суши-Роллы"
 */
export const sushiItems: MenuItem[] = [
  { 
    id: 1, 
    name: "Калифорния", 
    price: 320, 
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=400&auto=format&fit=crop", 
    description: "Классический ролл с крабовым мясом и авокадо",
    weight: 210,
    tags: ["popular"]
  },
  { 
    id: 2, 
    name: "Филадельфия", 
    price: 380, 
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=400&auto=format&fit=crop", 
    description: "Ролл с лососем и сливочным сыром",
    weight: 250,
    tags: ["popular", "bestseller"]
  },
  { 
    id: 3, 
    name: "Дракон", 
    price: 420, 
    image: "https://images.unsplash.com/photo-1676037150408-4b59a542f038?q=80&w=400&auto=format&fit=crop", 
    description: "Запеченный ролл с угрем и авокадо",
    weight: 280,
    spicy: true
  },
  { 
    id: 4, 
    name: "Сяке Маки", 
    price: 280, 
    image: "https://images.unsplash.com/photo-1648146299011-2c231d0c0501?q=80&w=400&auto=format&fit=crop", 
    description: "Ролл с лососем и огурцом",
    weight: 180
  },
  { 
    id: 5, 
    name: "Тори Маки", 
    price: 250, 
    image: "https://images.unsplash.com/photo-1615361200141-f45625b9a1bd?q=80&w=400&auto=format&fit=crop", 
    description: "Ролл с курицей и овощами",
    weight: 200
  },
  { 
    id: 6, 
    name: "Темпура Эби", 
    price: 340, 
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=400&auto=format&fit=crop", 
    description: "Жареные во фритюре креветки",
    weight: 220,
    spicy: true
  }
];
