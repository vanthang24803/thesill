"use client";

import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

const navs = [
  {
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/4bb922e1e95d4d8a6763910d297eb5b2d709407e-1200x1553.webp?auto=format",
    title: "Easy Care",
    href: "/product/da683815-bbb6-4c58-967e-8d1143502d63",
  },
  {
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/cd044586b0e98908fa54c06f5e809fe2b1894824-1200x1553.webp?auto=format",
    title: "Pet Friendly",
    href: "/product/8afc24b2-8ca1-4b97-8d3f-d623945ad133",
  },
  {
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/5dc16ed0b081fb964780e6bb9c52d96f26b37dc6-1200x1553.webp?auto=format",
    title: "Orchids",
    href: "/product/e03ba435-6361-45bf-ab60-be53170cb6db",
  },
];

const Nav = () => {
  const router = useRouter();
  return (
    <div className="lg:pt-8 pb-4 pt-6">
      <div className="flex flex-col space-y-3">
        <span className="lg:text-5xl md:text-4xl text-3xl py-4">
          Find Your Match
        </span>
        <div className="flex md:flex-row flex-col md:space-x-4 lg:space-x-6 md:space-y-0 space-y-3 hover:cursor-pointer">
          {navs.map((nav) => (
            <div
              className="flex flex-col space-y-4 group"
              key={nav.imgUrl}
              onClick={() => router.push(nav.href)}
            >
              <img src={nav.imgUrl} alt="image" />
              <div className="flex items-center space-x-4 group-hover:italic group-hover:text-[#00ab84]">
                <span className="lg:text-2xl text-xl">{nav.title}</span>
                <MoveRight
                  size={26}
                  className="group-hover:translate-x-3 transition ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
