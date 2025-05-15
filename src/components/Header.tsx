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
import Logo from "@/components/ui/Logo";
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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Accordion Menu */}
          <div className="md:block mr-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="menu">
                <AccordionTrigger className="py-1">
                  <Icon name="Menu" className="h-5 w-5" />
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

          {/* Logo and Brand Name */}
          <div className="flex items-center flex-grow md:flex-grow-0">
            <Logo />
            <h1 className="text-xl md:text-2xl font-bold text-red-600 mr-2">
              ТотРолл
            </h1>

            {/* Delivery/Pickup toggle */}
            <div className="flex items-center space-x-1 ml-2 md:ml-4">
              <span
                className={`text-xs md:text-sm ${!isDelivery ? "font-bold" : ""}`}
              >
                Самовывоз
              </span>
              <Switch checked={isDelivery} onCheckedChange={setIsDelivery} />
              <span
                className={`text-xs md:text-sm ${isDelivery ? "font-bold" : ""}`}
              >
                Доставка
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex flex-col items-end mr-4">
            <p className="text-gray-700 text-xs">г. Москва, ул. Суши, д. 42</p>
            <p className="text-lg font-bold text-red-600">+7 (999) 123-45-67</p>
          </div>

          {/* Cart Button */}
          <div className="hidden md:block">
            <Cart />
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="sm" className="mr-2">
              <Icon name="Phone" className="h-5 w-5 text-red-600" />
            </Button>
            <Cart isMobile={true} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
