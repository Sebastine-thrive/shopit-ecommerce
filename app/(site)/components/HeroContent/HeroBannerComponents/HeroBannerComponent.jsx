"use client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroBannerComponent = ({ heroBannerData }) => {
  const { smallText, midText, largeText1, product, buttonText, image, desc } =
    heroBannerData;
  return (
    <div>
      <div className="hero-banner-container flex xxs:flex-col lg:flex-row xxs:items-center  ">
        <div className="hero-info mx-auto text-center mb-16 lg:mx-0 lg:mb-0 lg:mr-8 my-4">
          <p className="small-text w-auto text-center text-xl md:text-2xl my-4 lg:my-8">
            {smallText}
          </p>
          <h1 className="large-text text-2xl md:text-4xl my-4 lg:my-8">
            {largeText1}
          </h1>
          <h3 className="mid-text xs:my-8 text-xl md:text-3xl lg:my-12 ">
            {midText}
          </h3>
          <div className="shop-now xs:mt-[1rem] md:mt-[2rem] lg:mt-4">
            <Link href={`/product/${product}`}>
              <button type="button">{buttonText}</button>
            </Link>
          </div>
        </div>

        <div className="hero-img xxs:mt-4 md:mt-8 lg:mt-0 lg:ml-8 my-4 ">
          <Image
            src={urlForImage(image).url()}
            alt="product image"
            width={400}
            height={400}
            className="hero-banner-image mx-auto"
          />

          <div>
            <div className="desc xxs:mt-2 lg:mt-4 ">
              {/* <h5>Description:</h5> */}
              <p className="text-white xxs:font-normal lg:font-medium">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerComponent;
