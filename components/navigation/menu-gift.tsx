"use client";

import Link from "next/link";
import { useCallback } from "react";
import { MoveRight } from "lucide-react";

import useMenuModal from "@/hooks/use-menu-mobile";
import useGiftModal from "@/hooks/use-gift-menu";

import Modal from "@/components/ui/modal-md";

const data = [
  {
    title: "Gift Guide",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/5d4c875b1785b6c4aa5a3787fcef1e36aac8262d-1536x1140.webp?auto=format",
    href: "/",
  },
  {
    title: "Gift Cards",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/7ac71c20728a42651c1802c50d7186c0e0f83939-600x600.jpg?auto=format",
    href: "/",
  },

  {
    title: "The Sill Merch",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/824dba74c9ed71e358dbc70e8cb94d4202e95d5f-1200x1553.webp?auto=format",
    href: "/",
  },
  {
    title: "Comporate Gifts",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/e1b04032931a7b57b260fbe1863ac459068de7b7-1536x1074.webp?auto=format",
    href: "/",
  },
];

const gifts = [
  {
    title: "Gifts",
    menu: [
      {
        name: "Shop All",
        link: "/",
      },
      {
        name: "Gift Cards",
        link: "/",
      },
    ],
  },
  {
    title: "By Occassion",
    menu: [
      {
        name: "Happy Birthday",
        link: "/",
      },
      {
        name: "Housewarning",
        link: "/",
      },
      {
        name: "Congratulations",
        link: "/",
      },
      {
        name: "Sympathy Gifts",
        link: "/",
      },
    ],
  },

  {
    title: "Best Sallers",
    menu: [
      {
        name: "Subcription",
        link: "/",
      },
      {
        name: "Massage Pops",
        link: "/",
      },
      {
        name: "The Sill Merch",
        link: "/",
      },
    ],
  },
];

const GiftMenu = () => {
  const menuModal = useMenuModal();
  const giftModal = useGiftModal();

  const handleBack = useCallback(() => {
    giftModal.onClose();
    menuModal.onOpen();
  }, [giftModal, menuModal]);
  return (
    <Modal
      isOpen={giftModal.isOpen}
      onClose={giftModal.onClose}
      onClick={handleBack}
      title="← Back to Shop"
    >
      <div className="mb-6">
        <span className="text-3xl font-medium">Plants</span>
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/7d1805fcaaf52324b3bb505367b3272460725263-1754x1302.jpg?w=1536&h=1140&auto=format"
          className="mt-6 block md:hidden object-fill"
        />
        <div
          className="hidden md:flex flex-row overflow-auto mt-8"
          onClick={() => {}}
        >
          {data.map((item) => (
            <Link
              href={item.href}
              key={item.image}
              className="overflow-auto md:w-1/4 flex flex-row md:flex-col mx-2"
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
          {gifts.map((loaction) => (
            <div key={loaction.title}>
              <span className="text-2xl font-medium">{loaction.title}</span>
              <div className="mt-4">
                {loaction.menu.map((index) => (
                  <Link
                    onClick={giftModal.onClose}
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
    </Modal>
  );
};

export default GiftMenu;
