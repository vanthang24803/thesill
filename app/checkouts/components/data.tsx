"use client";

import React, { useEffect, useState } from "react";
import SmallProduct from "./product-sm";
import Express from "./express";
import Product from "./product";
import { SafeUser } from "@/types";

interface DataProps {
  currentUser?: SafeUser | null;
}

const Data : React.FC<DataProps> = ({currentUser}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div className="flex lg:flex-row flex-col">
          <SmallProduct />
          <Express currentUser={currentUser} />
          <Product />
        </div>
      )}
    </>
  );
};

export default Data;
