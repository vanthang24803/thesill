"use client";

import Body from "@/components/ui/body";
import Head from "./components/head";
import Icon from "@/components/store/icon";
import Product from "@/components/store/product";

const Store = () => {
  return (
    <>
      <Head />
      <Body>
        <Icon />
        <Product
          img="https://cdn.sanity.io/images/y346iw48/production/6b082628d2c08ffceec23110686d2d94f3efc99f-900x646.jpg?w=300&auto=format"
        />
      </Body>
    </>
  );
};

export default Store;
