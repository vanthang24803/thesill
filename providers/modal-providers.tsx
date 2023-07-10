"use client";
import React, { useEffect, useState } from "react";

import Loggin from "@/components/loggin-modal";
import Login from "@/components/login-modal";
import Register from "@/components/register-modal";
import { SafeUser } from "@/types";
import Search from "@/components/search-modal";

interface ModalProviderProps {
  currentUser?: SafeUser | null;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ currentUser }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Loggin currentUser={currentUser} />
      <Login />
      <Register />
      <Search />
    </>
  );
};

export default ModalProvider;
