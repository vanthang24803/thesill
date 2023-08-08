import getCurrentUser from "@/actions/getCurrentUser";
import Button from "@/components/ui/button";
import Link from "next/link";

import { redirect } from "next/navigation";
import From from "./components/form";

const Login = async () => {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    redirect("/");
  }

  return (
    <>
      <div className="w-full h-[40vh] bg-[#e8f8fa] flex md:flex-row flex-col md:space-y-0 space-y-4 md:items-center md:justify-between px-8">
        <span className="text-4xl md:text-5xl lg:text-6xl font-medium">
          Welcome!
        </span>
        <div className="flex flex-col space-y-1 items-center">
            <p className="text-base">Order Planced</p>
            <Link href="/collections/sale">
                <Button>
                    Best Deals
                </Button>
            </Link>
        </div>
      </div>
        <From />
    </>
  );
};

export default Login;
