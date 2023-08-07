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
    </div>
  );

  const labelImg = (
    <div className="flex flex-col space-y-3 font-medium">
      <p>
        Our Williamsburg location is open for plant shopping, curbside pickup,
        workshops, local delivery, and more.
      </p>
      <p>
        Please message{" "}
        <a href="/" className="text-[#009a7b]">
          @thesillwilliamsburg{" "}
        </a>
        on Instagram or call the shop directly for more details:{" "}
        <a href="/" className="text-[#009a7b]">
          {" "}
          (646) 899-4016
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
      <b>Public Transportation</b>
      <div className="flex flex-col text-sm">
        <p>L train to Bedford Ave</p>
        <p>B32 to Wythe Ave/Metropolitan Ave</p>
        <p>B62 to Bedford Ave/N 3rd St</p>
      </div>
    </div>
  );
  return (
    <>
      <Head
        name="Williamsburg"
        address="190 Berry Street, Brooklyn, NY 11249"
        opening={opening}
        imgUrl="https://cdn.sanity.io/images/y346iw48/production/4a828f8383e8c5c5b188546b5ff289a0e00963c1-1000x667.jpg?w=300&auto=format"
        labelImg={labelImg}
        labelFooter={labelFooter}
        latitude={37.2707}
        longitude={-76.7075}
      />
      <Body>
        <Icon />
        <Product img="https://cdn.sanity.io/images/y346iw48/production/4a828f8383e8c5c5b188546b5ff289a0e00963c1-1000x667.jpg?w=300&auto=format" />
      </Body>
    </>
  );
};

export default Store;
