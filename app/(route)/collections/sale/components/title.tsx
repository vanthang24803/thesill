"use client";

import { useState } from "react";
import MobileFilters from "./mobilefilter";


const Title = () => {
  const [filter, setFilter] = useState("Most Popular");
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="py-6 border-b flex flex-col space-y-4">
        <span className="lg:text-6xl font-medium md:text-5xl text-3xl text-[#00ab84]">
          Best Deals
        </span>
       <MobileFilters />
        <div className="lg:flex items-center justify-between hidden">
          <span className=" text-neutral-500">
            Save on plants that add texture, color, and style to your sill. All
            of our plants ship FREE — no minimums! And they’re guaranteed to
            arrive happy & healthy.
          </span>
          <span
            className="font-medium hover:text-[#00ab84] hover:cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            Short By: {filter}
          </span>
          {open && (
            <div className="right-14 top-[21rem] absolute shadow-md rounded bg-white z-20">
              <div
                className="flex flex-col hover:cursor-pointer text-sm"
                onClick={() => setOpen(!open)}
              >
                <span
                  className="hover:bg-[#00ab84] hover:text-white hover:font-medium p-3 text-center "
                  onClick={() => setFilter("Most Popular")}
                >
                  Most Popular
                </span>
                <span
                  className="hover:bg-[#00ab84] hover:text-white hover:font-medium p-3 text-center "
                  onClick={() => setFilter(" $ Low To High")}
                >
                  $ Low To High
                </span>
                <span
                  className="hover:bg-[#00ab84] hover:text-white hover:font-medium p-3 text-center "
                  onClick={() => setFilter("$ High To Low")}
                >
                  $ High To Low
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Title;
