import dynamic from "next/dynamic";

import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";
import Body from "@/components/ui/body";


const WorkShops = async () => {
  const billboard = await getBillboard("4b48882f-da79-4587-ade9-37a5c8bc3529");
  const Card = dynamic(() => import("./components/card"));
  return (
    <>
      <Billboard
        main="Workshops"
        href="/"
        subtitle="All Events"
        link="/"
        data={billboard}
      />
      <Body>
        <Card />
      </Body>
    </>
  );
};

export default WorkShops;
