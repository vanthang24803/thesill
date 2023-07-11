"use client";

import Link from "next/link";
import { useCallback } from "react";
import { MoveRight } from "lucide-react";

import useNavModalModal from "@/hooks/use-store-menu";

import Modal from "@/components/ui/modal-md";
import useMenuModal from "@/hooks/use-menu-mobile";

const data = [
  {
    title: "In Store Exclusives",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/b0e6ee2d7986b0c1cb0a1bc7e8eeb1d4eed9bc30-645x600.svg?auto=format",
  },
  {
    title: " Same Day Delivery",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/0edfd91c5a5e931a4a10d1550eac004880dba6ca-645x600.svg?auto=format",
  },

  {
    title: "Re-Potting Service",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/56ac671be2b3f82b0b9b2da706611f9761ac45a1-927x648.jpg?auto=format",
  },
];

const loactions = [
  {
    title: "New York",
    menu: [
      {
        name: "Upper West Side",
        link: "/",
      },
      {
        name: "Williamsburg",
        link: "/",
      },
      {
        name: "Cobble Hill",
        link: "/",
      },
      {
        name: "Park Slope",
        link: "/",
      },
    ],
  },

  {
    title: "California",
    menu: [
      {
        name: "San Francisco",
        link: "/",
      },
    ],
  },
  {
    title: "Illinois",
    menu: [
      {
        name: "Chicago",
        link: "/",
      },
    ],
  },
  {
    title: "Maryland",
    menu: [
      {
        name: "Bethesda",
        link: "/",
      },
    ],
  },
];



const StoreMenu = () => {
  const navModal = useNavModalModal();
  const menuModal = useMenuModal();

  const handleBack = useCallback(() => {
    navModal.onClose();
    menuModal.onOpen();
  } ,[navModal, menuModal]);
  return (
    <Modal
      isOpen={navModal.isOpen}
      onClose={navModal.onClose}
      title="← Back to Shop"
      onClick={handleBack}
    >
      <div className="mb-6">
        <span className="text-3xl font-medium">Stores</span>
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/725e8e85da90573fbbae6afbbe0919a0f86e9dbb-4500x3000.jpg?w=400&auto=format"
          className="mt-6 block md:hidden object-fill"
        />
        <div
          className="hidden md:flex flex-row overflow-auto mt-6"
          onClick={() => {}}
        >
          {data.map((item) => (
            <Link
              href="/locations"
              key={item.title}
              className="overflow-auto md:w-1/3 flex flex-row md:flex-col mx-2"
            >
              <img src={item.image} className="h-full w-full object-cover" />
              <div className="flex items-center gap-x-2 mt-2 font-medium">
                <span className="text-[14px]">{item.title}</span>
                <MoveRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="overflow-auto">
        <div className="flex flex-col gap-y-6">
          {loactions.map((loaction) => (
            <div>
              <span className="text-2xl font-medium">{loaction.title}</span>
              <div className="mt-4">
                {loaction.menu.map((index) => (
                  <Link
                    onClick={() => {}}
                    key={index.name}
                    href={index.link}
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

export default StoreMenu;
