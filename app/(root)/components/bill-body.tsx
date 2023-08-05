"use client";

import Button from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

const BillBody = () => {
  const router = useRouter();
  return (
    <div className="mt-8 w-full lg:h-[90vh] md:flex mb-6">
      <div className="basis-1/2 md:block hidden lg:px-12 lg:py-36 py-8 px-4">
        <div className="flex flex-col space-y-6">
          <span className="lg:text-5xl text-4xl font-medium">
            Find Your Plant Match
          </span>
          <span className="text-base">
            Share a little bit about yourself and we’ll help find your perfect
            plant.
          </span>
        </div>
        <div className="lg:mt-16 mt-8">
          <div className="flex items-center space-x-4">
            <MoveRight size={28} className="text-[#009a7b]" />
            <span className="italic">Answer three quick questions</span>
          </div>
          <div className="flex items-center space-x-4">
            <MoveRight size={28} className="text-[#009a7b]" />
            <span className="italic">Get matched with your perfect plant</span>
          </div>

          <Button
            className="mt-12 lg:w-1/4 w-1/2 h-[50px]"
            onClick={() => router.push("/")}
          >
            Take The Quiz
          </Button>
        </div>
      </div>

      <img
        src="https://cdn.sanity.io/images/y346iw48/production/8930b752d090834855b620b40733ea3c5b929537-800x1035.jpg?w=1000&auto=format"
        className="md:basis-1/2 md:w-1/2 lg:w-full lg:h-[90vh]"
      />

      <div className="block md:hidden mt-8">
        <div className="flex flex-col space-y-4">
          <span className="text-3xl font-medium">Find Your Match</span>
          <span className="text-base">
            Share a little bit about yourself and we’ll help find your perfect
            plant.
          </span>
        </div>
        <div className="mt-8">
          <div className="flex items-center space-x-4">
            <MoveRight size={20} className="text-[#009a7b]" />
            <span className="italic">Answer three quick questions</span>
          </div>
          <div className="flex items-center space-x-4">
            <MoveRight size={20} className="text-[#009a7b]" />
            <span className="italic">Get matched with your perfect plant</span>
          </div>

          <Button
            className="mt-8 w-1/2 h-[50px]"
            onClick={() => router.push("/")}
          >
            Take The Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillBody;
