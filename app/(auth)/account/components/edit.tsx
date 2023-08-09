"use client";

import { AvatarImage } from "@/components/ui/avatar";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ImageUpload from "@/components/ui/upload";
import { SafeUser } from "@/types";
import { Avatar } from "@radix-ui/react-avatar";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface Props {
  currentUser?: SafeUser | null;
}

const Edit: React.FC<Props> = ({ currentUser }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: currentUser?.email || "",
      firstname: currentUser?.firstname || "",
      lastname: currentUser?.lastname || "",
      address: currentUser?.address || "",
      image: currentUser?.image || "",
      numberPhone: currentUser?.numberPhone || "",
    },
  });

  const image = watch("image");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handleInputChange =
    (field: "firstname" | "lastname" | "email" | "address" | "numberPhone") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(field, e.target.value);
    };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="py-8 flex items-center justify-center bg-white">
      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-3 ">
          {open ? (
            <ImageUpload
              onChange={(value) => setCustomValue("image", value)}
              value={image}
            />
          ) : (
            <Button className="h-10 rounded-md" onClick={() => setOpen(!open)}>
              Upload new picure
            </Button>
          )}
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-2">
            <span className="font-semibold">First name</span>
            <Input
              placeholder="First name..."
              className="rounded-lg"
              required
              {...register("firstname")}
              onChange={handleInputChange("firstname")}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-semibold">Last name</span>
            <Input
              placeholder="Last name..."
              className="rounded-lg"
              required
              {...register("lastname")}
              onChange={handleInputChange("lastname")}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-semibold">Email</span>
            <Input
              type="email"
              placeholder="Email..."
              className="rounded-lg"
              required
              {...register("email")}
              onChange={handleInputChange("email")}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-semibold">Address</span>
            <Input
              placeholder="Address..."
              className="rounded-lg"
              required
              {...register("address")}
              onChange={handleInputChange("address")}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-semibold">Phone</span>
            <Input
              placeholder="0123456789"
              className="rounded-lg"
              required
              {...register("numberPhone")}
              onChange={handleInputChange("numberPhone")}
            />
          </div>
        </div>

        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="mt-8 h-12 rounded-md"
          disabled={loading}
        >
          Save Profile
        </Button>
      </div>
    </div>
  );
};

export default Edit;
