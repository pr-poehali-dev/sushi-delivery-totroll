import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Cart from "@/components/Cart";

interface HeaderProps {
  isDelivery: boolean;
  setIsDelivery: (value: boolean) => void;
  categories: { id: string; name: string }[];
  scrollToCategory: (categoryId: string) => void;
  onCheckout?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isDelivery,
  setIsDelivery,
  categories,
  scrollToCategory,
  onCheckout,
}) => {
  return (
    <header className="bg-[#C177FF] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-0 py-2 sm:px-2 md:px-4 md:py-4">
        <div className="flex items-center">
          {/* Название бренда */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-white font-cooper ml-1 sm:ml-2">
              РоллТут
            </h1>

            {/* Delivery/Pickup toggle - только для десктопа */}
            <div className="hidden md:flex items-center space-x-1 ml-4">
              <span
                className={`text-sm ${!isDelivery ? "font-bold text-white" : "text-white/70"}`}
              >
                Самовывоз
              </span>
              <div className="mx-2">
                <DeliveryToggle
                  isDelivery={isDelivery}
                  setIsDelivery={setIsDelivery}
                />
              </div>
              <span
                className={`text-sm ${isDelivery ? "font-bold text-white" : "text-white/70"}`}
              >
                Доставка
              </span>
            </div>
          </div>

          {/* Распорка */}
          <div className="flex-grow"></div>

          {/* Contact Info - сдвинуты вправо к корзине */}
          <div className="hidden md:flex flex-col items-end mr-3">
            <p className="text-white text-sm">
              п. Лазаревское, ул. Лазарева 17Б
            </p>
            <p className="text-lg font-bold text-white">+7 (918) 634-84-84</p>
          </div>

          {/* Cart - увеличен значок */}
          <div className="flex items-center mr-2 md:mr-0">
            <Cart isMobile={true} iconColor="white" onCheckout={onCheckout} />
          </div>

          {/* Mobile Phone Button */}
          <div className="md:hidden mr-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0 text-white"
            >
              <Icon name="Phone" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Выделение переключателя в отдельный компонент для повторного использования
export const DeliveryToggle: React.FC<{
  isDelivery: boolean;
  setIsDelivery: (value: boolean) => void;
  className?: string;
}> = ({ isDelivery, setIsDelivery, className = "" }) => {
  return (
    <div
      className={`h-6 w-12 rounded-full bg-white relative cursor-pointer ${className}`}
      onClick={() => setIsDelivery(!isDelivery)}
    >
      <div
        className={`absolute top-1 h-4 w-4 rounded-full transition-all duration-300 ${
          isDelivery ? "right-1 bg-[#C177FF]" : "left-1 bg-black"
        }`}
      ></div>
    </div>
  );
};

export default Header;
