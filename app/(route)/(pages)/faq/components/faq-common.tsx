"use client";

import { Minus, Plus, Dot } from "lucide-react";
import { useState } from "react";

const Common = () => {
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
      <span className="text-4xl font-serif font-medium py-6 border-b">
        Common Questions
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
            How will my plant arrive?
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
              Our number one priority is that our plants arrive in happy,
              healthy condition. You never know what adventures a plant can get
              into making its way to your home! Our plants ship in their nursery
              grow pot to allow for a safe and comfy ride all the way to your
              doorstep. Allowing plants to stay in their grow pot while being
              shipped helps reduce the risk of stress and shock that could
              happen if they were to be potted in a new planter before leaving
              the greenhouse.
            </p>

            <p>
              Our number one priority is that our plants arrive in happy,
              healthy condition. You never know what adventures a plant can get
              into making its way to your home! Our plants ship in their nursery
              grow pot to allow for a safe and comfy ride all the way to your
              doorstep. Allowing plants to stay in their grow pot while being
              shipped helps reduce the risk of stress and shock that could
              happen if they were to be potted in a new planter before leaving
              the greenhouse.
            </p>
            <p>
              Our number one priority is that our plants arrive in happy,
              healthy condition. You never know what adventures a plant can get
              into making its way to your home! Our plants ship in their nursery
              grow pot to allow for a safe and comfy ride all the way to your
              doorstep. Allowing plants to stay in their grow pot while being
              shipped helps reduce the risk of stress and shock that could
              happen if they were to be potted in a new planter before leaving
              the greenhouse.
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
            What if my order is a gift?
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
              First, lucky them! Second, on our cart page you’ll find an option
              to add a gift note. You can rest assured that all orders are
              shipped without pricing information and include directions on how
              to access our digital Care Library for plant care instructions.
            </p>

            <p>
              You can also let your gift recipient know something is on the way
              from yours truly by filling out
              <a href="/" className="px-1 text-[#009a7b] font-medium">
                this form
              </a>
              – also linked in your order confirmation email. (Don’t worry, we
              won’t spoil what the surprise is or send them any marketing
              emails.)
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
            Do I have to report my plant once it arrives?
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
              The short answer is, no. First, let your plant acclimate to its
              new environment. Place the plant in the spot you plan to keep it
              in. Let it settle in for about two weeks.
            </p>

            <p>
              After two weeks, your plant has adjusted—your home’s light levels
              and temperature differ from a greenhouse!—and you can pot it into
              its ceramic planter, if you choose. You might notice your plant’s
              earthenware planter is wider than the plant’s nursery pot. This
              space is for your plant to grow into, should you choose to repot
              it. But remember, this is optional: as long as your plant still
              has room to grow in its nursery grow pot, and looks happy and
              healthy, you don’t need to lift a finger!
            </p>
            <p>
              For some, the mantra ‘plant care is self care’ means the
              convenience of leaving it in the nursery grow pot and for others,
              it may mean getting your hands dirty to repot. Do what works best
              for you! Do not be afraid to try different methods for different
              plants. Learn more{" "}
              <a href="/" className="text-[#009a7b] px-1 font-medium">
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
            What type of plant care support do you provide?
          </span>
          {open4 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open4 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <div className="flex items-start">
              <Dot size={60} />
              <p>
                <a href="/">Plant Care Library</a>: Simply look up the name of
                your plant for easy-to-follow care instructions. Gift recipients
                receive instructions on how to care for their plants in their
                package, too.
              </p>
            </div>

            <i>
              Tip: Forget the name of the plant? You can find the name of your
              plant in three places: your order confirmation email, the “Order
              History” section of your Account page and the packing slip
              included with your shipment when it arrives.
            </i>

            <div className="flex items-start">
              <Dot size={30} />
              <p>
                <a href="/">Workshops & Events</a>: We host plant care
                workshops, both online and in-person at our stores.
              </p>
            </div>
            <div className="flex space-x-2">
              <Dot size={50} />
              <p>
                <a href="/">Plant Parent Club</a>: Join our Facebook Group of
                passionate plant parents. Community members post questions,
                share photos, and offer plant care advice.
              </p>
            </div>
            <div className="flex items-start">
              <Dot size={30} />
              <p>
                <a href="/" className="text-[#009a7b] px-1">
                  Customer
                </a>
                : Finally, you can reach our team of plant care experts anytime:
              </p>
            </div>

            <div className="flex flex-col space-y-4 py-4">
              <div className="flex flex-col">
                <p className="font-semibold">LIVE CHAT</p>
                <p>Mon–Fri 9am–5pm EST</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">Email</p>
                <a href="/contact">Contact us form</a>
              </div>
            </div>
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
            My plant arrived damaged, what do I do?
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
              We guarantee your plants will arrive in happy, healthy condition.
              If not, we replace them for free as part of our
              <b className="px-1">30-Day Customer</b>
              Happiness Guarantee. It’s natural for live plants to show minor
              signs of stress after transit but if the damage is beyond minor
              blemishes*, reach out to us within 30 days of
              <a href="/" className="px-1 text-[#009a7b]">
                receipt to receive
              </a>
              a free replacement.
            </p>

            <p>
              The guarantee applies to all online and in-store purchases within
              the first 30 days. We require photos as proof of damage and to
              help us improve our packaging process. You can also bring an
              online order into any of our shops for a replacement. Inventory
              online and in-store differs, so we recommend calling your closest
              shop in advance to ensure availability.
            </p>

            <i>
              Remember, it’s natural for live plants to show minor signs of
              stress after transit. You can help your plant perk up from its
              journey by gently pruning any foliage damaged during the shipping
              process, such as bent stems or yellow leaves. Removing damaged
              foliage gives your plant back energy for new, healthy growth. Need
              more plant care support? Find additional resources
              <a href="/" className="px-1 text-[#009a7b]">
                here.
              </a>
            </i>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen6(!open6)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open6 && "text-[#009a7b] italic"
            }`}
          >
            Why does my planter not have a drainage hole?
          </span>
          {open6 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open6 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              Our line of earthenware planters includes options both with and
              without drainage holes.
            </p>

            <p>
              Most of our small and medium plants ship in their nursery grow pot
              to allow for a safe ride to your doorstep. Added bonus: grow pots
              have drainage holes so you don’t have to be as mindful when you
              water. They also give you the ability to use decorative planters
              that don’t have holes—à la cachepot. The decorative planter serves
              as a saucer, catching excess water that drains out.
            </p>
            <p>
              If you choose a mini or x-small plant that ships potted, and your
              planter does not have a drainage hole, know our team has taken
              extra precautions to make sure that your plant is potted properly
              with a generous layer of lava rocks before the potting mix, to aid
              in proper water management. Lava rocks allow excess water to pool
              at the bottom of a planter, away from your plant’s roots, thus
              reducing the risk of root rot.
            </p>
            <p>
              Tip: when watering your plant, add no more than 1/3 of the
              planter’s volume in water, to avoid overwatering. Best practice is
              to feel the potting mix a few inches down first, and only water if
              the mix is dry.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen7(!open7)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open7 && "text-[#009a7b] italic"
            }`}
          >
            What if I'm interested in placing a large order?
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
              For large orders (quantities greater than 25) or corporate gifting
              inquires, please fill out our{" "}
              <a href="/contact" className="text-[#009a7b] px-1 font-medium">
                contact form
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen8(!open8)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open8 && "text-[#009a7b] italic"
            }`}
          >
            Why does my plant loook different from the website?
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
              Live plants and small batch pottery will have variations in color,
              texture, finish, and size. While we make every effort to display
              our potted plants as accurately as possible, there may be subtle
              differences from what is displayed online.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}
        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen9(!open9)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open9 && "text-[#009a7b] italic"
            }`}
          >
            Why is my discount not working at checkout?
          </span>
          {open9 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open9 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              Our discount codes can be applied to live plants, faux plants, our
              blooming collection, and planters. Some restrictions apply to
              accessories, limited edition collections, and products made by
              third-party vendors (learn more below.) Discounts can not be used
              for gift cards.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}
      </div>
    </div>
  );
};

export default Common;
