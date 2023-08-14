"use client";

import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-hot-toast";

const Form = () => {
  const onSubmit = () => {
    toast.success("Success!");
  };
  return (
    <div className="py-8 flex flex-col md:px-20 space-y-6">
      <span className="lg:text-5xl md:text-4xl text-3xl font-medium font-serif">
        Step 3: Submit Your Order
      </span>
      <p className="text-sm font-bold">
        Complete the request form to get gifting.
      </p>

      <div className="flex lg:flex-row flex-col lg:space-x-3 lg:space-y-0 space-y-3">
        <div className="flex flex-col space-y-2 w-full">
          <Input placeholder="First name" required />
          <Input placeholder="Email address" required />
          <Input placeholder="Company name" required />
          <Input placeholder="Order quantity" required />
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <Input placeholder="Last name" required />
          <Input placeholder="Phone number" required />
          <Select>
            <SelectTrigger className="h-14 border">
              <SelectValue
                placeholder="How did you hear about The Sill Corporate Gifting?"
                className="hover:text-[#009a7b] font-medium"
              />
            </SelectTrigger>
            <SelectContent className="w-1/3 ">
              <SelectItem
                value="gg"
                className="flex items-center justify-start px-3 h-14"
              >
                Google Search
              </SelectItem>
              <SelectItem
                value="email"
                className="flex items-center justify-start px-3 h-14"
              >
                Email
              </SelectItem>
              <SelectItem
                value="fb"
                className="flex items-center justify-start px-3 h-14"
              >
                Facebook
              </SelectItem>
              <SelectItem
                value="ln"
                className="flex items-center justify-start px-3 h-14"
              >
                Linked
              </SelectItem>
              <SelectItem
                value="or"
                className="flex items-center justify-start px-3 h-14"
              >
                Orther
              </SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Preferred Delivery Week -MM/DD/YYYY" required />
        </div>
      </div>

      <Button onClick={onSubmit}>Submit</Button>

      <p className="py-6 font-medium lg:text-base text-sm">
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>
    </div>
  );
};

export default Form;
