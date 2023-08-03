import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import BodyFooter from "@/components/body-footer";
import Billboard from "@/components/ui/billboard";
import Body from "@/components/ui/body";
import dynamic from "next/dynamic";
import ProductListPage from "../plants/components/product-list-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Flower & Bouquet The Sill`,
  description: "Buy a flower every day to make life more beautiful. 😊",
};

const FLower = async () => {
  const billboard = await getBillboard("72f437ba-75b6-4ce8-846b-0e90bc6de372");
  const products = await getProducts({ isFeatured: true });
  const ProductList = dynamic(
    () => import("@/components/product-list-category")
  );
  return (
    <>
      <Billboard
        main="Flowering Plants"
        href="/collections/orchids"
        subtitle="Dired Bouquets"
        link="/collections/dried-bouquets"
        data={billboard}
      />

      <Body>
        {/* Blooming Orchids */}
        <ProductList
          title="Blooming Orchids"
          items={products}
          heading="Blooming Orchids"
        />

        {/* Flowering Favorites */}
        <ProductList
          title="Flowering Favorites"
          items={products}
          heading="Flowering Favorites"
        />

        {/* Handcrafted & Unique */}
        <div className="flex lg:flex-row flex-col">
          <div className="lg:basis-1/2 lg:mt-[5.5rem]">
            <img
              src="https://cdn.sanity.io/images/y346iw48/production/2c88638da312f69f3a8b78aa4d932ae04eab22a0-3600x4659.jpg?w=1000&q=100&auto=format"
              className="object-fill lg:pr-8 h-full md:h-[80%] lg:h-full"
            />
          </div>
          <div className="lg:basis-1/2">
            <ProductListPage
              title="Handcrafted & Unique"
              items={products}
              heading="Handcrafted & Unique"
            />
          </div>
        </div>
      </Body>
      <BodyFooter
        title="Blooming Plants, Flowers, Floral Bouquets"
        description="The Sill has a gorgeous collection of blooming plants, DIY flower bouquets, and dried floral arrangements for decorating and gifting."
      />
    </>
  );
};

export default FLower;
