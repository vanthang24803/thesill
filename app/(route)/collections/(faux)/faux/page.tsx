import dynamic from "next/dynamic";
import getProducts from "@/actions/get-products";
import Body from "@/components/ui/body"
import FAQ from "./components/faq";

const Faux = async () => {
   const products = await getProducts({ isFeatured: true });
   const Product = dynamic(() => import("./components/product-list-find"));
   return (
     <Body>
       <Product items={products} />
       <FAQ />
     </Body>
   );
}

export default Faux
