"use client";

import { home } from "@/components/navigation";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Decor = () => {
  return (
    <div className="group delay-100 transition duration-300">
      <Link href={home.href} className="hover:text-[#009a7b] hover:italic">
        {home.label}
      </Link>
      <div className="group-hover:flex justify-center items-center gap-x-36 hidden w-full bg-[#f9f8f7] h-[40vh] absolute right-0 top-36">
        <div className="flex flex-row gap-x-20">
          {home.children.map((item) => (
            <div className="flex flex-col" key={item.title}>
              <span className="flex gap-x-20 mb-3 text-lg">{item.title}</span>
              <div className="flex flex-col font-thin gap-y-2 ">
                {item.subtitle.map((index) => (
                  <Link
                  key={index.name}
                    href={index.link}
                    className="hover:italic text-[15px] font-thin hover:text-[#009a7b] hover:font-medium"
                  >
                    {index.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          {home.desc.map((item) => (
            <div className="flex flex-col" key={item.image}>
              <img
                src={item.image}
                className="w-[50%] h-[50%] object-fill mb-4"
              />
              <div className="flex items-center  hover:italic hover:text-[#009a7b] gap-x-4 hover:cursor-pointer">
                <span className="text-[15px]">{item.arrow}</span>
                <MoveRight
                  size={16}
                  className="hover:translate-x-2 transition-all ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Decor;
