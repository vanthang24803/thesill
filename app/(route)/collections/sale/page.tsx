import getProducts from "@/actions/get-products";
import Body from "@/components/ui/body";
import Product from "./components/product-list-find";


const Sale = async () => {
  const products = await getProducts({ isFeatured: true });
  return (
    <Body>
      <Product items={products} />
    </Body>
  );
};

export default Sale;
