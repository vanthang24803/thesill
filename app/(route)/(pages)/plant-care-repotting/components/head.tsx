"use client";

import { useRouter } from "next/navigation";

const Head = () => {
  const router = useRouter();
  return (
    <div className="w-full lg:px-20 md:px-8 px-4 bg-[#fdf3f5] flex  lg:items-center items-end justify-between">
      <div className="flex py-8 lg:px-16 flex-col space-y-6">
        <span
          className="text-[#009a7b] italic font-medium"
          onClick={() => router.push("/")}
        >
          Common Care Questions
        </span>
        <span className="lg:text-5xl md:text-4xl text-3xl font-serif">
          How To Repot Your Houseplant
        </span>
        <p className="md:text-base text-sm">
          With some simple tips and tricks, potting your houseplants is easy. If
          you want to switch up the decor or your plant is overgrown, proper
          potting is key to set your plant up for success. Let's take a look at
          what to know before you pot.
        </p>
      </div>

      <img
        src="https://cdn.sanity.io/images/y346iw48/production/13401cfe9c1f063ffa76bed01bae7eea4e96a37c-486x488.png?auto=format"
        alt="img"
        className="w-[22%] object-fill md:block hidden"
      />
    </div>
  );
};

export default Head;
