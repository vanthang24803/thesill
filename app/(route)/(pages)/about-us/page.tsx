"use client";

import Body from "@/components/ui/body";
import dynamic from "next/dynamic";

const About = () => {
  const SwipperLg = dynamic(() => import("@/app/(root)/components/swipper-lg"));
  const SwipperMd = dynamic(() => import("@/app/(root)/components/swipper-md"));
  const SwipperSm = dynamic(() => import("@/app/(root)/components/swipper-sm"));
  return (
    <Body>
      <div className="flex flex-col space-y-8 lg:p-40 md:p-20 p-4">
        <span className="md:text-5xl text-3xl font-medium">Welcome</span>
        <span className="text-lg">
          The Sill was founded on this simple premise—plants make us happier,
          healthier humans.
        </span>
        <p>
          I started The Sill in 2012 at the age of 26 in borrowed office space
          in a tiny walk-up in New York City’s Chinatown. The idea had sprouted
          years before <i>(sorry, we love a good plant pun around here)</i> when
          I found myself in my first adult apartment. Bleak is how you’d
          describe it. Homesick is how you’d describe me. My Mom, an immigrant
          who stayed connected to her Filipino roots through gardening,
          recommended I get some houseplants. Little did I know tapping into my
          family’s generational love of plants would grow into the small but
          mighty company that is The Sill.
        </p>
      </div>

      <div className="md:px-20 py-4">
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/c32d66bc246cb7c22dd38d3e10a9d3e4eb4c9de2-4480x2987.webp?w=1536&h=1024&auto=format"
          alt="ceo"
          className="object-fill w-full"
        />
      </div>

      <div className="flex flex-col space-y-8 lg:p-40 md:p-20 p-4">
        <span>
          I instantly became passionate about plants, and keenly aware of the
          impact being around plants had on me growing up. There’s something in
          the simple act of being around and caring for plants that improves our
          mood, and, added bonus, beautifies the spaces we live and work in.
          It’s been shown every exposure to nature—from indoor gardening to
          forest bathing—mitigates the modern condition, that stressed-out state
          we find ourselves in all too often. That
          <i> (plus a lot of dirt, sweat, and hustle)</i> is how The Sill came
          to be.
        </span>
        <p>
          So I invite you to join me—whether you’ve never had a plant before or
          are adding to a budding collection—in cultivating a space, and a life,
          with plants. I know firsthand how wonderful it can be.
        </p>
        <p>
          Keep growing, <br />– Eliza & The Sill team
        </p>
      </div>

      <div className="md:my-16 my-12">
        <div className="hidden lg:block">
          <SwipperLg />
        </div>

        <div className="hidden md:block lg:hidden">
          <SwipperMd />
        </div>

        <div className="block md:hidden">
          <SwipperSm />
        </div>
      </div>
    </Body>
  );
};

export default About;
