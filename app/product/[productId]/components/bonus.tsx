import Link from "next/link";

const data = [
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_potting-mix_medium_variant.jpg?v=1659985220",
    name: "Organic Potting Mix",
    price: 15,
    url: "/product/c8e8d7b6-699f-4e3c-90c4-cfd4c1c318d8",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_3-in-1-moisture-meter_variant.jpg?v=1617655678",
    name: "Soil Moisture Meter",
    price: 15,
    url: "/product/0ce3dead-1988-4302-8717-2bfbc48173f4",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_ceramic-message-pops_variant_i-dig-you.jpg?v=1671030551",
    name: "Gift Message Pops",
    price: 15,
    url: "/product/b5ed2ad1-4278-4f37-b6de-a68254a670dc",
  },
];

const Bonus = () => {
  return (
    <div className="mt-8 flex flex-col space-y-4">
      <span className="md:text-xl text-lg font-medium">Grows Well With</span>
      <div className="flex justify-between items-center space-x-6">
        {data.map((item) => (
          <Link href={item.url}
            className="flex flex-col space-y-3 hover:cursor-pointer"
            key={item.imgUrl}
          >
            <img src={item.imgUrl} alt="image" className="object-cover" />
            <span className="md:text-lg text-bsae font-medium">{item.name}</span>
            <span className="text-sm font-medium underline">
              Add - ${item.price}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bonus;
