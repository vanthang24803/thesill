"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Body from "@/components/ui/body";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import axios from "axios";

const From = () => {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(true);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitLogin: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        setLoading(false);

        if (callback?.ok) {
          toast.success("Logged in");
          router.refresh();
        }

        if (callback?.error) {
          toast.error(callback.error);
        }
      })
      .finally(() => setLoading(false));
  };
  const onSubmitRegister: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registered!");
        setLogin(true);
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onError = () => {
    toast.error("Features Under Development!");
  }
  return (
    <Body>
      <div className="flex md:flex-row flex-col  my-8">
        <div className="flex flex-col space-y-2 md:w-1/2">
          <span className="text-4xl md:text-5xl lg:text-6xl">
            Log in to your account.
          </span>
          {login ? (
            <div className="flex items-center space-x-1 ">
              <p>Don’t have an account?</p>
              <p
                className="text-[#009a7b] hover:cursor-pointer"
                onClick={() => setLogin(!login)}
              >
                Create One
              </p>
            </div>
          ) : (
            <div className="flex items-center space-x-1 ">
              <p>Do you already have an account?</p>
              <p
                className="text-[#009a7b] hover:cursor-pointer"
                onClick={() => setLogin(!login)}
              >
                Login
              </p>
            </div>
          )}
        </div>
        {login ? (
          <div className="flex flex-col space-y-3 md:w-1/2">
            <Input
              id="email"
              type="text"
              placeholder="Email"
              {...register("email", { required: "Required" })}
            />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: "Required" })}
            />
            <Button
              type="submit"
              onClick={handleSubmit(onSubmitLogin)}
              disabled={loading}
            >
              Login
            </Button>

            <p className="text-[#009a7b] font-medium hover:cursor-pointer"
                onClick={onError}
            >
              Forgot your password?
            </p>
          </div>
        ) : (
          <div className="flex flex-col space-y-3 md:w-1/2">
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
              {...register("password", { required: "Required" })}
            />
            <Button
              type="submit"
              onClick={handleSubmit(onSubmitRegister)}
              disabled={loading}
            >
              Create Account
            </Button>

            <p>
              By creating an account, I agree to receive communications from The
              Sill at the email address provided. If you don't see your welcome
              Gift in your inbox, check your Promotions folder. Add
              hello@thesill.com as a contact to ensure emails get delivered
              right to your inbox. View our Terms of Service and Privacy Policy
              for details.
            </p>
          </div>
        )}
      </div>
    </Body>
  );
};

export default From;
