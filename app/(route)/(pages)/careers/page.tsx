import getBillboard from "@/actions/get-billboard";
import Billboard from "./components/billboard";
import Body from "@/components/ui/body";
import Note from "./components/note";
import FAQ from "./components/faq";

const Careers = async () => {
  const billboard = await getBillboard("cf448ab2-ec78-4b41-80d4-124d55b77f47");
  return (
    <>
      <Billboard
        main="Open Positions"
        href="https://apply.workable.com/the-sill/"
        data={billboard}
      />
      ;
      <Body>
        <Note />
        <FAQ />
      </Body>
    </>
  );
};

export default Careers;
