"use client";
import { MoveRight } from "lucide-react";

const collection = [
  {
    name: "Lagre Plants",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/c25cbf47d663f4eae06031ee5d9f5e7fc3d3dddf-1200x1553.jpg?w=640&auto=format",
    href: "/",
  },
  {
    name: "For Beginners",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/29b8dedec3480aad92714df3e00fe72e1ac55f41-1200x1553.jpg?w=640&auto=format",
    href: "/",
  },
  {
    name: "Pet-Friendly",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/5516b7e2aaec24017b26bf8b10b4d2aa5d49d4fd-858x1110.jpg?w=640&auto=format",
    href: "/",
  },
  {
    name: "Low Light",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/5ac40d2fc59e56b1e7aea9d6e02e235f1949b7ce-1200x1553.webp?w=640&auto=format",
    href: "/",
  },
];

const Collection = () => {
  return (
    <>
      <div
        className="mt-4 mb-2 gap-8 grid md:grid-cols-4 grid-cols-2"
        onClick={() => {}}
      >
        {collection.map((item) => (
          <div className="hover:cursor-pointer" key={item.name}>
            <img src={item.imageUrl} className="w-full lg:mb-6 object-fill" />
            <span className="font-medium mt-4 lg:font-normal  hover:text-[#009a7b] hover:italic hover:font-medium flex items-center md:space-x-6 space-x-3 group">
              <p className="lg:text-xl text-base">{item.name}</p>
              <MoveRight
                size={22}
                className="group-hover:translate-x-4 transition-all ease-in-out"
              />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Collection;
