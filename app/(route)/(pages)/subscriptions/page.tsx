import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";

import Body from "@/components/ui/body";
import Nav from "./components/nav";
import Infomation from "./components/info";
import FAQ from "./components/faq";

const Subscriptions = async () => {
  const billboard = await getBillboard("84030340-c74f-49b8-ae66-8ab6cdb6ea90");

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
