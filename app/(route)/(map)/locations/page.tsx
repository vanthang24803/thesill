"use client";
import dynamic from "next/dynamic";
import SwipperLg from "@/app/(root)/components/swipper-lg";
import SwipperMd from "@/app/(root)/components/swipper-md";
import SwipperSm from "@/app/(root)/components/swipper-sm";
import Body from "@/components/ui/body";
import { Metadata } from "next";
import Card from "../../(pages)/workshops/components/card";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Store from "./components/stores";

export const metadata: Metadata = {
  title: `Locations The Sill`,
  description: "Buy a flower every day to make life more beautiful. 😊",
};

const Locations = () => {
  const router = useRouter();
  const Map = dynamic(() => import("./components/map"));
  return (
    <>
      <div className="flex flex-col lg:flex-row overflow-hidden">
        <div className="basis-1/3 bg-[#e8f8fa] lg:px-16 lg:py-24">
          <div className="flex-col hidden lg:flex">
            <span className="xl:text-7xl md:text-4xl lg:font-light md:font-medium">
              Store Location
            </span>
            <span className="lg:text-base md:text-sm lg:mt-8 md:mt-4 font-light">
              Welcome to your happy place. We’ve got all your plant needs
              covered. Pick your plant, pick your planter. We pot it for you.
            </span>
            <div className="lg:mt-12 md:mt-8 flex space-x-4 ">
              <Button
                className="w-1/2 md:h-[5vh] lg:h-[8vh]"
                onClick={() => router.push("/")}
              >
                Directions
              </Button>
              <Button
                className="w-1/4 md:w-1/2 md:h-[5vh] lg:h-[8vh] bg-white text-[#009a7b]"
                onClick={() => router.push("/workshops")}
              >
                Workshops
              </Button>
            </div>
          </div>
        </div>
        <Map />
        <div className="flex-col flex lg:hidden bg-[#e8f8fa] p-6 mt-14">
          <span className="text-4xl font-medium">Store Location</span>
          <span className="text-sm mt-4 font-light">
            Welcome to your happy place. We’ve got all your plant needs covered.
            Pick your plant, pick your planter. We pot it for you.
          </span>
          <div className="mt-8 flex space-x-4 ">
            <Button
              className="w-1/3 md:w-[20%]"
              onClick={() => router.push("/")}
            >
              Directions
            </Button>
            <Button
              className="w-1/3 md:w-[20%] bg-white text-[#009a7b]"
              onClick={() => router.push("/workshops")}
            >
              Workshops
            </Button>
          </div>
        </div>
      </div>
      <Body>
        {/* Store */}
        <Store />
        {/* Card */}
        <div className="py-6">
          <Card />
        </div>
        {/* Swipper */}
        <div className="md:my-16 my-12">
          <div className="hidden lg:block">
            <SwipperLg />
          </div>

          <div className="hidden md:block lg:hidden">
            <SwipperMd />
          </div>

          <div className="block md:hidden">
            <SwipperSm />
          </div>
        </div>
      </Body>
    </>
  );
};

export default Locations;
