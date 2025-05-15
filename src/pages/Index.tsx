import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import PromotionSlider from "@/components/PromotionSlider";
import CategoryNavigation from "@/components/CategoryNavigation";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import MenuItemModal from "@/components/MenuItemModal";
import {
  promotions,
  categories,
  menuItems,
  getMenuItemById,
} from "@/data/menuData";
import { MenuItem } from "@/data/types";
import { useDeliveryMode } from "@/hooks/use-delivery-mode";

const Index = () => {
  const navigate = useNavigate();
  const { isDelivery, setIsDelivery } = useDeliveryMode();
  const [activeCategory, setActiveCategory] = useState("sushi");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleItemClick = (itemId: number) => {
    const item = getMenuItemById(itemId);
    if (item) {
      setSelectedItem(item);
      setIsModalOpen(true);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header
        isDelivery={isDelivery}
        setIsDelivery={setIsDelivery}
        categories={categories}
        scrollToCategory={scrollToCategory}
        onCheckout={handleCheckout}
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
              onItemClick={handleItemClick}
            />
          ))}
        </div>

        {/* Modal for item details */}
        <MenuItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedItem}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
