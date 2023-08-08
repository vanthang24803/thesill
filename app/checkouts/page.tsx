"use client";

import Body from "@/components/ui/body";
import React from "react";
import Express from "./components/express";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Product from "./components/product";
import SmallProduct from "./components/product-sm";

const CheckOut = () => {
  const router = useRouter();
  return (
    <Body>
      <div className="flex items-center space-x-1 font-medium ">
        <span className="hover:cursor-pointer" onClick={() => router.push("/")}>
          Home
        </span>
        <ChevronRight size={14} />
        <span className="text-[#009a7b]">Information</span>
      </div>
      <div className="flex lg:flex-row flex-col">
        <SmallProduct />
        <Express />
        <Product />
      </div>
    </Body>
  );
};

export default CheckOut;
