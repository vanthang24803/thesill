import getBillboard from "@/actions/home/get-billboard";
import Billboard from "@/components/ui/billboard";

export default async function Home() {
  const data = await getBillboard("f691c614-adf0-48d2-87d4-e4ec887e07e4");
  return (
    <div className="">
     <Billboard main="Shop All" href="/locations" subtitle="New Arrivals" link="/" data={data} />
    </div>
  );
}
