"use client";
import React from "react";
import { BiChevronsRight } from "react-icons/bi";

import "./../../../globals.css";
import { useStateContext } from "../../context/StateContext";

const AddToCartAndBuy = ({ product, slug }) => {
  const { qty, onAdd, setShowCart, cartItems } = useStateContext();

  function isProductInCart(productSlug, cartitems) {
    for (const product of cartitems) {
      if (product?.slug?.current === productSlug) {
        return true;
      }
    }
    return false;
  }

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <>
      {isProductInCart(slug, cartItems) ? (
        <div className="product-in-cart flex ">
          {" "}
          <p> This product is in the cart.</p>
          <div
            className="go-to-cart ml-2 text-red-500 flex text-[16px] items-center cursor-pointer"
            onClick={() => setShowCart(true)}
          >
            <p> View Cart </p>
            <p className=" text-red-500 items-center ">
              {" "}
              <BiChevronsRight />{" "}
            </p>{" "}
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            type="button"
            className="add-to-cart rounded-md"
            // className="add-to-cart"
            onClick={() => onAdd(product, qty)}
          >
            Add to Cart
          </button>

          <button type="button" className="buy-now  rounded-md ml-8" onClick={handleBuyNow}>
          {/* <button type="button" className="buy-now ml-8" onClick={handleBuyNow}> */}
            Buy Now
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCartAndBuy;
