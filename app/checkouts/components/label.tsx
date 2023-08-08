"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "@/components/ui/button";

const Label = () => {
  const router = useRouter();
  return (
    <div className="lg:w-3/4 flex flex-col space-y-5">
      <div className="border-t w-full py-4 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">Contact</span>
          <div className="flex items-center space-x-1 text-sm">
            <p>Have an account?</p>
            <p
              className="text-[#009a7b] hover:cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </p>
          </div>
        </div>
        <Input
          placeholder="Email"
          className="rounded-md h-12"
          required
          id="1"
        />
        <div className="flex items-center space-x-2">
          <Checkbox className="w-5 h-5" />
          <p className="text-sm">
            Keep me up to date on news and exclusive offers via newsletter.
          </p>
        </div>
      </div>
      <div className="w-full py-4 flex flex-col space-y-3">
        <span className="text-lg font-medium">Shipping address</span>
        <Select>
          <SelectTrigger className="w-full h-11 border rounded-md">
            <SelectValue placeholder="Country/region" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem
              value="us"
              className="flex items-start justify-start px-3"
            >
              United State
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center justify-between space-x-4">
          <Input
            placeholder="First name"
            className="h-12 rounded-md"
            id="2"
            required
          />
          <Input
            placeholder="Last name"
            className="h-12 rounded-md"
            required
            id="3"
          />
        </div>

        <Input
          placeholder="Company (optional)"
          className="h-12 rounded-md"
          id="4"
        />
        <Input
          placeholder="Address"
          className="h-12 rounded-md"
          required
          id="5"
        />
        <Input
          id="6"
          placeholder="Plase fill in Apt # applicable."
          className="h-12 rounded-md"
        />

        <div className="flex items-center justify-between space-x-4">
          <Input
            placeholder="City"
            className="h-12 rounded-md"
            required
            id="7"
          />
          <Select>
            <SelectTrigger className="w-full h-11 border rounded-md font-medium">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent className="font-medium">
              <SelectItem
                value="wst"
                className="flex items-start justify-start px-3"
              >
                Wasington DC
              </SelectItem>
              <SelectItem
                value="ny"
                className="flex items-start justify-start px-3"
              >
                New York
              </SelectItem>
              <SelectItem
                value="cg"
                className="flex items-start justify-start px-3"
              >
                Chicago
              </SelectItem>
            </SelectContent>
          </Select>
          <Input
            id="8"
            placeholder="Zip Code"
            className="h-12 rounded-md"
            type="number"
            required
          />
        </div>

        <Input
          id="9"
          placeholder="Phone"
          className="h-12 rounded-md"
          type="number"
          required
        />
        <div className="flex items-center space-x-2">
          <Checkbox className="w-5 h-5" />
          <p className="text-sm">
            Sign up for SMS Alerts about new product launches, exclusive offers
            & more!
          </p>
        </div>
      </div>

      <Button
        className="md:w-1/2 w-full rounded-md"
        onClick={() => {}}
        type="submit"
      >
        Continue to Shipping
      </Button>
    </div>
  );
};

export default Label;
