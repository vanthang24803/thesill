"use client";

import Body from "@/components/ui/body";
import Head from "@/components/store/head";
import Icon from "@/components/store/icon";
import Product from "@/components/store/product";

const Store = () => {
  const opening = (
    <div className="flex flex-col space-y-3 border-b-2 pb-6 pt-4">
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Monday:</span>
        <span>11am-7pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Tuesday:</span>
        <span>11am-7pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Wednesday:</span>
        <span>12am-7pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Thursday:</span>
        <span>11am-7pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Friday:</span>
        <span>11am-7pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Saturday:</span>
        <span>10am-7pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Sunday:</span>
        <span>10am-7pm</span>
      </div>

      <div className="flex items-center space-x-4">
        <span className="font-medium">Bergen Street</span>
        <div className="flex items-center space-x-1">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-500 text-white font-medium">
            F
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white font-medium">
            G
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-medium">Hoyt-Schermerhorn</span>
        <div className="flex items-center space-x-1">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white font-medium">
            A
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white font-medium">
            C
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white font-medium">
            G
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-medium">Jay Street</span>
        <div className="flex items-center space-x-1">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white font-medium">
            A
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white font-medium">
            C
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-500 text-white font-medium">
            F
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-600 text-white font-medium">
            R
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-medium">Borough Hall</span>
        <div className="flex items-center space-x-1">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 text-white font-medium">
            4
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 text-white font-medium">
            5
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white font-medium">
            2
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white font-medium">
            3
          </div>
        </div>
      </div>
    </div>
  );

  const labelImg = (
    <div className="flex flex-col space-y-3 font-medium">
      <p>
        Our Cobble Hill location is open for plant shopping, curbside pickup,
        workshops, local delivery, and more.
      </p>
      <p>
        Please message{" "}
        <a href="/" className="text-[#009a7b]">
          @thesillcobblehill{" "}
        </a>
        on Instagram or call the shop directly for more details:{" "}
        <a href="/" className="text-[#009a7b]">
          {" "}
          (646) 899-4016.
        </a>
      </p>
      <i>*Note in-store inventory can differ from online offerings</i>
    </div>
  );

  const labelFooter = (
    <div className="flex flex-col space-y-2">
      <p className="pt-2 font-medium">
        <b className="font-semibold">Let’s Collaborate:</b> Ask your shopkeeper
        about bulk plant orders, private events & workshops, renting our
        plant-filled space, and more.
      </p>
    </div>
  );
  return (
    <>
      <Head
        name="Cobble Hill"
        address="195 Pacific Street, Brooklyn, NY 11201 "
        opening={opening}
        imgUrl="https://cdn.sanity.io/images/y346iw48/production/a32c7fdf868e8b0c9c85a8f5260093fdb1a8a5db-1500x1000.jpg?w=300&auto=format"
        labelImg={labelImg}
        labelFooter={labelFooter}
        latitude={48.6833}
        longitude={-123.6000}
      />
      <Body>
        <Icon />
        <Product img="https://cdn.sanity.io/images/y346iw48/production/a32c7fdf868e8b0c9c85a8f5260093fdb1a8a5db-1500x1000.jpg?w=300&auto=format" />
      </Body>
    </>
  );
};

export default Store;
