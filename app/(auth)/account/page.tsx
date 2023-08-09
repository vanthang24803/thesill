import getCurrentUser from "@/actions/getCurrentUser";
import Body from "@/components/ui/body";
import { redirect } from "next/navigation";
import Details from "./components/detailts";

const Account = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/login");
  }
  return (
    <div className="bg-[#e8f8fa]">
      <Details currentUser={currentUser} />
    </div>
  );
};

export default Account;
