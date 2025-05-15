
import { MenuItem } from '../types';

/**
 * Блюда категории "WOK"
 */
export const wokItems: MenuItem[] = [
  { 
    id: 12, 
    name: "Удон с курицей", 
    price: 320, 
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=400&auto=format&fit=crop", 
    description: "Лапша удон с курицей и овощами",
    weight: 350
  },
  { 
    id: 13, 
    name: "Рис с говядиной", 
    price: 340, 
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=400&auto=format&fit=crop", 
    description: "Жареный рис с говядиной и овощами",
    weight: 320,
    spicy: true
  }
];
