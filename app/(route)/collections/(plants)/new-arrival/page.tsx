import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import Body from "@/components/ui/body";
import dynamic from "next/dynamic";

interface NewArrivalsProps {
  searchParams: {
    colorId: string;
  };
}

const NewArrivals: React.FC<NewArrivalsProps> = async ({ searchParams }) => {
  const products = await getProducts({
    isFeatured: true,
    colorId: searchParams.colorId,
  });

  const colors = await getColors();

  const Product = dynamic(() => import("./components/product-list-find"));
  return (
    <Body>
      <Product
        items={products}
        colors={colors}
        searchParams={searchParams}
      />
    </Body>
  );
};

export default NewArrivals;
