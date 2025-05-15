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
    <header className="bg-[#F0E68C] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Accordion Menu */}
          <div className="md:block mr-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="menu">
                <AccordionTrigger className="py-1">
                  <Icon name="Menu" className="h-6 w-6 text-purple-800" />
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="py-2">
                    {categories.map((category) => (
                      <li key={category.id} className="py-1">
                        <button
                          onClick={() => scrollToCategory(category.id)}
                          className="text-purple-800 hover:text-purple-600 transition-colors"
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

          {/* Logo и название */}
          <div className="flex items-center flex-grow md:flex-grow-0">
            <Logo className="mr-3" />
            <h1 className="text-2xl font-bold text-purple-800">РоллТут</h1>

            {/* Delivery/Pickup toggle */}
            <div className="flex items-center space-x-2 ml-4">
              <span
                className={`text-sm ${!isDelivery ? "font-bold text-purple-900" : "text-purple-700"}`}
              >
                Самовывоз
              </span>
              <Switch
                checked={isDelivery}
                onCheckedChange={setIsDelivery}
                className="bg-purple-300 data-[state=checked]:bg-purple-600"
              />
              <span
                className={`text-sm ${isDelivery ? "font-bold text-purple-900" : "text-purple-700"}`}
              >
                Доставка
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex flex-col items-end">
            <p className="text-purple-800 text-sm">
              г. Москва, ул. Суши, д. 42
            </p>
            <p className="text-xl font-bold text-purple-900">
              +7 (999) 123-45-67
            </p>
          </div>

          {/* Cart */}
          <div className="flex items-center">
            <Cart />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-purple-800">
              <Icon name="Phone" className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
