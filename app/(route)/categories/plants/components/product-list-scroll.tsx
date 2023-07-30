import dynamic from "next/dynamic";

import { Product } from "@/types";

interface ProductListProps {
  title: string;
  heading: string;
  items: Product[];
}

const ProductListSrcoll: React.FC<ProductListProps> = ({ title, items, heading }) => {
  const ProductCardScroll = dynamic(() => import("./product-card-scroll"));
  return (
    <div className="space-y-4 mt-8 md:mt-0">
      {items.length === 0 && <>No Found...</>}
      <div className="grid grid-cols-1 gap-6 overflow-auto w-full lg:h-[146vh] md:h-[54vh] h-[60vh]">
        {items.map((item) => (
          <ProductCardScroll key={item.id} data={item} head={heading} />
        ))}
      </div>
    </div>
  );
};

export default ProductListSrcoll;
