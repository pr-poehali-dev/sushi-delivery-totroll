import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MenuItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  price,
  image,
  description,
}) => {
  return (
    <Card
      key={id}
      className="overflow-hidden hover:shadow-lg transition-shadow border-[#B255FF]/20"
    >
      <div className="h-32 sm:h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardContent className="pt-2 pb-1 px-2 md:pt-3 md:px-3">
        <CardTitle className="text-base sm:text-lg text-black">
          {name}
        </CardTitle>
        <CardDescription className="mt-1 text-xs sm:text-sm h-8 line-clamp-2 text-black/80">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between px-2 py-2 md:px-3">
        <p className="font-bold text-sm sm:text-base text-black">{price} ₽</p>
        <Button className="h-8 px-2 text-xs bg-[#B255FF] hover:bg-[#B255FF]/80">
          В корзину
          <Icon name="ShoppingCart" className="ml-1 h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItem;
