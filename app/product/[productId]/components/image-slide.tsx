"use client";
import { Image } from "@/types";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
interface ImageSlideProps {
  images: Image[];
}

const ImageSlide: React.FC<ImageSlideProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handlePlusImg = () => {
    if (index < images.length) {
      setIndex(index + 1);
    }
  };

  const handleMinusImg = () => {
    if (index >= 0) {
      setIndex(index - 1);
    }
  };
  return (
    <>
      <img
        src={images?.[index]?.url}
        alt="products"
        className="object-cover w-full mt-8 overflow-hidden"
      />
      <div className="absolute block md:hidden text-white left-1  top-[48%]">
        {index > 0 && <ChevronLeft size={70} onClick={handleMinusImg} />}
      </div>
      <div className="absolute block md:hidden text-white right-1 top-[48%]">
        {index < images.length - 1 && (
          <ChevronRight size={71}  onClick={handlePlusImg} />
        )}
      </div>
      <div className="absolute hidden md:block text-white left-1  top-[65%]">
        {index > 0 && <ChevronLeft size={110} onClick={handleMinusImg} />}
      </div>
      <div className="absolute hidden md:block text-white right-1 top-[64%]">
        {index < images.length - 1 && (
          <ChevronRight size={110} onClick={handlePlusImg} />
        )}
      </div>
    </>
  );
};

export default ImageSlide;
