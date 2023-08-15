"use client";

import Body from "@/components/ui/body";
import FAQ from "./components/faq";

const Shipping = () => {
  return (
    <Body>
      <div className="flex flex-col lg:flex-row lg:items-start items-center lg:justify-between space-y-3 lg:space-y-0 space-x-0 lg:space-x-8 py-12">
        <div className="lg:w-1/2 flex lg:flex-col flex-row lg:space-x-0 space-x-6 space-y-6">
          <div className="flex flex-col space-y-4">
            <span className="font-normal text-neutral-500">
              Shipping and Handling
            </span>

            <span className="lg:text-6xl md:text-5xl text-4xl font-serif font-medium">
              Happiness delivered.
            </span>
          </div>

          <img
            src="https://www.thesill.com/_vercel/image?url=/_nuxt/img/half_title.323c72e.png&w=768&q=100"
            alt="heart"
            className="lg:w-1/3 md:w-1/6 hidden md:block object-fill"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col lg:space-x-0 lg:pt-0 pt-6 space-y-6">
          <span className="lg:text-4xl font-serif font-medium md:text-3xl text-2xl py-6 border-b">
            Standard Processing and Shipping Timelines
          </span>

          <FAQ />
        </div>
      </div>
    </Body>
  );
};

export default Shipping;
