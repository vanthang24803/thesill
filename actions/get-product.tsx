import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
 const res = await fetch(`${URL}/${id}`, {
   headers: {
     "Cache-Control": "max-age=86400",
   },
 });
  return res.json();
};

export default getProduct;
