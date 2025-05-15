import React from "react";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">РоллТут</h3>
            <p className="text-gray-300">Доставка вкусных суши и роллов</p>
            <p className="mt-2 text-gray-300">г. Москва, ул. Суши, д. 42</p>
            <p className="mt-2 text-gray-300">+7 (999) 123-45-67</p>
            <p className="mt-2 text-gray-300">rolltut@example.com</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Доставка</h3>
            <p className="text-gray-300">Ежедневно: 10:00 - 23:00</p>
            <p className="mt-2 text-gray-300">Без выходных</p>
            <p className="mt-2 text-gray-300">Минимальный заказ: 600 ₽</p>
            <p className="mt-2 text-gray-300">Доставка от 1000 ₽: бесплатно</p>
            <p className="mt-2 text-gray-300">Зона доставки: 5 км</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Правовая информация
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              Мы в соцсетях
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-white hover:text-primary"
                aria-label="Instagram"
              >
                <Icon name="Instagram" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary"
                aria-label="Facebook"
              >
                <Icon name="Facebook" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary"
                aria-label="Twitter"
              >
                <Icon name="Twitter" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary"
                aria-label="Youtube"
              >
                <Icon name="Youtube" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary"
                aria-label="Telegram"
              >
                <Icon name="Send" />
              </a>
            </div>

            <h3 className="text-xl font-bold mb-3 mt-6 text-primary">
              Способы оплаты
            </h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-white p-1 rounded w-12 h-8 flex items-center justify-center">
                <Icon name="CreditCard" className="text-gray-800" />
              </div>
              <div className="bg-white p-1 rounded w-12 h-8 flex items-center justify-center">
                <span className="text-black font-bold text-xs">VISA</span>
              </div>
              <div className="bg-white p-1 rounded w-12 h-8 flex items-center justify-center">
                <span className="text-black font-bold text-xs">MC</span>
              </div>
              <div className="bg-white p-1 rounded w-12 h-8 flex items-center justify-center">
                <span className="text-black font-bold text-xs">МИР</span>
              </div>
              <div className="bg-white p-1 rounded w-12 h-8 flex items-center justify-center">
                <Icon name="Wallet" className="text-gray-800" />
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-gray-700" />

        <div className="text-center text-gray-400">
          <p>© 2025 РоллТут. Все права защищены.</p>
          <p className="mt-2 text-sm">
            Изображения блюд на сайте могут отличаться от блюд в заказе
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
