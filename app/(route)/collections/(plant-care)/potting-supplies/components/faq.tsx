"use client";

import { useState } from "react";
import { Plus, Minus, Dot } from "lucide-react";

const FAQ = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="lg:mt-28 md:mt-16 mt-14 flex flex-col md:space-y-6 space-y-4 lg:w-3/4 w-full lg:mb-12 mb-6">
      <div className="lg:text-6xl md:text-4xl text-3xl text-[#00ab84]  lg:pb-6 pb-4  border-b italic">
        Potting Supplies FAQ
      </div>

      <div
        className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
        onClick={() => setOpen1(!open1)}
      >
        <span
          className={`md:text-base text-sm ${open1 && "text-[#009a7b] italic"}`}
        >
          What do I need to buy for supplies for indoor plants?
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
            Your potting supplies are going to vary based on your plants’ needs.
            If you’re cultivating desert plants like succulents, you’ll need a
            cactus potting mix, lava rocks, and sand. These “ingredients” are
            perfect for making sure your plants get the drainage they need to
            thrive. Other plants will need a standard potting mix and may
            benefit from moisture sensors to ensure they stay well hydrated.
          </p>
          <p>
            All plants will need a planter, potting mix, a watering method (like
            a watering can or mister), appropriate fertilizer, and safe
            pesticides.
          </p>
          <p>
            If you plan on repotting in small spaces, a repotting tarp will help
            keep soil and plant leavings contained. Eventually, you’ll want to
            put together a gardening kit with a trowel, gloves (especially if
            you’re working with cacti), and pruning shears.
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
          What are the essentials for indoor plants?
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
            Potting mix isn’t one size fits all, but we do our best to simplify
            things for you. We offer two kinds of potting mixes; one is standard
            and works for most plants, and the other is best for cacti. These
            are organic and free from toxic chemicals that could hurt your new
            friends. The potting mix contains
          </p>
          <div className="flex flex-col">
            <div className="flex items-center">
              <Dot size={30} />
              <p>Compost</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>Paine bark</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>Coir</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>Worm castings</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>Perlite</p>
            </div>
          </div>
          <p>
            These ingredients ensure moisture levels can be maintained and
            provide incredible nutrients to keep your plants happy and healthy.
            Our cacti mix has:
          </p>
          <div className="flex flex-col">
            <div className="flex items-center">
              <Dot size={30} />
              <p>Biochar</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>Expanded shale</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>Rice hulls</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>Compost</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>Worm castings</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>Sand</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>Coir</p>
            </div>
          </div>
          <p>
            While it has some of the same ingredients as our standard potting
            mix, the cacti potting mix aims to keep your desert plants from
            being over-saturated by mimicking desert soil.
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
          What do I need to buy for supplies for indoor plants?
        </span>
        {open3 ? (
          <Minus className="text-[#009a7b]" size={26} />
        ) : (
          <Plus size={26} />
        )}
      </div>
      {open3 ? (
        <div className="border-b pb-4 flex flex-col space-y-3">
          <p>No matter what kind of plant you’re bringing home, you’ll need:</p>
          <div className="flex flex-col">
            <div className="flex items-center">
              <Dot size={30} />
              <p>A new planter with a tray or saucer,</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>Fresh potting mix (standard or one for cacti) for repotting</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>Your watering method (like a can or mister),</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>Appropriate fertilizer,</p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>
                Pruning shears for trimming growth and collecting cuttings, and
              </p>
            </div>
            <div className="flex items-center">
              <Dot size={30} />
              <p>A pesticide for the inevitable insect invasion.</p>
            </div>
          </div>
          <p>
            We know, it seems like a lot. But this collection of materials will
            keep you ready for whatever your plant needs.
          </p>
        </div>
      ) : (
        <div className="border-b"></div>
      )}

      <span className="lg:text-4xl md:text-4xl lg:pt-16 pt-12 text-2xl text-[#00ab84]  italic">
        Potting Supplies for All Your Plant Care Needs
      </span>
      <div className="flex flex-col pt-4 space-y-4">
        <p>
          Despite being the foundation, potting supplies may be the most
          underrated part of plant care. Imagine trying to raise a puppy without
          food and dishes and a comfy bed for it to sleep in!
        </p>
        <p>
          Your potting supplies are your first gift to your plants and are
          central to keeping them happy and healthy as you explore growing
          together.
        </p>
        <p>
          Whether you’re looking for the best watering method or the perfect
          potting mix for your new friend, we have the supplies you need!
        </p>
      </div>
    </div>
  );
};

export default FAQ;
