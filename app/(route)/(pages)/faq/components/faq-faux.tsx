"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Faux = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <div className="flex flex-col space-y-4">
      <span className="text-4xl font-serif font-medium py-6 border-b">
        Faux Plants
      </span>

      <div className="flex flex-col space-y-2">
        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen1(!open1)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open1 && "text-[#009a7b] italic"
            }`}
          >
            Why do you also offer fuax plants?
          </span>
          {open1 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open1 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              We have customers who simply have restrictions—be it low light,
              busy schedules, small children, or curious pets. Faux plants give
              everyone the ability to still bring greenery and joy into their
              space. We believe that plants, in all forms, make people happy.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen2(!open2)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open2 && "text-[#009a7b] italic"
            }`}
          >
            What are they made of?
          </span>
          {open2 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open2 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              Our faux plants are made of a combination of fabric, plastic,
              wire, and foam. The larger plants may have a base comprised of
              concrete and wood.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen3(!open3)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open3 && "text-[#009a7b] italic"
            }`}
          >
            But plastic?
          </span>
          {open3 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open3 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              We hear you! Sustainability is important to The Sill. When it
              comes to our faux plant line, we use the best materials available
              to create a high-quality, long-term addition to your home.
            </p>

            <p>
              After two weeks, your plant has adjusted—your home’s light levels
              More broadly, the greatest and most immediate impact we can have
              is on single-use items across our entire line—like our packaging,
              which we’re transitioning to be fully recyclable. We are
              constantly looking for opportunities to remove waste from our
              supply chain and make strides towards a more sustainable future.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen4(!open4)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open4 && "text-[#009a7b] italic"
            }`}
          >
            How do I dispose of faux plants?
          </span>
          {open4 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open4 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              Our faux plant line uses the best materials available to create a
              high-quality, long-term addition to your home. If at any time
              you’re ready to relinquish your faux plant and do not have another
              home for it, please contact us and we can help you find a local
              retirement or nursing home, school, thrift store, charity, or
              other community organization to accept it as a donation.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}
      </div>
    </div>
  );
};

export default Faux;
