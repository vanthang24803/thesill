import dynamic from "next/dynamic";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";

import Body from "@/components/ui/body";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Subcriptions The Sill`,
  description: "Buy a flower every day to make life more beautiful. 😊",
};

const Subscriptions = async () => {
  const billboard = await getBillboard("84030340-c74f-49b8-ae66-8ab6cdb6ea90");
  const Nav = dynamic(() => import("./components/nav"));
  const Infomation = dynamic(() => import("./components/info"));
  const FAQ = dynamic(() => import("./components/faq"));
  return (
    <>
      <Billboard
        main="Subcribe"
        href="/product/da683815-bbb6-4c58-967e-8d1143502d63"
        subtitle="Gift"
        link="/categories/gift"
        data={billboard}
      />
      <Body>
        <Nav />
        <Infomation />
        <FAQ />
      </Body>
    </>
  );
};

export default Subscriptions;
