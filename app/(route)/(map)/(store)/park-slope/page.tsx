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
        <span>11am-6pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Saturday–Sunday:</span>
        <span>11am-7pm</span>
      </div>
    </div>
  );

  const labelImg = (
    <div className="flex flex-col space-y-3 font-medium">
      <p>
        Our Park Slope location is open for plant shopping, curbside pickup,
        workshops, local delivery, and more.
      </p>
      <p>
        Please message{" "}
        <a href="/" className="text-[#009a7b]">
          @thesillparkslope{" "}
        </a>
        or call the shop directly for more details: (646) 899-4016.
      </p>
      <i>* Please Note: In-store inventory can differ from online offerings</i>
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
        name="Park Slope"
        address="461 6th Avenue, Brooklyn, NY 11215"
        opening={opening}
        imgUrl="https://cdn.sanity.io/images/y346iw48/production/b0dd174acee5c75133d6432fc0fcbd45c3b70412-540x810.jpg?w=300&auto=format"
        labelImg={labelImg}
        latitude={40.6701033}
        longitude={-73.9859723}
      />
      <Body>
        <Icon />
        <Product img="https://cdn.sanity.io/images/y346iw48/production/b0dd174acee5c75133d6432fc0fcbd45c3b70412-540x810.jpg?w=300&auto=format" />
      </Body>
    </>
  );
};

export default Store;
