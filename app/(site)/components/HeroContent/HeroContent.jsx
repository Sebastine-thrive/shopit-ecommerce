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
import HeroBannerComponent from "./HeroBannerComponents/HeroBannerComponent";
// import HeroBannerComponent2 from "./HeroBannerComponents/HeroBannerComponent2";
import Carousel from "../HeroBannerCarousel2";

const HeroContent = ({ heroBannerArray }) => {
  return (
    <div className="hero-content__container w-[95%] mx-auto flex h-[95%] my-4">
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
          <div className="herobanner-component__container w-full h-full flex justify-center items-center bg-green-400 py-4 rounded-md ">
            <HeroBannerComponent heroBannerData={heroBannerArray[0]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="herobanner-component__container w-full h-full flex justify-center items-center bg-orange-400 py-4 rounded-md ">
            {/* herobannercomponent2 */}
            <HeroBannerComponent heroBannerData={heroBannerArray[1]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="herobanner-component__container w-full h-full flex justify-center items-center bg-red-400 py-4 rounded-md">
            <HeroBannerComponent heroBannerData={heroBannerArray[2]} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroContent;
