import React, { useState } from "react";
import Header from "@/components/Header";
import PromotionSlider from "@/components/PromotionSlider";
import CategoryNavigation from "@/components/CategoryNavigation";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import { promotions, categories, menuItems } from "@/data/menuData";

const Index = () => {
  const [isDelivery, setIsDelivery] = useState(true);
  const [activeCategory, setActiveCategory] = useState("sushi");
  const [searchTerm, setSearchTerm] = useState("");

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header
        isDelivery={isDelivery}
        setIsDelivery={setIsDelivery}
        categories={categories}
        scrollToCategory={scrollToCategory}
      />

      <main className="flex-grow">
        {/* Hero Slider */}
        <PromotionSlider promotions={promotions} />

        {/* Category Navigation */}
        <CategoryNavigation
          categories={categories}
          activeCategory={activeCategory}
          scrollToCategory={scrollToCategory}
        />

        {/* Menu Sections */}
        <div className="container mx-auto px-4 pb-12">
          {categories.map((category) => (
            <MenuSection
              key={category.id}
              id={category.id}
              title={category.name}
              items={menuItems[category.id]}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
