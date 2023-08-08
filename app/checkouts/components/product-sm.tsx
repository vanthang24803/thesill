"use client";

import Body from "@/components/ui/body";
import useCart from "@/hooks/use-cart";
import { ShoppingCart, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import Card from "./card";

const SmallProduct = () => {
  const cart = useCart();
  const [open, setOpen] = useState(false);
  const items = useCart((state) => state.items);

  const totalPrice = items.reduce((total, item) => {
    if (item.product.sale == "1") {
      return total + Number(item.product.price) * Number(item.quantity);
    } else {
      return (
        total +
        (Number(item.product.price) -
          (Number(item.product.price) * Number(item.product.sale)) / 100) *
          item.quantity
      );
    }
  }, 0);

  return (
    <div
      className="block  lg:hidden w-full bg-[#f9f8f7] my-4"
      onClick={() => setOpen(!open)}
    >
      <Body>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-[#009a7b] font-medium">
            <ShoppingCart size={20} />
            {open ? (
              <>
                <p>Hiden order summary</p>
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                <p>Show order summary</p>
                <ChevronDown size={20} />
              </>
            )}
          </div>
          <p className="font-semibold text-lg">${totalPrice.toFixed(2)}</p>
        </div>
        {open && (
          <div className=" bg-[#f9f8f7] w-full transition ease-linear mt-8">
            <div className="flex flex-col space-y-3 h-[35vh] overflow-auto">
              {cart.items.map((item) => (
                <Card
                  item={item.product}
                  key={item.product.id}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>
        )}
      </Body>
    </div>
  );
};

export default SmallProduct;
