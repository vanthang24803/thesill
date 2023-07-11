"use client";

import Link from "next/link";
import { workshop } from "@/components/navigation";
const Workshop = () => {
  return (
    <Link href={workshop.href} className="hover:text-[#009A7B] hover:italic">
      {workshop.label}
    </Link>
  );
};

export default Workshop;
