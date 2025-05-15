
import { MenuItem } from '../types';

/**
 * Блюда категории "Роллы"
 */
export const rollsItems: MenuItem[] = [
  { 
    id: 1001, 
    name: "Филадельфия", 
    price: 660, 
    image: "https://cdn.poehali.dev/files/9df56186-c740-42d6-9dca-23d508b8b69e.jpg", 
    description: "Состав: Рис, Лосось, Нори, Творожный Сыр, Огурец",
    weight: 240
  },
  { 
    id: 1002, 
    name: "Фила Эби", 
    price: 670, 
    image: "https://cdn.poehali.dev/files/5e277c1b-3cb3-4834-ba53-02d2302749aa.jpg", 
    description: "Состав: Рис, нори, тигровая креветка, лосось, творожный сыр, огурец",
    weight: 250
  },
  { 
    id: 1003, 
    name: "Фила микс", 
    price: 690, 
    image: "https://cdn.poehali.dev/files/2f3aef97-43a4-4aed-8f04-19a93e54e536.jpg", 
    description: "Состав: Рис, нори, креветка, лосось, творожный сыр, авокадо, тобико",
    weight: 260
  },
  { 
    id: 1004, 
    name: "Фила Премиум", 
    price: 820, 
    image: "https://cdn.poehali.dev/files/0789fa8b-b9e5-465b-befe-2f70afe7b402.jpg", 
    description: "Состав: Рис, нори, лосось, творожный сыр, авокадо",
    weight: 260
  },
  { 
    id: 1005, 
    name: "Калифорния", 
    price: 440, 
    image: "https://cdn.poehali.dev/files/70e8515d-c6f8-4a1a-b12a-5473c33570d3.jpg", 
    description: "Состав: Рис, нори, краб, творожный сыр, огурец, тобико",
    weight: 220
  }
];
