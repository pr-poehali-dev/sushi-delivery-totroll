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
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="relative w-full md:w-64 mb-4 md:mb-0 md:mr-6">
            <Input
              type="text"
              placeholder="Поиск блюд..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
            />
          </div>
          <div className="flex overflow-x-auto py-2 space-x-4 no-scrollbar w-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-4 py-2 whitespace-nowrap rounded-full transition-colors category-button ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-accent hover:text-accent-foreground"
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
