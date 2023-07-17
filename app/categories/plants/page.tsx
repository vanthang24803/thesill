import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import Body from "@/components/ui/body";
import Collection from "./components/collection";
import ProductList from "@/components/product-list-category";

const Plants = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("67996431-bf9b-4ecb-9703-80562a867e8e");
  return (
    <>
      <Billboard
        main="Shop Online"
        href="/"
        subtitle="Find A Store"
        link="/"
        data={billboard}
      />

      <Body>
        {/* Collection */}
        <Collection />

        {/* New Arrivals */}
        <ProductList
          title="New Arrivals"
          items={products}
          heading="New Arrivals"
        />

        <ProductList
          title="Most Popular Plants"
          items={products}
          heading="Most Popular Plants"
        />
      </Body>
    </>
  );
};

export default Plants;
