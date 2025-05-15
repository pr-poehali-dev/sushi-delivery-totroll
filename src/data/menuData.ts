export const promotions = [
  {
    id: 1,
    text: "Доставка от 1000 рублей бесплатно!",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 2,
    text: "Оставь фотоотзыв на Яндекс.Картах либо 2ГИС и получи ролл в подарок!",
    image:
      "https://images.unsplash.com/photo-1562802378-063ec186a863?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 3,
    text: "Скидка 15% имениннику за три дня до, и после дня рождения!",
    image:
      "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 4,
    text: "Собери свой СЕТ из четырёх роллов, пятый ролл в подарок!",
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1920&auto=format&fit=crop",
  },
];

export const categories = [
  { id: "sushi", name: "Суши-Роллы" },
  { id: "sets", name: "Наборы" },
  { id: "pizza", name: "Пицца" },
  { id: "hot", name: "Горячее" },
  { id: "wok", name: "WOK" },
  { id: "salads", name: "Салаты" },
  { id: "appetizers", name: "Закуски" },
  { id: "toppings", name: "Топпинги" },
  { id: "drinks", name: "Напитки" },
];

export const menuItems = {
  sushi: [
    {
      id: 1,
      name: "Калифорния",
      price: 320,
      image:
        "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=400&auto=format&fit=crop",
      description: "Классический ролл с крабовым мясом и авокадо",
    },
    {
      id: 2,
      name: "Филадельфия",
      price: 380,
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=400&auto=format&fit=crop",
      description: "Ролл с лососем и сливочным сыром",
    },
    {
      id: 3,
      name: "Дракон",
      price: 420,
      image:
        "https://images.unsplash.com/photo-1676037150408-4b59a542f038?q=80&w=400&auto=format&fit=crop",
      description: "Запеченный ролл с угрем и авокадо",
    },
    {
      id: 4,
      name: "Сяке Маки",
      price: 280,
      image:
        "https://images.unsplash.com/photo-1648146299011-2c231d0c0501?q=80&w=400&auto=format&fit=crop",
      description: "Ролл с лососем и огурцом",
    },
    {
      id: 5,
      name: "Тори Маки",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1615361200141-f45625b9a1bd?q=80&w=400&auto=format&fit=crop",
      description: "Ролл с курицей и овощами",
    },
    {
      id: 6,
      name: "Темпура Эби",
      price: 340,
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=400&auto=format&fit=crop",
      description: "Жареные во фритюре креветки",
    },
  ],
  sets: [
    {
      id: 20,
      name: "Сет Ассорти",
      price: 1250,
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=400&auto=format&fit=crop",
      description:
        "Набор из 32 роллов: Филадельфия, Калифорния, Дракон, Сяке Маки",
    },
    {
      id: 21,
      name: "Сет Фирменный",
      price: 1400,
      image:
        "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=400&auto=format&fit=crop",
      description: "Фирменный набор из 40 роллов и суши с лососем",
    },
    {
      id: 22,
      name: "Сет Запеченный",
      price: 1100,
      image:
        "https://images.unsplash.com/photo-1562802378-063ec186a863?q=80&w=400&auto=format&fit=crop",
      description: "28 запеченных роллов с различными начинками",
    },
  ],
  pizza: [
    {
      id: 7,
      name: "Маргарита",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop",
      description: "Классическая пицца с томатами и моцареллой",
    },
    {
      id: 8,
      name: "Пепперони",
      price: 520,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=400&auto=format&fit=crop",
      description: "Пицца с томатным соусом и пепперони",
    },
    {
      id: 9,
      name: "Четыре сыра",
      price: 550,
      image:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=400&auto=format&fit=crop",
      description: "Пицца с четырьмя видами сыра",
    },
  ],
  hot: [
    {
      id: 10,
      name: "Мисо-суп",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=400&auto=format&fit=crop",
      description: "Традиционный японский суп",
    },
    {
      id: 11,
      name: "Том Ям",
      price: 320,
      image:
        "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=400&auto=format&fit=crop",
      description: "Острый тайский суп с морепродуктами",
    },
    {
      id: 23,
      name: "Темпура",
      price: 380,
      image:
        "https://images.unsplash.com/photo-1581184953963-d15972933db1?q=80&w=400&auto=format&fit=crop",
      description: "Овощи и морепродукты в кляре",
    },
    {
      id: 24,
      name: "Якитори",
      price: 340,
      image:
        "https://images.unsplash.com/photo-1602287016476-f95686d941af?q=80&w=400&auto=format&fit=crop",
      description: "Куриные шашлычки в соусе терияки",
    },
  ],
  wok: [
    {
      id: 12,
      name: "Удон с курицей",
      price: 320,
      image:
        "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=400&auto=format&fit=crop",
      description: "Лапша удон с курицей и овощами",
    },
    {
      id: 13,
      name: "Рис с говядиной",
      price: 340,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=400&auto=format&fit=crop",
      description: "Жареный рис с говядиной и овощами",
    },
  ],
  salads: [
    {
      id: 14,
      name: "Чука",
      price: 220,
      image:
        "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=400&auto=format&fit=crop",
      description: "Салат из водорослей чука",
    },
    {
      id: 25,
      name: "Киноа с овощами",
      price: 280,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop",
      description: "Полезный салат с киноа, авокадо и свежими овощами",
    },
    {
      id: 26,
      name: "Поке с лососем",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop",
      description: "Гавайский салат с лососем, рисом и авокадо",
    },
  ],
  appetizers: [
    {
      id: 15,
      name: "Эдамаме",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?q=80&w=400&auto=format&fit=crop",
      description: "Отварные бобы эдамаме с солью",
    },
    {
      id: 27,
      name: "Гёдза",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1573866926487-a1865558a9cf?q=80&w=400&auto=format&fit=crop",
      description: "Жареные пельмени с начинкой из свинины и овощей",
    },
    {
      id: 28,
      name: "Такояки",
      price: 270,
      image:
        "https://images.unsplash.com/photo-1614533708409-fdad0805a4e3?q=80&w=400&auto=format&fit=crop",
      description: "Шарики из теста с кусочками осьминога внутри",
    },
  ],
  toppings: [
    {
      id: 16,
      name: "Имбирь",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1615485500834-bc10199bc727?q=80&w=400&auto=format&fit=crop",
      description: "Маринованный имбирь",
    },
    {
      id: 17,
      name: "Васаби",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1589057362893-a3e5ab79528e?q=80&w=400&auto=format&fit=crop",
      description: "Острая паста из японского хрена",
    },
  ],
  drinks: [
    {
      id: 18,
      name: "Кола",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=400&auto=format&fit=crop",
      description: "Coca-Cola, 0.5л",
    },
    {
      id: 19,
      name: "Зеленый чай",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=400&auto=format&fit=crop",
      description: "Зеленый чай Matcha, 0.5л",
    },
  ],
};
