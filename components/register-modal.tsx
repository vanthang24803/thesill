"use client";

import { useCallback } from "react";

import useRegisterModal from "@/hooks/use-register";
import useLoginModal from "@/hooks/use-login";

import Modal from "@/components/ui/modal-left";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

const Register = () => {
  const register = useRegisterModal();
  const loginModal = useLoginModal();

  const hanleClose = useCallback(() => {
    register.onClose();
    loginModal.onOpen();
  }, [register, loginModal]);

  return (
    <Modal isOpen={register.isOpen} onClose={register.onClose}>
      <div className="flex flex-col">
        <span className="text-2xl font-medium py-3">
          Create Your Sill Account
        </span>
        <span className="text-sm font-medium">
          Creating an account makes it easy to manage orders, access free online
          courses, and earn rewards.
        </span>

        <form className="mt-6 flex flex-col space-y-4">
          <Input type="text" name="firstName" placeholder="First Name" />
          <Input type="text" name="lastName" placeholder="Last Name" />
          <Input type="text" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          <Button type="submit" onClick={() => {}}>
            Submit
          </Button>
        </form>

        <div className="mt-6 flex flex-row space-x-4 font-medium">
          <span>Already have an account? </span>
          <span className="underline hover:cursor-pointer font-semibold" onClick={hanleClose}>
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
