import getBillboard from "@/actions/get-billboard";
import Billboard from "./components/billboard";
import Body from "@/components/ui/body";
import Info from "./components/info";
import Steps from "./components/steps";
import Form from "./components/form";

const Corporate = async () => {
  const billboard = await getBillboard("f0cd7784-c238-4454-acc2-8bd46719317e");
  return (
    <>
      <Billboard
        main="How It Worlks"
        href="/"
        data={billboard}
        subtitle="Address Form"
        link="/"
      />
      <Body>
        <Info />
        <Steps />
        <Form />
      </Body>
    </>
  );
};

export default Corporate;
