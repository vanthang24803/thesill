import getBenefits from "@/actions/get-benefits";
import dynamic from "next/dynamic";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Body from "@/components/ui/body";
import getLights from "@/actions/get-lights";

interface PlanterProps {
  searchParams: {
    lightId: string;
    sizeId: string;
    benefitId: string;
  };
}

const Planters: React.FC<PlanterProps> = async ({ searchParams }) => {
  const products = await getProducts({
    isFeatured: true,
    lightId: searchParams.lightId,
    sizeId: searchParams.sizeId,
    benefitId: searchParams.benefitId,
  });
  const sizes = await getSizes();
  const lights = await getLights();
  const benefits = await getBenefits();
  const Product = dynamic(() => import("./components/product-list-find"));
  return (
    <Body>
      <Product
        items={products}
        lights={lights}
        benefits={benefits}
        sizes={sizes}
        searchParams={searchParams}
      />
    </Body>
  );
};

export default Planters;
