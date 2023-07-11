"use client";

import Link from "next/link";
import { useCallback } from "react";
import { MoveRight } from "lucide-react";

import useMenuModal from "@/hooks/use-menu-mobile";
import usePlantCareModal from "@/hooks/use-plant-care-mobile";

import Modal from "@/components/ui/modal-md";

const data = [
  {
    title: "Potting Mix",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/cd32202e24807165b4bfef1000a6eda1e619ec2c-1200x1553.webp?auto=format",
    href: "/products/potting-mix-plants",
  },
  {
    title: "Moisture Meter",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/82c28a4a313d855df5aabf70e7fd139a36e86bcd-1200x1552.jpg?auto=format",
    href: "/products/3-in-1-soil-moisture-meter",
  },

  {
    title: "Coco Coir Poles",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/f8a75e5c91bc94119f16e40c169b5be2ab1acb93-1200x1553.jpg?auto=format",
    href: "/products/coco-coir-poles",
  },
];

const plants = [
  {
    title: "Plant Care",
    menu: [
      {
        name: "Shop All",
        link: "/collections/plant-care",
      },
      {
        name: "Potting Supplies",
        link: "/collections/potting-supplies",
      },
      {
        name: "Grow Lights",
        link: "/collections/grow-lights",
      },
      {
        name: "Virtual Plant Appointment",
        link: "/products/virtual-plant-appointment",
      },
    ],
  },
];


const PlantCareMenu = () => {
    const plantCareModal = usePlantCareModal();
    const menuModal = useMenuModal();

    const handleBack = useCallback(() => {
      plantCareModal.onClose();
      menuModal.onOpen();
    }, [plantCareModal, menuModal]);
  return (
    <Modal
      isOpen={plantCareModal.isOpen}
      onClose={plantCareModal.onClose}
      onClick={handleBack}
      title="← Back to Shop"
    >
      <div className="mb-6">
        <span className="text-3xl font-medium">Plant Care</span>
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/c70d634abfb43db0f7788614d0b779c63a358bdc-2703x1809.jpg?w=1536&h=1028&auto=format"
          className="mt-6 block md:hidden object-fill"
        />
        <div
          className="hidden md:flex flex-row overflow-auto mt-8"
          onClick={plantCareModal.onClose}
        >
          {data.map((item) => (
            <Link
              href={item.href}
              key={item.image}
              className="overflow-auto md:w-1/3 flex flex-row md:flex-col mx-2"
            >
              <img src={item.image} className="h-full w-full object-cover" />
              <div className="flex items-center gap-x-2 mt-2  font-medium">
                <span className="text-[14px]">{item.title}</span>
                <MoveRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 overflow-auto">
          <div className="flex flex-col gap-y-6">
            {plants.map((loaction) => (
              <div>
                <span className="text-2xl font-medium">{loaction.title}</span>
                <div className="mt-4">
                  {loaction.menu.map((index) => (
                    <Link
                      onClick={plantCareModal.onClose}
                      href={index.link}
                      key={index.name}
                      className="flex flex-row my-4 py-2 md:py-3 border-b-[2px] border-neutral-200/70 font-light"
                    >
                      {index.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PlantCareMenu;
