"use client";

import { SafeUser } from "@/types";
import Label from "./label";

interface ExpressProps {
  currentUser?: SafeUser | null;
}

const Express: React.FC<ExpressProps> = ({ currentUser }) => {
  return (
    <div className="lg:w-1/2 flex items-center flex-col space-x-4 lg:py-8 py-4">
      <span className="absolute z-10 font-semibold bg-white">
        Express checkout
      </span>
      <div className="lg:w-3/4 w-full border flex items-center mt-3 overflow-hidden justify-between rounded-lg h-20 gap-4 px-4 hover:cursor-pointer mb-8">
        <div className="w-full h-11 bg-white border rounded-md flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
            alt="logo"
            className="object-fill w-1/2 md:w-1/4 lg:w-1/2"
          />
        </div>
        <div className="w-full h-11 bg-black rounded-md flex items-center justify-center">
          <img
            src="/images/store/google.png"
            alt="logo"
            className="object-fill w-1/3 md:w-1/6 lg:w-1/4"
          />
        </div>
        <div className="w-full h-11 bg-yellow-400 rounded-md flex items-center justify-center">
          <img
            src="/images/store/paypal.svg"
            alt="logo"
            className="object-fill w-1/2 md:w-1/4 lg:w-1/2"
          />
        </div>
      </div>
      <Label currentUser={currentUser} />
    </div>
  );
};

export default Express;
