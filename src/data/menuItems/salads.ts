
import { MenuItem } from '../types';

/**
 * Блюда категории "Салаты"
 */
export const saladsItems: MenuItem[] = [
  { 
    id: 14, 
    name: "Чука", 
    price: 220, 
    image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=400&auto=format&fit=crop", 
    description: "Салат из водорослей чука",
    weight: 150,
    vegetarian: true
  },
  { 
    id: 25, 
    name: "Киноа с овощами", 
    price: 280, 
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop", 
    description: "Полезный салат с киноа, авокадо и свежими овощами",
    weight: 220,
    vegetarian: true
  },
  { 
    id: 26, 
    name: "Поке с лососем", 
    price: 350, 
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop", 
    description: "Гавайский салат с лососем, рисом и авокадо",
    weight: 280,
    tags: ["new"]
  }
];
