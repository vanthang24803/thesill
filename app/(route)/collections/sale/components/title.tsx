"use client";

import { useState } from "react";
import MobileFilters from "./mobilefilter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Title = () => {
  return (
    <div>
      <div className="py-6 border-b flex flex-col space-y-4">
        <span className="lg:text-6xl font-medium md:text-5xl text-3xl text-[#00ab84]">
          Best Deals
        </span>
        <MobileFilters />
        <div className="lg:flex items-center justify-between hidden">
          <span className=" text-neutral-500">
            Save on plants that add texture, color, and style to your sill. All
            of our plants ship FREE — no minimums! And they’re guaranteed to
            arrive happy & healthy.
          </span>
          <Select>
            <SelectTrigger className="flex items-center space-x-1 hover:text-[#008a7b] text-base font-medium border-none">
              <p>Sort By:</p>
              <SelectValue placeholder="Most Popular" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Most Popular</SelectItem>
              <SelectItem value="high">$ Low To High</SelectItem>
              <SelectItem value="low">$ High To Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Title;
