import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import BodyFooter from "@/components/body-footer";
import Billboard from "@/components/ui/billboard";
import Body from "@/components/ui/body";
import dynamic from "next/dynamic";

const Planters = async () => {
  const billboard = await getBillboard("faddb8fd-bc86-44c2-bf0f-3a299ad1558a");
  const products = await getProducts({ isFeatured: true });
  const ProductList = dynamic(
    () => import("@/components/product-list-category")
  );
  return (
    <>
      <Billboard
        main="Planters"
        href="/"
        subtitle="Plant Stands"
        link="/"
        data={billboard}
      />

      <Body>
        {/* Tabletop Planters */}
        <ProductList
          title="Tabletop Planters"
          items={products}
          heading="Tabletop Planters"
        />

        {/* Large Planters */}
        <ProductList
          title="Large Planters"
          items={products}
          heading="Large Planters"
        />

        {/* Decor Planters */}
        <ProductList
          title="Decor Planters"
          items={products}
          heading="Decor Planters"
        />

        {/* Potting Supplies */}
        <ProductList
          title="Potting Supplies"
          items={products}
          heading="Potting Supplies"
        />
      </Body>
      <BodyFooter
        title="Planters, Cachepots, Plant Stands, & More"
        description={`The Sill is your one-stop shop for indoor & outdoor planters, cachepots, plant stands, and propagation vessels. Shop a wide range of planter styles, sizes, and colors, available in various materials from timeless ceramic planters to lightweight fiberglass and recycled plastic pots.`}
      />
    </>
  );
};

export default Planters;
