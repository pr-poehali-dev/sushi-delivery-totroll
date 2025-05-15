
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
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
    <section className="mb-8">
      <Carousel className="w-full">
        <CarouselContent>
          {promotions.map((promo) => (
            <CarouselItem key={promo.id}>
              <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-md">
                <img 
                  src={promo.image} 
                  alt={`Акция ${promo.id}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center p-6">
                  <h3 className="text-white text-xl md:text-3xl font-bold text-center drop-shadow-lg">
                    {promo.text}
                  </h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </section>
  );
};

export default PromotionSlider;
