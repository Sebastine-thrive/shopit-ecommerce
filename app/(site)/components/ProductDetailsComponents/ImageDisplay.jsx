/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import Img from "next/image";

import "./../../../globals.css";

const ImageDisplay = ({ image }) => {
  const [index, setIndex] = useState(0);
  // const [Loading, setIsLoading] = useState(false);

  return (
    <div className = "images-wrapper">
      <div className="image-container bg-white">
        <Img
          src={image ? urlForImage(image[index])?.url() : null}
          alt="large product image"
          className="large-product-image bg-white"
          width="450"
          height="350"
          priority={true}	
        />
      </div>
      <div className="small-images-container">
        {/* Image client component needing server image prop */}
        {image?.map((item, i) => (
          <Img
            src={urlForImage(item).url()}
            key={i}
            alt="smaller product image"
            width="100"
            height="100"
            priority={true}	
            className={
              i === index ? "small-image selected-image" : "small-image"
            }
            onMouseEnter={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageDisplay;
