"use client"

import useCart from "@/hooks/use-cart";
import Card from "./card";
import Sumary from "./sumary";

const Product = () => {
  const cart = useCart();
  return (
    <>
      <div className="lg:w-1/2 hidden w-full bg-[#f9f8f7] my-8 p-8 lg:flex flex-col space-y-4">
        <div className="flex flex-col space-y-3 h-[50vh] overflow-auto">
          {cart.items.map((item) => (
            <Card
              item={item.product}
              key={item.product.id}
              quantity={item.quantity}
            />
          ))}
        </div>
        <Sumary />
      </div>
    </>
  );
};

export default Product;
