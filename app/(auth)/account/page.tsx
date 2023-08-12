import getCurrentUser from "@/actions/getCurrentUser";
import Details from "./components/detailts";
import { redirect } from "next/navigation";

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
