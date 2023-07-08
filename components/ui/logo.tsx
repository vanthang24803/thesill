"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <>
      {/* LOGO PC */}
      <div
        className="hidden lg:block hover:cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src="/images/navbar/logo.svg"
          height={36}
          width={182}
          alt="logo"
        />
      </div>

      {/* LOGO MOBILE */}
      <div
        className="block lg:hidden cursor-poite"
        onClick={() => router.push("/")}
      >
        <Image
          src="/images/navbar/logo.svg"
          height={32}
          width={152}
          alt="logo"
        />
      </div>
    </>
  );
};

export default Logo;
