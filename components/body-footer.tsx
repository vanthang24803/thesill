"use client";

import router from "next/router";
import Button from "./ui/button";

interface BodyFooterProps {
  title: string;
  description: string;
}

const BodyFooter: React.FC<BodyFooterProps> = ({ title, description }) => {
  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row ">
        <div className="basis-1/2 bg-[#f4f0e8] lg:px-24 md:px-10 md:py-16 lg:py-24">
          <div className="flex-col hidden md:flex">
            <span className="xl:text-7xl md:text-4xl lg:font-light md:font-medium">
              Find Your Plant Match
            </span>
            <span className="lg:text-base md:text-sm lg:mt-8 md:mt-4 font-light">
              Share a little bit about yourself and we’ll help find your perfect
              plant.
            </span>
            <div className="lg:mt-8 md:mt-8 flex space-x-4 ">
              <Button
                className="lg:w-1/3 md:w-1/2 md:h-[5vh] lg:h-[8vh]"
                onClick={() => router.push("/")}
              >
                Take The Quiz
              </Button>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/e90027b8a5051c1ff8703fe0f14cad6f35655511-2160x1944.webp?w=1536&h=1382&auto=format"
          alt="image"
          className="basis-1/2 lg:h-[70vh] md:w-1/2 object-fill"
        />
        <div className="flex-col flex md:hidden bg-[#f4f0e8] p-6">
          <span className="text-4xl font-medium">Find Your Plant Match</span>
          <span className="text-sm mt-4 font-light">
            Share a little bit about yourself and we’ll help find your perfect
            plant.
          </span>
          <div className="mt-8 lg:mt-10 flex space-x-4 ">
            <Button className="w-1/2 md:w-1/3" onClick={() => router.push("/")}>
              Take The Quiz
            </Button>
          </div>
        </div>
      </div>

      <div className="md:mt-20 mt-12 mb-8 mx-8 flex flex-col space-y-6">
        <span className="md:text-3xl lg:text-5xl text-2xl text-[#1ac9a6] italic ">
          {title}
        </span>
        <p className="lg:pr-[32rem] text-[12px] md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default BodyFooter;
