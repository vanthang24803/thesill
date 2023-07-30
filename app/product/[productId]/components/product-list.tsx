import { Product } from "@/types";

import dynamic from "next/dynamic";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  const ProductCard = dynamic(() => import("./product-card"))
  return (
    <div className="space-y-4 mt-8 lg:mt-0">
      <h3 className="text-3xl md:text-4xl lg:font-normal lg:text-5xl font-medium mb-10">
        {title}
      </h3>
      {items.length === 0 && <>No Found...</>}
      <div className="lg:grid-cols-4  grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
