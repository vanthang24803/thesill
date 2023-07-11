"use client";

import Link from "next/link";
import { supcription } from "@/components/navigation";
const Subscription = () => {
  return (
    <Link href={supcription.href} className="hover:text-[#009A7B] hover:italic">
      {supcription.label}
    </Link>
  );
};

export default Subscription;
