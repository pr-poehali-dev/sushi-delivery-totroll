import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface Promotion {
  id: number;
  text: string;
  image: string;
}

interface PromotionSliderProps {
  promotions: Promotion[];
}

const PromotionSlider: React.FC<PromotionSliderProps> = ({ promotions }) => {
  return (
    <section className="mb-6">
      <Carousel className="w-full">
        <CarouselContent>
          {promotions.map((promo) => (
            <CarouselItem key={promo.id}>
              <div className="relative h-48 md:h-72 w-full overflow-hidden rounded-md">
                <img
                  src={promo.image}
                  alt={`Акция ${promo.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center p-4 md:p-6">
                  <h3 className="text-white text-lg md:text-2xl lg:text-3xl font-bold text-center drop-shadow-lg">
                    {promo.text}
                  </h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 h-8 w-8" />
        <CarouselNext className="right-2 h-8 w-8" />
      </Carousel>
    </section>
  );
};

export default PromotionSlider;
