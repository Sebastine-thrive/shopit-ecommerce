/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import "./../../../globals.css";

const ImageDisplay = ({ image }) => {
  const [index, setIndex] = useState(0);
  const [Loading, setIsLoading] = useState(false);

  return (
    <>
      <div className="image-container">
        <img
          // src=""
          src={image ? urlForImage(image[index])?.url() : null}
          alt="large product image"
          className="product-detail-image"
          width="450"
          height="350"
        />
      </div>
      <div className="small-images-container">
        {/* Image client component needing server image prop */}
        {image?.map((item, i) => (
          <img
            src={urlForImage(item).url()}
            key={i}
            alt="smaller product image"
            width="100"
            height="100"
            className={
              i === index ? "small-image selected-image" : "small-image"
            }
            onMouseEnter={() => setIndex(i)}
          />
        ))}
      </div>
    </>
  );
};

export default ImageDisplay;
