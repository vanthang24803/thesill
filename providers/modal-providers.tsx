"use client";
import { useEffect, useState } from "react";

import Loggin from "@/components/loggin-modal";
import Login from "@/components/login-modal";
import Register from "@/components/register-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Loggin />
      <Login />
      <Register />
    </>
  );
};

export default ModalProvider;
