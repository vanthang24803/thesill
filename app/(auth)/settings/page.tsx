import getCurrentUser from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";

const Settings = async () => {
  const currentUser = await getCurrentUser();
  const isAdmin = currentUser?.role == "admin";
  if (!isAdmin) {
    redirect("/account");
  }
  return (
    <div>
      <p>{process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
};

export default Settings;
