import React from "react";
import Icon from "@/components/ui/icon";
import Logo from "@/components/ui/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo className="scale-75" />
              <h3 className="text-xl font-bold">ТотРолл</h3>
            </div>
            <p className="text-gray-300">Доставка вкусных суши и роллов</p>
            <p className="mt-2 text-gray-300">г. Москва, ул. Суши, д. 42</p>
            <p className="mt-2 text-gray-300">+7 (999) 123-45-67</p>
            <p className="mt-2 text-gray-300">info@totroll.ru</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Время работы</h3>
            <p className="text-gray-300">Ежедневно: 10:00 - 23:00</p>
            <p className="mt-2 text-gray-300">Без выходных</p>

            <h3 className="text-xl font-bold mb-4 mt-6">Оплата</h3>
            <p className="text-gray-300">Наличными курьеру</p>
            <p className="text-gray-300">Картой курьеру</p>
            <p className="text-gray-300">Картой онлайн</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="text-white hover:text-red-400 transition-colors"
              >
                <Icon name="Instagram" />
              </a>
              <a
                href="#"
                className="text-white hover:text-red-400 transition-colors"
              >
                <Icon name="Facebook" />
              </a>
              <a
                href="#"
                className="text-white hover:text-red-400 transition-colors"
              >
                <Icon name="Twitter" />
              </a>
              <a
                href="#"
                className="text-white hover:text-red-400 transition-colors"
              >
                <Icon name="Youtube" />
              </a>
            </div>

            <h3 className="text-xl font-bold mb-4">Доставка</h3>
            <p className="text-gray-300">Бесплатная от 1000 ₽</p>
            <p className="text-gray-300">Время доставки 30-60 мин</p>
            <p className="text-gray-300">Зона доставки: в пределах МКАД</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 ТотРолл. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
