"use client";

import Link from "next/link";
import { useCallback } from "react";
import { MoveRight } from "lucide-react";

import usePlantModal from "@/hooks/use-plant-menu";
import useMenuModal from "@/hooks/use-menu-mobile";

import Modal from "@/components/ui/modal-md";

const data = [
  {
    title: "Large Plants",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/b6d2b7b7878a93e649c72d16b9214407ffc047dc-1200x1200.webp?auto=format",
    href: "/collections/large-plants",
  },

  {
    title: "Low Light",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/6913ebf9d947fd264592826adf6638438515538f-1200x1553.jpg?auto=format",
    href: "/collections/low-light",
  },

  {
    title: "Pet Friendly",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/6a1d90a835ef4e142baa0186298bf6e84c57bf06-640x640.webp?auto=format",
    href: "/collections/pet-friendly",
  },

  {
    title: "Colorful",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/10b826c767e548d306dff271c90d52452574d5ee-1200x1552.jpg?auto=format",
    href: "/collections/colorful",
  },
];

const plants = [
  {
    title: "Plants",
    menu: [
      {
        name: "Shop All",
        link: "/collections/live-plants",
      },
      {
        name: "New Arrivals",
        link: "/collections/new-arrival",
      },
    ],
  },

  {
    title: "Popular",
    menu: [
      {
        name: "Summer Sale",
        link: "/collections/sale",
      },
      {
        name: "Easy-Care Plants",
        link: "/collections/plants-for-beginners",
      },
      {
        name: "Low Light Tolerant",
        link: "/collections/low-light-plants",
      },
      {
        name: "Pet Friendly",
        link: "/collections/pet-friendly-plants",
      },
    ],
  },
  {
    title: "Shop By Size",
    menu: [
      {
        name: "Small",
        link: "/collections/small-plants",
      },
      {
        name: "Medium",
        link: "/collections/medium-plants",
      },
      {
        name: "Large",
        link: "/collections/large-plants",
      },
    ],
  },
  {
    title: "Sill Selects",
    menu: [
      {
        name: "Discovery",
        link: "/collections/discovery",
      },
      {
        name: "Explorer",
        link: "/collections/explorer",
      },
    ],
  },
];

const PlantMenu = () => {
  const plantModal = usePlantModal();
  const menuModal = useMenuModal();

  const handleBack = useCallback(() => {
    plantModal.onClose();
    menuModal.onOpen();
  }, [plantModal, menuModal]);

  return (
    <Modal
      isOpen={plantModal.isOpen}
      onClose={plantModal.onClose}
      onClick={handleBack}
      title="← Back to Shop"
    >
      <div className="mb-6">
        <span className="text-3xl font-medium">Plants</span>
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/56ac671be2b3f82b0b9b2da706611f9761ac45a1-927x648.jpg?w=1536&h=1074&auto=format"
          className="mt-6 block md:hidden object-fill"
        />
        <div
          className="hidden md:flex flex-row overflow-auto mt-6"
          onClick={() => {}}
        >
          {data.map((item) => (
            <Link
              href={item.href}
              key={item.image}
              className="overflow-auto md:w-1/4 flex flex-row md:flex-col px-2"
            >
              <img src={item.image} className="w-full h-[15vh] object-cover" />
              <div className="flex items-center gap-x-2 mt-2 font-medium">
                <span className="text-[14px]">{item.title}</span>
                <MoveRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="overflow-auto">
        <div className="flex flex-col gap-y-6">
          {plants.map((plant) => (
            <div key={plant.title}>
              <span className="text-2xl font-medium">{plant.title}</span>
              <div className="mt-4">
                {plant.menu.map((index) => (
                  <Link
                    onClick={() => {}}
                    href={index.link}
                    key={index.link}
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
    </Modal>
  );
};

export default PlantMenu;
