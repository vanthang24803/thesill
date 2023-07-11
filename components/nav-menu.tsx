"use client";

import React, { useCallback, useState } from "react";
import { Search } from "lucide-react";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

import useMenuModal from "@/hooks/use-menu-mobile";
import useLoginModal from "@/hooks/use-login";
import useLogginModal from "@/hooks/use-loggin";
import useNavModalModal from "@/hooks/use-store-menu";
import usePlantModal from "@/hooks/use-plant-menu";
import usePlanterModal from "@/hooks/use-planter-menu";
import usePlantCareModal from "@/hooks/use-plant-care-mobile";
import useGiftModal from "@/hooks/use-gift-menu";
import useDecorModal from "@/hooks/use-decor-menu";
import useFlowerModal from "@/hooks/use-flower-menu";
import useFauxModal from "@/hooks/use-faux-menu";

import Modal from "@/components/ui/modal-md";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

interface MenuMobileProps {
  currentUser?: SafeUser | null;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ currentUser }) => {
  const router = useRouter();
  const menuModal = useMenuModal();
  const loginModal = useLoginModal();
  const logginModal = useLogginModal();
  const navModal = useNavModalModal();
  const plantModal = usePlantModal();
  const planterModal = usePlanterModal();
  const plantCareModal = usePlantCareModal();
  const giftModal = useGiftModal();
  const decorModal = useDecorModal();
  const fauxModal = useFauxModal();
  const flowerModal = useFlowerModal();

  const [data, setData] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const isUser = useCallback(() => {
    menuModal.onClose();
    logginModal.onOpen();
  } , [logginModal, menuModal]);

  
  const notUser = useCallback(() => {
    menuModal.onClose();
    loginModal.onOpen();
  }, [loginModal, menuModal]);

  return (
    <Modal isOpen={menuModal.isOpen} onClose={menuModal.onClose} title="Shop">
      <div className="bg-[#f9f8f7] overflow-auto">
        {/* Mobile Search */}
        <div className="block md:hidden">
          <Search size={17} className="absolute top-[5.5rem] left-8" />
          <Input
            placeholder="Search The Sill..."
            className="px-8"
            onChange={handleSearch}
          />

          <div className="mt-8">
            {data.length !== 0 && (
              <>
                <span className="font-thin italic text-[14px]">
                  Suggested Searches....
                </span>
                <p className="mx-4 mt-4 font-medium">You Search is : {data}</p>
              </>
            )}
          </div>
        </div>

        {/* Navigation Mobile */}
        <div
          className="flex flex-col space-y-3 md:space-y-4 overflow-auto cursor-pointer"
          onClick={menuModal.onClose}
        >
          {/* DEALS */}
          <div
            className="border-b py-2 font-medium flex space-x-1 w-full"
            onClick={() => router.push("/")}
          >
            <span className="text-lg">Deals</span>
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
          </div>
          {/* STORE */}
          <div
            className="border-b py-2 font-medium flex items-center justify-between space-x-1 w-full"
            onClick={navModal.onOpen}
          >
            <span className="text-lg">Stores</span>
            <MoveRight size={18} />
          </div>
          {/* PLANTS*/}
          <div
            className="border-b py-2 font-medium flex items-center justify-between space-x-1 w-full"
            onClick={plantModal.onOpen}
          >
            <span className="text-lg">Plants</span>
            <MoveRight size={18} />
          </div>
          {/* PLANTERS */}
          <div
            className="border-b py-2 font-medium flex items-center justify-between space-x-1 w-full"
            onClick={planterModal.onOpen}
          >
            <span className="text-lg">Planters</span>
            <MoveRight size={18} />
          </div>
          {/* PLANT CARE */}
          <div
            className="border-b py-2 font-medium flex items-center justify-between space-x-1 w-full"
            onClick={plantCareModal.onOpen}
          >
            <span className="text-lg">Plant Care</span>
            <MoveRight size={18} />
          </div>
          {/* GIFT IDEAS */}
          <div
            className="border-b py-2 font-medium flex items-center justify-between space-x-1 w-full"
            onClick={giftModal.onOpen}
          >
            <span className="text-lg">Gift Ideas</span>
            <MoveRight size={18} />
          </div>
          {/* HOME & DECOR */}
          <div
            className="border-b py-2 font-medium flex items-center justify-between space-x-1 w-full"
            onClick={decorModal.onOpen}
          >
            <span className="text-lg">Home & Decor</span>
            <MoveRight size={18} />
          </div>
          {/* FAUX */}
          <div
            className="border-b py-2 font-medium flex items-center justify-between space-x-1 w-full"
            onClick={fauxModal.onOpen}
          >
            <span className="text-lg">Faux</span>
            <MoveRight size={18} />
          </div>
          {/* FLOWERS & BOUQUETS */}
          <div
            className="border-b py-2 font-medium flex items-center justify-between space-x-1 w-full"
            onClick={flowerModal.onOpen}
          >
            <span className="text-lg">Flowers & Bouquets</span>
            <MoveRight size={18} />
          </div>
          {/* SUBCRIPTIONS */}
          <div
            className="border-b py-2 font-medium flex items-center justify-between space-x-1 w-full"
            onClick={() => router.push("/")}
          >
            <span className="text-lg">Supcriptions</span>
            <MoveRight size={18} />
          </div>
          {/* WORKSHOPS */}
          <div
            className="border-b py-2 font-medium flex items-center justify-between space-x-1 w-full"
            onClick={() => router.push("/")}
          >
            <span className="text-lg">Workshops</span>
            <MoveRight size={18} />
          </div>
        </div>

        {/* BUTTON NAVIGATION */}
        <div className="flex items-center space-x-2 md:mt-10 mt-4 mb-6">
          {currentUser ? (
            <Button
              className="basis-1/2 md:basis-1/4 lg:basis-1/2"
              onClick={isUser}
            >
              My Account
            </Button>
          ) : (
            <Button
              className="basis-1/2 md:basis-1/4 lg:basis-1/2"
              onClick={notUser}
            >
              My Account
            </Button>
          )}
          <Button className="basis-1/2 md:basis-1/4 lg:basis-1/2 bg-white text-[#009A7B]" onClick={() => router.push("/locations")}>
            Store Locator
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default MenuMobile;
