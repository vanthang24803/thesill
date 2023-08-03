"use client";

import { useState } from "react";
import { Plus, Minus, Dot } from "lucide-react";

const FAQ = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5 , setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
 

  return (
    <div className="lg:mt-24 md:mt-16 mt-14 flex flex-col md:space-y-6 space-y-4 lg:w-3/4 w-full lg:mb-12 mb-6">
      <div className="lg:text-6xl md:text-4xl text-3xl text-[#00ab84] lg:pb-6 pb-4  border-b italic">
        Live Plants FAQ
      </div>

      <div
        className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between"
        onClick={() => setOpen1(!open1)}
      >
        <span
          className={`md:text-base text-sm ${open1 && "text-[#009a7b] italic"}`}
        >
          What Are the Best Indoor Plants?
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
            The best indoor plant is one that you love the appearance of, that
            is well-suited to your home environment, and that you can care for
            and maintain. There are hundreds of varieties of houseplants to
            choose from, so rest assured that you will find one that works for
            you and your home.
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
          How May Houseplants Is Too Many
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
            You can have as many houseplants as you like so long as you have
            space to put them. It is only when you cannot take care of them or
            enjoy them that you know you have too many. Some people prefer to
            showcase just a few plants in their home while others have hundreds
            of indoor plants.
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
          When Should I Water My Plants?
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
            How often you water your houseplants will depend on the type of
            plant as well as the level of humidity in the home. Some plants
            require watering every couple of days, while others can go for two
            or three weeks. Generally, plants need to be watered more frequently
            in the spring and summer.
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
          className={`md:text-base text-sm ${open4 && "text-[#009a7b] italic"}`}
        >
          What Is the Fastest Growing Indoor Plant?
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
            If you’re hoping to see your plant grow quickly, choose something
            like a pothos, spider plant, or snake plant. When given the right
            conditions, these plants can show substantial growth in just a few
            weeks.
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
          className={`md:text-base text-sm ${open5 && "text-[#009a7b] italic"}`}
        >
          What Is the Easiest House Plant to Take Care Of?
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
            Snake and{" "}
            <a href="/" className="text-[#009a7b]">
              ZZ plants
            </a>{" "}
            are two of the easiest plants to care for. Snake plants can tolerate
            low light and drought. The easiest way to kill this plant is to
            overcare for it! ZZ plants are a hardy, drought-tolerant houseplant
            that only needs water every few weeks.
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
          className={`md:text-base text-sm ${open6 && "text-[#009a7b] italic"}`}
        >
          What Is the Most Common House Plant?
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
            The snake plant and pothos are very popular indoor plants. Since
            they are attractive and easy to care for, they make great choices
            when gifting a plant to a friend or loved one.
          </p>
        </div>
      ) : (
        <div className="border-b"></div>
      )}

      <div className="lg:text-4xl md:text-3xl text-2xl text-[#00ab84] italic">
        Spruce Up Your Home With Live Plants
      </div>
      <p>
        Adding live plants to your house is an ideal way to brighten up your
        space and give it a homey feeling. Bring nature indoors with a selection
        of houseplants to suit everyone’s style. Plants make your home look
        great, clean the air, and boost your mood.
      </p>
      <p>
        When choosing a live plant for your home, consider factors like size,
        color, and overall design. You’ll also want to think about how much care
        each plant requires – some are very low-maintenance while others need a
        bit more attention.
      </p>
      <p>
        Many plants need bright, indirect light to thrive but some grow very
        well in low light environments. When deciding on which live plants to
        buy, think about where they will go and how much sunlight they will be
        exposed to.
      </p>
    </div>
  );
};

export default FAQ;
