"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { data } from "./swipper-lg";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Swipper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.imgUrl}>
            <img
              src={item.imgUrl}
              alt=""
              className="object-cover w-full h-[50vh]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};


export default Swipper;