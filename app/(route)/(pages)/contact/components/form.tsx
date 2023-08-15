"use client";

import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";

const Form = () => {
  const onSubmit = () => {
    toast.success("Success!");
  };

  return (
    <div className="lg:w-1/2 flex flex-col space-y-4 w-full">
      <span className="text-3xl font-sans py-4 font-medium border-b ">
        Contact Us
      </span>

      <div className="flex flex-col space-y-3">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-1">
            <span className="font-semibold">Full name</span>
            <p className="text-red-600">*</p>
          </div>
          <Input className="rounded-md" />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-1">
            <span className="font-semibold">Full name</span>
            <p className="text-red-600">*</p>
          </div>
          <Input className="rounded-md" />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-1">
            <span className="font-semibold">Email</span>
            <p className="text-red-600">*</p>
          </div>
          <Input className="rounded-md" type="email" />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-1">
            <span className="font-semibold">Subject</span>
            <p className="text-red-600">*</p>
          </div>
          <Input className="rounded-md" />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-1">
            <span className="font-semibold">Messenger</span>
            <p className="text-red-600">*</p>
          </div>
          <textarea className="h-32 rounded-md flex items-start border p-4" />
        </div>

        <Button
        onClick={onSubmit}
        className="my-4 bg-black text-white font-medium rounded-md">
          Send
        </Button>
      </div>
    </div>
  );
};

export default Form;
