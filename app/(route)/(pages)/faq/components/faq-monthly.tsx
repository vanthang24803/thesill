"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Monthly = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  return (
    <div className="flex flex-col space-y-4">
      <span className="text-4xl font-serif font-medium py-6 border-b">
        Monthly Subcriptions
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
            How do your subcriptions work?
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
              We currently offer
              <a
                href="/subscriptions"
                className="text-[#009a7b] px-1 font-medium"
              >
                three subscription types
              </a>
              : Easy Care, Pet Friendly, and Orchids. Our Pet Friendly
              Subscription ensures your monthly plant is considered non-toxic to
              cats and dogs.
            </p>

            <p>
              Every month, subscribers receive one new plant and one chic
              ceramic planter. You can choose between 3 or 6 months and planter
              color. In the case of Orchids, you can choose all white or a
              variety of orchid colors.
            </p>

            <p>
              The plants included in our subscription program are a mix of those
              available on thesill.com and specialty plants just for
              subscribers. We will try our best to provide variety and not
              repeat the same plant within a 6 month period. Please note planter
              shapes will repeat.
            </p>

            <p>
              * Subscription boxes can only be delivered within the contiguous
              48 states. Promotions and discounts do not apply to subscription
              purchases.
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
            Why does your pet friendly subcriptions cost more?
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
              Subscription costs include your plant, ceramic planter, and
              shipping. Our pet-friendly option is $2-3 more per month because
              non-toxic plant varieties are not as commonly grown and therefore
              harder to source.Subscription costs include your plant, ceramic
              planter, and shipping. Our pet-friendly option is $2-3 more per
              month because non-toxic plant varieties are not as commonly grown
              and therefore harder to source.
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
            Do you subcriptions come potted?
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
              No. Plants ship in their grow pot, placed inside the ceramic
              planter. Simply enjoy as is or remove it from the grow pot and pot
              it inside the planter. It’s up to you!
            </p>

            <p>
              If you prefer to fully pot your plant, it just takes a few
              minutes. Our recommended approach can be founds
              <a
                href="/plant-care-repotting"
                className="text-[#009a7b] px-1 font-medium"
              >
                here
              </a>
              . And if you don’t have potting supplies at home, you can show out
              plant care supplies
              <a
                href="/plant-care-repotting"
                className="text-[#009a7b] px-1 font-medium"
              >
                here
              </a>
              .
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
            When will I receive my subcriptions box?
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
              After the first purchase, subscriptions will recur ever 30 days
              until 3 or 6 shipments in total have been made. You will receive
              an email with tracking information once your monthly box is en
              route.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen5(!open5)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open5 && "text-[#009a7b] italic"
            }`}
          >
            How do I pause or cancel my subcriptions?
          </span>
          {open5 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open5 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              Subscriptions are a 3 or 6 plant delivery commitment. At this
              time, you cannot skip a month or cancel your subscription.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}
      </div>
    </div>
  );
};

export default Monthly;
