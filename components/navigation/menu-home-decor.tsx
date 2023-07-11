"use client";

import Link from "next/link";
import { useCallback } from "react";
import { MoveRight } from "lucide-react";

import useMenuModal from "@/hooks/use-menu-mobile";
import useDecorModal from "@/hooks/use-decor-menu";

import Modal from "@/components/ui/modal-md";

const data = [
  {
    title: "Living Wall",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/9794751d6086b3f3048648a54ba2ac46bd753438-1200x1553.webp?auto=format",
    href: "/products",
  },
  {
    title: "Eucalyptus",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/c8257956aab51479bfc601717451f35d4dd74ae7-1200x1552.webp?auto=format",
    href: "/products",
  },

  {
    title: "Large Plants",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/348d0a54b0dace3757c54d7640edf3f0ccd2f999-300x300.webp?auto=format",
    href: "/collections/large-plants",
  },
];

const home = [
  {
    title: "Home",
    menu: [
      {
        name: "Shop All",
        link: "/collections/home-decor",
      },
      {
        name: "Browse By Room",
        link: "/best-houseplants-home-decor-office-bedroom",
      },
    ],
  },
  {
    title: "Decor",
    menu: [
      {
        name: "Faux & Preserved",
        link: "/collections/faux-and-preserved",
      },
      {
        name: "Stands & Hangers",
        link: "/collections/plant-stands",
      },
      {
        name: "Shelves",
        link: "/collections/shelves",
      },
    ],
  },
];

const DecorMenu = () => {
    const decorModal = useDecorModal();
    const menuModal = useMenuModal();
    const handleBack = useCallback(() => {
      decorModal.onClose();
      menuModal.onOpen();
    }, [decorModal, menuModal]);
  return (
    <Modal
      isOpen={decorModal.isOpen}
      onClose={decorModal.onClose}
      onClick={handleBack}
      title="← Back to Shop"
    >
      <div className="mb-6">
        <span className="text-3xl font-medium">Home & Decor</span>
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/97d1d76033945a2d330a27c047bd7023d974efa6-1125x891.jpg?w=1280&h=1014&auto=format"
          className="mt-6 block md:hidden object-fill"
        />
        <div
          className="hidden md:flex flex-row overflow-auto mt-8"
          onClick={() => {}}
        >
          {data.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="overflow-auto md:w-1/3 flex flex-row md:flex-col mx-2"
            >
              <img src={item.image} className="h-full w-full object-cover" />
              <div className="flex items-center gap-x-2  mt-2  font-medium">
                <span className="text-[14px]">{item.title}</span>
                <MoveRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 overflow-auto">
        <div className="flex flex-col gap-y-6">
          {home.map((loaction) => (
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

export default DecorMenu;
