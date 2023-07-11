"use client";

import { MoveRight } from "lucide-react";
import useResourcesModal from "@/hooks/use-resources";

import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/ui/modal-lg";

const plants = [
  {
    img: "/images/navbar/map.svg",
    title: "Store Locator",
    desc: "Visit us IRL in one of our local shops.",
    href: "/locations",
    alt: "map",
  },
  {
    img: "/images/category/Oclock.svg",
    title: "Find Your Match",
    desc: "Take this quiz to find your plant match",
    href: "/",
    alt: "oclock",
  },
  {
    img: "/images/category/tree.svg",
    title: "Plant Care Library",
    desc: "Care guides for all your plants, A to Z",
    href: "/",
    alt: "tree",
  },
  {
    img: "/images/category/blog.svg",
    title: "Blog & Resources",
    desc: "Plants 101, common care questions, & more",
    href: "/",
    alt: "blog",
  },
];

const service = [
  {
    title: "30-Day Guarantee",
    desc: "Your plants will arrive in happy, healthy condition—guaranteed.",
    href: "/",
  },
  {
    title: "Shipping & Handling",
    desc: "Delivery Estimates and Shipping Cutoffs",
    href: "/",
  },
  {
    title: "Frequently Asked Questions",
    desc: "Answers to common questions",
    href: "/",
  },
];

const Resources = () => {
  const resourcesModal = useResourcesModal();
  return (
    <Modal isOpen={resourcesModal.isOpen} onClose={resourcesModal.onClose}>
      <div className="mt-8">
        <span className="font-medium md:text-3xl text-2xl">
          Plant Care Resources
        </span>
        <div className="flex flex-col space-y-4 mt-8">
          {plants.map((item) => (
            <Link
              className="flex justify-between items-center"
              href={item.href}
              key={item.alt}
            >
              <div className="flex justify-center items-center">
                <div className="flex items-center gap-x-2">
                  <Image alt={item.alt} src={item.img} height={28} width={26} />
                  <div className="mx-1 md:mx-4">
                    <span className="font-medium text-lg">{item.title}</span>
                    <br />
                    <span className="text-sm italic">{item.desc}</span>
                  </div>
                </div>
              </div>
              <MoveRight
                size={24}
                className="hover:translate-x-2 transition-all ease-in-out"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <span className="font-medium md:text-3xl text-2xl">
          Customer Service Help
        </span>
        <div className="flex flex-col space-y-6 mt-8">
          {service.map((label) => (
            <Link
              className="flex justify-between items-center"
              href={label.href}
              key={label.href}
            >
              <div className="flex justify-center items-center">
                <div className="flex items-center gap-x-2">
                  <div className="mx-1 md:mx-4">
                    <span className="font-medium text-lg">{label.title}</span>
                    <br />
                    <span className="md:text-sm text-[12px] italic">
                      {label.desc}
                    </span>
                  </div>
                </div>
              </div>
              <MoveRight
                size={24}
                className="hover:translate-x-2 transition-all ease-in-out"
              />
            </Link>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Resources;
