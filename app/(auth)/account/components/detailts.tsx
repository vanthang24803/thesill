"use client";

import Button from "@/components/ui/button";
import { SafeUser } from "@/types";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { MoreHorizontal} from "lucide-react";
import { useState } from "react";
import Info from "./info";
import Edit from "./edit";

interface DetailsProps {
  currentUser?: SafeUser | null;
}

const Details: React.FC<DetailsProps> = ({ currentUser }) => {
  const [profile, setProfile] = useState(false);
  const [more, setMore] = useState(true);

  const handleOpen = () => {
    setMore(false);
    setProfile(!profile);
  }
  const handleMore = () => {
    setProfile(false);
    setMore(!more);
  };

  return (
    <>
      <div className="flex justify-center items-center py-8 space-x-6 ">
        <Avatar>
          <AvatarImage
            src={currentUser?.image || "/images/user/avt.png"}
            className="object-fill md:w-36 md:h-36 w-32 h-32 rounded-full"
          />
        </Avatar>
        <div className="flex flex-col space-y-3">
          <div className="flex items-start space-x-2">
            <div className="flex items-center space-x-2 lg:text-4xl text-3xl font-semibold">
              <span>{currentUser?.firstname}</span>
              <span>{currentUser?.lastname}</span>
            </div>
            {currentUser?.role == "admin" && (
              <img
                src="https://fullstack.edu.vn/static/media/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                alt="crown"
                className="object-fill w-6 h-6"
              />
            )}
          </div>
          <span className="text-sm">{currentUser?.email}</span>
          <div className="flex items-center space-x-4 hover:cursor-pointer">
            <Button className="w-30 h-10 rounded-md"
            onClick={handleOpen}
            >Edit Profile</Button>
            <div
              className="w-10 h-10 bg-white rounded-md border flex items-center justify-center hover:bg-opacity-90"
              onClick={handleMore}
            >
              <MoreHorizontal size={26} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t ">
        {profile && <Edit currentUser={currentUser}/>}
      </div>
      <div className="w-full border-t ">
        {more && <Info currentUser={currentUser} />}
      </div>
    </>
  );
};

export default Details;
