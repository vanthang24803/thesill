"use client";

import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Infomation = () => {
  const router = useRouter();
  return (
    <div className="flex md:flex-row flex-col md:pt-8 pt-6 pb-4">
      <div className="md:basis-1/2 lg:my-16 hidden md:flex flex-col">
        <span className="lg:text-6xl text-4xl font-medium">Made With Care</span>
        <span className="my-8 lg:text-base text-[14px] lg:mr-12 mr-8 text-justify">
          We know how important materials that go into our products are to our
          customers. That’s why we’ve done our best to find high-quality,
          durable materials for our faux line to create long-term additions to
          your home. Our real-looking artificial plants and stems are made of a
          combination of fabric, plastic, wire, and foam, while larger plants
          may have an additional base composed of concrete and wood. Faux plants
          can be paired with our modern yet timeless earthenware planters for a
          finished look.
        </span>
        <Button
          onClick={() => router.push("/")}
          className="lg:w-1/3 w-2/3 lg:h-[7vh] h-[5vh]"
        >
          10 Reasons To Go Faux
        </Button>
      </div>
      <div className="md:basis-1/2">
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/147cd49b72696f2c79ef96b09250107a9133548a-1500x953.jpg?w=1000&auto=format"
          alt="image"
          className="w-full object-cover"
        />
      </div>
      <div className="mt-8 flex md:hidden flex-col">
        <span className="text-4xl font-medium">Made With Care</span>
        <span className="my-6 text-[14px] text-justify">
          We know how important materials that go into our products are to our
          customers. That’s why we’ve done our best to find high-quality,
          durable materials for our faux line to create long-term additions to
          your home. Our real-looking artificial plants and stems are made of a
          combination of fabric, plastic, wire, and foam, while larger plants
          may have an additional base composed of concrete and wood. Faux plants
          can be paired with our modern yet timeless earthenware planters for a
          finished look.
        </span>
        <Button
          onClick={() => router.push("/")}
          className="mt-4 w-2/3 h-[6vh]"
        >
          10 Reasons To Go Faux
        </Button>
      </div>
    </div>
  );
};

export default Infomation;
