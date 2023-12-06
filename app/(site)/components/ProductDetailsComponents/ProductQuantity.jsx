"use client";
import React from "react";
import { useStateContext } from "../../context/StateContext";
import QuantityComponent from "../QuantityComponent";
import "./../../../globals.css";


const ProductQuantity = ({ slug }) => {
  const { cartItems } = useStateContext();

  function isProductInCart(productSlug, cartitems) {
    for (const product of cartitems) {
      if (product?.slug?.current === productSlug) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      {!isProductInCart(slug, cartItems) ? (
        <div className="quantity mt-4">
          <h3 className="font-semibold"> Quantity:</h3>
          <QuantityComponent />
        </div>
      ) : null}
    </>
  );
};

export default ProductQuantity;
