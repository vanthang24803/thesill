"use client";

import dynamic from "next/dynamic";
import { Product } from "@/types";
import { BadgePercent, Star } from "lucide-react";

interface SliceProps {
  product: Product;
}

const SliceLg: React.FC<SliceProps> = ({ product }) => {
  const Image = dynamic(() => import("./image-slide-lg"));

  return (
    <>
      <Image images={product.images} />
      <>
        {product.sale == "1" ? (
          <div className="w-[160px] absolute top-[42%] h-[34px] bg-[#4bd8c8]">
            <div className="flex items-center justify-center space-x-4 mt-[4px] text-center text-base text-white">
              <Star size={16} />
              <p>{product.benefit.name}</p>
            </div>
          </div>
        ) : (
          <div className="px-8 w-[160px] absolute top-[42%] h-[34px] bg-red-500">
            <div className="flex items-center justify-center space-x-4 mt-[4px] text-center text-base text-white">
              <BadgePercent size={18} />
              <p>{product.sale}% Off</p>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default SliceLg;
