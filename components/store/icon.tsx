"use client";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const socials = [
  {
    name: "Yelp",
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/d2cb9b63e543e8d8e38e8daa3411cd454bab4585-22x24.svg?auto=format",
    href: "/",
  },
  {
    name: "Google",
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/3b0f1806846bf778d562a76f8f0d4aaf4f33ab86-24x24.svg?auto=format",
    href: "/",
  },
  {
    name: "Instagram",
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/6aa37cb14eca626dfa818e9cd6bd32b12d994b01-24x24.svg?auto=format",
    href: "/",
  },
];

const Icon = () => {
  const router = useRouter();
  return (
    <div className="md:my-12 my-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {socials.map((index) => (
        <div
          className="w-full lg:h-12 h-10 border bg-[#f9f8f7] flex items-center justify-center space-x-3 group hover:cursor-pointer"
          key={index.imgUrl}
          onClick={() => router.push(index.href)}
        >
          <img src={index.imgUrl} alt="social" className="object-fill" />
          <p className="group-hover:italic group-hover:font-medium group-hover:text-[#009a7b]">
            Review Us On {index.name}
          </p>
          <MoveRight
            size={18}
            className="group-hover:text-[#009a7b] transition ease-in-out group-hover:translate-x-3"
          />
        </div>
      ))}
    </div>
  );
};

export default Icon;
