"use client"

import Link from "next/link";
import { Billboard } from "@/types";
import Button from "./button";
import { useRouter } from "next/navigation";

interface BillboardProps {
  data: Billboard;
  main: string;
  href: string;
  subtitle: string;
  link: string;
}

const Billboard: React.FC<BillboardProps> = ({
  data,
  main,
  href,
  subtitle,
  link,
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="basis-1/2 bg-[#e8f8fa] lg:px-24 md:px-10 md:py-16 lg:py-24">
        <div className="flex-col hidden md:flex">
          <span className="xl:text-7xl md:text-4xl lg:font-light md:font-medium">
            {data.label}
          </span>
          <span className="lg:text-base md:text-sm lg:mt-8 md:mt-4 font-light">
            {data.title}
          </span>
          <div className="lg:mt-8 md:mt-8 flex space-x-4 ">
            <Button
              className="lg:w-1/3 md:w-1/2 md:h-[5vh] lg:h-[8vh]"
              onClick={() => router.push(href)}
            >
              {main}
            </Button>
            <Button
              className="w-1/4 md:w-1/2 md:h-[5vh] lg:h-[8vh] bg-white text-[#009a7b]"
              onClick={() => router.push(link)}
            >
              {subtitle}
            </Button>
          </div>
        </div>
      </div>
      <img
        src={data?.imageUrl}
        alt=""
        className="basis-1/2 lg:h-[70vh] md:w-1/2 object-fill"
      />
      <div className="flex-col flex md:hidden bg-[#e8f8fa] p-6">
        <span className="text-4xl font-medium">
          {data.label}
        </span>
        <span className="text-sm mt-4 font-light">
          {data.title}
        </span>
        <div className="mt-8 lg:mt-10 flex space-x-4 ">
          <Button
            className="w-1/3"
            onClick={() => router.push(href)}
          >
            {main}
          </Button>
          <Button
            className="w-1/2 bg-white text-[#009a7b]"
            onClick={() => router.push(link)}
          >
            {subtitle}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
