
import dynamic from "next/dynamic";
import getProducts from "@/actions/get-products";
import Body from "@/components/ui/body";
import Head from "./components/head";
import Navigation from "./components/navigation";
import Content from "./components/content";

const Repotting = async () => {
  const products = await getProducts({ isFeatured: true });
  const ProductList = dynamic(
    () => import("@/components/product-list-category")
  );
  return (
    <>
      <Head />
      <Navigation />

      <Body>
        <Content />
        {/* Decor Planters */}
        <ProductList
          title="You Might Like"
          items={products}
          heading="Decor Planters"
        />
      </Body>
    </>
  );
};

export default Repotting;
