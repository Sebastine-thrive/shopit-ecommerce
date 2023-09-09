"use client";
// import { useStateContext } from "@/app/context/StateContext";
import React from "react";
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
        <p className="py-[10px]"> This product is in the cart</p>
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
