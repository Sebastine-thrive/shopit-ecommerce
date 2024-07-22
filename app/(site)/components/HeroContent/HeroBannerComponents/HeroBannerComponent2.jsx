"use client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroBannerComponent2 = ({ heroBannerData }) => {
  const { smallText, midText, largeText1, product, buttonText, image, desc } =
    heroBannerData;

  return (
    <div>
      <div className="hero-banner-container  flex xxs:flex-col lg:flex-row xxs:mt-4">
        <div className="hero-info xs:mr-[2rem] lg:mr-[7rem] xxs:mt-[-3rem] lg:mt-8 ">
          <p className="small-text mt-8">{smallText}</p>
          <h1 className="mt-4">{largeText1}</h1>
          <h3 className="xs:mt-4 lg:mt-8">{midText}</h3>
          <div className="xs:mt-[1rem] md:mt-[2rem]lg:mt-4">
            <Link href={`/product/${product}`}>
              <button type="button">{buttonText}</button>
            </Link>
          </div>
        </div>

        <div className="hero-img lg:mt-[-1.5rem] xxs:mt-4 ">
          <Image
            src={urlForImage(image).url()}
            alt="product image"
            width={400}
            height={400}
            className="hero-banner-image"
          />

          <div>
            <div className="desc xxs:mt-2 lg:mt-4 ">
              <h5>Description:</h5>
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

export default HeroBannerComponent2;
