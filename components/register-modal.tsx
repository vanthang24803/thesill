"use client";

import { useCallback, useState } from "react";

import useRegisterModal from "@/hooks/use-register";
import useLoginModal from "@/hooks/use-login";

import Modal from "@/components/ui/modal-left";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registered!");
        registerModal.onClose();
        loginModal.onOpen();
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const hanleClose = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal]);

  return (
    <Modal isOpen={registerModal.isOpen} onClose={registerModal.onClose}>
      <div className="flex flex-col">
        <span className="text-2xl font-medium py-3">
          Create Your Sill Account
        </span>
        <span className="text-sm font-medium">
          Creating an account makes it easy to manage orders, access free online
          courses, and earn rewards.
        </span>

        <form className="mt-6 flex flex-col space-y-4">
          <Input
            type="text"
            id="firstname"
            placeholder="First Name"
            {...register("firstname", { required: "Required" })}
          />
          <Input
            type="text"
            id="lastname"
            placeholder="Last Name"
            {...register("lastname", { required: "Required" })}
          />
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: "Required" })}
          />
          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...register("pass", { required: "Required" })}
          />
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={loading}
          >
            Submit
          </Button>
        </form>

        <div className="mt-6 flex flex-row space-x-4 font-medium">
          <span>Already have an account? </span>
          <span
            className="underline hover:cursor-pointer font-semibold"
            onClick={hanleClose}
          >
            Login
          </span>
        </div>

        <div className="my-4 text-sm">
          By creating an account, I agree to receive reward program
          communications at the email address provided. View our{" "}
          <a href="/" className="text-[#009A7B]">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/" className="text-[#009A7B]">
            Privacy Policy
          </a>{" "}
          for details.
        </div>

        <div className="mb-4 text-sm">
          Add hello@thesill.com as a contact to ensure emails get delivered
          right to your inbox.
        </div>
      </div>
    </Modal>
  );
};

export default Register;
