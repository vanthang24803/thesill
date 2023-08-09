
import { Product } from "@/types";
import React from "react";

interface CardProps {
  quantity: number;
  item: Product;
}

const Card: React.FC<CardProps> = ({ item, quantity }) => {
  const price = Number(item.price) * quantity;
  const priceSale = (
    (Number(item.price) - (Number(item.price) * Number(item.sale)) / 100) *
    quantity
  ).toFixed(2);

  return (
    <div className="flex space-x-4 items-center" key={item.id}>
      <img
        src={item.images[0].url}
        alt="product"
        className="w-20 h-28 object-cover"
      />
      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-2">
          <p className="font-semibold md:text-xl">{item.name}</p>
          <p className="font-medium">x {quantity}</p>
        </div>
        <p className="text-neutral-500 italic md:text-sm text-[12px]">
          {item.size.name} / {item.benefit.name} / {item.color.name}
        </p>
        <div className="flex space-x-4 items-center">
          {item.sale == "1" ? (
            <p className="font-medium text-xl">${price}</p>
          ) : (
            <p className="font-medium text-xl">${priceSale}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
