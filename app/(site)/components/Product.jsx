/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug?.current}`}>
        <div className="product-card xs:flex   xs:flex-col xs:justify-center xs:items-center md:block">
          <img
            src={image ? urlForImage(image[0])?.url() : null}
            alt={name}
            width="250"
            height="250"
            className="product-image"
          />
          <p className="product-name"> {name} </p>
          <p className="product-price">
            {" "}
            {price.toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}{" "}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
