"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4 py-12 lg:py-0 w-full">
        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
          onClick={() => setOpen1(!open1)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open1 && "text-[#009a7b] italic"
            }`}
          >
            When can I expect my order to ship?
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
              Orders with <b>standard shipping</b> will ship within 2-6 business
              days. Tracking information will be automatically sent to your
              email. Once in transit, packages take 1-4 business days to arrive.
            </p>
            <p>
              Orders with <b>express shipping</b> will ship within 1-2 business
              days. Once in transit, expedited packages take 1-2 business days
              to arrive.
            </p>
            <p>
              Products that are part of the same order may ship separately from
              different locations, so your order could arrive in multiple
              packages on slightly different timelines. You'll receive order
              tracking information for each item once shipped. We do not have
              control over carrier service disruptions or delays once shipped.
            </p>
            <p>
              Note: We carry an assortment of products from independent makers
              and brands that share our values and vibe. These products ship
              directly from the third party vendor or artisan within our
              standard shipping timeline of 2-6 business days, unless noted
              otherwise on the product page.
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
            What if I need to change my order?
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
              If you need to make a change to your order please contact us as
              soon as possible. We process orders quickly but will do our best
              to address your request.
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
            Can I get same day delivery?
          </span>
          {open3 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open3 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>We do not offer same day delivery for online orders.</p>
            <p>
              If you are in New York City, San Francisco, Chicago, or Bethesda
              —our plant shops are open for in-store shopping, curbside pickup,
              and local delivery*. Please call your nearest shop directly for
              details:
              <a href="/" className="text-[#009a7b] px-1">
                locations & hours
              </a>
              . <i>*Not applicable to online orders; shop orders only.</i>
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
            What are your shipping rates?
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
              We’re currently offering <b>free standard shipping</b> on all
              online orders. There are no minimums that you have to meet to
              enjoy this perk.
            </p>
            <p>
              The only exceptions are some small accessories and our potting
              mixes. Small accessories—including ceramic message pops, coco coir
              poles, moisture meters, and fertilizer shakers—require a minimum
              purchase of $35 or more to ship. While potting mixes—including our
              Organic Potting Mix, Cacti Mix, and Lava Rocks—are subject to a
              $10 soil surcharge to ship. All other products are applicable for
              free standard shipping.
            </p>
            <p>
              In addition to free shipping, all packages are sent via UPS®
              carbon neutral shipping. This means we (not you) pay a contractual
              rate per package that ensures we offset our shipping footprint and
              reduce our annual emissions as a company.
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
            If I order more than one plant will they ship separately?
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
              Items that are part of the same order may ship separately from
              different locations. Your order could arrive in multiple packages
              at slightly different times. Once each plant or botanical package
              is out the door, you’ll receive individual tracking information so
              you can keep an eye out for it.
            </p>
            <p>
              Note: We carry an assortment of products from independent makers
              and brands that share our aesthetic, values, and vibe. These items
              ship directly from the vendor. You won’t receive tracking
              information for these items, but can contact our Customer
              Happiness team for support on all orders.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
          onClick={() => setOpen6(!open6)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open6 && "text-[#009a7b] italic"
            }`}
          >
            Where do you ship?
          </span>
          {open6 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open6 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>We currently ship within the contiguous US to all 48 states.</p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
          onClick={() => setOpen7(!open7)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open7 && "text-[#009a7b] italic"
            }`}
          >
            My order arrived damaged,what do I do?
          </span>
          {open7 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open7 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              We guarantee your plants will arrive in happy, healthy condition.
              If not, we replace them for free as part of our 30-Day Customer
              Happiness Guarantee. Reach out to us within 30 days of receiving
              your order so we can get a new shipment on its way to you. We
              require photos as proof of damage and to help us improve our
              packaging process.
            </p>
            <p>
              We guarantee your plants will arrive in happy, healthy condition.
              If not, we replace them for free as part of our 30-Day Customer
              Happiness Guarantee. Reach out to us within 30 days of receiving
              your order so we can get a new shipment on its way to you. We
              require photos as proof of damage and to help us improve our
              packaging process.
            </p>
            <div className="flex flex-col">
              <span className="uppercase font-semibold  ">LIVE CHAT</span>
              <span>Mon–Fri 9am–5pm EST</span>
            </div>
            <div className="flex flex-col">
              <span className="uppercase font-semibold  ">
                Mon–Fri 9am–5pm EST
              </span>
              <a href="/" className="text-[#009a7b]">
                Contact Us Form
              </a>
            </div>
            <i>
              Tip: Sometimes plants just need a little TLC after being in
              transit. One of our plant care experts may coach you through how
              to overcome something cosmetic, such as bent leaves.
            </i>
          </div>
        ) : (
          <div className="border-b"></div>
        )}
      </div>

      <>
        <span className="lg:text-4xl font-serif font-medium md:text-3xl text-2xl py-6 border-b">
          Returns and Replacements
        </span>
        <div className="flex flex-col space-y-4 py-12 lg:py-0 w-full">
          <div
            className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
            onClick={() => setOpen8(!open8)}
          >
            <span
              className={`md:text-base text-sm font-medium ${
                open8 && "text-[#009a7b] italic"
              }`}
            >
              What is your return policy?
            </span>
            {open8 ? (
              <Minus className="text-[#009a7b]" size={26} />
            ) : (
              <Plus size={26} />
            )}
          </div>
          {open8 ? (
            <div className="border-b pb-4 flex flex-col space-y-3">
              <p>
                If your order arrived damaged,
                <a href="/contact" className="text-[#009a7b] px-1 font-medium">
                  let us know
                </a>
                within 30 days so we can replace it as part of our 30-Day
                Customer Happiness Guarantee. Photos are required as proof of
                damage and to help us improve our packaging process. Otherwise,
                we cannot offer returns or exchanges at this time.
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
              What is your price adjustment policy?
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
                If you purchased an item at full price and within 3 days of
                purchase, the price drops, you can
                <a href="/contact" className="px-1 text-[#009a7b] font-medium">
                  contact
                </a>
                us to refund the difference. Items that were originally
                purchased at a discount are not eligible for price adjustments.
              </p>
            </div>
          ) : (
            <div className="border-b"></div>
          )}
        </div>
      </>
    </div>
  );
};

export default FAQ;
