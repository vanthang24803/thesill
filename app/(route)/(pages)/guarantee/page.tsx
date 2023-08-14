"use client";

import dynamic from "next/dynamic";
import Body from "@/components/ui/body";

const Guarantee = () => {
  const SwipperLg = dynamic(() => import("@/app/(root)/components/swipper-lg"));
  const SwipperMd = dynamic(() => import("@/app/(root)/components/swipper-md"));
  const SwipperSm = dynamic(() => import("@/app/(root)/components/swipper-sm"));
  return (
    <Body>
      <div className="flex flex-col lg:flex-row lg:items-start items-center lg:justify-between space-y-3 lg:space-y-0 space-x-0 lg:space-x-8 py-12">
        <div className="lg:w-1/2 flex lg:flex-col flex-row lg:space-x-0 space-x-6 space-y-6">
          <div className="flex flex-col space-y-4">
            <span className="font-normal text-neutral-500">
              Our Promise To You
            </span>

            <span className="lg:text-6xl md:text-5xl text-4xl font-medium">
              30-Day Guarantee
            </span>
            <span className="lg:text-base text-sm">
              Your plants will arrive in happy, healthy condition—guaranteed. If
              not, we replace them for free. Simply reach out to us with a photo
              within 30 days of receiving your order.
            </span>
          </div>

          <img
            src="https://www.thesill.com/_vercel/image?url=/_nuxt/img/half_title.323c72e.png&w=768&q=100"
            alt="heart"
            className="lg:w-1/3 md:w-1/6 hidden md:block object-fill"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col lg:space-x-0 lg:pt-0 pt-6 space-y-6">
          <span className="lg:text-4xl md:text-3xl text-2xl">
            Customer Happiness Guarantee
          </span>

          <span>
            We guarantee your plants will arrive in happy, healthy condition. If
            not, we replace them for free as part of our
            <b className="font-semibold"> 30-Day Customer Happiness Guarantee</b>. It’s natural for live
            plants to show minor signs of stress after transit but if the damage
            is beyond minor blemishes*,
            <a href="/contact" className="text-[#009a7b] px-1 font-medium">
              reach out to us
            </a>
            within 30 days of receipt to receive a free replacement.
          </span>

          <span>
            The guarantee applies to all online and in-store purchases within
            the first 30 days. We require photos as proof of damage and to help
            us improve our packaging process. You can also bring an online order
            into any of our shops for a replacement. Inventory online and
            in-store differs, so we recommend calling your closest shop in
            advance to ensure availability.
          </span>

          <i>
            *Remember, it’s natural for live plants to show minor signs of
            stress after transit. You can help your plant perk up from its
            journey by gently pruning any foliage damaged during the shipping
            process, such as bent stems or yellow leaves. Removing damaged
            foliage gives your plant back energy for new, healthy growth. Need
            more plant care support? Find additional resources
            <a href="/faq" className="text-[#009a7b] font-medium px-1">
              here
            </a>
            .
          </i>
        </div>
      </div>

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
  );
};

export default Guarantee;
