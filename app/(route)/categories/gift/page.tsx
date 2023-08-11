import dynamic from "next/dynamic";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import BodyFooter from "@/components/body-footer";
import Billboard from "@/components/ui/billboard";
import Body from "@/components/ui/body";
import Help from "./components/help";



const Gift = async () => {
  const billboard = await getBillboard("aa408fcd-bb29-4d07-aa6a-43f4a86db70c");
  const products = await getProducts({ isFeatured: true });
  const ProductList = dynamic(
    () => import("@/components/product-list-category")
  );
  const ProductListPage = dynamic(
    () => import("../plants/components/product-list-page")
  );
  const Video = dynamic(() => import("./components/video-youtube"));
  return (
    <>
      <Billboard
        main="Live Plants"
        href="/collections/live-plants"
        subtitle="Find A Store"
        link="/locations"
        data={billboard}
      />

      <Body>
        {/* Unique Plant Gifts */}
        <ProductList
          title="Unique Plant Gifts"
          items={products}
          heading="Unique Plant Gifts"
        />
        <ProductList
          title="Most Popular Plants"
          items={products}
          heading="Most Popular Plants"
        />

        {/* Big Gift */}
        <div className="lg:mt-12 flex lg:flex-row flex-col">
          <div className="lg:basis-1/2 lg:mt-[5.5rem]">
            <img
              src="https://cdn.sanity.io/images/y346iw48/production/f79bd62049a7ddaac2108a2e324704f911852ff4-1200x1271.jpg?w=1000&q=100&auto=format"
              className="object-fill lg:pr-8 h-full md:h-[80%] lg:h-full"
            />
          </div>
          <div className="lg:basis-1/2">
            <ProductListPage
              title="Big Gifts"
              items={products}
              heading="Go Big, At Home"
            />
          </div>
        </div>

        {/* Pet Family */}
        <div className="flex lg:flex-row flex-col lg:mt-16 md:mt-12 mt-8">
          <div className="lg:basis-1/2 lg:mt-[5.5rem]">
            <img
              src="https://cdn.sanity.io/images/y346iw48/production/c46b2a09f0ba52f74463a4bb01d03e85aab3bcb5-1200x1271.jpg?w=1000&q=100&auto=format"
              className="object-fill lg:pr-8 h-full md:h-[80%] lg:h-full"
            />
          </div>
          <div className="lg:basis-1/2">
            <ProductListPage
              title="Pet Friendly"
              items={products}
              heading="Pet-Friendly Picks"
            />
          </div>
        </div>

        {/* Best For Beginners */}
        <ProductList
          title="Best For Beginners"
          items={products}
          heading="Best For Beginners"
        />

        {/* Gardening Tools */}
        <ProductList
          title="Gardening Tools"
          items={products}
          heading="Gardening Tools"
        />

        {/* Easy Grow Lights */}
        <div className="flex lg:flex-row flex-col lg:mt-16 md:mt-12 mt-8">
          <div className="lg:basis-1/2 lg:mt-[5.5rem]">
            <img
              src="https://cdn.sanity.io/images/y346iw48/production/ee6caeefe6d52d647c496fbee4a54336e535eeb7-1200x1271.jpg?w=1000&q=100&auto=format"
              className="object-fill lg:pr-8 h-full md:h-[80%] lg:h-full"
            />
          </div>
          <div className="lg:basis-1/2">
            <ProductListPage
              title="Grow Lights"
              items={products}
              heading="Easy Grow Lights"
            />
          </div>
        </div>

        {/* Modern Sprout Picks */}
        <ProductList
          title="Indoor Gardening"
          items={products}
          heading="Modern Sprout Picks"
        />

        {/* Help */}
        <Help />
      </Body>
      <BodyFooter />
      {/* Video Youtube */}
      <Video />
    </>
  );
};

export default Gift;
