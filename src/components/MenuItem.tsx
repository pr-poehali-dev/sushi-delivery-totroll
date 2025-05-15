
import React from "react";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardTitle, 
  CardDescription 
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

const MenuItem: React.FC<MenuItemProps> = ({ id, name, price, image, description }) => {
  return (
    <Card key={id} className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardContent className="pt-4">
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="mt-2 h-10">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="font-bold text-lg text-red-600">{price} ₽</p>
        <Button className="bg-red-600 hover:bg-red-700">
          В корзину
          <Icon name="ShoppingCart" className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItem;
