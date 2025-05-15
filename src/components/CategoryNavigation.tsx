
import React from "react";

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
  scrollToCategory 
}) => {
  return (
    <section className="mb-8">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-2 space-x-4 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className={`px-4 py-2 whitespace-nowrap rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;
