"use client";

import { toast } from "react-hot-toast";

const data = [
  {
    name: "Ric Rac cactus 4 in.",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/4_RicRacCactus.jpg?v=1653860957&width=400",
    price: "5",
  },
  {
    name: "Philodendron Brasil 6 in.",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/IMG_4741_7058e3cf-d16a-4148-a8f2-86d5e057ed25.jpg?v=1673377200&width=400",
    price: "40",
  },
  {
    name: "ZZ 6 in.",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/F36C215A-5AE3-478F-8FC7-59936A8CDDE6_921ed214-a107-4386-aadc-66e156dfc268.jpg?v=1642652778&width=400",
    price: "40",
  },
  {
    name: "Philodendron Green 4 in.",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/4_PhilodendronGreen.jpg?v=1653948357&width=400",
    price: "15",
  },
  {
    name: "Snake Laurentii 6 in.",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/PL-SAN-LAU-6.jpg?v=1653949216&width=400",
    price: "25",
  },
  {
    name: "Philodendron Green 6 in.",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/image_67197441_3d803284-f160-4ed0-a78b-2428d5f20363.jpg?v=1642652695&width=400",
    price: "25",
  },
  {
    name: "Monstera Deliciosa 10 in.",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/POS-PL-MON-DEL-10_335506b0-d9c9-40f5-b2bf-0c411c5c796f.jpg?v=1642652629&width=400",
    price: "85",
  },
  {
    name: "Opuntia Assorted 6 in.",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/image_50424321_1_b8b5305d-aae8-4161-813b-1432feca6636.jpg?v=1642652646&width=400",
    price: "45",
  },
  {
    name: "Cordyline Florica 10 in.",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/cordyline-plastic-pot_large_3d87356a-7b96-46fe-a42c-91a59ade543d.jpg?v=1642652499&width=400",
    price: "65",
  },
  {
    name: "Calathea Rattlesnake 6 in.",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/IMG_7506.jpg?v=1666886115&width=400",
    price: "35",
  },
];

const Card = () => {
    const handleClick = () => {
        toast.error("This product is only sold in stores !");
    }
  return (
    <div className="py-8">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4 hover:cursor-pointer">
        {data.map((index) => (
          <div className="flex flex-col space-y-1" key={index.imgUrl}
          onClick={handleClick}>
            <img src={index.imgUrl} alt="img" className="object-cover w-full h-full" />
            <p className="font-semibold">{index.name}</p>
            <p className="font-medium">${index.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
