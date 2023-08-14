"use client";

import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Steps = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-8 py-4">
      <div className="flex lg:flex-row flex-col lg:space-x-8 lg:space-y-0 space-y-6 items-center">
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/8ae36c1ae9b82df3b101114649d3357d7fd4c060-1200x823.webp?w=1000&auto=format"
          alt="image"
          className="object-fill w-full lg:w-1/2"
        />
        <div className="flex lg:w-1/2 flex-col space-y-8">
          <span className="lg:text-5xl md:text-4xl text-3xl font-medium  font-serif flex space-x-2">
            Step 1: Pick Your Plant
          </span>
          <p>
            From non-toxic plants for pet-friendly spaces to low-light tolerant
            plants for home offices, we have plants and planters that suit your
            unique needs.
          </p>

          <Button
            className="h-12 md:w-1/2"
            onClick={() =>
              router.push(
                "https://cdn.shopify.com/s/files/1/0150/6262/files/corporate-gifting_catalogue_holiday_2022.pdf?v=1663864575"
              )
            }
          >
            View Gifting Catalog
          </Button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:space-x-8 lg:space-y-0 space-y-6 items-center">
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/8bf36c7ef88de98a96fc5938e58a055940289872-1000x704.webp?w=1000&auto=format"
          alt="image"
          className="object-fill w-full lg:w-1/2"
        />
        <div className="flex lg:w-1/2 flex-col space-y-8">
          <span className="lg:text-5xl md:text-4xl text-3xl font-medium  font-serif">
            Step 2: Tell Us Where To Ship
          </span>
          <p>
            Shipping to multiple locations? We’ve got you covered. Complete the
            form to deliver greenery to all the addresses on your list.
          </p>

          <Button
            className="h-12 md:w-1/2"
            onClick={() =>
              router.push(
                "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0150%2F6262%2Ffiles%2FThe_Sill_Address_Form.xlsx&wdOrigin=BROWSELINK"
              )
            }
          >
            Download Address Form
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
