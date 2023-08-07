import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Forward } from "lucide-react";
import React from "react";

interface HeaderProps {
  name: string;
  address: string;
  opening: React.ReactElement;
  imgUrl?: string;
  labelImg?: React.ReactElement;
  labelFooter?: React.ReactNode;
  latitude: number;
  longitude: number;
}

const Header: React.FC<HeaderProps> = ({
  name,
  address,
  opening,
  imgUrl,
  labelImg,
  labelFooter,
  latitude,
  longitude,
}) => {
  const router = useRouter();
  const Map = dynamic(() => import("@/components/store/map"));
  return (
    <div className="flex flex-col lg:flex-row lg:py-12 overflow-hidden bg-[#f9f8f7]">
      <div className="w-[60%] lg:px-16 lg:py-24">
        <div className="flex-col hidden lg:flex pr-20 space-y-3">
          <div className="flex flex-col space-y-4 border-b-2 pb-6">
            <span
              className="hover:cursor-pointer"
              onClick={() => router.push("/")}
            >
              The Sill
            </span>
            <span className="xl:text-6xl md:text-4xl  lg:font-light md:font-medium">
              {name}
            </span>
            <div
              className="flex items-center space-x-2 hover:cursor-pointer"
              onClick={() => router.push("/")}
            >
              <span className="text-lg text-[#009a7b] font-medium">
                {address}
              </span>
              <Forward size={24} />
            </div>
          </div>
          {/* Openning */}
          {opening}
          <div className="flex flex-col space-y-2 pt-4">
            <div className="flex items-center space-x-6">
              <img src={imgUrl} alt="img" className="w-1/3 object-fill" />
              {labelImg}
            </div>
            {labelFooter}
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] w-full">
        <Map latitude={latitude} longitude={longitude} />
      </div>
      <div className="flex-col flex lg:hidden p-6 mt-14">
        <div className="py-8">
          <div className="flex-col flex space-y-3">
            <div className="flex flex-col space-y-4 border-b-2 pb-6">
              <span
                className="hover:cursor-pointer"
                onClick={() => router.push("/")}
              >
                The Sill
              </span>
              <span className="xl:text-7xl md:text-4xl text-3xl lg:font-light md:font-medium">
                {name}
              </span>
              <div
                className="flex items-center space-x-2 hover:cursor-pointer"
                onClick={() => router.push("/")}
              >
                <span className="md:text-lg text-[#009a7b] font-medium">
                 {address}
                </span>
                <Forward size={24} />
              </div>
            </div>

            {opening}

            <div className="flex flex-col space-y-2 pt-4">
              <div className="flex md:flex-row flex-col md:items-center md:space-x-6">
                <img
                  src={imgUrl}
                  alt="img"
                  className="md:w-1/3 object-fill md:block hidden"
                />
              {labelImg}
              </div>
             {labelFooter}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
