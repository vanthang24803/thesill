import getBenefits from "@/actions/get-benefits";
import dynamic from "next/dynamic";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Body from "@/components/ui/body";
import getLights from "@/actions/get-lights";

interface PlantsProps {
  searchParams: {
    lightId: string;
    sizeId: string;
    benefitId: string;
  };
}

const Plants: React.FC<PlantsProps> = async ({ searchParams }) => {
  const products = await getProducts({
    isFeatured: true,
    lightId: searchParams.lightId,
    sizeId: searchParams.sizeId,
    benefitId: searchParams.benefitId,
  });
  const lights = await getLights();
  const sizes = await getSizes();
  const benefits = await getBenefits();
  const Product = dynamic(() => import("./components/product-list-find"));
  return (
    <Body>
      <Product
        items={products}
        lights={lights}
        sizes={sizes}
        benefits={benefits}
        searchParams={searchParams}
      />
    </Body>
  );
};

export default Plants;
