import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Forward } from "lucide-react";

const Header = () => {
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
              Upper West Side
            </span>
            <div
              className="flex items-center space-x-2 hover:cursor-pointer"
              onClick={() => router.push("/")}
            >
              <span className="text-lg text-[#009a7b] font-medium">
                448 Amsterdam Avenue New York, NY 10024
              </span>
              <Forward size={24} />
            </div>
          </div>

          <div className="flex flex-col space-y-3 border-b-2 pb-6 pt-4">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Monday-Friday:</span>
              <span>12am-7pm</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Saturday–Sunday:</span>
              <span>11am-7pm</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-medium">79th Street</span>
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white font-medium">
                  1
                </div>
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white font-medium">
                  2
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-medium">86th Street</span>
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white font-medium">
                  1
                </div>
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white font-medium">
                  2
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-medium">81st Street</span>
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white font-medium">
                  A
                </div>
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-500 text-white font-medium">
                  B
                </div>
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white font-medium">
                  C
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2 pt-4">
            <div className="flex items-center space-x-6">
              <img
                src="https://cdn.sanity.io/images/y346iw48/production/6b082628d2c08ffceec23110686d2d94f3efc99f-900x646.jpg?w=300&auto=format"
                alt="img"
                className="w-1/3 object-fill"
              />
              <div className="flex flex-col space-y-3 font-medium">
                <p>
                  Our Upper West Side location is open for plant shopping,
                  curbside pickup, workshops, local delivery, and more.
                </p>
                <p>
                  Please message{" "}
                  <a href="/" className="text-[#009a7b]">
                    @thesilluws{" "}
                  </a>
                  or call the shop directly for more details: (646) 899-4016.
                </p>
                <i>
                  * Please Note: In-store inventory can differ from online
                  offerings
                </i>
              </div>
            </div>
            <p className="pt-2 font-medium">
              <b className="font-semibold">Let’s Collaborate:</b> Ask your
              shopkeeper about bulk plant orders, private events & workshops,
              renting our plant-filled space, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] w-full">
        <Map latitude={40.785946} longitude={-73.976322} />
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
                Upper West Side
              </span>
              <div
                className="flex items-center space-x-2 hover:cursor-pointer"
                onClick={() => router.push("/")}
              >
                <span className="md:text-lg text-[#009a7b] font-medium">
                  448 Amsterdam Avenue New York, NY 10024
                </span>
                <Forward size={24} />
              </div>
            </div>

            <div className="flex flex-col space-y-3 border-b-2 pb-6 pt-4">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Monday-Friday:</span>
                <span>12am-7pm</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Saturday–Sunday:</span>
                <span>11am-7pm</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium">79th Street</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white font-medium">
                    1
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white font-medium">
                    2
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium">86th Street</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white font-medium">
                    1
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white font-medium">
                    2
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium">81st Street</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white font-medium">
                    A
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-500 text-white font-medium">
                    B
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white font-medium">
                    C
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2 pt-4">
              <div className="flex md:flex-row flex-col md:items-center md:space-x-6">
                <img
                  src="https://cdn.sanity.io/images/y346iw48/production/6b082628d2c08ffceec23110686d2d94f3efc99f-900x646.jpg?w=300&auto=format"
                  alt="img"
                  className="md:w-1/3 object-fill md:block hidden"
                />
                <div className="flex flex-col space-y-3 font-medium">
                  <p>
                    Our Upper West Side location is open for plant shopping,
                    curbside pickup, workshops, local delivery, and more.
                  </p>
                  <p>
                    Please message{" "}
                    <a href="/" className="text-[#009a7b]">
                      @thesilluws{" "}
                    </a>
                    or call the shop directly for more details: (646) 899-4016.
                  </p>
                  <i>
                    * Please Note: In-store inventory can differ from online
                    offerings
                  </i>
                </div>
              </div>
              <p className="pt-2 font-medium">
                <b className="font-semibold">Let’s Collaborate:</b> Ask your
                shopkeeper about bulk plant orders, private events & workshops,
                renting our plant-filled space, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
