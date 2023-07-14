import getBillboard from "@/actions/home/get-billboard";
import Billboard from "@/components/ui/billboard";
import Body from "@/components/ui/body";
import getProducts from "@/actions/home/get-products";
import ProductList from "@/components/product-list";
import BillBody from "./components/bill-body";

const collection = [
  {
    name: "All Plants & Trees",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/1dd326f722ac9e574a5c00719feed7c85470450a-1200x1553.jpg?auto=format",
    href: "/",
  },
  {
    name: "Pet-Priendly Plants",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/091c60ec9dcce8501445b560a7bdc279079d04b9-640x828.webp?auto=format",
    href: "/",
  },
  {
    name: "For Beginners",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format",
    href: "/",
  },
  {
    name: "Flowering Plants",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format",
    href: "/",
  },
  {
    name: "Faux & Preserved",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
    href: "/",
  },
  {
    name: "Decor Planters",
    imageUrl:
      "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
    href: "/",
  },
];

export default async function Home() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("f691c614-adf0-48d2-87d4-e4ec887e07e4");
  return (
    <>
      <Billboard
        main="Shop All"
        href="/locations"
        subtitle="New Arrivals"
        link="/"
        data={billboard}
      />

      <Body>
        <span className="text-3xl md:text-4xl lg:font-normal lg:text-5xl font-medium">
          Shop By Collection
        </span>
        <div className="mt-8 mb-2 md:flex md:justify-between gap-8 grid grid-cols-3">
          {collection.map((item) => (
            <div className="hover:cursor-pointer" key={item.name}>
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

        {/* New Arrivals */}
        <ProductList
          title="New Arrivals"
          items={products}
          heading="New Arrivals"
        />

        {/* Our Best Sellers */}
        <ProductList
          title="Our Best Sellers"
          items={products}
          heading="New Arrivals"
        />

        {/* Large Plants & Trees */}

        <ProductList
          title="Large Plants & Trees"
          items={products}
          heading="New Arrivals"
        />

        <BillBody />
      </Body>
    </>
  );
}
