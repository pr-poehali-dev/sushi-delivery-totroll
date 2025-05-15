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
      className="overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="h-36 md:h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardContent className="pt-3 pb-1">
        <CardTitle className="text-base md:text-lg">{name}</CardTitle>
        <CardDescription className="mt-1 h-8 text-xs overflow-hidden">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <p className="font-bold text-sm md:text-base text-red-600">{price} ₽</p>
        <Button size="sm" className="bg-red-600 hover:bg-red-700 text-xs">
          В корзину
          <Icon name="ShoppingCart" className="ml-1 h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItem;
