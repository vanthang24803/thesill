"use client";

import { useState } from "react";
import { Plus, Minus, Dot } from "lucide-react";

const FAQ = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
 

  return (
    <div className="lg:mt-24 md:mt-16 mt-14 flex flex-col md:space-y-6 space-y-4 lg:w-3/4 w-full lg:mb-12 mb-6">
      <div className="lg:text-6xl md:text-4xl text-3xl text-[#00ab84] lg:pb-6 pb-4  border-b italic">
        Planters FAQ
      </div>

      <div
        className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
        onClick={() => setOpen1(!open1)}
      >
        <span
          className={`md:text-base text-sm ${open1 && "text-[#009a7b] italic"}`}
        >
          What is the difference between pots and planters?
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
            Being confused about this is understandable! In most plant and
            gardening circles, ‘pot’ and ‘planter’ are interchangeable terms. We
            feel comfortable doing the same, so everything is easy to find and
            on the same page. Technically, pots are smaller containers meant to
            hold one plant, and planters are larger containers that house
            multiple plants.
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
          className={`md:text-base text-sm ${open2 && "text-[#009a7b] italic"}`}
        >
          Should you put plants directly into pots?
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
            When your plant first arrives at its new home, give it time to
            acclimate. Place it where you’re planning on having it live and give
            it two to three weeks to settle in. Your home is very different from
            the nursery where it grew, and then it spent time in transit. This
            ‘downtime’ will let it bounce back before you disturb it with the
            repotting process. Remember, plants are fragile living things too!
          </p>
          <p>
            Now, when you’re repotting your plants, you’ll want to take them out
            of their current pots, shake out the old soil, and repot them with
            fresh potting mix (and if you’re a new plant parent, learn more
            about pots and plant health here). Use fresh potting mix whether
            you’re just looking to refresh your plant’s soil or size up because
            your plant needs a bigger home. To stay healthy, potted plants need
            old soil replaced with new potting mix for fresh nutrients.
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
          className={`md:text-base text-sm ${open3 && "text-[#009a7b] italic"}`}
        >
          What do planters do?
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
            Unlike pots, planters tend to get used outdoors. Both types of plant
            holders can have drainage holes to ensure plant health, though some
            sellers use “pot” to indicate a lack of drainage. As discussed
            above, planters generally hold an assortment of plants. Think of the
            huge concrete tubs or wooden barrels stuffed with pansies or hens
            and chicks. In the broadest sense, a planter is any container
            holding a plant outside the ground.
          </p>
          <p>Examples include:</p>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <Dot size={40} />
              <p>Hanging baskets</p>
            </div>
            <div className="flex items-center space-x-2">
              <Dot size={40} />
              <p>Wooden or concrete tubs</p>
            </div>
            <div className="flex items-center space-x-2">
              <Dot size={40} />
              <p>Small clay or ceramic pots</p>
            </div>
            <div className="flex items-center space-x-2">
              <Dot size={40} />
              <p>Raised containers of metal or rattan</p>
            </div>
            <div className="flex items-center space-x-2">
              <Dot size={40} />
              <p>Resin or plastic pots</p>
            </div>
            <div className="flex items-center space-x-2">
              <Dot size={40} />
              <p>Cachepots (decorative planters)</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-b"></div>
      )}

      <div
        className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
        onClick={() => setOpen4(!open4)}
      >
        <span
          className={`md:text-base text-sm ${open4 && "text-[#009a7b] italic"}`}
        >
          How long can plants stay in pots?
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
            As long as your plant is getting what it needs from the soil and has
            room to grow, it can stay in the same pot. Once it starts outgrowing
            its pot, you’ll need to repot it into a larger pot. If your plant’s
            current pot is 10 inches or smaller, you’ll want to repot it into a
            pot that is 2 inches larger. If the pot is larger than 10 inches,
            your new pot should be 2-3 inches bigger to give your plant room to
            grow.
          </p>
        </div>
      ) : (
        <div className="border-b"></div>
      )}

      <div className="lg:text-4xl md:text-3xl text-2xl text-[#00ab84] italic">
        Practically Perfect Pots & Planters
      </div>
      <p>
        Planters are an integral part of plant health, whether you just got your
        first snake plant or are repotting your fifth parlor palm. The right
        size planter will ensure your plant has room to grow and healthy soil to
        help it grow strong. Let’s take a look at the difference between
        planters and pots.
      </p>
    </div>
  );
};

export default FAQ;
