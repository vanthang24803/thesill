"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const socials = [
  {
    tilte: "Email",
    src: "/images/social/Email.svg",
    url: "/",
  },
  {
    tilte: "Facebook",
    src: "/images/social/Facebook.svg",
    url: "/",
  },
  {
    tilte: "Linked",
    src: "/images/social/Linked.svg",
    url: "/",
  },
  {
    tilte: "Pinterest",
    src: "/images/social/Pinterest.svg",
    url: "/",
  },
  {
    tilte: "Twitter",
    src: "/images/social/Twitter.svg",
    url: "/",
  },
];

const Navigation = () => {
  const router = useRouter();
  return (
    <div className="w-full px-4 py-6    border-b flex items-center justify-between">
      <div
        className="flex items-center space-x-2 hover:cursor-pointer"
        onClick={() => router.push("/")}
      >
        <MoveLeft size={22} />
        <span>Back to Blog</span>
      </div>

      <div className="flex items-center md:space-x-8">
        <span className="md:block hidden">Share This Article</span>
        <div className="flex items-center md:space-x-3 space-x-1">
          {socials.map((index) => (
            <div
              className="w-10 h-10 rounded-full bg-[#f9f8f7] flex items-center justify-center hover:cursor-pointer"
              onClick={() => router.push(index.url)}
              key={index.tilte}
            >
              <img src={index.src} alt={index.tilte} className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
