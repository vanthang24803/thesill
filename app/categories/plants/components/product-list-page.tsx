import { Product } from "@/types";

import ProductCard from "./product-card-page";

interface ProductListProps {
  title: string;
  heading: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items, heading }) => {
  return (
    <div className="space-y-4 mt-8 lg:mt-0">
      <h3 className="text-3xl md:text-4xl lg:font-normal lg:text-5xl font-medium mb-10">
        {title}
      </h3>
      {items.length === 0 && <>No Found...</>}
      <div className="grid grid-cols-2 gap-6">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} head={heading} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
