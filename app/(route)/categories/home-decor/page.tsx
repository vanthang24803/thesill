import dynamic from "next/dynamic";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Collection from "./components/collection";
import Billboard from "@/components/ui/billboard";
import Body from "@/components/ui/body";
import BodyFooter from "@/components/body-footer";

const Decor = async () => {
  const billboard = await getBillboard("753e5928-21eb-4fa3-b636-5face1fa35b0");
  const products = await getProducts({ isFeatured: true });
  const ProductListPage = dynamic(
    () => import("../plants/components/product-list-page")
  );
  const ProductList = dynamic(
    () => import("@/components/product-list-category")
  );

  const ProductListSrcoll = dynamic(
    () => import("../plants/components/product-list-scroll")
  );
  return (
    <>
      <Billboard
        main="Shop Decor"
        href="/collections/home-decor"
        subtitle="Shop Bouquets"
        link="/collections/dried-bouquets"
        data={billboard}
      />

      <Body>
        {/* Collections */}
        <Collection />

        {/* Statement Makers */}
        <div className="flex lg:flex-row flex-col md:mt-12 mt-8">
          <div className="lg:basis-1/2 lg:mt-[5.5rem]">
            <img
              src="https://cdn.sanity.io/images/y346iw48/production/3744b8dada3e42305f415fc5c8e99e07672f3df1-1200x1553.webp?auto=format"
              className="object-fill lg:pr-8 h-full md:h-[80%] lg:h-full"
            />
          </div>
          <div className="lg:basis-1/2">
            <ProductListPage
              title="Statement Makers"
              items={products}
              heading="Pet-Friendly Picks"
            />
          </div>
        </div>

        {/* Plant Shelves & Ladders */}
        <ProductList
          title="Plant Shelves & Ladders"
          items={products}
          heading="Easy Grow Lights"
        />

        {/*  Shop The Space */}
        <h3 className="text-3xl md:text-4xl lg:font-normal lg:text-5xl font-medium mb-10">
          Shop The Space
        </h3>
        <div className="flex md:flex-row flex-col">
          <div className="md:basis-2/3">
            <img
              src="https://cdn.sanity.io/images/y346iw48/production/a389c06291826dd6c1a07774a54aa42610e947a0-1200x1553.webp?auto=format"
              className="object-fill w-[90%]"
            />
          </div>
          <div className="md:basis-1/3">
            <ProductListSrcoll
              title="Shop the Space"
              items={products}
              heading="Shop the Space"
            />
          </div>
        </div>

        {/* Statement Makers */}
        <div className="flex lg:flex-row flex-col md:mt-12 mt-8">
          <div className="lg:basis-1/2 lg:mt-[5.5rem]">
            <img
              src="https://cdn.sanity.io/images/y346iw48/production/9cfa95c5e40ab785939add8f831e4dda503a101b-1200x1553.png?w=1000&q=100&auto=format"
              className="object-fill lg:pr-8 h-full md:h-[50%] lg:h-full"
            />
          </div>
          <div className="lg:basis-1/2">
            <ProductListPage
              title="Preserved Plants"
              items={products}
              heading="Decor Planters"
            />
          </div>
        </div>
      </Body>

      <BodyFooter
        title="Home Decor & Furniture for All Your Plant Needs"
        description="Decorate your home with decorative planters, shelving for plants, and stylish nature-inspired decor."
      />
    </>
  );
};

export default Decor;
