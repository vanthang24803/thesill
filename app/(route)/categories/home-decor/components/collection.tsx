"use client";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

const collection = [
  {
    name: "Post & Planters",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/51d59bbba76494d4311a562128f6c83fcd43bde0-1200x1553.jpg?w=640&auto=format",
    href: "/categories/planters",
  },
  {
    name: "Faux Collections",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/54cee5dbbf3b321bd11a3ef3a4ebbe87630ccc62-1200x1553.jpg?w=640&auto=format",
    href: "/categories/faux",
  },
  {
    name: "Dried Bouquets",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/fd2fb79739ccdc5a4f1c61a788d6317cbb3ba1c5-1200x1553.jpg?w=640&auto=format",
    href: "/collections/dried-bouquets",
  },
  {
    name: "Plant Shelves",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/b33511db18f58032b099dfa5000f2f68c14a2fa8-1200x1552.webp?w=640&auto=format",
    href: "/collections/live-plants",
  },
];

const Collection = () => {
  const router = useRouter();
  return (
    <>
      <div className="mt-4 mb-2 gap-8 grid md:grid-cols-4 grid-cols-2">
        {collection.map((item) => (
          <div
            className="hover:cursor-pointer"
            key={item.name}
            onClick={() => router.push(item.href)}
          >
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
