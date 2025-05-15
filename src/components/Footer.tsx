import React from "react";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white py-6 sm:py-8">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center mb-3 sm:mb-4">
              <h3 className="text-xl font-bold font-cooper text-[#B255FF]">
                РоллТут
              </h3>
            </div>
            <p className="text-[#B255FF]/80 text-sm">
              Доставка вкусных суши и роллов
            </p>
            <p className="mt-2 text-[#B255FF]/80 text-sm">
              г. Москва, ул. Суши, д. 42
            </p>
            <p className="mt-1 text-[#B255FF]/80 text-sm">+7 (999) 123-45-67</p>
            <p className="mt-1 text-[#B255FF]/80 text-sm">rolltut@sushi.ru</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#B255FF]">
              Время работы
            </h3>
            <p className="text-[#B255FF]/80 text-sm">
              Ежедневно: 10:00 - 23:00
            </p>
            <p className="mt-1 text-[#B255FF]/80 text-sm">Без выходных</p>
            <h3 className="text-lg font-bold mb-2 mt-4 text-[#B255FF]">
              Способы оплаты
            </h3>
            <div className="flex space-x-3">
              <div className="bg-white text-purple-900 p-1 rounded">
                <Icon name="CreditCard" className="h-5 w-5" />
              </div>
              <div className="bg-white text-purple-900 p-1 rounded">
                <Icon name="Wallet" className="h-5 w-5" />
              </div>
              <div className="bg-white text-purple-900 p-1 rounded">
                <Icon name="Smartphone" className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#B255FF]">
              Мы в соцсетях
            </h3>
            <div className="flex space-x-4 mb-4 sm:mb-6">
              <a
                href="#"
                className="text-white hover:text-[#ADFF2F] transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ADFF2F] transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ADFF2F] transition-colors"
              >
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ADFF2F] transition-colors"
              >
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ADFF2F] transition-colors"
              >
                <Icon name="MessageCircle" className="h-5 w-5" />
              </a>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#B255FF]">
              Зона доставки
            </h3>
            <p className="text-[#B255FF]/80 text-sm">
              Вся Москва в пределах МКАД
            </p>
            <p className="text-[#B255FF]/80 text-sm mt-1">
              Доставка от 1000₽ — бесплатно
            </p>
            <p className="text-[#B255FF]/80 text-sm mt-1">До 1000₽ — 250₽</p>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-purple-700 text-center text-[#B255FF]/60 text-sm">
          <p>© 2025 РоллТут. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
