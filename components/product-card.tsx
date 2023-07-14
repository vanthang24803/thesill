"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart, Star } from "lucide-react";
import { useRouter } from "next/navigation";

import { Product } from "@/types";
import Currency from "./ui/currency";

interface ProductCard {
  data: Product;
  head: string;
}

const ProductCard: React.FC<ProductCard> = ({ data, head }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <>
      {data.category.name === head ? (
        <div onClick={handleClick} className="group cursor-pointer">
          {/* Image & actions */}

          <div className="aspect-square bg-gray-100 relative">
            <Image
              src={data.images?.[0]?.url}
              alt="products"
              fill
              className="object-cover h-full"
            />
            {/* Banner Sale */}
            {data.benefit.name !== "FREE Shipping" && (
              <>
                {data.sale !== "1" ? (
                  <div className="w-[145px] absolute top-5 h-[30px] bg-[#4bd8c8]">
                    <div className="flex items-center justify-center space-x-4 mt-[4px] text-center text-sm text-white">
                      <Star size={12} />
                      <p>{data.benefit.name}</p>
                    </div>
                  </div>
                ) : (
                  <div className="px-8 absolute top-5 h-[30px] bg-red-500">
                    <div className="flex items-center justify-center space-x-4 mt-[4px] text-center text-sm text-white">
                      <Star size={12} />
                      <p>{data.sale}% Off</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          {/* Description */}
          <div className="mt-8">
            <p className="lg:text-2xl md:text-xl text-2xl">{data.name}</p>
            <p className="lg:text-lg md:text-[14px] text-lg italic text-neutral-500">
              Choose your planter style & color
            </p>
          </div>
          {/* Price & Reiew */}
          <div className="flex items-center justify-between my-4 font-normal">
            <Currency value={data?.price} />
            <span className="text-[14px] italic text-neutral-500">
              + more options
            </span>
          </div>
        </div>
      ) : (
       <></>
      )}
    </>
  );
};

export default ProductCard;
