import Link from "next/link";
import dynamic from "next/dynamic";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Body from "@/components/ui/body";
import SliceLg from "./components/slice-lg";
import Infomation from "./components/infomation";
import BillBody from "@/app/(root)/components/bill-body";
import ImageSlide from "./components/image-slide";


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

  const ProductList = dynamic(
    () => import("./components/product-list")
  ); ;

  if (!product) {
    return null;
  }
  return (
    <Body>
      <div className="flex items-center space-x-2 mt-4">
        <Link href="/" className="text-neutral-500 hover:cursor-pointer">
          Home
        </Link>
        <span className="font-medium"> / {product.category.name}</span>
      </div>

      {/* Image and Info */}
      <div className="lg:flex hidden mt-6 ">
        <div className="lg:basis-1/2">
          <SliceLg product={product} />
        </div>
        <div className="lg:basis-1/2 lg:ml-14 lg:h-[120vh] overflow-auto no-scrollbar">
          <Infomation product={product} />
        </div>
      </div>
      <div className="lg:hidden flex flex-col space-y-6">
        <ImageSlide images={product.images}  />
        <Infomation product={product} />
      </div>

      <div className="lg:mt-20 mt-12">
        <ProductList items={suggestedProducts} title="You Might Also Like" />
      </div>

      <div className="pt-12 pb-8">
        <BillBody />
      </div>
    </Body>
  );
};

export default ProductPage;
