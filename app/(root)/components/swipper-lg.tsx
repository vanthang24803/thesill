"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const data = [
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/Account/748414/183292197/standard.jpg?1625172911",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/instagram/4/18180343435108204/standard_resolution.jpg",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/Account/748414/184513405/standard.jpg?1626189201",
  },
  {
    imgUrl:
      "https://cdn-yotpo-images-production.yotpo.com/instagram/11/17924860849642211/standard_resolution.jpg",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/Account/748414/184513979/standard.jpg?1626189615",
  },
  {
    imgUrl:
      "https://cdn-yotpo-images-production.yotpo.com/Account/748414/184516351/standard.jpg?1626190404",
  },
  {
    imgUrl:
      "https://cdn-yotpo-images-production.yotpo.com/Account/748414/183299541/standard.jpg?1625175620",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/instagram/4/17912803787077404/standard_resolution.jpg",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/Account/748414/184513534/standard.jpg?1626189285",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/instagram/84/18125008660215784/standard_resolution.jpg",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/Account/748414/184515632/standard.jpg?1626190267",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/Account/748414/183292197/standard.jpg?1625172911",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/Account/748414/184516492/standard.jpg?1626190509",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/Account/748414/184514104/standard.jpg?1626189634",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/Account/748414/184514953/standard.jpg?1626189893",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/Account/748414/184516341/standard.jpg?1626190395",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/instagram/65/17909259370800865/standard_resolution.jpg",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/instagram/16/17925673796039116/standard_resolution.jpg",
  },

  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/instagram/44/17888689763404344/standard_resolution.jpg",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/Account/748414/184514118/standard.jpg?1626189645",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/Account/748414/183292184/standard.jpg?1625172907",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/instagram/81/17913189073782281/standard_resolution.jpg",
  },
  {
    imgUrl:
      "//cdn-yotpo-images-production.yotpo.com/instagram/52/17894209106027352/standard_resolution.jpg",
  },
];

const Swipper = () => {
  return (
    <>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={6}
          className="mySwiper"
          autoplay={true}
          loop
        >
          {data.map((item) => (
            <SwiperSlide key={item.imgUrl}>
              <img
                src={item.imgUrl}
                alt="image"
                className="lg:w-[95%] md:w-[95%] h-[40vh] object-cover hover:cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  );
}

export default Swipper;