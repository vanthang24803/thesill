import { Product } from "@/types";

async function searchProducts(searchQuery: string): Promise<Product[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/products?name=${searchQuery}`);
  const data = await response.json();
  return data;
}

export default searchProducts;

