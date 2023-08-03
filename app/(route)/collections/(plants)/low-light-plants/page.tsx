import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import Body from "@/components/ui/body";
import dynamic from "next/dynamic";

interface LowLightPlantsProps {
  searchParams: {
    colorId: string;
  };
}

const LowLightPlants: React.FC<LowLightPlantsProps> = async ({
  searchParams,
}) => {
  const products = await getProducts({
    isFeatured: true,
    colorId: searchParams.colorId,
  });

  const colors = await getColors();

  const Product = dynamic(() => import("./components/product-list-find"));
  return (
    <Body>
      <Product items={products} colors={colors} searchParams={searchParams} />
    </Body>
  );
};

export default LowLightPlants;
