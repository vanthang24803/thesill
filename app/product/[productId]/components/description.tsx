import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  MoveRight,
  Truck,
  Smile,
  Gift,
  Sun,
  Droplet,
  Cat,
  Glasses
} from "lucide-react";
import { Product } from "@/types";

interface DescriptionProp {
  product: Product;
}

const Description: React.FC<DescriptionProp> = ({ product }) => {
  const [desc, setDesc] = useState(false);
  const [ship, setShip] = useState(false);
  const [care , setCare] = useState(false);
  const [gift, setGift] = useState(false);
  const [smile, setSmile] = useState(false);
  return (
    <div className="pt-5 mt-6 md:mt-8 lg:mt-6 flex flex-col border-t">
      {/* Description */}
      <div
        className="flex justify-between items-center  pb-5 hover:cursor-pointer"
        onClick={() => setDesc(!desc)}
      >
        <span className="text-xl font-medium">Description</span>
        {desc ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
      </div>
      {desc ? (
        <div className="flex flex-col space-y-4 pb-6 border-b">
          <p>
            Why is the Philodendron our most popular plant year after year? It
            could be its heart-shaped green leaves, easy-going nature, or
            quick-growing trailing vines. Snag this low-maintenance houseplant
            now to bring the outdoors in.
          </p>
          <div className="flex space-x-4 items-center">
            <MoveRight size={28} className="text-[#009a7b]" />
            <p>
              Each plant is unique; size and shape fluctuate by season so all
              measurements are shown as a range
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <MoveRight size={28} className="text-[#009a7b]" />
            <p>
              Small and medium plants measure between 3–6" tall from the soil
              line to the top of the foliage
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <MoveRight size={28} className="text-[#009a7b]" />
            <p>Arrives in a nursery grow pot nestled in your planter choice</p>
          </div>
        </div>
      ) : (
        <div className="border-b"></div>
      )}

      {(product.find.name === "Plants" || product.find.name === "Flowers") && (
        <>
          {/* Care Guide */}
          <div
            className="flex justify-between items-center py-5 hover:cursor-pointer"
            onClick={() => setCare(!care)}
          >
            <div className="flex items-center space-x-2">
              <Image
                width={22}
                height={22}
                alt="tree"
                src="/images/category/tree.svg"
              />
              <span className="text-xl font-medium">Care Guide</span>
            </div>
            {care ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
          </div>
          {care ? (
            <div className="flex flex-col space-y-4 pb-6 border-b">
              <div className="flex flex-col space-y-1">
                <span className="italic">{product.name}</span>
                <span>India, China, Southeast Asia</span>
              </div>

              <div className="flex flex-col space-y-2 mt-4">
                <span className="text-lg font-medium my-3">Plant Care</span>
                <div className="flex items-center justify-between space-x-4">
                  <Sun size={30} className="text-[#009a7b]" />
                  <span className="text-sm md:text-base">
                    Thrives in bright indirect light, but can tolerate medium
                    indirect light. Direct sun tolerance is species dependant.
                  </span>
                </div>
                <div className="flex items-center  space-x-4">
                  <Droplet size={80} className="text-[#009a7b]" />
                  <span className="text-sm md:text-base">
                    Water every 1-2 weeks, allowing potting medium to dry out
                    between waterings. If kept in decorative, cache planter,
                    pour out excess water after watering. Expect to water more
                    often in brighter light and less often in lower light. This
                    plant can benefit from extra humidity.
                  </span>
                </div>
                {product.benefit.name === "Pet-Friendly" && (
                  <div className="flex items-center  space-x-4">
                    <Cat size={24} className="text-[#009a7b]" />
                    <span>This is a pet friendly plant.</span>
                  </div>
                )}
                <div className="flex items-center justify-between space-x-4">
                  <Glasses size={40} className="text-[#009a7b]" />
                  <span className="text-sm md:text-base">
                    Most Orchids are epiphytes fond of tight quarters. Keeping
                    them in their grow pots keeps roots compact, and provides
                    drainage and air circulation.
                  </span>
                </div>
              </div>

              <div className="flex flex-col space-y-3 mt-4">
                <span className="text-lg font-medium my-2">
                  Sad Plant Signs
                </span>
                <div className="flex space-x-4">
                  <MoveRight size={22} className="text-[#009a7b]" />
                  <div className="flex flex-col">
                    <p className="italic">Wilting, wrinkling leaves:</p>
                    <p>Underwatered</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <MoveRight size={22} className="text-[#009a7b]" />
                  <div className="flex flex-col">
                    <p className="italic">Yellowing leaves:</p>
                    <p>Overwatered, or too much sun</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <MoveRight size={22} className="text-[#009a7b]" />
                  <div className="flex flex-col">
                    <p className="italic">Wilting flowers:</p>
                    <p>
                      Ending its yearly blooming cycle, storing up energy to
                      re-bloom
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="border-b"></div>
          )}
          {/* Gift */}
          <div
            className="flex justify-between items-center py-5 hover:cursor-pointer"
            onClick={() => setGift(!gift)}
          >
            <div className="flex items-center space-x-2">
              <Gift size={22} />
              <span className="text-xl font-medium">Sending a Gift?</span>
            </div>
            {gift ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
          </div>
          {gift ? (
            <div className="flex flex-col space-y-4 pb-6 border-b">
              <p>
                First, lucky them! Second, in the cart, before checkout, you’ll
                find an option to add a gift note. You can rest assured that all
                orders are shipped without pricing information and include
                directions on how to access our digital Care Library for plant
                care instructions.
              </p>
              <p>
                You can also let your gift recipient know something is on the
                way from yours truly by filling out 
                <a href="/" className="text-[#009a7b]">
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
          {/* Guarantee */}
          <div
            className="flex justify-between items-center py-5 hover:cursor-pointer"
            onClick={() => setSmile(!smile)}
          >
            <div className="flex items-center space-x-2">
              <Smile size={22} />
              <span className="text-xl font-medium">Our Guarantee</span>
            </div>
            {smile ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
          </div>
          {smile ? (
            <div className="flex flex-col space-y-4 pb-6 border-b">
              <p>
                Your plants will arrive in happy, healthy condition—guaranteed.
                If not, we replace them for free.
              </p>
              <p>
                Simply reach out to us with a photo within 30 days of receiving
                your order.  
                <a href="/" className="text-[#009a7b]">
                  Learn More.
                </a>
              </p>
            </div>
          ) : (
            <div className="border-b"></div>
          )}
        </>
      )}

      {/* Free Ship */}
      <div
        className="flex justify-between items-center  py-5 hover:cursor-pointer"
        onClick={() => setShip(!ship)}
      >
        <div className="flex items-center space-x-2">
          <Truck size={22} />
          <span className="text-xl font-medium">Free Shipping</span>
        </div>
        {ship ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
      </div>
      {ship ? (
        <div className="flex flex-col space-y-4 pb-6 border-b">
          <p>
            We are committed to reducing our environmental footprint. Nearly all
            packages ship <b>FREE</b> via UPS® carbon neutral shipping. This
            means we (not you) pay a contractual rate per package that ensures
            we offset our shipping footprint and reduce our annual emissions as
            a company. View our full 
            <a href="/" className="text-[#009a7b]">
              shipping policy.
            </a>
          </p>
        </div>
      ) : (
        <div className="border-b"></div>
      )}
    </div>
  );
};

export default Description;
