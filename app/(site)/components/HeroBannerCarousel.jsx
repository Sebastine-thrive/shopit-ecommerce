/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlForImage } from "@/sanity/lib/image";

const HeroBannerCarousel = ({ heroBanner }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroBanner.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroBanner]);

  return (
    <div className="hero-banner-carousel">
      <div className="hero-banner-container flex xxs:flex-col lg:flex-row xxs:mt-4">
        <div className="hero-info xs:mr-[2rem] lg:mr-[7rem] xxs:mt-[-4rem] lg:mt-8 ">
          <p className="small-text mt-8">
            {heroBanner[currentIndex]?.smallText}
          </p>
          <h1
           
            className="mt-4"
          >
            {heroBanner[currentIndex]?.largeText1}
          </h1>
          <h3
            className="xs:mt-4 lg:mt-8"
          >
            {heroBanner[currentIndex]?.midText}
          </h3>
          <div className="xs:mt-[1rem] md:mt-[2rem]lg:mt-4">
            <Link href={`/product/${heroBanner[currentIndex]?.product}`}>
              <button type="button">
                {heroBanner[currentIndex]?.buttonText}
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-img lg:mt-[-2rem] xxs:mt-4 ">
          <img
            src={urlForImage(heroBanner[currentIndex]?.image).url()}
            alt="product image"
            width={400}
            height={400}
            className="hero-banner-image"
          />

          <div>
            <div className="desc xxs:mt-2 lg:mt-4 ">
              <h5>Description:</h5>
              <p className="text-white xxs:font-normal lg:font-medium">
                {heroBanner[currentIndex]?.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="indicators text-black">
        {heroBanner.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroBannerCarousel;
