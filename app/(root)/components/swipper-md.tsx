"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { data } from "./swipper-lg";

const Swipper = () => {
  return (
    <>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={4}
        className="mySwiper"
        autoplay={true}
        loop
      >
        {data.map((item) => (
          <SwiperSlide key={item.imgUrl}>
            <img
              src={item.imgUrl}
              alt=""
              className="w-[95%] h-[20vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Swipper;