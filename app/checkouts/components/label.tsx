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
import { toast } from "react-hot-toast";
import { SafeUser } from "@/types";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { signOut } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface LabelProps {
  currentUser?: SafeUser | null;
}

const Label: React.FC<LabelProps> = ({ currentUser }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const items = useCart((state) => state.items);
  const searchParams = useSearchParams();
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams?.get("Success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams?.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: currentUser?.firstname || "",
      email: currentUser?.email || "",
      lastname: currentUser?.lastname || "",
      address: currentUser?.address || "",
      numberPhone: currentUser?.numberPhone || "",
      company: "",
      city: "",
      zip: "",
    },
  });

  const handleInputChange =
    (field: "firstname" | "lastname" | "address" | "numberPhone") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(field, e.target.value);
    };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setLoading(true);
      axios
        .post("/api/order", {
          ...data,
          items,
        })
        .then(() => {
          toast.success("Success!");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong !");
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="lg:w-3/4 flex flex-col space-y-5">
      <div className="border-t w-full py-4 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">Contact</span>
          {currentUser ? (
            <></>
          ) : (
            <div className="flex items-center space-x-1 text-sm">
              <p>Have an account?</p>
              <p
                className="text-[#009a7b] hover:cursor-pointer"
                onClick={() => router.push("/login")}
              >
                Login
              </p>
            </div>
          )}
        </div>
        {currentUser ? (
          <div className="flex flex-row space-x-2 items-center hover:cursor-pointer">
            <Avatar>
              <AvatarImage
                src={currentUser?.image || "/images/user/avt.png"}
                onClick={() => router.push("/account")}
                className="w-12 h-12 rounded-full object-cover"
              />
            </Avatar>
            <div className="flex flex-col">
              <span>{currentUser.email}</span>
              <p className="text-[#009a7b] text-sm" onClick={() => signOut()}>
                Sign out
              </p>
            </div>
          </div>
        ) : (
          <Input
            placeholder="Email"
            type="email"
            className="rounded-md h-12"
            {...register("email")}
            required
            id="1"
          />
        )}
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
            {...register("firstname")}
            onChange={handleInputChange("firstname")}
          />
          <Input
            placeholder="Last name"
            className="h-12 rounded-md"
            required
            {...register("lastname")}
            onChange={handleInputChange("lastname")}
            id="3"
          />
        </div>

        <Input
          placeholder="Company (optional)"
          className="h-12 rounded-md"
          {...register("company")}
          id="4"
        />
        <Input
          placeholder="Address"
          className="h-12 rounded-md"
          required
          {...register("address")}
          onChange={handleInputChange("address")}
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
            {...register("city")}
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
            {...register("zip")}
            required
          />
        </div>

        <Input
          id="9"
          {...register("numberPhone")}
          onChange={handleInputChange("numberPhone")}
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
        disabled={loading}
        onClick={handleSubmit(onSubmit)}
        type="submit"
      >
        Continue to Shipping
      </Button>
    </form>
  );
};

export default Label;
