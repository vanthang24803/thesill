"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import Link from "next/link";

const Help = () => {
    const [ship, setShip] = useState(false);
    const [gift ,setGift] = useState(false);
    const [sill, setSill] = useState(false);
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:basis-1/2 flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start">
        <div className="">
          <span className="lg:text-7xl text-5xl font-medium">Need help?</span>
          <p className="py-8">
            <a href="/" className="text-[#258774] font-medium">
              Send us a message—
            </a>
            our team is full of passionate plant parents ready to help.
          </p>
        </div>
        <img
          src="https://www.thesill.com/_vercel/image?url=/_nuxt/img/half_title.323c72e.png&w=768&q=100"
          alt="heart"
          className="lg:w-1/3 w-[15%]"
        />
      </div>
      <div className="lg:basis-1/2 mt-8">
        <div className="pb-6 border-b w-full border-neutral-300">
          <span className="text-4xl">Gifting FAQs</span>
        </div>
        <div className="flex flex-col  mt-8 hover:cursor-pointer">
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4 w-full">
            <span className="text-xl font-medium focus:text-[#009A7B]">
              Where do you ship?
            </span>
            {ship ? (
              <Minus size={20} onClick={() => setShip(!ship)} />
            ) : (
              <Plus size={20} onClick={() => setShip(!ship)} />
            )}
          </div>
          {ship && (
            <div className="flex flex-col space-y-4 mt-4">
              <p>
                We currently ship plants and plant supplies within the
                contiguous US to all 48 states.
              </p>
            </div>
          )}
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4 pt-8 w-full">
            <span className="text-xl font-medium focus:text-[#009A7B]">
              Why do plants make great gifts?
            </span>
            {gift ? (
              <Minus size={20} onClick={() => setGift(!gift)} />
            ) : (
              <Plus size={20} onClick={() => setGift(!gift)} />
            )}
          </div>
          {gift && (
            <div className="flex flex-col space-y-4 mt-4">
              <p>
                <b> 1. Plants last.</b> They’re a meaningful gift that continues
                to grow and provide beauty for many years to come. Unlike other
                gifts that eventually expire or are no longer in trend, live
                plants only get better with time.
              </p>
              <p>
                <b>2. Plants are inclusive—</b>no need to worry about clothing
                sizes or food preferences. And your giftee does not have to be a
                seasoned plant aficionado to enjoy a plant. There are plenty of
                easy-care varieties that work for anyone’s home environment,
                from low-light tolerant to pet-friendly plants.
              </p>
              <p>
                <b>3. Plants boost our spirits</b> and enhance our environments.
                When we get in touch with nature, we reduce mental fatigue and
                stress, and increase relaxation and self-esteem. Studies show
                even brief exposure to nature can elicit an unconscious calming
                effect.
              </p>
            </div>
          )}
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4 pt-8 w-full">
            <span className="text-xl font-medium focus:text-[#009A7B]">
              Do you offer bulk or corporate gifting?
            </span>
            {sill ? (
              <Minus size={20} onClick={() => setSill(!sill)} />
            ) : (
              <Plus size={20} onClick={() => setSill(!sill)} />
            )}
          </div>
          {sill && (
            <div className="flex flex-col space-y-4 mt-4">
              <p>
                Yes! If your order contains 25 or more plant gifts, it can be
                processed for you by our corporate gifting team.{" "}
                <a href="/" className="text-[#009a7b] font-medium">
                  Learn more here{" "}
                </a>
                or email corporategifting@thesill.com.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Help;
