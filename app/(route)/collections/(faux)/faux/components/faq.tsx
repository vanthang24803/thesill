"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openWhy, setOpenWhy] = useState(false);
  const [openWhere, setOpenWhere] = useState(false);
  const [openHow, setOpenHow] = useState(false);
  const [openWhat, setOpenWhat] = useState(false);
  const [openWhy2, setOpenWhy2] = useState(false);
  const [openHow2, setOpenHow2] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:mt-24 md:mt-16 mt-14 flex flex-col md:space-y-6 space-y-4 lg:w-3/4 w-full lg:mb-12 mb-6">
      <div className="lg:text-6xl md:text-4xl text-3xl text-[#00ab84] font-medium lg:pb-6 pb-4  border-b">
        Faux & Preserved FAQ
      </div>

      <div
        className="md:text-lg text-xl hover:cursor-pointer flex items-center justify-between"
        onClick={() => setOpenWhy(!openWhy)}
      >
        <span className={`text-base ${openWhy && "text-[#009a7b] italic"} `}>
          Why faux plants
        </span>
        {openWhy ? (
          <Minus className="text-[#009a7b]" size={26} />
        ) : (
          <Plus size={26} />
        )}
      </div>
      {openWhy ? (
        <div className="border-b pb-4">
          <p>
            We have customers who simply have restrictions—be it low light, busy
            schedules, small children, or curious pets. Faux plants give them
            the ability to bring greenery and joy into their space, minus
            className="text-[#009a7b]" the headache. We believe that plants, in
            all forms, make people happy.
          </p>
        </div>
      ) : (
        <div className="border-b"></div>
      )}

      <div
        className="md:text-lg text-xl hover:cursor-pointer flex items-center justify-between"
        onClick={() => setOpenWhere(!openWhere)}
      >
        <span className={`text-base ${openWhere && "text-[#009a7b] italic"}`}>
          Where can I put a faux plant?
        </span>
        {openWhere ? (
          <Minus className="text-[#009a7b]" size={26} />
        ) : (
          <Plus size={26} />
        )}
      </div>
      {openWhere ? (
        <div className="border-b pb-4">
          <p>
            Almost anywhere! We recommend keeping your faux plant indoors, in a
            spot with indirect light or no light. Direct sun can potentially
            fade your faux foliage over time.
          </p>
        </div>
      ) : (
        <div className="border-b"></div>
      )}

      <div
        className="md:text-lg text-xl hover:cursor-pointer flex items-center justify-between"
        onClick={() => setOpenHow(!openHow)}
      >
        <span className={`text-base ${openHow && "text-[#009a7b] italic"}`}>
          How do you clean a faux plant?
        </span>
        {openHow ? (
          <Minus className="text-[#009a7b]" size={26} />
        ) : (
          <Plus size={26} />
        )}
      </div>
      {openHow ? (
        <div className="border-b pb-4">
          <p>
            When it comes to faux plants, maintenance is minimal. Use a feather
            duster or soft cloth to sweep off dust and debris every month or
            two. Spot clean stains as soon as possible with warm soapy water.
          </p>
        </div>
      ) : (
        <div className="border-b"></div>
      )}

      <div
        className="md:text-lg text-xl hover:cursor-pointer flex items-center justify-between"
        onClick={() => setOpenWhat(!openWhat)}
      >
        <span className={`text-base ${openWhat && "text-[#009a7b] italic"}`}>
          What are they made of?
        </span>
        {openWhat ? (
          <Minus className="text-[#009a7b]" size={26} />
        ) : (
          <Plus size={26} />
        )}
      </div>
      {openWhat ? (
        <div className="border-b pb-4">
          <p>
            Our faux plants are made of a combination of fabric, plastic, wire,
            and foam. The larger plants may have a base comprised of concrete
            and wood.
          </p>
        </div>
      ) : (
        <div className="border-b"></div>
      )}

      <div
        className="md:text-lg text-xl hover:cursor-pointer flex items-center justify-between"
        onClick={() => setOpenWhy2(!openWhy2)}
      >
        <span className={`text-base ${openWhy2 && "text-[#009a7b] italic"}`}>
          Why do you also offer faux plants?
        </span>
        {openWhy2 ? (
          <Minus className="text-[#009a7b]" size={26} />
        ) : (
          <Plus size={26} />
        )}
      </div>
      {openWhy2 ? (
        <div className="border-b pb-4">
          <p>
            We have customers who simply have restrictions—be it low light, busy
            schedules, small children, or curious pets. Faux plants give
            everyone the ability to still bring greenery and joy into their
            space. We believe that plants, in all forms, make people happy.
          </p>
        </div>
      ) : (
        <div className="border-b"></div>
      )}

      <div
        className="md:text-lg text-xl hover:cursor-pointer flex items-center justify-between"
        onClick={() => setOpenHow2(!openHow2)}
      >
        <span className={`text-base ${openHow2 && "text-[#009a7b] italic"}`}>
          How do I dispose of a faux plant?
        </span>
        {openHow2 ? (
          <Minus className="text-[#009a7b]" size={26} />
        ) : (
          <Plus size={26} />
        )}
      </div>
      {openHow2 ? (
        <div className="border-b pb-4">
          <p>
            Our faux plant line uses the best materials available to create a
            high-quality, long-term addition to your home. If at any time you’re
            ready to relinquish your faux plant and do not have another home for
            it, please contact us and we can help you find a local retirement or
            nursing home, school, thrift store, charity, or other community
            organization to accept it as a donation.
          </p>
        </div>
      ) : (
        <div className="border-b"></div>
      )}

      <div
        className="md:text-lg text-xl hover:cursor-pointer flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <span className={`text-base ${open && "text-[#009a7b] italic"}`}>
          But plastic?
        </span>
        {open ? (
          <Minus className="text-[#009a7b]" size={26} />
        ) : (
          <Plus size={26} />
        )}
      </div>
      {open ? (
        <div className="border-b pb-4 flex flex-col space-y-4">
          <p>
            We hear you! Sustainability is important to The Sill. When it comes
            to our faux plant line, we use the best materials available to
            create a high-quality, long-term addition to your home.
          </p>
          <p>
            More broadly, the greatest and most immediate impact we can have is
            on single-use items across our entire line—like our packaging, which
            we’re transitioning to be fully recyclable. We are constantly
            looking for opportunities to remove waste from our supply chain and
            make strides towards a more sustainable future.
          </p>
        </div>
      ) : (
        <div className="border-b"></div>
      )}
    </div>
  );
};

export default FAQ;
