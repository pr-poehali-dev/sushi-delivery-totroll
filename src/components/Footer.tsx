
import React from "react";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ТотРолл</h3>
            <p className="text-gray-300">Доставка вкусных суши и роллов</p>
            <p className="mt-2 text-gray-300">г. Москва, ул. Суши, д. 42</p>
            <p className="mt-2 text-gray-300">+7 (999) 123-45-67</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Время работы</h3>
            <p className="text-gray-300">Ежедневно: 10:00 - 23:00</p>
            <p className="mt-2 text-gray-300">Без выходных</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-red-400">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="text-white hover:text-red-400">
                <Icon name="Facebook" />
              </a>
              <a href="#" className="text-white hover:text-red-400">
                <Icon name="Twitter" />
              </a>
            </div>
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
