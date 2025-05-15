import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <section className="mb-4 md:mb-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-row items-center gap-2 sm:gap-4">
          {/* Поиск (скрытый/раскрытый) */}
          <div className="relative flex items-center">
            {showSearch ? (
              <>
                <Input
                  placeholder="Найти в меню..."
                  className="pl-10 border-[#B255FF]/40 focus-visible:ring-[#B255FF] w-[180px] sm:w-[220px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#B255FF]"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7"
                  onClick={() => setShowSearch(false)}
                >
                  <Icon name="X" className="h-4 w-4 text-[#B255FF]" />
                </Button>
              </>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-black"
                onClick={() => setShowSearch(true)}
              >
                <Icon name="Search" className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Категории */}
          <div className="flex overflow-x-auto py-2 space-x-2 sm:space-x-4 no-scrollbar flex-grow">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap rounded-full transition-colors text-sm sm:text-base font-semibold ${
                  activeCategory === category.id
                    ? "bg-[#B255FF] text-white"
                    : "bg-white text-black hover:bg-[#B255FF]/10"
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
