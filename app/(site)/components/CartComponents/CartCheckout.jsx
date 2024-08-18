/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./../../../globals.css";
import { useStateContext } from "../../context/StateContext";
import { usePaystackPayment } from "react-paystack";
import { useRouter } from "next/navigation";


const CartCheckout = () => {
  const {
    totalPrice,
    cartItems,
    setCartItems,
    setTotalPrice,
    setTotalQuantity,
    setShowCart
  } = useStateContext();
  const [payLater, setPaylater] = useState(false);
 const router = useRouter();

  const config = {
    reference: new Date().getTime().toString(),
    email: "orderexample@gmail.com",
    amount: totalPrice * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_e0ba662e63d9fa5b789b7cc1d558a1463ab6701f",
  };

  const onSuccess = () => {
    // Implementation for after success call.
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
    setShowCart(false)
    router.push("/success")
  };

  const onClose = () => {
    setPaylater(true);
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div className="payment-btn-container">
        <button
          className="btn checkout-pay-button"
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Pay
        </button>
      </div>
    );
  };

  return (
    <>
      <Toaster position="top-center" />
      {cartItems.length >= 1 ? (
        <div className="cart-bottom my-4">
          <div className="total font-bold my-0">
            <h3>Subtotal:</h3>
            <h3>
              {totalPrice.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
              })}
            </h3>
          </div>

          <div>
            <PaystackHookExample />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CartCheckout;
