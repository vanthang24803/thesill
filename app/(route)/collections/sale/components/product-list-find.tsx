import { Product } from "@/types";
import ProductCard from "./card";

interface ProductFind {
  items: Product[];
}

const ProductFind: React.FC<ProductFind> = ({ items }) => {
  return (
    <div className="space-y-4 mt-8">
      <div className="lg:grid-cols-4  grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <ProductCard  data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductFind;
