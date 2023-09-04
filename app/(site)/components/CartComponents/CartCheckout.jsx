"use client";
// import { useStateContext } from "@/app/context/StateContext";
import React from "react";
// import getStripe from "@/app/utils/getStripe";
import { toast, Toaster } from "react-hot-toast";
// import { handleCheckout } from "@/app/utils/Utils";
import "./../../../globals.css";
import { useStateContext } from "../../context/StateContext";


const CartCheckout = ({handleCheckout}) => {
  const { totalPrice, cartItems } = useStateContext();


  // const handleCheckout = async () => {
  //   const stripe = await getStripe();
  //   // console.log(cartItems);

  //   const response = await fetch("/api/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(cartItems),
  //   });

  //   if (response.statusCode === 500) return;

  //   const data = await response.json();
  //   console.log(data);
  //   toast.loading("Redirecting...Please wait");

  //   stripe.redirectToCheckout({ sessionId: data.id });
  // };

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
            })}</h3>
          </div>
          <div className="btn-container">
            <button className="btn" type="button" onClick={() => handleCheckout(cartItems)}>
              Pay with stripe
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CartCheckout;
