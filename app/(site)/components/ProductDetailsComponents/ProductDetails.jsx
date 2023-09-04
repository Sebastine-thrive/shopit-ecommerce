import React from "react";
import ImageDisplay from "./ImageDisplay";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ProductQuantity from "./ProductQuantity";
import AddToCartAndBuy from "./AddToCartAndBuy";
import Product from "../Product";
// import Product from "@/sanity/product";
import "./../../../globals.css";
import { Toaster } from "react-hot-toast";
import StarRating from "./StarRating";

const ProductDetails = ({ product, products, slug }) => {
  const { image, name, details, price } = product;
  return (
    <div>
      <Toaster position="top-center" />
      {/* Image server component */}
      <div className="product-detail-container">
        <div>
          <ImageDisplay image={image} />
        </div>

        {/* Name and Price server components */}
        <div className="product-detail-desc w-[70vw]">
          <h1 className="font-bold text-xl capitalize">{name}</h1>
          <div className="reviews flex">
            {" "}
            <div className="flex">
              {" "}
              <StarRating />
          
            </div>
          </div>
          <h4 className="font-medium">Details:</h4>
          <p>{details}</p>
          <p className="price">
            {" "}
            {price.toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>

          {/* usecontext-dependent component  quantity component*/}
          <ProductQuantity />
          {/* usecontext-dependent component  add-to-cart component
           */}
          <div className="buttons">
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
              <p> Loading other products... </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
