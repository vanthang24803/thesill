import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import { MoveRight } from "lucide-react";

import useLogginModal from "@/hooks/use-loggin";

import Modal from "@/components/ui/modal-sm";
import Button from "@/components/ui/button";
import { SafeUser } from "@/types";

const labelMember = [
  {
    title: "Rewards Program",
    desc: "Earn & redeem rewards",
    href: "/",
  },
  {
    title: "Online Courses",
    desc: "Free, self-guided plant care lessons",
    href: "/",
  },
  {
    title: "Purchase History",
    desc: "View order history & track shipments",
    href: "/",
  },
  {
    title: "Account Settings",
    desc: "Update my profile",
    href: "/account",
  },
];

const labelAdmin = [
  {
    title: "Rewards Program",
    desc: "Earn & redeem rewards",
    href: "/",
  },
  {
    title: "Online Courses",
    desc: "Free, self-guided plant care lessons",
    href: "/",
  },
  {
    title: "Purchase History",
    desc: "View order history & track shipments",
    href: "/",
  },
  {
    title: "Account Settings",
    desc: "Update my profile",
    href: "/account",
  },
  {
    title: "API Settings",
    desc: "Dashboard & API Control",
    href: "/settings",
  },
];

interface LogginProps {
  currentUser?: SafeUser | null;
}

const Loggin: React.FC<LogginProps> = ({ currentUser }) => {
  const router = useRouter();
  const logginModal = useLogginModal();
  return (
    <Modal isOpen={logginModal.isOpen} onClose={logginModal.onClose}>
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-2xl font-medium py-4">
            Welcome Back, {currentUser?.lastname}
          </span>
          {currentUser?.role == "admin" && (
            <img
              src="https://fullstack.edu.vn/static/media/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
              alt="crown"
              className="object-fill w-4 h-4 mb-4"
            />
          )}
        </div>
        <span className="text-sm font-medium">
          The Sill customer since 2023
        </span>

        {currentUser?.role == "admin" ? (
          <div
            className="flex flex-col mt-12 space-y-4"
            onClick={logginModal.onClose}
          >
            {labelAdmin.map((item) => (
              <div
                className="flex justify-between items-center  hover:cursor-pointer"
                key={item.href}
              >
                <Link href={item.href}>
                  <span className="font-medium text-[17px]">{item.title}</span>
                  <br />
                  <span className="md:text-[14px] text-[12px] italic font-light">
                    {item.desc}
                  </span>
                </Link>

                <MoveRight
                  onClick={() => router.push(item.href)}
                  size={20}
                  className="hover:translate-x-2 transition-all ease-in-out"
                />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="flex flex-col mt-12 space-y-4"
            onClick={logginModal.onClose}
          >
            {labelMember.map((item) => (
              <div
                className="flex justify-between items-center  hover:cursor-pointer"
                key={item.href}
              >
                <Link href={item.href}>
                  <span className="font-medium text-[17px]">{item.title}</span>
                  <br />
                  <span className="md:text-[14px] text-[12px] italic font-light">
                    {item.desc}
                  </span>
                </Link>

                <MoveRight
                  onClick={() => router.push(item.href)}
                  size={20}
                  className="hover:translate-x-2 transition-all ease-in-out"
                />
              </div>
            ))}
          </div>
        )}

        <div onClick={logginModal.onClose}>
          <Button
            className="lg:mt-10  mt-12"
            onClick={() => router.push("/account")}
          >
            Go To My Account
          </Button>
        </div>

        <div className="flex flex-row space-x-4 mt-8 font-medium">
          <span>Not {currentUser?.lastname}?</span>
          <span
            onClick={() => signOut()}
            className="underline hover:cursor-pointer"
          >
            Log out
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default Loggin;
