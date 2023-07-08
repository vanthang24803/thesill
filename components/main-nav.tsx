"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import useLogginModal from "@/hooks/use-loggin";
import useLoginModal from "@/hooks/use-login";

interface MainNavProps {
  currentUser: boolean;
}

const MainNav: React.FC<MainNavProps> = ({ currentUser }) => {

  const logginModal = useLogginModal();
  const loginModal = useLoginModal();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  const lastname = "May";
  const lengthCart = "0";

  return (
    <div className="flex justify-between items-center lg:space-x-10 md: space-x-12">
      {/* MAP */}
      <div
        className="hidden lg:flex flex-row gap-2 hover:cursor-pointer"
        onClick={() => router.push("/locations")}
      >
        <Image height={24} width={24} src="/images/navbar/map.svg" alt="map" />
        <div className="text-[13px]">
          <span className="font-semibold">Store Locator</span>
          <br />
          <span className="italic text-neutral-500">My Plant Shop</span>
        </div>
      </div>

      {/* SEARCH */}
      <div
        className="flex flex-row gap-2 hover:cursor-pointer"
        onClick={() => {}}
      >
        <Image
          height={24}
          width={24}
          src="/images/navbar/search.svg"
          alt="map"
        />
        <div className="lg:block hidden text-[13px]">
          <span className="font-semibold">Find Product</span>
          <br />
          <span className="italic text-neutral-500">Qick Search</span>
        </div>
      </div>

      {/* LOGGIN/REGISTER */}
      <>
        {currentUser ? (
          <>
            <div className="cursor-pointer" onClick={logginModal.onOpen}>
              <div className="block lg:hidden lg:gap-x-6 ">
                <Image
                  alt="login"
                  src="/images/navbar/user.svg"
                  width={20}
                  height={20}
                />
              </div>
              <div className="hidden lg:block text-[13px] gap-x-4">
                <span className="font-semibold">Hello, {lastname}</span>
                <br />
                <span className="italic text-neutral-500">My Account</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="cursor-pointer" onClick={loginModal.onOpen}>
              <div className="block lg:hidden lg:gap-x-4 ">
                <Image
                  alt="login"
                  src="/images/navbar/user.svg"
                  width={24}
                  height={24}
                />
              </div>
              <div className="hidden lg:block text-[13px] gap-x-6">
                <span className="font-semibold">Hello, Sign In</span>
                <br />
                <span className="italic text-neutral-500">Your Account</span>
              </div>
            </div>
          </>
        )}
      </>

      {/* CART */}
      <div
        className="flex flex-row gap-2 hover:cursor-pointer"
        onClick={() => {}}
      >
        <Image
          height={24}
          width={24}
          src="/images/navbar/cart.svg"
          alt="cart"
        />
        <div className="text-[13px]">
          <span className="text-center">({lengthCart})</span>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
