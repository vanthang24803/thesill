import dynamic from "next/dynamic";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "./components/billboard-faux";
import Body from "@/components/ui/body";
import Infomation from "./components/infomation";

const Faux = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("b25973bd-ce2e-44e6-9573-f578ea2a1ee3");
  const ProductList = dynamic(
    () => import("@/components/product-list-category")
  );
  return (
    <>
      <Billboard main="Shop All" href="/" data={billboard} />;
      <Body>
        {/* Best Saller Faux */}
        <ProductList
          title="Best Saller Faux"
          items={products}
          heading="Faux & Preserved Plants"
        />

        {/* Tabletop & Hanging */}
        <ProductList
          title="Tabletop & Hanging"
          items={products}
          heading="Tabletop & Hanging"
        />

        {/* Charming Stem Sets */}
        <ProductList
          title="Charming Stem Sets"
          items={products}
          heading="Charming Stem Sets"
        />

        {/* Preserved Artisan Moss */}
        <ProductList
          title="Preserved Artisan Moss"
          items={products}
          heading="Preserved Artisan Moss"
        />

        {/* Infomation */}

        <Infomation />
      </Body>
    </>
  );
};

export default Faux;
