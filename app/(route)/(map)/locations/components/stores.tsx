"use client";

import { useRouter } from "next/navigation";

const newyork = [
  {
    location: "New York",
    children: [
      {
        imgUrl:
          "https://cdn.sanity.io/images/y346iw48/production/6b082628d2c08ffceec23110686d2d94f3efc99f-900x646.jpg?w=400&auto=format",
        name: "Upper West Side",
        local: "New York City",
        address: "448 Amsterdam Avenue New York, NY 10024",
        href: "/upper-west-side",
      },
      {
        imgUrl:
          "https://cdn.sanity.io/images/y346iw48/production/4a828f8383e8c5c5b188546b5ff289a0e00963c1-1000x667.jpg?w=400&auto=format",
        name: "Williamsburg",
        local: "Brooklyn",
        address: "190 Berry Street, Brooklyn, NY 11249",
        href: "/williamsburg",
      },
      {
        imgUrl:
          "https://cdn.sanity.io/images/y346iw48/production/a32c7fdf868e8b0c9c85a8f5260093fdb1a8a5db-1500x1000.jpg?w=400&auto=format",
        name: "Cobble Hill",
        local: "Brooklyn",
        address: "195 Pacific Street, Brooklyn, NY 11201",
        href: "/cobble-hill",
      },
      {
        imgUrl:
          "https://cdn.sanity.io/images/y346iw48/production/47d903d536abcde5b1d35168504b13e7651afa9e-1024x683.jpg?w=400&auto=format",
        name: "Park Slope",
        local: "Brooklyn",
        address: "461 6th Avenue, Brooklyn, NY 11215",
        href: "/park-slope",
      },
    ],
  },
];

const store = [
  {
    location: "California",
    children: [
      {
        imgUrl:
          "https://cdn.sanity.io/images/y346iw48/production/725e8e85da90573fbbae6afbbe0919a0f86e9dbb-4500x3000.jpg?w=400&auto=format",
        name: "San Francisco",
        local: "Cow Hollow",
        address: "2181A Union St, San Francisco, CA 94123",
        href: "/cow-hollow",
      },
    ],
  },
  {
    location: "Illinois",
    children: [
      {
        imgUrl:
          "https://cdn.sanity.io/images/y346iw48/production/f396df285f7b7531a4d29f0d33bc1f366cea7694-2048x1365.jpg?w=400&auto=format",
        name: "Chicago",
        local: "Southport Corridor",
        address: "1351 W Roscoe St, Chicago, IL 60657",
        href: "/illinois",
      },
    ],
  },

  {
    location: "Maryland",
    children: [
      {
        imgUrl:
          "https://cdn.sanity.io/images/y346iw48/production/47d903d536abcde5b1d35168504b13e7651afa9e-1024x683.jpg?w=400&auto=format",
        name: "Bethesda Row",
        local: "Bethesda Row",
        address: "4816 Bethesda Avenue, Bethesda, MD 20814 ",
        href: "/maryland",
      },
    ],
  },
];

const Store = () => {
  const router = useRouter();
  return (
    <div className="md:pt-8 pt-6">
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="lg:basis-1/2">
          {newyork.map((index) => (
            <div key={index.location}>
              <span className="lg:text-5xl md:text-4xl text-3xl">
                {index.location}
              </span>
              <div className="flex flex-col space-y-3 mt-4">
                {index.children.map((item) => (
                  <div
                    className="flex items-center space-x-4 py-4 border-t hover:cursor-pointer"
                    key={item.imgUrl}
                    onClick={() => router.push(item.href)}
                  >
                    <img
                      src={item.imgUrl}
                      alt="img"
                      className="object-cover w-1/4 h-1/4"
                    />
                    <div className="flex flex-col space-y-1 " key={item.imgUrl}>
                      <span className="text-lg md:text-xl text-[#009a7b]">
                        {item.name}
                      </span>
                      <span className="text-base md:text-lg">{item.local}</span>
                      <span className="text-sm md:text-base text-neutral-500">
                        {item.address}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:basis-1/2">
          {store.map((index) => (
            <div key={index.location} className="flex flex-col lg:space-y-8">
              <span className="lg:text-5xl md:text-4xl text-3xl">
                {index.location}
              </span>
              <div className="flex flex-col space-y-3 mt-4">
                {index.children.map((item) => (
                  <div
                    className="flex items-center space-x-4 py-4 border-t hover:cursor-pointer"
                    onClick={() => router.push(item.href)}
                    key={item.href}
                  >
                    <img
                      src={item.imgUrl}
                      alt="img"
                      className="object-cover w-1/4 h-1/4"
                    />
                    <div className="flex flex-col space-y-1 " key={item.imgUrl}>
                      <span className="text-lg md:text-xl text-[#009a7b]">
                        {item.name}
                      </span>
                      <span className="text-base md:text-lg">{item.local}</span>
                      <span className="text-sm md:text-base text-neutral-500">
                        {item.address}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
