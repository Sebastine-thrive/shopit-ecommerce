import React from "react";
import ImageDisplay from "./ImageDisplay";
import ProductQuantity from "./ProductQuantity";
import AddToCartAndBuy from "./AddToCartAndBuy";
import Product from "../Product";
import "./../../../globals.css";
import { Toaster } from "react-hot-toast";
import StarRating from "./StarRating";

const ProductDetails = ({ product, products, slug }) => {
  const { image, name, details, price } = product;
  return (
    <div>
      <Toaster position="top-center" />
      {/* Image -server component */}
      <div className="product-detail-container">
        <div>
          <ImageDisplay image={image} />
        </div>

        {/* Name and Price- server components */}
        <div className="product-detail-desc w-[100vw]">
          <h1 className="font-bold text-xl capitalize">{name}</h1>
          <div className="reviews flex">
            {" "}
            <div className="flex">
              {" "}
              <StarRating />
            </div>
          </div>

          {/* Product details and price */}
          <div className="mt-8">
            <h4 className="font-semibold ">Details:</h4>
            <p>{details}</p>
            <p className="price">
              {" "}
              {price.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
              })}
            </p>
          </div>

          <div className="mt-8 text-center w-full">
            {/* usecontext-dependent component  quantity component*/}
            <ProductQuantity slug={slug} />
          </div>
          {/* usecontext-dependent component  add-to-cart component
           */}
          <div className="buttons w-full">
            <AddToCartAndBuy product={product} slug={slug} />
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2 className="font-medium">You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products ? (
              products?.map((item) => {
                return <Product key={item._id} product={item} />;
              })
            ) : (
              <p> Loading other products you may like... </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
