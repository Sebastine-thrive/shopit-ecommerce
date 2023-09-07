"use client";
import React from "react";
import { Toaster } from "react-hot-toast";
import "./../../../globals.css";
import { useStateContext } from "../../context/StateContext";

const CartCheckout = ({handleCheckout}) => {
  const { totalPrice, cartItems } = useStateContext();


  return (
    <>
      <Toaster position="top-center" />
      {cartItems.length >= 1 ? (
        <div className="cart-bottom my-4">
          <div className="total">
            <h3>Subtotal:</h3>
            <h3>
              {totalPrice.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
              })}
            </h3>
          </div>
          <div className="btn-container">
            <button className="btn" type="button" 
            onClick={() => handleCheckout(cartItems)}>
              Pay with stripe
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CartCheckout;
