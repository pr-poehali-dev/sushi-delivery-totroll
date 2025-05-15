import React, { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

interface Promotion {
  id: number;
  text: string;
  image: string;
}

interface PromotionSliderProps {
  promotions: Promotion[];
}

const PromotionSlider: React.FC<PromotionSliderProps> = ({ promotions }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayIntervalRef = useRef<number | null>(null);

  // Запустить автопрокрутку
  const startAutoplay = () => {
    stopAutoplay();
    autoplayIntervalRef.current = window.setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000); // Изменено с 8000 на 5000 (5 секунд)
  };

  // Остановить автопрокрутку
  const stopAutoplay = () => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  };

  // Запустить автопрокрутку при загрузке и очистить при размонтировании
  useEffect(() => {
    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [emblaApi]);

  // Остановить автопрокрутку при наведении курсора и возобновить при уходе
  const handleMouseEnter = () => stopAutoplay();
  const handleMouseLeave = () => startAutoplay();

  return (
    <section className="mb-4 md:mb-6">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {promotions.map((promo) => (
              <div key={promo.id} className="flex-[0_0_100%] min-w-0">
                <div className="relative h-32 sm:h-48 md:h-72 w-full overflow-hidden rounded-md">
                  <img
                    src={promo.image}
                    alt={`Акция ${promo.id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center p-2 md:p-4 lg:p-6">
                    <h3 className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-center drop-shadow-lg">
                      {promo.text}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/75 rounded-full p-1 z-10 shadow-md"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <span className="sr-only">Предыдущий слайд</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/75 rounded-full p-1 z-10 shadow-md"
          onClick={() => emblaApi?.scrollNext()}
        >
          <span className="sr-only">Следующий слайд</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default PromotionSlider;
