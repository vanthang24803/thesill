"use client";

import Afterpay from "./faq-afterpay";
import Common from "./faq-common";
import Faux from "./faq-faux";
import Monthly from "./faq-monthly";

const Label = () => {
  return (
    <div className="lg:w-1/2 flex flex-col w-full space-y-6">
      <Common />
      <Faux />
      <Monthly />
      <Afterpay />
    </div>
  );
};

export default Label;
