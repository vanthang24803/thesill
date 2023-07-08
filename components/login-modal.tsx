"use client";

import Link from "next/link";

import useLoginModal from "@/hooks/use-login";
import useRegisterModal from "@/hooks/use-register";

import { MoveRight } from "lucide-react";

import Modal from "@/components/ui/modal-left";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { useCallback } from "react";

const label = [
  {
    title: "The Sill Rewards",
    desc: "Sign in to start earning points & rewards",
    href: "/",
  },
  {
    title: "Plant Care Library",
    desc: "Get plant care tips for all your purchases",
    href: "/",
  },
  {
    title: "Track Your Order",
    desc: "Lookup status and get UPS tracking info",
    href: "/",
  },
];

const Login = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const handleOpenRegister = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal , registerModal]);

  return (
    <Modal isOpen={loginModal.isOpen} onClose={loginModal.onClose}>
      <div className="flex flex-col">
        <span className="text-2xl font-medium py-3">
          Welcome To Your Sill Account
        </span>
        <span className="text-sm font-medium">
          Log into your account to manage orders, access online courses, and
          redeem rewards.
        </span>

        <form className="mt-6 flex flex-col space-y-4">
          <Input type="text" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          <Button type="submit" onClick={() => {}}>
            Submit
          </Button>
        </form>

        <div className="mt-8 flex flex-row space-x-4 font-medium">
          <span>New here?</span>
          <span
            className="underline hover:cursor-pointer font-semibold"
            onClick={handleOpenRegister}
          >
            Create an account
          </span>
        </div>

        <div className="mt-2 flex flex-row space-x-4 font-medium">
          <span>Toggle Loggin in?</span>
          <span className="underline hover:cursor-pointer font-semibold" onClick={() => {}}>
            Reset password
          </span>
        </div>

        <div
          className="flex flex-col mt-8 space-y-4"
          onClick={loginModal.onClose}
        >
          {label.map((item) => (
            <div className="flex justify-between items-center  hover:cursor-pointer">
              <Link href={item.href} className="spac">
                <span className="font-medium text-[17px]">{item.title}</span>
                <br />
                <span className="md:text-[14px] text-[12px] italic font-light">
                  {item.desc}
                </span>
              </Link>

              <MoveRight
                size={20}
                className="hover:translate-x-2 transition-all ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Login;
