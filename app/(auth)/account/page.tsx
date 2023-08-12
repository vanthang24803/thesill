import getCurrentUser from "@/actions/getCurrentUser";
import Details from "./components/detailts";

const Account = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div className="bg-[#e8f8fa]">
      <Details currentUser={currentUser} />
    </div>
  );
};

export default Account;
