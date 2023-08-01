import getBenefits from "@/actions/get-benefits";
import getColors from "@/actions/get-colors";
import dynamic from "next/dynamic";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Body from "@/components/ui/body";

interface PlantersProps {
  searchParams: {
    colorId: string;
    sizeId: string;
    benefitId: string;
  };
}

const Planters: React.FC<PlantersProps> = async ({ searchParams }) => {
  const products = await getProducts({
    isFeatured: true,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
    benefitId: searchParams.benefitId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const benefits = await getBenefits();
  const Product = dynamic(() => import("./components/product-list-find"));
  return (
    <Body>
      <Product
        items={products}
        colors={colors}
        sizes={sizes}
        benefits={benefits}
        searchParams={searchParams}
      />
    </Body>
  );
};

export default Planters;
