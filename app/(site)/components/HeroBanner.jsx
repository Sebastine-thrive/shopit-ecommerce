/* eslint-disable @next/next/no-img-element */
import React from "react";
import Img from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container flex">
      <div className="xs:mr-[2rem] lg:mr-[8rem] mt-8">
        <p className="small-text mt-8"> {heroBanner?.smallText}</p>
        <h1 className="mt-4">{heroBanner?.largeText1}</h1>
        <h3 className="mt-8"> {heroBanner?.midText} </h3>
        <Link href={`/product/${heroBanner?.product}`}>
          <button type="button mt-8"> {heroBanner?.buttonText} </button>
        </Link>
      </div>
      <div className="mt-4">
        <Img
          src={urlForImage(heroBanner?.image).url()}
          alt="product image"
          width={400}
          height={350}
          className="hero-banner-image"
        />
        <div className="desc mt-4 ">
          <h5> Description:</h5>
          <p className="text-white font-medium"> {heroBanner?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
