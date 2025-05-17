
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Показывать кнопку только когда страница прокручена вниз
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Функция прокрутки наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-[#B255FF] text-white shadow-lg hover:bg-[#9F44E8] border-none animate-in fade-in duration-300 z-30"
          onClick={scrollToTop}
        >
          <Icon name="ArrowUp" className="h-6 w-6" />
          <span className="sr-only">Наверх</span>
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
