"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types";
import { Info, Minus, Plus } from "lucide-react";
import Currency from "@/components/ui/currency";
import { CreditCard } from "lucide-react";
import Button from "@/components/ui/button";
import Bonus from "./bonus";
import Description from "./description";

interface InfomationProps {
  product: Product;
}

const Infomation: React.FC<InfomationProps> = ({ product }) => {
  const [count, setCount] = useState(1);
  const handlePlusCount = () => {
    setCount(count + 1);
  };

  const handleMinusCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  3;
  const priceSale =
    Number(product.price) -
    (Number(product.price) * Number(product.sale)) / 100;

  return (
    <div className="flex flex-col">
      {/* Price */}
      <div className="pt-4 lg:pb-4 pb-2 border-b">
        <span className="font-medium lg:text-5xl md:text-3xl text-2xl ">
          {product.name}
        </span>
        {product.sale == "1" ? (
          <div className="flex md:flex-row flex-colitems-center justify-between lg:mt-6 mt-4 lg:text-2xl text-xl">
            <Currency value={product.price} />
            <div className="flex items-center space-x-2">
              <p className="text-sm">or 4 payments of $13.50 with</p>
              <CreditCard
                size={20}
                className="hover:cursor-pointer"
                onClick={() => {}}
              />
              <Info
                size={12}
                className="hover:cursor-pointer"
                onClick={() => {}}
              />
            </div>
          </div>
        ) : (
          <div className="flex md:flex-row flex-col md:items-center justify-between lg:mt-6 mt-4 lg:text-2xl text-xl">
            <div className="flex items-center md:justify-start justify-between space-x-3">
              <div className="flex space-x-3">
                <p className="line-through">
                  <Currency value={product.price} />
                </p>
                <p className="text-[#009a7b]">
                  <Currency value={priceSale} />
                </p>
              </div>

              <div className="flex items-center space-x-1 px-2">
                <Info size={14} />
                <p className="text-base font-medium">{product.sale}% Off</p>
                <div className="bg-red-500 rounded-xl w-12 h-5 text-center">
                  <p className="text-sm font-medium text-white">SALE</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:mt-0 mt-4">
              <p className="text-sm">or 4 payments of $13.50 with</p>
              <CreditCard
                size={20}
                className="hover:cursor-pointer"
                onClick={() => {}}
              />
              <Info
                size={12}
                className="hover:cursor-pointer"
                onClick={() => {}}
              />
            </div>
          </div>
        )}
      </div>

      {/* Sale */}
      {product.size.name !== "null" && (
        <div className="md:mt-6 mt-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-base">Size:</span>
            <span
              className="font-medium text-lg underline text-[#009a7b] hover:cursor-pointer"
              onClick={() => {}}
            >
              Size Guide
            </span>
          </div>

          <div className="w-1/3 lg:h-14 h-12 mt-4 flex justify-center items-center border border-neutral-500 hover:cursor-pointer">
            <span className="font-medium italic">{product.size.name}</span>
          </div>
        </div>
      )}

      {/* Color */}
      {product.color.name !== "null" && (
        <div className="md:mt-6 mt-4">
          <div className="flex items-center space-x-3">
            <span className="font-medium text-base">Size: </span>
            <span className="text-neutral-400 italic">
              {product.color.name}
            </span>
          </div>
          <div className="rounded-full w-12 h-12 mt-3 hover:cursor-pointer border border-neutral-500 flex items-center justify-center">
            <div
              className="w-9 h-9 rounded-full border"
              style={{ backgroundColor: product.color.value }}
            ></div>
          </div>
        </div>
      )}

      {/* Add to Cart */}
      <>
        <div className="mt-6 flex lg:hidden  flex-col">
          <div className="flex space-x-8 items-center">
            <div
              className="w-6 h-6 border-neutral-500 rounded-full border flex items-center justify-center "
              onClick={handleMinusCount}
            >
              <Minus size={8} />
            </div>
            <span className="font-medium text-lg">{count}</span>
            <div
              className="w-6 h-6 border-neutral-500 rounded-full border flex items-center justify-center "
              onClick={handlePlusCount}
            >
              <Plus size={8} />
            </div>
          </div>
          <Button className="h-[6vh] mt-6" onClick={() => {}}>
            Add To Cat
          </Button>
        </div>
        <div className="mt-8 hidden lg:flex items-center space-x-6">
          <Button className="h-[7vh] w-full" onClick={() => {}}>
            Add To Cart
          </Button>
          <div className="flex space-x-6 items-center hover:cursor-pointer">
            <div
              className="w-6 h-6 border-neutral-500 rounded-full border flex items-center justify-center "
              onClick={handleMinusCount}
            >
              <Minus size={8} />
            </div>
            <span className="font-medium text-lg">{count}</span>
            <div
              className="w-6 h-6 border-neutral-500 rounded-full border flex items-center justify-center "
              onClick={handlePlusCount}
            >
              <Plus size={8} />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-8 space-x-2">
          <Image
            src="/images/category/check.svg"
            width={30}
            height={30}
            alt="Check"
          />
          <span className="md:text-lg text-base font-medium underline hover:cursor-pointer">
            30-Day Customer Happiness Guarantee
          </span>
        </div>
      </>

      {/* Bonus */}
      {(product.find.name === "Plants" || product.find.name === "Planter") && (
        <Bonus />
      )}

      <Description product={product} />
    </div>
  );
};

export default Infomation;
