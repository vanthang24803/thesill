"use client";

import { useRouter } from "next/navigation";

const collection = [
  {
    name: "All Plants & Trees",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/1dd326f722ac9e574a5c00719feed7c85470450a-1200x1553.jpg?auto=format",
    href: "/collections/live-plants",
  },
  {
    name: "Pet-Priendly Plants",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/091c60ec9dcce8501445b560a7bdc279079d04b9-640x828.webp?auto=format",
    href: "/collections/pet-friendly-plants",
  },
  {
    name: "Decor Planters",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
    href: "/collections/planters",
  },
  {
    name: "For Beginners",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
    href: "/collections/plants-for-beginners",
  },
  {
    name: "Flowering Plants",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
    href: "/collections/blooming-plants",
  },
  {
    name: "Faux & Preserved",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
    href: "/categories/faux",
  },
];

const Collection = () => {
  const router = useRouter();
  return (
    <>
      <span className="text-3xl md:text-4xl lg:font-normal lg:text-5xl font-medium">
        Shop By Collection
      </span>
      <div className="mt-8 mb-2 md:flex md:justify-between gap-8 grid grid-cols-3">
        {collection.map((item) => (
          <div
            className="hover:cursor-pointer"
            key={item.name}
            onClick={() => router.push(item.href)}
          >
            <img
              src={item.imageUrl}
              className="w-full lg:h-[36vh] lg:mb-3 md:h-[13vh] object-fill"
            />
            <span className="text-[10px] font-medium lg:font-normal lg:text-lg ">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Collection;
