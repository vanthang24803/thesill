import dynamic from "next/dynamic";
import getBillboard from "@/actions/home/get-billboard";
import Billboard from "@/components/ui/billboard";
import Body from "@/components/ui/body";
import getProducts from "@/actions/home/get-products";
import BillBody from "./components/bill-body";
import Collection from "./components/collection";
import Infomation from "./components/infomation";


export default async function Home() {
  const ProductList = dynamic(() => import("@/components/product-list-home"));
  const SwipperLg = dynamic(() => import("./components/swipper-lg"));
  const SwipperMd = dynamic(() => import("./components/swipper-md"));
  const SwipperSm = dynamic(() => import("./components/swipper-sm"));
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
        {/* Collection */}
        <Collection />

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
          heading="Our Best Sellers"
        />

        {/* Large Plants & Trees */}
        <ProductList
          title="Large Plants & Trees"
          items={products}
          heading="Large Plants & Trees"
        />

        <BillBody />

        {/* Flowering Plants */}
        <ProductList
          title="Flowering Plants"
          items={products}
          heading="Flowering Plants"
        />

        {/* Faux & Preserved Plants */}
        <ProductList
          title="Faux & Preserved Plants"
          items={products}
          heading="Faux & Preserved Plants"
        />

        {/* Infomation */}
        <Infomation />

        {/* Swipper */}
        <div className="mt-8 mb-6">
          <div className="hidden lg:block">
            <SwipperLg />
          </div>

          <div className="hidden md:block lg:hidden">
            <SwipperMd />
          </div>

          <div className="block md:hidden">
            <SwipperSm />
          </div>
        </div>
      </Body>
    </>
  );
}
