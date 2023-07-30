import dynamic from "next/dynamic";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";

import Body from "@/components/ui/body";

const Subscriptions = async () => {
  const billboard = await getBillboard("84030340-c74f-49b8-ae66-8ab6cdb6ea90");
  const Nav = dynamic(() => import("./components/nav"));
  const Infomation = dynamic(() => import("./components/info"));
  const FAQ = dynamic(() => import("./components/faq"));
  return (
    <>
      <Billboard
        main="Subcribe"
        href="/"
        subtitle="Gilf"
        link="/"
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
