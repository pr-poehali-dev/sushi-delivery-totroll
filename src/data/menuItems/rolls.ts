
import { MenuItem } from "../types";

/**
 * Блюда категории "Роллы"
 */
export const rollsItems: MenuItem[] = [
  {
    id: 1001,
    name: "Филадельфия",
    price: 660,
    image:
      "https://cdn.poehali.dev/files/9df56186-c740-42d6-9dca-23d508b8b69e.jpg",
    description: "Состав: Рис, Лосось, Нори, Творожный Сыр, Огурец",
    weight: 240,
  },
  {
    id: 1002,
    name: "Фила Эби",
    price: 670,
    image:
      "https://cdn.poehali.dev/files/5e277c1b-3cb3-4834-ba53-02d2302749aa.jpg",
    description:
      "Состав: Рис, нори, тигровая креветка, лосось, творожный сыр, огурец",
    weight: 250,
  },
  {
    id: 1003,
    name: "Фила микс",
    price: 690,
    image:
      "https://cdn.poehali.dev/files/2f3aef97-43a4-4aed-8f04-19a93e54e536.jpg",
    description:
      "Состав: Рис, нори, креветка, лосось, творожный сыр, авокадо, тобико",
    weight: 260,
  },
  {
    id: 1004,
    name: "Фила Премиум",
    price: 820,
    image:
      "https://cdn.poehali.dev/files/0789fa8b-b9e5-465b-befe-2f70afe7b402.jpg",
    description: "Состав: Рис, нори, лосось, творожный сыр, авокадо",
    weight: 260,
  },
  {
    id: 1005,
    name: "Калифорния",
    price: 440,
    image:
      "https://cdn.poehali.dev/files/70e8515d-c6f8-4a1a-b12a-5473c33570d3.jpg",
    description: "Состав: Рис, нори, краб, творожный сыр, огурец, тобико",
    weight: 220,
  },
  {
    id: 1006,
    name: "Калифорния Лосось",
    price: 470,
    image:
      "https://cdn.poehali.dev/files/c8cdfe7c-4281-4642-81ca-981a0febd6b7.jpg",
    description: "Состав: Рис, нори, лосось, творожный сыр, огурец, тобико",
    weight: 220,
  },
  {
    id: 1007,
    name: "Калифорния Креветка",
    price: 470,
    image:
      "https://cdn.poehali.dev/files/131259ab-e7fc-41c5-a135-df0390de9f9c.jpg",
    description:
      "Состав: Рис, нори, тигровая креветка, творожный сыр, огурец, тобико",
    weight: 220,
  },
  {
    id: 1008,
    name: "Канада",
    price: 660,
    image:
      "https://cdn.poehali.dev/files/e3eca12a-85f5-42d3-a229-f58118a0641a.jpg",
    description:
      "Состав: Рис, нори, угорь, творожный сыр, огурец, унаги, кунжут",
    weight: 220,
  },
  {
    id: 1009,
    name: "Канада с Лососем",
    price: 710,
    image:
      "https://cdn.poehali.dev/files/8740d6bc-cdd1-4c01-8f03-2e757065f96d.jpg",
    description:
      "Состав: Рис, нори, лосось, угорь, творожный сыр, огурец, унаги, кунжут",
    weight: 220,
  },
  {
    id: 1010,
    name: "Тигровый",
    price: 590,
    image:
      "https://cdn.poehali.dev/files/d989ab30-12e6-4f3a-96fe-0a20847b64ac.jpg",
    description:
      "Состав: Рис, нори, тигровая креветка, творожный сыр, огурец, тобико",
    weight: 240,
  },
  {
    id: 1011,
    name: "Двойное Удовольствие",
    price: 660,
    image:
      "https://cdn.poehali.dev/files/541554c6-c250-48e8-a591-74ce82d6bddd.jpg",
    description:
      "Состав: Рис, нори, лосось, угорь, творожный сыр, унаги, кунжут",
    weight: 240,
  },
  {
    id: 1012,
    name: "Лососевый Бум",
    price: 710,
    image:
      "https://cdn.poehali.dev/files/de066edf-9154-4385-aa03-be527368926c.jpg",
    description: "Состав: Рис, нори, лосось, огурец, тобико",
    weight: 240,
  },
  {
    id: 1013,
    name: "Темпура с Угрём",
    price: 480,
    image: "https://cdn.poehali.dev/files/06c4fb4a-acd1-464f-a686-00beba2ed31c.jpg",
    description: "Состав: Рис, нори, угорь, творожный сыр, огурец, тобико, темпура",
    weight: 230,
  },
  {
    id: 1014,
    name: "Лосось Терияки",
    price: 460,
    image:
      "https://cdn.poehali.dev/files/1a7451ad-3197-427c-b4ef-1a4dacc31b54.jpg",
    description:
      "Состав: Рис, нори, жареный лосось терияки, творожный сыр, огурец, кунжут",
    weight: 220,
  },
  {
    id: 1015,
    name: "Цезарь с Курочкой",
    price: 430,
    image: "https://cdn.poehali.dev/files/8ccf9f11-2a09-431f-a71e-a18fd7da73bb.jpg",
    description: "Состав: Рис, нори, курица, творожный сыр, помидор, салат, кунжут",
    weight: 240,
  },
  {
    id: 1016,
    name: "Запечённый Хит",
    price: 490,
    image: "https://cdn.poehali.dev/files/3b86215a-fa9d-4843-acbc-adba6578e44b.jpg",
    description: "Состав: Рис, нори, лосось~креветка~краб~тунец, творожный сыр, соус для запекания, унаги, кунжут",
    weight: 240,
  },
  {
    id: 1017,
    name: "Творожная Лава",
    price: 450,
    image: "https://cdn.poehali.dev/files/95f4eba1-b321-48f5-9a45-5b052536526b.jpg",
    description: "Состав: Рис, нори, лосось, краб микс, творожный сыр, тобико",
    weight: 240,
  },
  {
    id: 1018,
    name: "Темпура с жареной Курочкой",
    price: 430,
    image: "https://cdn.poehali.dev/files/63a47d13-57fa-4084-842f-620b935338c3.jpg",
    description: "Состав: Рис, нори, жареная курочка, творожный сыр, огурец, темпура",
    weight: 240,
  },
  {
    id: 1019,
    name: "Маки с Лососем",
    price: 330,
    image:
      "https://cdn.poehali.dev/files/5524e59c-177d-4131-b9a3-94eeac099e16.jpg",
    description: "Состав: Рис, нори, лосось",
    weight: 100,
  },
  {
    id: 1020,
    name: "Маки с Креветкой",
    price: 280,
    image:
      "https://cdn.poehali.dev/files/d205d73b-1d03-4832-8efa-b102fcdb28a2.jpg",
    description: "Состав: Рис, нори, тигровая креветка",
    weight: 100,
  },
  {
    id: 1021,
    name: "Маки с Огурцом",
    price: 180,
    image:
      "https://cdn.poehali.dev/files/a946b1e8-dab0-47ca-9c1c-713f1e89dfb3.jpg",
    description: "Состав: Рис, нори, огурец",
    weight: 100,
    vegetarian: true,
  },
  {
    id: 1022,
    name: "Маки с Крабом",
    price: 230,
    image:
      "https://cdn.poehali.dev/files/56da8c94-7158-4294-8606-412d4f3ddc5b.jpg",
    description: "Состав: Рис, нори, краб микс",
    weight: 100,
  },
  {
    id: 1023,
    name: "Маки с Угрём",
    price: 280,
    image:
      "https://cdn.poehali.dev/files/58648c53-72fb-465c-ae6e-326afba64841.jpg",
    description: "Состав: Рис, нори, угорь, унаги, кунжут",
    weight: 100,
  },
  {
    id: 1024,
    name: "Маки с Авокадо",
    price: 200,
    image:
      "https://cdn.poehali.dev/files/f1dea82c-caf4-4cff-9b18-8834e7c95e66.jpg",
    description: "Состав: Рис, нори, авокадо",
    weight: 100,
    vegetarian: true,
  },
  {
    id: 1025,
    name: "Запечённая Парочка",
    price: 480,
    image:
      "https://cdn.poehali.dev/files/98aeb368-2672-4c69-8468-30ce421a10f4.jpg",
    description: "Состав: Рис, нори, тигровая креветка, кальмар, творожный сыр, огурец, соус для запекания, Тобико, Кунжут, Спайси соус, Унаги",
    weight: 240,
  }
];
