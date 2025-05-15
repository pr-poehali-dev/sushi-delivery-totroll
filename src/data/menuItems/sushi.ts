
import { MenuItem } from '../types';

/**
 * Блюда категории "Суши"
 */
export const sushiItems: MenuItem[] = [
  { 
    id: 101, 
    name: "Суши Лосось", 
    price: 140, 
    image: "https://cdn.poehali.dev/files/5c9cf1d9-84fe-42b8-bd3e-ef76a60374f6.jpg", 
    description: "Состав: Рис, Лосось",
    weight: 45
  },
  { 
    id: 102, 
    name: "Суши Креветка", 
    price: 150, 
    image: "https://cdn.poehali.dev/files/cb44d24d-c970-4fa8-a695-da1dce564d63.jpg", 
    description: "Состав: Рис, Тигровая креветка",
    weight: 45
  },
  { 
    id: 103, 
    name: "Суши Угорь", 
    price: 180, 
    image: "https://cdn.poehali.dev/files/47846c71-6271-485e-b389-d5f6d342870b.jpg", 
    description: "Состав: Рис, Угорь",
    weight: 45
  },
  { 
    id: 104, 
    name: "Суши Тунец", 
    price: 130, 
    image: "https://cdn.poehali.dev/files/c19eaa41-625d-4f78-922c-618c5b5e3ea7.jpg", 
    description: "Состав: Рис, Тунец",
    weight: 45
  },
  { 
    id: 105, 
    name: "Суши Авокадо", 
    price: 120, 
    image: "https://cdn.poehali.dev/files/2e724f63-56d5-4e87-b9b6-10ab989bcfe9.jpg", 
    description: "Состав: Рис, Авокадо",
    weight: 45,
    vegetarian: true
  }
];
