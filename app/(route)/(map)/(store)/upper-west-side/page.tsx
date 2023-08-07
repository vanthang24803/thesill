"use client";

import Body from "@/components/ui/body";
import Head from "@/components/store/head";
import Icon from "@/components/store/icon";
import Product from "@/components/store/product";

const Store = () => {
  const opening = (
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
  );

  const labelImg = (
    <div className="flex flex-col space-y-3 font-medium">
      <p>
        Our Upper West Side location is open for plant shopping, curbside
        pickup, workshops, local delivery, and more.
      </p>
      <p>
        Please message{" "}
        <a href="/" className="text-[#009a7b]">
          @thesilluws{" "}
        </a>
        or call the shop directly for more details: (646) 899-4016.
      </p>
      <i>* Please Note: In-store inventory can differ from online offerings</i>
    </div>
  );

  const labelFooter = (
    <p className="pt-2 font-medium">
      <b className="font-semibold">Let’s Collaborate:</b> Ask your shopkeeper
      about bulk plant orders, private events & workshops, renting our
      plant-filled space, and more.
    </p>
  );
  return (
    <>
      <Head
        name="Upper West Side"
        address="448 Amsterdam Avenue New York, NY 10024"
        opening={opening}
        imgUrl="https://cdn.sanity.io/images/y346iw48/production/6b082628d2c08ffceec23110686d2d94f3efc99f-900x646.jpg?w=300&auto=format"
        labelImg={labelImg}
        labelFooter={labelFooter}
        latitude={40.785946}
        longitude={-73.976322}
      />
      <Body>
        <Icon />
        <Product img="https://cdn.sanity.io/images/y346iw48/production/6b082628d2c08ffceec23110686d2d94f3efc99f-900x646.jpg?w=300&auto=format" />
      </Body>
    </>
  );
};

export default Store;
