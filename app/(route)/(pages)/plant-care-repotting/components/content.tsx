"use client";

import { MoveRight } from "lucide-react";
import Video from "./video";
import { useRouter } from "next/navigation";

const Content = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center lg:space-y-6 space-y-4 lg:py-8 py-6">
      <img
        src="https://cdn.sanity.io/images/y346iw48/production/7f66ddb11b455a825677a6d1a26dd0c892bce47b-4000x2250.jpg?w=884&auto=format"
        alt="user"
        className="w-full lg:w-2/3"
      />
      <div className="flex flex-col space-y-6 lg:w-2/3 lg:px-12 py-8">
        <p>
          Repotting your plants can sound tricky, but we have a few tips to make
          it a success.
        </p>
        <p>
          First things first: repotting does not necessarily mean changing a
          plant’s current planter, but rather, changing its soil or
          <a href="/" className="text-[#009a7b] px-1 font-medium">
            potting mix
          </a>
          . Fresh soil means new nutrients. This is great news if you love your
          current planter, but if you’re looking to purchase a new one, or your
          plant has visibly overgrown its current vessel, that’s fine, too.
        </p>

        <p>
          When
          <a href="/" className="text-[#009a7b] px-1 font-medium">
            picking out a new planter
          </a>
          , try to keep the size no more than 2" larger in diameter for tabletop
          planters, and no more than 4" larger in diameter for floor planters.
          If you're repotting a very small plant, your new planter might only
          need to be an inch larger! The size of your plant's new home is
          important because the larger the planter, the more water we tend to
          give it... Small plant + oversized planter + lots of soil + lots of
          water = accidentally killing with kindness. You do not want your plant
          to be swimming in soil, but rather, have a little extra room to grow
          into during the months ahead.
        </p>
      </div>

      <div className="flex flex-col space-y-4 lg:w-2/3 lg:px-12">
        <span className="font-semibold">
          Not sure if you need to repot your plants? If you see one or a
          combination of these signs, you'll know it's a good time to re-pot:
        </span>

        <div>
          <p>
            1. Roots are growing through the drainage hole(s) at the bottom of
            the grow pot or planter
          </p>
          <p>2. Roots are pushing the plant up and almost out of the planter</p>
          <p>
            3. The plant is growing much slower than normal (and it's not due to
            winter dormancy)
          </p>
          <p>4. The plant is extremely top-heavy, and may fall over easily</p>
          <p>
            5. The plant's potting mix dries out more quickly than before,
            requiring more frequent waterings
          </p>
          <p>
            6. The plant's foliage is more than three times the size of its
            current planter
          </p>
          <p>
            7. There's noticeable salt and mineral build-up on the plant or
            planter
          </p>
          <p>8. It's been over a year since you last repotted your plant</p>
        </div>

        <span className="font-semibold">Here's what you'll want handy:</span>

        <div className="flex flex-col space-y-1">
          <p>
            — Your current plant or
            <a
              href="/categories/plants"
              className="text-[#009a7b] font-medium px-1"
            >
              new plant
            </a>
            , of course
          </p>
          <p>
            — The
            <a
              href="/categories/planters"
              className="text-[#009a7b] font-medium px-1"
            >
              planter
            </a>
            you're potting into (if reusing a planter, make sure to give the
            interior a good rinse!)
          </p>
          <p>
            — Fresh
            <a
              href="/product/c8e8d7b6-699f-4e3c-90c4-cfd4c1c318d8"
              className="text-[#009a7b] font-medium px-1"
            >
              potting mix
            </a>
          </p>
          <p>
            —
            <a href="/" className="text-[#009a7b] font-medium px-1">
              Lava rocks
            </a>
            or similar, if your planter does not have a drainage hole
          </p>
          <p>
            —
            <a href="/" className="text-[#009a7b] font-medium px-1">
              Gloves
            </a>
            , if you're handling a plant with irritating sap like a Ficus
            elastica or a prickly cactus
          </p>
          <p>
            — A
            <a href="/" className="text-[#009a7b] font-medium px-1">
              wearing can
            </a>
            , water bottle, or sink faucet
          </p>
          <p>
            — A
            <a href="/" className="text-[#009a7b] font-medium px-1">
              potting tarp
            </a>
            , newspaper, or surface you can easily clean
          </p>
        </div>
      </div>

      <Video />

      <div className="flex flex-col space-y-4 lg:w-2/3 lg:px-12 pt-4 pb-8 border-b">
        <span className="text-3xl">Simple Steps to Repot Your Plant</span>
        <div className="flex flex-col">
          <span className="font-semibold">
            1. Remove the plant from its current planter or grow pot
          </span>
          <p>
            Turn your plant sideways, hold it gently by the stems or leaves, and
            tap the bottom of its current vessel until the plant slides out. You
            might need to give it a bit of help with a couple of gentle tugs on
            the base of the stems.
          </p>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">2. Loosen the roots</span>
          <p>
            Loosen the plant’s roots gently with your hands. You can prune off
            any threadlike roots that are extra long, just make sure to leave
            the thicker roots at the base of the foliage. If your plant is root
            bound—the roots are growing in very tight circles around the base of
            the plant—unbind the roots as best you can and give them a trim.
          </p>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">3. Remove the old potting mix</span>
          <p>
            Remove about one-third or more of the old potting mix surrounding
            the plant's roots. As it grew, your plant removed some or all of the
            nutrients in the current mix, so you'll want to give it fresh
            potting mix or soil.
          </p>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">4. Add new potting mix</span>
          <p>
            Pour a layer of fresh potting soil into the empty planter and pack
            it down, removing any air pockets. If your planter doesn’t have a
            drainage hole, layer the bottom with lava rocks or similar (rocks,
            gravel, etc.) before adding the potting mix. The goal is to create
            crevices for the extra water to pool into, away from your plant’s
            roots.
          </p>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">5. Add your plant</span>
          <p>
            Set your plant on top of the fresh layer of mix in the planter,
            making sure it's centered, then add more potting mix around the
            plant until it is secure. Be sure not to pack too much soil into the
            planter: you want the roots to have space to breathe.
          </p>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">6. Water and enjoy</span>
          <p>
            Even out the potting soil on top and water well! It's worth noting
            that a freshly repotted plant does not need to be fed fertilizer.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex md:space-x-8 space-x-0 md:space-y-0 space-y-4 items-center justify-center flex-col md:flex-row ">
          <img
            src="https://cdn.sanity.io/images/y346iw48/production/5697ee7627ddf79b0bbda1acf462932b13dced48-363x364.jpg?w=200&auto=format"
            alt="img"
            className="rounded-full object-cover hidden md:block"
          />
          <div className="flex flex-col space-y-3">
            <span className="text-3xl font-medium font-serif">
              Pots & Planters
            </span>
            <p className="md:w-[250px] text-xs">
              Meet your next favorite planter. Discover planters, cachepots,
              propagation vessels, and more in a wide range of styles, sizes, &
              colors.
            </p>
            <div
              className="flex items-center space-x-2 group hover:cursor-pointer"
              onClick={() => router.push("/collections/planters")}
            >
              <span className="text-xl group-hover:text-[#009a7b] hover:font-medium">
                Shop Now
              </span>
              <MoveRight
                size={24}
                className="group-hover:text-[#009a7b] hover:font-medium group-hover:translate-x-2 transition-all ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
