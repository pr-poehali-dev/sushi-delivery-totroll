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
    <section id={id} className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold mb-6 text-primary border-b border-accent pb-2">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
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
