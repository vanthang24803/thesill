import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import Body from "@/components/ui/body";
import Collection from "./components/collection";
import ProductList from "@/components/product-list-category";
import ProductListPage from "./components/product-list-page";
import Button from "@/components/ui/button";
import Link from "next/link";
import ProductListSrcoll from "./components/product-list-scroll";
import BodyFooter from "@/components/body-footer";

const Plants = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("67996431-bf9b-4ecb-9703-80562a867e8e");
  return (
    <>
      <Billboard
        main="Shop Online"
        href="/"
        subtitle="Find A Store"
        link="/"
        data={billboard}
      />

      <Body>
        {/* Collection */}
        <Collection />

        {/* New Arrivals */}
        <ProductList
          title="New Arrivals"
          items={products}
          heading="New Arrivals"
        />

        {/* Go Big , At Home */}
        <div className="flex lg:flex-row flex-col">
          <div className="lg:basis-1/2 lg:mt-[5.5rem]">
            <img
              src="https://cdn.sanity.io/images/y346iw48/production/c25cbf47d663f4eae06031ee5d9f5e7fc3d3dddf-1200x1553.jpg?w=1000&q=100&auto=format"
              className="object-fill lg:pr-8 h-full md:h-[80%] lg:h-full"
            />
            <div className="hidden absolute w-[220px] lg:top-[385vh] top-[285vh] lg:left-12 md:flex items-center">
              <Link href="/">
                <Button>Shop Large Plants</Button>
              </Link>
            </div>
          </div>
          <div className="lg:basis-1/2">
            <ProductListPage
              title="Go Big, At Home"
              items={products}
              heading="Go Big, At Home"
            />
          </div>
        </div>

        {/* Most Popular */}
        <ProductList
          title="Most Popular Plants"
          items={products}
          heading="Most Popular Plants"
        />

        {/* Best For Beginners */}
        <ProductList
          title="Best For Beginners"
          items={products}
          heading="Best For Beginners"
        />

        {/*  Shop The Space */}
        <h3 className="text-3xl md:text-4xl lg:font-normal lg:text-5xl font-medium mb-10">
          Shop The Space
        </h3>
        <div className="flex md:flex-row flex-col">
          <div className="md:basis-2/3">
            <img
              src="https://cdn.sanity.io/images/y346iw48/production/146c9e72a28716b22d5bcfb3f0aecea256549620-1630x1969.jpg?auto=format"
              className="object-fill w-full md:pr-8"
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

        {/* Pet-Friendly Picks */}
        <ProductList
          title="Pet-Friendly Picks"
          items={products}
          heading="Pet-Friendly Picks"
        />

        {/* Expertly Paired */}

        <ProductList
          title="Expertly Paired"
          items={products}
          heading="Expertly Paired"
        />
      </Body>
        <BodyFooter
          title="Buy Plants that Make You Happy | The Sill"
          description={`At The Sill, we live off the mantra that, "Plants Make You Happy." Find live plants that will make you happy! Buy large plants, small plants or pet-friendly plants online today!`}
        />
    </>
  );
};

export default Plants;
