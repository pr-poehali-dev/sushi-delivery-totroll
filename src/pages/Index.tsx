
import React, { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isDelivery, setIsDelivery] = useState(true);
  const [activeCategory, setActiveCategory] = useState("sushi");

  const promotions = [
    {
      id: 1,
      text: "Доставка от 1000 рублей бесплатно!",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 2,
      text: "Оставь фотоотзыв на Яндекс.Картах либо 2ГИС и получи ролл в подарок!",
      image: "https://images.unsplash.com/photo-1562802378-063ec186a863?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 3,
      text: "Скидка 15% имениннику за три дня до, и после дня рождения!",
      image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 4,
      text: "Собери свой СЕТ из четырёх роллов, пятый ролл в подарок!",
      image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1920&auto=format&fit=crop"
    }
  ];

  const categories = [
    { id: "sushi", name: "Суши-Роллы" },
    { id: "pizza", name: "Пицца" },
    { id: "soups", name: "Супы" },
    { id: "wok", name: "WOK" },
    { id: "salads", name: "Салаты и закуски" },
    { id: "toppings", name: "Топпинги" },
    { id: "drinks", name: "Напитки" }
  ];

  const menuItems = {
    sushi: [
      { id: 1, name: "Калифорния", price: 320, image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=400&auto=format&fit=crop", description: "Классический ролл с крабовым мясом и авокадо" },
      { id: 2, name: "Филадельфия", price: 380, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=400&auto=format&fit=crop", description: "Ролл с лососем и сливочным сыром" },
      { id: 3, name: "Дракон", price: 420, image: "https://images.unsplash.com/photo-1676037150408-4b59a542f038?q=80&w=400&auto=format&fit=crop", description: "Запеченный ролл с угрем и авокадо" },
      { id: 4, name: "Сяке Маки", price: 280, image: "https://images.unsplash.com/photo-1648146299011-2c231d0c0501?q=80&w=400&auto=format&fit=crop", description: "Ролл с лососем и огурцом" },
      { id: 5, name: "Тори Маки", price: 250, image: "https://images.unsplash.com/photo-1615361200141-f45625b9a1bd?q=80&w=400&auto=format&fit=crop", description: "Ролл с курицей и овощами" },
      { id: 6, name: "Темпура Эби", price: 340, image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=400&auto=format&fit=crop", description: "Жареные во фритюре креветки" }
    ],
    pizza: [
      { id: 7, name: "Маргарита", price: 450, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop", description: "Классическая пицца с томатами и моцареллой" },
      { id: 8, name: "Пепперони", price: 520, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=400&auto=format&fit=crop", description: "Пицца с томатным соусом и пепперони" },
      { id: 9, name: "Четыре сыра", price: 550, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=400&auto=format&fit=crop", description: "Пицца с четырьмя видами сыра" }
    ],
    soups: [
      { id: 10, name: "Мисо-суп", price: 180, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=400&auto=format&fit=crop", description: "Традиционный японский суп" },
      { id: 11, name: "Том Ям", price: 320, image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=400&auto=format&fit=crop", description: "Острый тайский суп с морепродуктами" }
    ],
    wok: [
      { id: 12, name: "Удон с курицей", price: 320, image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=400&auto=format&fit=crop", description: "Лапша удон с курицей и овощами" },
      { id: 13, name: "Рис с говядиной", price: 340, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=400&auto=format&fit=crop", description: "Жареный рис с говядиной и овощами" }
    ],
    salads: [
      { id: 14, name: "Чука", price: 220, image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=400&auto=format&fit=crop", description: "Салат из водорослей чука" },
      { id: 15, name: "Эдамаме", price: 180, image: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?q=80&w=400&auto=format&fit=crop", description: "Отварные бобы эдамаме с солью" }
    ],
    toppings: [
      { id: 16, name: "Имбирь", price: 50, image: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?q=80&w=400&auto=format&fit=crop", description: "Маринованный имбирь" },
      { id: 17, name: "Васаби", price: 50, image: "https://images.unsplash.com/photo-1589057362893-a3e5ab79528e?q=80&w=400&auto=format&fit=crop", description: "Острая паста из японского хрена" }
    ],
    drinks: [
      { id: 18, name: "Кола", price: 120, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=400&auto=format&fit=crop", description: "Coca-Cola, 0.5л" },
      { id: 19, name: "Зеленый чай", price: 150, image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=400&auto=format&fit=crop", description: "Зеленый чай Matcha, 0.5л" }
    ]
  };

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Accordion Menu */}
            <div className="md:block mr-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="menu">
                  <AccordionTrigger className="py-1">
                    <Icon name="Menu" className="h-6 w-6" />
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="py-2">
                      {categories.map((category) => (
                        <li key={category.id} className="py-1">
                          <button 
                            onClick={() => scrollToCategory(category.id)}
                            className="text-gray-700 hover:text-red-600 transition-colors"
                          >
                            {category.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Logo */}
            <div className="flex items-center flex-grow md:flex-grow-0">
              <h1 className="text-2xl font-bold text-red-600 mr-2">ТотРолл</h1>
              
              {/* Delivery/Pickup toggle */}
              <div className="flex items-center space-x-2 ml-4">
                <span className={`text-sm ${!isDelivery ? 'font-bold' : ''}`}>Самовывоз</span>
                <Switch 
                  checked={isDelivery} 
                  onCheckedChange={setIsDelivery} 
                />
                <span className={`text-sm ${isDelivery ? 'font-bold' : ''}`}>Доставка</span>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="hidden md:flex flex-col items-end">
              <p className="text-gray-700 text-sm">г. Москва, ул. Суши, д. 42</p>
              <p className="text-xl font-bold text-red-600">+7 (999) 123-45-67</p>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Icon name="Phone" className="h-5 w-5 text-red-600" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Slider */}
        <section className="mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {promotions.map((promo) => (
                <CarouselItem key={promo.id}>
                  <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-md">
                    <img 
                      src={promo.image} 
                      alt={`Акция ${promo.id}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center p-6">
                      <h3 className="text-white text-xl md:text-3xl font-bold text-center drop-shadow-lg">
                        {promo.text}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </section>

        {/* Category Navigation */}
        <section className="mb-8">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto py-2 space-x-4 no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className={`px-4 py-2 whitespace-nowrap rounded-full transition-colors ${
                    activeCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Sections */}
        <div className="container mx-auto px-4 pb-12">
          {categories.map((category) => (
            <section 
              key={category.id} 
              id={category.id} 
              className="mb-12 scroll-mt-24"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">{category.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[category.id].map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardContent className="pt-4">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription className="mt-2 h-10">{item.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <p className="font-bold text-lg text-red-600">{item.price} ₽</p>
                      <Button className="bg-red-600 hover:bg-red-700">
                        В корзину
                        <Icon name="ShoppingCart" className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ТотРолл</h3>
              <p className="text-gray-300">Доставка вкусных суши и роллов</p>
              <p className="mt-2 text-gray-300">г. Москва, ул. Суши, д. 42</p>
              <p className="mt-2 text-gray-300">+7 (999) 123-45-67</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Время работы</h3>
              <p className="text-gray-300">Ежедневно: 10:00 - 23:00</p>
              <p className="mt-2 text-gray-300">Без выходных</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-red-400">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="text-white hover:text-red-400">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="text-white hover:text-red-400">
                  <Icon name="Twitter" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 ТотРолл. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
