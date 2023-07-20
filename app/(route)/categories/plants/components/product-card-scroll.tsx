"use client";

import { MoveRight, Star } from "lucide-react";
import { useRouter } from "next/navigation";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import Link from "next/link";

interface ProductCard {
  data: Product;
  head: string;
}

const ProductCardScroll: React.FC<ProductCard> = ({ data, head }) => {
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
          </div>
          {/* Description */}
          <div className="mt-8">
            <p className="lg:text-2xl md:text-xl 2xl">{data.name}</p>
          </div>
          {/* Price & Reiew */}
          <div className="flex items-center justify-between my-4 font-normal">
            <Currency value={data?.price} />
            <span className="text-[14px] italic text-neutral-500">
              + more options
            </span>
          </div>
          <div className="flex items-center space-x-4 hover:text-[#009a7b] hover:italic group hover:font-medium">
            <Link href="/" className="text-lg">
              Shop Now
            </Link>
            <MoveRight
              size={18}
              className="group-hover:translate-x-2 transition ease-in-out"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCardScroll;
