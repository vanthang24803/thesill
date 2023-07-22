"use client";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";

const page = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
 
  const cart = useCart();
  return (
    <>
      {isClient && (
        <>
          {cart.items.length}
          <Button onClick={cart.removeAll}>remove</Button>
          {cart.items.map((item) => (
            <>
              <img
                src={item.product.images[0].url}
                alt=""
                key={item.product.id}
              />
              <p>{item.quantity}</p>
            </>
          ))}
        </>
      )}
    </>
  );
};

export default page;
