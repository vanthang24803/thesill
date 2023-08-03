import dynamic from "next/dynamic";
import getProducts from "@/actions/get-products";
import Body from "@/components/ui/body";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Sale The Sill`,
  description: "Buy a flower every day to make life more beautiful. 😊",
};

const Sale = async () => {
  const products = await getProducts({ isFeatured: true });
  const Product = dynamic(() => import("./components/product-list-find"))
  return (
    <Body>
      <Product items={products} />
    </Body>
  );
};

export default Sale;
