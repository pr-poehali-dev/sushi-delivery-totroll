
import { MenuItem } from '../types';

/**
 * Блюда категории "Топпинги"
 */
export const toppingsItems: MenuItem[] = [
  { 
    id: 16, 
    name: "Имбирь", 
    price: 50, 
    image: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?q=80&w=400&auto=format&fit=crop", 
    description: "Маринованный имбирь",
    weight: 30
  },
  { 
    id: 17, 
    name: "Васаби", 
    price: 50, 
    image: "https://images.unsplash.com/photo-1589057362893-a3e5ab79528e?q=80&w=400&auto=format&fit=crop", 
    description: "Острая паста из японского хрена",
    weight: 30,
    spicy: true
  }
];
