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
        <span>12pm-6pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Tuesday:</span>
        <span>12pm-6pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Wednesday:</span>
        <span>12pm-6pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Thursday:</span>
        <span>12pm-6pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Friday:</span>
        <span>11am-6pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Saturday:</span>
        <span>11m-6pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Sunday:</span>
        <span>11am-6pm</span>
      </div>
    </div>
  );

  const labelImg = (
    <div className="flex flex-col space-y-3 font-medium">
      <p>
        Our Sourthport location is open for plant shopping, curbside pickup,
        workshops, local delivery, and more.
      </p>
      <p>
        Please message{" "}
        <a href="/" className="text-[#009a7b]">
          @thesillchicago{" "}
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
      <p className="pt-2 font-medium">
        <b className="font-semibold">Parkinge:</b> The closest parking garage is
        the Union Street Plaza Garage at 2001 Union Street.
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
        name="Southport Corridor"
        address="1351 W Roscoe St, Chicago, IL 60657 "
        opening={opening}
        imgUrl="https://cdn.sanity.io/images/y346iw48/production/f396df285f7b7531a4d29f0d33bc1f366cea7694-2048x1365.jpg?w=300&auto=format"
        labelImg={labelImg}
        labelFooter={labelFooter}
        latitude={41.881832}
        longitude={-87.623177}
      />
      <Body>
        <Icon />
        <Product img="https://cdn.sanity.io/images/y346iw48/production/f396df285f7b7531a4d29f0d33bc1f366cea7694-2048x1365.jpg?w=300&auto=format" />
      </Body>
    </>
  );
};

export default Store;
