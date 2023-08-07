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
        <span>11am-7pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Saturday</span>
        <span>10am-7pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Sunday:</span>
        <span>12pm-7pm</span>
      </div>
    </div>
  );

  const labelImg = (
    <div className="flex flex-col space-y-3 font-medium">
      <p>
        Our Bethesda Row location is open for plant shopping, curbside pickup,
        workshops, local delivery, and more.
      </p>
      <p>
        Please message{" "}
        <a href="/" className="text-[#009a7b]">
          @thesillbethesda{" "}
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
        name="Bethesda Row"
        address="4816 Bethesda Avenue, Bethesda, MD 20814"
        opening={opening}
        imgUrl="https://cdn.sanity.io/images/y346iw48/production/47d903d536abcde5b1d35168504b13e7651afa9e-1024x683.jpg?w=300&auto=format"
        labelImg={labelImg}
        labelFooter={labelFooter}
        latitude={38.984653}
        longitude={-77.094711}
      />
      <Body>
        <Icon />
        <Product img="https://cdn.sanity.io/images/y346iw48/production/47d903d536abcde5b1d35168504b13e7651afa9e-1024x683.jpg?w=300&auto=format" />
      </Body>
    </>
  );
};

export default Store;
