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
    <header className="bg-gradient-to-b from-[#C177FF] to-[#B255FF] sticky top-0 z-50">
      <div className="container mx-auto px-0 py-2 sm:px-2 md:px-4 md:py-3">
        <div className="flex items-center justify-between">
          {/* Левая часть с названием */}
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white font-cooper mr-4">
              РоллТут
            </h1>
          </div>

          {/* Центральная часть с переключателем доставки (только на десктопе) */}
          <div className="hidden md:flex items-center space-x-2">
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

          {/* Правая часть с контактами и корзиной */}
          <div className="flex items-center">
            {/* Contact Info - теперь всегда видима */}
            <div className="flex flex-col items-end mr-3 text-right">
              <p className="text-white text-xs sm:text-sm">
                п. Лазаревское, ул. Лазарева 17Б
              </p>
              <p className="text-sm sm:text-lg font-bold text-white">
                +7 (918) 634-84-84
              </p>
            </div>

            {/* Cart */}
            <div className="flex items-center mr-2 md:mr-0">
              <Cart isMobile={true} iconColor="white" onCheckout={onCheckout} />
            </div>
          </div>
        </div>
      </div>

      {/* Волнистая граница для плавного перехода */}
      <svg
        className="w-full h-4 -mb-px"
        viewBox="0 0 1200 30"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 Q300,30 600,15 T1200,0 V30 H0 Z"
          fill="#B255FF"
          fillOpacity="0.8"
        />
      </svg>
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
