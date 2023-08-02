import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  lightId?: string;
  sizeId?: string;
  benefitId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      lightId: query.lightId,
      sizeId: query.sizeId,
      benefitId: query.benefitId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url, {
    headers: {
      "Cache-Control": "max-age=86400",
    },
  });

  return res.json();
};

export default getProducts;
