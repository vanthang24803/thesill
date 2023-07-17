import { Product } from "@/types";

import ProductCard from "@/components/product-card-category";

interface ProductListProps {
  title: string;
  heading: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items,
  heading
}) => {
  return (
    <div className="space-y-4 my-12">
      <h3 className="text-3xl md:text-4xl lg:font-normal lg:text-5xl font-medium mb-10">
        {title}
      </h3>
      {items.length === 0 && <>No Found...</>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-4 lg:gap-x-12 gap-x-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} head={heading} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
