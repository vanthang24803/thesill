import getBenefits from "@/actions/get-benefits";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import Body from "@/components/ui/body";
import dynamic from "next/dynamic";

interface PlantersProps {
  searchParams: {
    colorId: string;
    benefitId: string;
  };
}

const DrainagePlanters: React.FC<PlantersProps> = async ({ searchParams }) => {
  const products = await getProducts({
    isFeatured: true,
    colorId: searchParams.colorId,
    benefitId: searchParams.benefitId,
  });
  const colors = await getColors();
  const benefits = await getBenefits();
  const Product = dynamic(() => import("./components/product-list-find"));
  return (
    <Body>
      <Product
        items={products}
        colors={colors}
        benefits={benefits}
        searchParams={searchParams}
      />
    </Body>
  );
};

export default DrainagePlanters;
