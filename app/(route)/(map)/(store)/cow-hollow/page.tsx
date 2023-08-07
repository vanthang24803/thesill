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
        <span>11am-6pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Tuesday:</span>
        <span>2pm-6pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Wednesday:</span>
        <span>11am-6pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Thursday:</span>
        <span>11am-6pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Friday:</span>
        <span>11am-6pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Saturday:</span>
        <span>10am-6pm</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Sunday:</span>
        <span>10am-7pm</span>
      </div>   
    </div>
  );

  const labelImg = (
    <div className="flex flex-col space-y-3 font-medium">
      <p>
        Our Cow Hollow location is open for plant shopping, curbside pickup,
        workshops, local delivery, and more.
      </p>
      <p>
        Please message{" "}
        <a href="/" className="text-[#009a7b]">
          @thesillsf{" "}
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
    </div>
  );
  return (
    <>
      <Head
        name="Cow Hollow"
        address="2181A Union St, San Francisco, CA 94123 "
        opening={opening}
        imgUrl="https://cdn.sanity.io/images/y346iw48/production/725e8e85da90573fbbae6afbbe0919a0f86e9dbb-4500x3000.jpg?w=300&auto=format"
        labelImg={labelImg}
        labelFooter={labelFooter}
        latitude={37.773972}
        longitude={-122.431297}
      />
      <Body>
        <Icon />
        <Product img="https://cdn.sanity.io/images/y346iw48/production/725e8e85da90573fbbae6afbbe0919a0f86e9dbb-4500x3000.jpg?w=300&auto=format" />
      </Body>
    </>
  );
};

export default Store;
