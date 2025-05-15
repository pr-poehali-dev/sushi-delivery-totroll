import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Cart from "@/components/Cart";

interface HeaderProps {
  isDelivery: boolean;
  setIsDelivery: (value: boolean) => void;
  categories: { id: string; name: string }[];
  scrollToCategory: (categoryId: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isDelivery,
  setIsDelivery,
  categories,
  scrollToCategory,
}) => {
  return (
    <header className="bg-[#F0E68C] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-0 py-2 sm:px-2 md:px-4 md:py-4">
        <div className="flex items-center">
          {/* Accordion Menu - сдвинут до края экрана */}
          <div className="pl-2 md:pl-0">
            <Accordion type="single" collapsible>
              <AccordionItem value="menu" className="border-none">
                <AccordionTrigger className="py-1 hover:no-underline">
                  <Icon name="Menu" className="h-6 w-6 text-[#B255FF]" />
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="py-2">
                    {categories.map((category) => (
                      <li key={category.id} className="py-1">
                        <button
                          onClick={() => scrollToCategory(category.id)}
                          className="text-[#B255FF] hover:text-[#B255FF]/80 transition-colors"
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

          {/* Название и переключатель - сдвинуты влево */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-[#B255FF] font-cooper ml-1 sm:ml-2">
              РоллТут
            </h1>

            {/* Delivery/Pickup toggle */}
            <div className="flex items-center space-x-1 ml-2 sm:ml-4">
              <span
                className={`text-xs ${!isDelivery ? "font-bold text-[#B255FF]" : "text-[#B255FF]/70"}`}
              >
                Самовывоз
              </span>
              <Switch
                checked={isDelivery}
                onCheckedChange={setIsDelivery}
                className="bg-[#B255FF]/30 data-[state=checked]:bg-[#B255FF] scale-75 sm:scale-100"
              />
              <span
                className={`text-xs ${isDelivery ? "font-bold text-[#B255FF]" : "text-[#B255FF]/70"}`}
              >
                Доставка
              </span>
            </div>
          </div>

          {/* Распорка */}
          <div className="flex-grow"></div>

          {/* Contact Info - сдвинуты вправо к корзине */}
          <div className="hidden md:flex flex-col items-end mr-3">
            <p className="text-[#B255FF] text-sm">г. Москва, ул. Суши, д. 42</p>
            <p className="text-lg font-bold text-[#B255FF]">
              +7 (999) 123-45-67
            </p>
          </div>

          {/* Cart - увеличен значок */}
          <div className="flex items-center mr-2 md:mr-0">
            <Cart isMobile={true} />
          </div>

          {/* Mobile Phone Button */}
          <div className="md:hidden mr-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0 text-[#B255FF]"
            >
              <Icon name="Phone" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
