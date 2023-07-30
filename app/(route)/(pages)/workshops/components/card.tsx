"use client";

import { useRouter } from "next/navigation";
import { data } from "../page";
import { MoveRight } from "lucide-react";

const Card = () => {
  const router = useRouter();
  return (
    <div className="pt-12 pb-8">
      <span className="pb-4 lg:text-5xl text-4xl">Upcoming Events</span>

      <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {data.map((index) => (
          <div
            className="border w-full flex flex-col space-y-4 pb-6"
            key={index.imgUrl}
            onClick={() => router.push(index.href)}
          >
            <img src={index.imgUrl} alt="img" className="object-cover" />
            <div className="px-4 flex flex-col space-y-4">
              <span className="text-3xl">{index.title}</span>
              <span className="text-xl italic">{index.time}</span>
              <p>{index.subtitle}</p>
              <div
                className="flex items-center space-x-4 group font-medium cursor-pointer"
                onClick={() => router.push(index.href)}
              >
                <span className="group-hover:italic group-hover:text-[#009a7b] ">
                  RSVP on Eventbrite
                </span>
                <MoveRight
                  size={20}
                  className="group-hover:text-[#009a7b] transition ease-linear group-hover:translate-x-2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
