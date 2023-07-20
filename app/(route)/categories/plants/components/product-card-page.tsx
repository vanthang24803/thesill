"use client";

import { Star } from "lucide-react";
import { BadgePercent } from "lucide-react";
import { useRouter } from "next/navigation";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";

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
      {data.category.name === head && (
        <div onClick={handleClick} className="group cursor-pointer">
          {/* Image & actions */}
          <div className="aspect-square relative">
            <img
              src={data.images?.[0]?.url}
              alt="products"
              className="object-cover w-full"
            />
            <div className="hidden group-hover:block transition absolute w-full px-6 bottom-5">
              <Button
                className="hover:opacity-100 hidden md:block  border-none h-12 bg-[#05b894]
               hover:bg-[#009A7b] font-medium"
                onClick={handleClick}
              >
                View Details
              </Button>
            </div>
            {/* Banner Sale */}
            {data.benefit.name !== "FREE Shipping" && (
              <>
                {data.sale == "1" ? (
                  <div className="w-[140px] absolute top-5 h-[30px] bg-[#4bd8c8]">
                    <div className="flex items-center justify-center space-x-4 mt-[4px] text-center text-sm text-white">
                      <Star size={12} />
                      <p>{data.benefit.name}</p>
                    </div>
                  </div>
                ) : (
                  <div className="px-8 absolute top-5 h-[30px] bg-red-500">
                    <div className="flex items-center justify-center space-x-4 mt-[4px] text-center text-sm text-white">
                      <BadgePercent size={14} />
                      <p>{data.sale}% Off</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          {/* Description */}
          <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition absolute bg-white h-[12vh] w-[23%] mt-2">
            <div className="w-full flex flex-col space-y-3">
              {data.color.name !== "null" && (
                <div className="w-full">
                  <div
                    className="w-8 h-8 rounded-full border-[1px] border-neutral-300"
                    style={{ backgroundColor: data.color.value }}
                  ></div>
                </div>
              )}
              <p className="lg:text-2xl md:text-xl text-2xl w-full">
                {data.name}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="lg:text-2xl md:text-xl 2xl">{data.name}</p>
            {data.color.name !== "null" && (
              <p className="lg:text-lg md:text-[14px] text-lg italic text-neutral-500">
                Choose your planter style & color
              </p>
            )}
          </div>
          {/* Price & Reiew */}
          <div className="flex items-center justify-between my-4 font-normal">
            <Currency value={data?.price} />
            <span className="text-[14px] italic text-neutral-500">
              + more options
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
