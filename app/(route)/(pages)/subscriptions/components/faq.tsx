"use client";

import { useState } from "react";
import { Plus, Minus, Dot } from "lucide-react";

const FAQ = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <div className="flex lg:flex-row flex-col md:mb-8 mb-6">
      <div className="w-full lg:hidden block pt-16">
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/6fc2c7ff7bbabc8f4c656e11b88ad4498afc6061-1200x1553.webp?w=1000&auto=format"
          alt="img"
          className="object-cover"
        />
      </div>
      <div className="flex items-center">
        <div className="mt-8 flex flex-col md:space-y-6 space-y-4 lg:basis-1/2 mb-6 lg:mr-12 w-full">
          <div className="lg:text-6xl md:text-4xl text-3xl text-[#00ab84] lg:pb-6 pb-4  border-b italic">
            Subscription FAQ
          </div>

          <div
            className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
            onClick={() => setOpen1(!open1)}
          >
            <span
              className={`md:text-base text-sm font-medium ${
                open1 && "text-[#009a7b] italic"
              }`}
            >
              How do your subscriptions work?
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
                Your potting supplies are going to vary based on your plants’
                needs. If you’re cultivating desert plants like succulents,
                you’ll need a cactus potting mix, lava rocks, and sand. These
                “ingredients” are perfect for making sure your plants get the
                drainage they need to thrive. Other plants will need a standard
                potting mix and may benefit from moisture sensors to ensure they
                stay well hydrated.
              </p>
              <p>
                NAll plants will need a planter, potting mix, a watering method
                (like a watering can or mister), appropriate fertilizer, and
                safe pesticides.
              </p>
              <p>
                If you plan on repotting in small spaces, a repotting tarp will
                help keep soil and plant leavings contained. Eventually, you’ll
                want to put together a gardening kit with a trowel, gloves
                (especially if you’re working with cacti), and pruning shears.
              </p>
            </div>
          ) : (
            <div className="border-b"></div>
          )}

          <div
            className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
            onClick={() => setOpen2(!open2)}
          >
            <span
              className={`md:text-base text-sm font-medium ${
                open2 && "text-[#009a7b] italic"
              }`}
            >
              What is special about your subscriptions?
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
                We do the work for you—curating new easy-care and non-toxic
                plants for you to experience on a monthly basis and delivering
                them, along with a chic ceramic planter, directly to your door.
              </p>
              <p>
                Our plants are sourced from local growers to ensure the highest
                quality and to support family-owned businesses. We guarantee
                plants arrive in happy, healthy condition, or we replace them
                for free.
              </p>
              <p>
                Not sure how to care for your new plant? Our Care Library
                includes specific care instructions for each plant and our team
                of knowledgeable plant parents is just a message away.
              </p>
            </div>
          ) : (
            <div className="border-b"></div>
          )}

          <div
            className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
            onClick={() => setOpen3(!open3)}
          >
            <span
              className={`md:text-base text-sm font-medium ${
                open3 && "text-[#009a7b] italic"
              }`}
            >
              Do subscriptions come potted?
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
                planter. Simply enjoy as is or remove it from the grow pot and
                pot it inside the planter. It’s up to you!
              </p>
              <p>
                If you prefer to fully pot your plant, it just takes a few
                minutes. Our recommended approach can be found here. And if you
                don’t have potting supplies at home, you will be able to add
                potting supplies to your month box with no additional shipping
                cost.
              </p>
            </div>
          ) : (
            <div className="border-b"></div>
          )}

          <div
            className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
            onClick={() => setOpen4(!open4)}
          >
            <span
              className={`md:text-base text-sm font-medium ${
                open4 && "text-[#009a7b] italic"
              }`}
            >
              Can I gift a subscription?
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
                Yes—and they make great gifts! You can gift a 3-month or 6-month
                subscription. Simply add a gift note once the subscription is
                added to your cart and enter your gift recipients address as the
                shipping address.
              </p>
            </div>
          ) : (
            <div className="border-b"></div>
          )}

          <div
            className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
            onClick={() => setOpen5(!open5)}
          >
            <span
              className={`md:text-base text-sm font-medium ${
                open5 && "text-[#009a7b] italic"
              }`}
            >
              More questions about our subscriptions?
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
                Click our Live Chat bubble at the bottom right corner or fill
                out our contact form and we’ll get back to you as soon as
                possible. We recommend adding{" "}
                <a href="/" className="text-[#009a7b]">
                  info@thesill.com
                </a>{" "}
                to your contacts to ensure our responses land in your inbox, not
                your spam folder.
              </p>
            </div>
          ) : (
            <div className="border-b"></div>
          )}
        </div>

        <div className="hidden lg:flex basis-1/2 w-full">
          <img
            src="https://cdn.sanity.io/images/y346iw48/production/6fc2c7ff7bbabc8f4c656e11b88ad4498afc6061-1200x1553.webp?w=1000&auto=format"
            alt="img"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
