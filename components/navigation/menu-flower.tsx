"use client";

import Link from "next/link";
import { useCallback } from "react";
import { MoveRight } from "lucide-react";

import useMenuModal from "@/hooks/use-menu-mobile";
import useFlowerModal from "@/hooks/use-flower-menu";

import Modal from "@/components/ui/modal-md";

const data = [
  {
    title: "View Collection",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/eb99ab0ab95f34ec83a6a4c4365cba0d5fa6fade-1446x939.jpg?auto=format",
    href: "/categories/blooming-plants-flower-bouquets",
  },
  {
    title: "Orchids",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/6fe260294f479e43d737fc737d19472d36fc3eb1-1536x2006.webp?auto=format",
    href: "/collections/orchids",
  },

  {
    title: "Bouquets",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/824dba74c9ed71e358dbc70e8cb94d4202e95d5f-1200x1553.webp?auto=format",
    href: "/collections/dried-bouquets",
  },
];

const flowers = [
  {
    title: "Flowers",
    menu: [
      {
        name: "Shop All",
        link: "/collections/fresh-flowers-botanical-bouquets",
      },
      {
        name: "Orchids",
        link: "/collections/orchids",
      },
    ],
  },
  {
    title: "Popular",
    menu: [
      {
        name: "Flowering Plants",
        link: "/collections/blooming-plants",
      },
      {
        name: "Dried Bouquets",
        link: "/collections/dried-bouquets",
      },
      {
        name: "Anthuriums",
        link: "/collections/anthuriums",
      },
      {
        name: "Bromeliads",
        link: "/collections/bromeliads",
      },
    ],
  },
];

const FlowerMenu = () => {
    const flowrModal = useFlowerModal();
    const menuModal = useMenuModal();

     const handleBack = useCallback(() => {
       flowrModal.onClose();
       menuModal.onOpen();
     }, [flowrModal, menuModal]);
  return (
    <Modal
      isOpen={flowrModal.isOpen}
      onClose={flowrModal.onClose}
      onClick={handleBack}
      title="← Back to Shop"
    >
      <div className="mb-6">
        <span className="text-3xl font-medium">Flowers</span>
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/a36447255fda5865eaf583dfc9d8c168452eacc4-1125x891.jpg?w=1280&h=1014&auto=format"
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

        <div className="mt-6 overflow-auto">
          <div className="flex flex-col gap-y-6">
            {flowers.map((loaction) => (
              <div>
                <span className="text-2xl font-medium">{loaction.title}</span>
                <div className="mt-4">
                  {loaction.menu.map((index) => (
                    <Link
                      onClick={() => {}}
                      key={index.link}
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
      </div>
    </Modal>
  );
}

export default FlowerMenu
