"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/autoplay";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HeroBannerComponent1 from "./HeroBannerComponents/HeroBannerComponent";
import HeroBannerComponent2 from "./HeroBannerComponents/HeroBannerComponent2";
import Carousel from "../HeroBannerCarousel2";

const HeroContent = ({ heroBannerArray }) => {
  //   console.log(heroBannerArray);
  //   console.log(HeroBannerArray[0])

  return (
    <div className=" w-[96%] mx-auto flex h-[90vh] my-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <div className="w-full h-[95%] flex justify-center items-center bg-green-400 py-4 rounded-md ">
            <HeroBannerComponent1 heroBannerData={heroBannerArray[0]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex justify-center items-center bg-orange-400 py-4 rounded-md ">
            {/* herobannercomponent2 */}
            <HeroBannerComponent2 heroBannerData={heroBannerArray[1]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex justify-center items-center bg-red-400 py-4 rounded-md">
            <HeroBannerComponent2 heroBannerData={heroBannerArray[2]} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroContent;
