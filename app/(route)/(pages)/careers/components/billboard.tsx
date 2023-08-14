"use client";

import { Billboard } from "@/types";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface BillboardProps {
  data: Billboard;
  main: string;
  href: string;
}

const Billboard: React.FC<BillboardProps> = ({ data, main, href }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="basis-1/3 bg-transparent lg:px-24 md:px-10 md:py-16 lg:py-28">
        <div className="flex-col hidden md:flex">
          <span className="xl:text-7xl md:text-4xl lg:font-light md:font-medium">
            {data.label}
          </span>
          <span className="lg:text-base md:text-sm lg:mt-8 md:mt-4 font-light">
            {data.title}
          </span>
          <div className="lg:mt-12 md:mt-8 flex space-x-4 ">
            <Button
              className="lg:w-1/2 w-full md:h-[5vh] lg:h-[7vh]"
              onClick={() => router.push(href)}
            >
              {main}
            </Button>
          </div>
        </div>
      </div>
      <img
        src={data?.imageUrl}
        alt=""
        className="basis-2/3 lg:h-[70vh] md:w-1/2 object-fill"
      />
      <div className="flex-col flex md:hidden bg-transparent p-6">
        <span className="text-4xl font-medium">{data.label}</span>
        <span className="text-sm mt-4 font-light">{data.title}</span>
        <div className="mt-8 lg:mt-10 flex space-x-4 ">
          <Button className="w-1/2 h-[6vh]" onClick={() => router.push(href)}>
            {main}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
