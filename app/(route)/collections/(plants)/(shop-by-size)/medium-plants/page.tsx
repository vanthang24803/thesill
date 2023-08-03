import getBenefits from "@/actions/get-benefits";
import getProducts from "@/actions/get-products";
import Body from "@/components/ui/body";
import dynamic from "next/dynamic";

interface MediumPlanterProps {
  searchParams: {
    benefitId: string;
  };
}

const MediumPlanter: React.FC<MediumPlanterProps> = async ({ searchParams }) => {
  const products = await getProducts({
    isFeatured: true,
    benefitId: searchParams.benefitId,
  });
  const benefits = await getBenefits();
  const Product = dynamic(() => import("./components/product-list-find"));
  return (
    <Body>
      <Product
        items={products}
        benefits={benefits}
        searchParams={searchParams}
      />
    </Body>
  );
};

export default MediumPlanter;
