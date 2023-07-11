"use client";

import Link from "next/link";
import { useCallback } from "react";
import { MoveRight } from "lucide-react";

import useMenuModal from "@/hooks/use-menu-mobile";
import useFauxModal from "@/hooks/use-faux-menu";

import Modal from "@/components/ui/modal-md";

const data = [
  {
    title: "Faux Trees",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/f1a3c4074cdee6a506e0dbd25638657ec27aae7a-1200x1553.webp?auto=format",
    href: "/collections/large-faux-trees",
  },
  {
    title: "Stem Sets",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/43224da825cba813ac80971534ca0598169fad29-1200x1553.webp?auto=format",
    href: "/collections/faux-stem-sets",
  },

  {
    title: "Why Faux?",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/2bb8c3a12a90cff29c228c61b5c5812592310198-884x535.webp?auto=format",
    href: "/blog",
  },
];

const fauxs = [
  {
    title: "Faux",
    menu: [
      {
        name: "Shop All",
        link: "/collections/faux",
      },
      {
        name: "Faux Trees",
        link: "/collections/large-faux-trees",
      },
      {
        name: "Stem Sets",
        link: "/collections/faux-stem-sets",
      },
    ],
  },
];

const FauxMenu = () => {
    const menuModal = useMenuModal();
    const fauxModal = useFauxModal();
    const handleBack = useCallback(() => {
      fauxModal.onClose();
      menuModal.onOpen();
    }, [fauxModal, menuModal]);

  return (
    <Modal
      isOpen={fauxModal.isOpen}
      onClose={fauxModal.onClose}
      onClick={handleBack}
      title="← Back to Shop"
    >
      <div className="mb-6">
        <span className="text-3xl font-medium">Faux & Preserved</span>
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/b9275e647cf440fa710bfc1d063bc933db8521d5-2880x1440.jpg?w=1536&h=768&auto=format"
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

      <div className="mt-6 overflow-auto">
        <div className="flex flex-col gap-y-6">
          {fauxs.map((loaction) => (
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

export default FauxMenu;
