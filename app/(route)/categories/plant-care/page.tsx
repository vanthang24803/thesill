import dynamic from "next/dynamic";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import BodyFooter from "@/components/body-footer";
import ProductList from "@/components/product-list-category";
import Billboard from "@/components/ui/billboard";
import Body from "@/components/ui/body";

const PlantCare = async () => {
  const billboard = await getBillboard("d5d8adfa-f3f5-4483-ad22-50e062101f5e");
  const products = await getProducts({ isFeatured: true });
  const ProductListPage = dynamic(
    () => import("../plants/components/product-list-page")
  );
  return (
    <>
      <Billboard
        main="Care Accessories"
        href="/collections/plant-care"
        subtitle="Plant Care Library"
        link="/"
        data={billboard}
      />
      <Body>
        {/* Watering Essentials */}
        <ProductList
          title="Watering Essentials"
          items={products}
          heading="Watering Essentials"
        />

        {/* Easy Grow Lights */}
        <div className="flex lg:flex-row flex-col">
          <div className="lg:basis-1/2 lg:mt-[5.5rem]">
            <img
              src="https://cdn.sanity.io/images/y346iw48/production/f3fad86f390feb827bab5ac79e0d951facc7c0af-1200x1553.jpg?w=1000&q=100&auto=format"
              className="object-fill lg:pr-8 h-full md:h-[80%] lg:h-full"
            />
          </div>
          <div className="lg:basis-1/2">
            <ProductListPage
              title="Easy Grow Lights"
              items={products}
              heading="Easy Grow Lights"
            />
          </div>
        </div>

        {/* Modern Sprout Picks */}
        <ProductList
          title="Modern Sprout Picks"
          items={products}
          heading="Modern Sprout Picks"
        />

        {/* Gardening Tools */}
        <ProductList
          title="Gardening Tools"
          items={products}
          heading="Gardening Tools"
        />
      </Body>
      <BodyFooter
        title="Plant Care Accessories: Gardening Tools, Fertilizer, Potting Soil, & More"
        description={`Find your plant care essentials at The Sill. Nourish your plants with fertilizer and plant food, potting mixes, and more. Shop all the tools you need to have a flourishing garden or healthy houseplant collection.`}
      />
    </>
  );
}

export default PlantCare
