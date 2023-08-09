import Body from "@/components/ui/body";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Data from "./components/data";
import getCurrentUser from "@/actions/getCurrentUser";

const CheckOut = async () => {
  const currentUser = await getCurrentUser();
  return (
    <>
      <Body>
        <div className="flex items-center space-x-1 font-medium ">
          <Link href="/login" className="hover:cursor-pointer">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-[#009a7b]">Information</span>
        </div>
        <Data currentUser={currentUser} />
      </Body>
    </>
  );
};

export default CheckOut;
