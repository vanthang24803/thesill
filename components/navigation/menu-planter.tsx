"use client"

import Link from "next/link";
import { useCallback } from "react";
import { MoveRight } from "lucide-react";

import usePlanterModal from "@/hooks/use-planter-menu";
import useMenuModal from "@/hooks/use-menu-mobile";

import Modal from "@/components/ui/modal-md";

const data = [
  {
    title: "View Collection",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/0b8007aa28a7fb37800f81f0011f9e2e2b81bed3-2820x1953.jpg?auto=format",
    href: "/categories/planters-stands-and-plant-pots",
  },

  {
    title: "Small & Medium",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/c500287996609be78b329872714132dab09296ab-1200x1553.webp?auto=format",
    href: "/collections/small-medium-planters",
  },

  {
    title: "Large Planters",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/0cf1260d2f1c1656353b43682a4c473a55d6c3ed-3600x4659.jpg?auto=format",
    href: "/collections/large-planters",
  },

  {
    title: "Drainage",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/81e74a69006288afd4204c66549764d310881549-1200x1553.jpg?auto=format",
    href: "/collections/drainage-planters",
  },
];

const plants = [
  {
    title: "Planters",
    menu: [
      {
        name: "Shop All",
        link: "/collections/planters",
      },
      {
        name: "Small & Medium",
        link: "/collections/small-medium-planters",
      },
      {
        name: "Large Planters",
        link: "collections/large-planters",
      },
      {
        name: "Plant Stands",
        link: "collections/plant-stands",
      },
    ],
  },
];


const PlanterMenu = () => {
    const planterModal = usePlanterModal();
    const menuModal = useMenuModal();

    const handleBack = useCallback(() => {
      planterModal.onClose();
      menuModal.onOpen();
    }, [planterModal, menuModal]);
  return (
    <Modal
      isOpen={planterModal.isOpen}
      onClose={planterModal.onClose}
      onClick={handleBack}
      title="← Back to Shop"
    >
      <div className="mb-6">
        <span className="text-3xl font-medium">Planters</span>
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/0b8007aa28a7fb37800f81f0011f9e2e2b81bed3-2820x1953.jpg?w=1536&h=1064&auto=format"
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
              <div className="flex items-center gap-x-1 mt-2 font-medium">
                <span className="text-[14px]">{item.title}</span>
                <MoveRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        <div className="overflow-auto mt-6">
          <div className="flex flex-col gap-y-6">
            {plants.map((plant) => (
              <div key={plant.title}>
                <span className="text-2xl font-medium">{plant.title}</span>
                <div className="mt-4">
                  {plant.menu.map((index) => (
                    <Link
                      onClick={() => {}}
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
}

export default PlanterMenu
