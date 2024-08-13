import React from "react";
import ContinueShopping from "./CartComponents/ContinueShopping";
import CartQuantity from "./CartComponents/CartQuantity";
import CartProducts from "./CartComponents/CartProducts";
import "../../globals.css";
import CartWrapper from "./CartComponents/CartWrapper";
import CartCheckout from "./CartComponents/CartCheckout";

const Cart = () => {
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
          {/* <div className="mt-8"> */}
          <CartCheckout
          // handleCheckout={handleCheckout}
          />
          {/* </div> */}
        </div>
      </CartWrapper>
  );
};

export default Cart;
