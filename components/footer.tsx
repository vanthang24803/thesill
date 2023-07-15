"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./ui/input";
import Button from "./ui/button";

const navigations = [
  {
    header: "Customer Service",
    subnav: [
      {
        title: "FAQ",
        link: "/",
      },
      {
        title: "Shipping & Handling",
        link: "/",
      },
      {
        title: "30-Day Guarantee",
        link: "/",
      },
      {
        title: "Contact Us",
        link: "/",
      },
    ],
  },
  {
    header: "Resources",
    subnav: [
      {
        title: "Find Your Plant 🌱",
        link: "/",
      },
      {
        title: "Plant Care Library",
        link: "/",
      },
      {
        title: "Blog",
        link: "/",
      },
      {
        title: "Free Online Course",
        link: "/",
      },
    ],
  },
  {
    header: "My Sill",
    subnav: [
      {
        title: "My Account",
        link: "/",
      },
      {
        title: "Workshops",
        link: "/",
      },
      {
        title: "Rewards Program",
        link: "/",
      },
      {
        title: "Track My Order",
        link: "/",
      },
    ],
  },
  {
    header: "Explore",
    subnav: [
      {
        title: "Our Story",
        link: "/",
      },
      {
        title: "Locations",
        link: "/locations",
      },
      {
        title: "Careers",
        link: "/",
      },
      {
        title: "Corporate Gifting",
        link: "/",
      },
    ],
  },
];

const copyright = [
  {
    name: "Affiliate Program",
    href: "/",
  },
  {
    name: "Terms of Use",
    href: "/",
  },
  {
    name: "Privacy Policy",
    href: "/",
  },
  {
    name: "Accessibility",
    href: "/",
  },
  {
    name: "Do Not Sell My Info",
    href: "/",
  },
];

const social = [
  { imgUrl: "/images/social/facebook.svg", url: "/" },
  { imgUrl: "/images/social/twitter.svg", url: "/" },
  { imgUrl: "/images/social/instagram.svg", url: "/" },
  { imgUrl: "/images/social/pinterest.svg", url: "/" },
  { imgUrl: "/images/social/youtube.svg", url: "/" },
  { imgUrl: "/images/social/tiktok.svg", url: "/" },
  { imgUrl: "/images/social/linked.svg", url: "/" },
];

const Footer = () => {
  return (
    <footer className="bg-[#F9F8F7] lg:px-10 lg:pt-10 pb-3 px-6 pt-6">
      <div className="border-b-2 border-neutral-300 pb-10 flex items-center md:space-x-8 space-x-4">
        <img
          src="https://cdn.sanity.io/images/y346iw48/production/439f7681c104d6d291bb26f4627a7c9326015573-338x338.png?auto=format"
          alt="image"
          className="object-fill md:w-[12%] w-[30%]"
        />
        <div className="flex flex-col md:space-y-4 space-y-2">
          <span className="font-medium lg:text-4xl md:text-3xl text-xl">
            Visit Us In A Store Near You
          </span>
          <p className="hidden md:block">
            Our stores around the US are open for plant shopping, repotting,
            curbside pickup, in-person workshops, and more.
          </p>
          <Link
            href="/locations"
            className="flex items-center space-x-3 hover:text-[#009A7B]"
          >
            <span className="md:text-xl text-lg font-medium hover:italic">
              Find Your Local Store
            </span>
            <MoveRight
              size={24}
              className="hover:translate-x-4 transition-all ease-in-out"
            />
          </Link>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:pt-12 md:pb-6 py-8">
        <div className="hidden md:grid basis-2/3 grid-cols-4 gap-x-6">
          {navigations.map((nav) => (
            <div className="flex flex-col space-y-4" key={nav.header}>
              <span className="font-medium text-lg">{nav.header}</span>
              {nav.subnav.map((item) => (
                <Link
                  href={item.link}
                  className="flex flex-col space-y-4 hover:text-[#009A7B]"
                  key={item.title}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="md:basis-1/3">
          <span className="lg:text-4xl text-3xl font-semibold">
            Get the Dirt.
          </span>
          <p className="my-4 text-sm lg:text-base">
            Get plant care tips, exclusive offers, & event invites straight to
            your inbox. No spam, ever.
          </p>
          <form className="space-y-3 mb-8">
            <Input placeholder="Enter your email here..." required />
            <Button onClick={() => {}}>Subscribe</Button>
          </form>

          <div className="flex items-center space-x-4">
            {social.map((label) => (
              <Link
                href={label.url}
                className="hover:scale-125"
                key={label.imgUrl}
              >
                <Image width={18} height={18} alt="social" src={label.imgUrl} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="border-b-2 border-neutral-600 flex items-center justify-between md:text-4xl text-3xl font-semibold pb-1">
          <p>The</p>
          <p>Sill</p>
        </div>
        <div className="mt-4 flex items-center justify-between font-medium">
          <span>Copyright 2023 - The Sill, Inc.</span>
          <div className="hidden lg:flex items-center justify-between space-x-4">
            {copyright.map((index) => (
              <Link
                href={index.href}
                className="text-sm hover:text-[#009A7B] hover:italic"
                key={index.name}
              >
                {index.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
