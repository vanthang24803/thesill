import Link from "next/link";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Body from "@/components/ui/body";
import SliceLg from "./components/slice-lg";
import Infomation from "./components/infomation";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  if (!product) {
    return null;
  }
  return (
    <Body>
      <div className="flex items-center space-x-2 mt-4">
        <Link href="/" className="text-neutral-500 hover:cursor-pointer">Home</Link>
        <span className="font-medium"> / {product.category.name}</span>
      </div>

      {/* Image and Info */}
      <div className="lg:flex hidden mt-6 lg:space-x-8">
        <div className="lg:basis-1/2">
          <SliceLg product={product} />
        </div>
        <div className="lg:basis-1/2">
          <Infomation product={product} />
        </div>
      </div>
      <div className="lg:hidden flex flex-col space-y-6">
        <Infomation product={product} />
      </div>
    </Body>
  );
};

export default ProductPage;
