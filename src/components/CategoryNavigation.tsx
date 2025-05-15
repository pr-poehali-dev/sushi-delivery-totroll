import React from "react";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface Category {
  id: string;
  name: string;
}

interface CategoryNavigationProps {
  categories: Category[];
  activeCategory: string;
  scrollToCategory: (categoryId: string) => void;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  categories,
  activeCategory,
  scrollToCategory,
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <section className="mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
          {/* Поиск */}
          <div className="relative w-full md:w-64">
            <Input
              placeholder="Найти в меню..."
              className="pl-10 border-purple-300 focus-visible:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-500"
            />
          </div>

          {/* Категории */}
          <div className="flex overflow-x-auto py-2 space-x-4 no-scrollbar flex-grow">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-4 py-2 whitespace-nowrap rounded-full transition-colors font-ebrima font-bold ${
                  activeCategory === category.id
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-800 hover:bg-purple-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;
