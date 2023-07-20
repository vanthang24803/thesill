import Link from "next/link";
import dynamic from "next/dynamic";

import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import { SafeUser } from "@/types";
import Navigation from "./navigation";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar : React.FC<NavbarProps> = ({
  currentUser
}) => {
  const MainNav =  dynamic( () => import("@/components/main-nav"));
  return (
    <nav className="w-full bg-white z-10 border-b">
      <div className="w-full bg-[#009A7B] flex justify-center items-center hover:cursor-pointer">
        <Link
          href="/"
          className="text-[17px] flex justify-center items-center h-[2rem] text-white font-medium"
        >
          Free Shipping+ 30-Day Guarantee
        </Link>
      </div>
      <div className="border-b">
        <Container>
          <div className="flex justify-between items-center">
            <Logo />
            <MainNav currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Navigation />
      <div className="w-full bg-[#E0F5F0] flex justify-center items-center hover:cursor-pointer">
        <Link
          href="/"
          className="text-[17px] flex justify-center items-center h-[2.5rem] text-black font-semibold"
        >
          🔥 New Arrivals, Comin’ In Hot! 🔥
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
