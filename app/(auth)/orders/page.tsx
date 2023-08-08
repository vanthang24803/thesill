import getCurrentUser from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";

const Orders = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/login");
  }
  return (
    <div className="text-3xl font-medium flex space-x-4">
      <p>
        {currentUser.firstname} {currentUser.lastname}
      </p>
    </div>
  );
};

export default Orders;
