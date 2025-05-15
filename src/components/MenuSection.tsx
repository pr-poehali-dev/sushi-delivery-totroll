import React from "react";
import MenuItem from "./MenuItem";

interface MenuItemType {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface MenuSectionProps {
  id: string;
  title: string;
  items: MenuItemType[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ id, title, items }) => {
  return (
    <section id={id} className="mb-10 scroll-mt-20">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
