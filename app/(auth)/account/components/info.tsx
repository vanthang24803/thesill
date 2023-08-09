"use client"

import { SafeUser } from "@/types";
import { CheckCircle2, Contact2, MapPin } from "lucide-react";

interface InfoProps {
  currentUser?: SafeUser | null;
}

const Info : React.FC<InfoProps> = ({currentUser}) => {
  return (
    <div className="py-8 flex md:flex-row flex-col md:space-y-0 space-y-4 md:items-start  items-center justify-center bg-white">
      <div className=" w-1/2 flex justify-center">
        <div className="flex flex-col space-y-3">
          <span className="text-xl font-medium">Infomations</span>
          <div className="flex flex-col space-y-1">
            <div className="flex items-end space-x-2">
              <span className="text-lg font-semibold">First name: </span>
              <p className="font-medium">{currentUser?.firstname}</p>
            </div>
            <div className="flex items-end space-x-2">
              <span className="text-lg font-semibold">Last name: </span>
              <p className="font-medium">{currentUser?.lastname}</p>
            </div>
            <div className="flex items-end space-x-2">
              <span className="text-lg font-semibold">Email: </span>
              <p className="font-medium">{currentUser?.email}</p>
            </div>
            {currentUser?.address == null ? (
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">Address: </span>
                <p className="font-medium text-sm">Ø</p>
              </div>
            ) : (
              <div className="flex items-end space-x-2">
                <span className="text-lg font-semibold">Address: </span>
                <p className="font-medium">{currentUser?.address}</p>
              </div>
            )}
            {currentUser?.numberPhone == null ? (
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">Phone: </span>
                <p className="font-medium text-sm">Ø</p>
              </div>
            ) : (
              <div className="flex items-end space-x-2">
                <span className="text-lg font-semibold">Phone: </span>
                <p className="font-medium">{currentUser?.numberPhone}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center">
        <span className="text-xl font-medium pb-4">Memberships</span>
        <div className="flex flex-col p-4 justify-center space-y-3 border md:w-[30vh]  rounded-lg bg-[#f9f8f7]">
          <div className="flex space-x-2 items-center">
            <MapPin size={20} />
            <p className="font-medium text-sm">United States</p>
          </div>
          <div className="flex space-x-2 items-center">
            <CheckCircle2 size={20} />
            <p className="font-medium capitalize text-sm">
              {currentUser?.role}
            </p>
          </div>
          <div className="flex space-x-2 items-start">
            <Contact2 size={20} />
            <p className="font-medium capitalize text-sm">
              {currentUser?.createdAt.split("T")[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info 
