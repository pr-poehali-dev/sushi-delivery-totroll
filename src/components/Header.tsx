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
    <header className="bg-secondary shadow-md sticky top-0 z-50">
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
                          className="text-gray-700 hover:text-primary transition-colors"
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
            <Logo />
            <h1 className="text-2xl font-bold text-primary mr-2">РоллТут</h1>

            {/* Delivery/Pickup toggle */}
            <div className="flex items-center space-x-2 ml-4">
              <span className={`text-sm ${!isDelivery ? "font-bold" : ""}`}>
                Самовывоз
              </span>
              <Switch checked={isDelivery} onCheckedChange={setIsDelivery} />
              <span className={`text-sm ${isDelivery ? "font-bold" : ""}`}>
                Доставка
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex flex-col items-end">
            <p className="text-gray-700 text-sm">г. Москва, ул. Суши, д. 42</p>
            <p className="text-xl font-bold text-primary">+7 (999) 123-45-67</p>
          </div>

          {/* Cart */}
          <div className="hidden md:block ml-4">
            <Cart />
          </div>

          {/* Mobile Menu & Cart Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Icon name="Phone" className="h-5 w-5 text-primary" />
            </Button>
            <Cart isMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
