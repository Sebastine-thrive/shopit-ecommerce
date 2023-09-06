import React from "react";
import ContinueShopping from "./CartComponents/ContinueShopping";
import CartQuantity from "./CartComponents/CartQuantity";
import CartProducts from "./CartComponents/CartProducts";
import "../../globals.css";
import CartWrapper from "./CartComponents/CartWrapper";
import CartCheckout from "./CartComponents/CartCheckout";
import { toast } from "react-hot-toast";
import getStripe from "../utils/getStripe";

const Cart = () => {


  const handleCheckout = async (cartItems) => {
    const stripe = await getStripe();
    // console.log(cartItems);

    const response = await fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();
    console.log(data);
    toast.loading("Redirecting...Please wait");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartWrapper>
      <div className="cart-container mb-4">
        {/* button component showing  the cart quantity. uses usecontext -client component */}
        <CartQuantity />

        {/* Encourage shopping if no item in cart */}
        <ContinueShopping />

        {/* Cart product quantity display */}
        <CartProducts />

        {/* Cart Checkout */}
        <div className="mt-8">
          <CartCheckout
          handleCheckout={handleCheckout}
          />
        </div>
      </div>
    </CartWrapper>
  );
};

export default Cart;
