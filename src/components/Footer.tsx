import React from "react";
import Icon from "@/components/ui/icon";
import Logo from "@/components/ui/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo className="mr-2" />
              <h3 className="text-xl font-bold">РоллТут</h3>
            </div>
            <p className="text-purple-200">Доставка вкусных суши и роллов</p>
            <p className="mt-2 text-purple-200">г. Москва, ул. Суши, д. 42</p>
            <p className="mt-2 text-purple-200">+7 (999) 123-45-67</p>
            <p className="mt-2 text-purple-200">rolltut@sushi.ru</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Время работы</h3>
            <p className="text-purple-200">Ежедневно: 10:00 - 23:00</p>
            <p className="mt-2 text-purple-200">Без выходных</p>
            <h3 className="text-xl font-bold mb-2 mt-6">Способы оплаты</h3>
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
          <div>
            <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="text-white hover:text-[#ADFF2F] transition-colors"
              >
                <Icon name="Instagram" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ADFF2F] transition-colors"
              >
                <Icon name="Facebook" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ADFF2F] transition-colors"
              >
                <Icon name="Twitter" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ADFF2F] transition-colors"
              >
                <Icon name="Youtube" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ADFF2F] transition-colors"
              >
                <Icon name="MessageCircle" />
              </a>
            </div>
            <h3 className="text-xl font-bold mb-2">Зона доставки</h3>
            <p className="text-purple-200">Вся Москва в пределах МКАД</p>
            <p className="text-purple-200 mt-1">
              Доставка от 1000₽ — бесплатно
            </p>
            <p className="text-purple-200 mt-1">До 1000₽ — 250₽</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-purple-700 text-center text-purple-300">
          <p>© 2025 РоллТут. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
