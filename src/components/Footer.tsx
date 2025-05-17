import React from "react";
import Logo from "@/components/ui/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Логотип и информация */}
          <div className="w-full md:w-4/12 mb-6 md:mb-0">
            <div className="flex items-center mb-3">
              <Logo className="h-10 w-10 mr-2" />
              <span className="text-xl font-bold">СушиДоставка</span>
            </div>
            <p className="text-gray-400 mb-3">
              Мы доставляем японскую кухню высочайшего качества по оптимальным
              ценам
            </p>
            <p className="text-gray-400 mb-3">Режим работы: 11:00-23:00</p>
            <p className="text-gray-400">
              <strong>Зона доставки:</strong> Лазаревское от 1100 рублей
              бесплатно. Соседние населённые пункты по тарифу такси.
            </p>
          </div>

          {/* Навигация */}
          <div className="w-full md:w-4/12 mb-6 md:mb-0">
            <h5 className="text-xl font-semibold mb-4">Навигация</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/checkout"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Оформление заказа
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="w-full md:w-4/12">
            <h5 className="text-xl font-semibold mb-4">Контакты</h5>
            <p className="text-gray-400 mb-3">
              <strong>Адрес:</strong> п. Лазаревское, ул. Лазарева 17Б
            </p>
            <p className="text-gray-400 mb-3">
              <strong>Телефон:</strong> +7 (988) 123-45-67
            </p>
            <p className="text-gray-400 mb-3">
              <strong>Email:</strong> info@sushidelivery.ru
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-vk"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} СушиДоставка. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
