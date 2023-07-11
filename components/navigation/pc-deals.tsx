"use client";

import Link from "next/link";
import { summerSale } from "@/components/navigation";
const Deals = () => {
  return (
    <Link href={summerSale.href} className="hover:text-[#009A7B] hover:italic">
      {summerSale.label}
    </Link>
  );
};

export default Deals;
