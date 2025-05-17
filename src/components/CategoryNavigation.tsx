import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { getAllMenuItems } from "@/data/menuData";

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
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Функция поиска по меню
  const handleSearch = (term: string) => {
    setSearchTerm(term);

    if (term.trim() === "") {
      setSearchResults([]);
      return;
    }

    const allItems = getAllMenuItems();
    const results = allItems
      .filter((item) => {
        const searchLower = term.toLowerCase();
        return (
          item.name.toLowerCase().includes(searchLower) ||
          (item.description &&
            item.description.toLowerCase().includes(searchLower))
        );
      })
      .slice(0, 5); // Ограничиваем до 5 результатов

    setSearchResults(results);
  };

  // Закрытие поиска при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="mb-4 md:mb-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-row items-center gap-2 sm:gap-4">
          {/* Поиск (скрытый/раскрытый) */}
          <div ref={searchRef} className="relative flex items-center">
            {showSearch ? (
              <>
                <Input
                  placeholder="Найти в меню..."
                  className="pl-10 border-[#B255FF]/40 focus-visible:ring-[#B255FF] w-[180px] sm:w-[220px]"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
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
                  onClick={() => {
                    setShowSearch(false);
                    setSearchTerm("");
                    setSearchResults([]);
                  }}
                >
                  <Icon name="X" className="h-4 w-4 text-[#B255FF]" />
                </Button>

                {searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-white rounded-md shadow-lg overflow-hidden">
                    {searchResults.map((item) => (
                      <div
                        key={item.id}
                        className="px-4 py-2 hover:bg-[#B255FF]/10 cursor-pointer"
                        onClick={() => {
                          const category = categories.find(
                            (cat) =>
                              Object.keys(menuItems).includes(cat.id) &&
                              menuItems[cat.id].some(
                                (menuItem) => menuItem.id === item.id,
                              ),
                          );

                          if (category) {
                            scrollToCategory(category.id);
                            setShowSearch(false);
                            setSearchTerm("");
                            setSearchResults([]);
                          }
                        }}
                      >
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-gray-500 truncate">
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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

          {/* Категории - кнопки увеличены для мобильной версии */}
          <div className="flex overflow-x-auto py-2 space-x-2 sm:space-x-4 no-scrollbar flex-grow">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-4 py-2.5 sm:px-4 sm:py-2 whitespace-nowrap rounded-full transition-colors text-sm sm:text-base font-semibold ${
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
