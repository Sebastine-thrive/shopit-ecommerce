"use client";
// import { useStateContext } from "@/app/context/StateContext";
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
        <div className="product-in-cart flex">
          {" "}
          <p className="py-[10px]"> This product is in the cart</p>
          <p
            className="go-to-cart ml-2 text-red-500 flex items-center cursor-pointer"
            onClick={() => setShowCart(true)}
          >
            Go to Cart{" "}
            <span className="text-red-500">
              {" "}
              <BiChevronsRight />{" "}
            </span>{" "}
          </p>
        </div>
      ) : (
        <div>
          <button
            type="button"
            className="add-to-cart"
            onClick={() => onAdd(product, qty)}
            disabled={isProductInCart(slug, cartItems)}
          >
            Add to Cart
          </button>

          <button type="button" className="buy-now ml-8" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCartAndBuy;
