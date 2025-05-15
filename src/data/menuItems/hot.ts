
import { MenuItem } from '../types';

/**
 * Блюда категории "Горячее"
 */
export const hotItems: MenuItem[] = [
  { 
    id: 10, 
    name: "Мисо-суп", 
    price: 180, 
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=400&auto=format&fit=crop", 
    description: "Традиционный японский суп",
    weight: 300,
    vegetarian: true
  },
  { 
    id: 11, 
    name: "Том Ям", 
    price: 320, 
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=400&auto=format&fit=crop", 
    description: "Острый тайский суп с морепродуктами",
    weight: 350,
    spicy: true
  },
  { 
    id: 23, 
    name: "Темпура", 
    price: 380, 
    image: "https://images.unsplash.com/photo-1581184953963-d15972933db1?q=80&w=400&auto=format&fit=crop", 
    description: "Овощи и морепродукты в кляре",
    weight: 250
  },
  { 
    id: 24, 
    name: "Якитори", 
    price: 340, 
    image: "https://images.unsplash.com/photo-1602287016476-f95686d941af?q=80&w=400&auto=format&fit=crop", 
    description: "Куриные шашлычки в соусе терияки",
    weight: 220
  }
];
