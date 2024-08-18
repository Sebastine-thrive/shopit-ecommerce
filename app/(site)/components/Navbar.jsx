"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from ".";
import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import logo from "./../../../public/logo/shopit.png";
import "./../../globals.css";
import CartQuantity from "./CartComponents/CartQuantity";
import ContinueShopping from "./CartComponents/ContinueShopping";
import CartProducts from "./CartComponents/CartProducts";
import CartCheckout from "./CartComponents/CartCheckout";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  // const cartRef = useRef();

  return (
    <div className="navbar-container bg-[#546e39] max-w-[1920px] w-[100vw] h-auto min-h-[40px] mt-0">
      <p className="logo ">
        {" "}
        <Link href="/">
          <Image src={logo} width={100} height={100} alt="logo image" />
        </Link>{" "}
      </p>

      <button
        className="cart-icon mt-2"
        type="button"
        onClick={() => setShowCart(true)}
      >
        <span className="text-white">
          <AiOutlineShopping />
        </span>
        <span className="cart-item-qty">
          {" "}
          {totalQuantity ? totalQuantity : 0}{" "}
        </span>
      </button>
      
      <div
        className={
          showCart
            ? "fixed right-0 top-0 ease-in duration-1000 p-4 cart-wrapper"
            : "fixed right-[-150%] top-0 p-10 ease-in duration-1000"
        }
      >
        {/* <Cart /> */}

        <div className="cart-container mb-4">
          {/* button component showing  the cart quantity. uses usecontext -client component */}
          <CartQuantity />

          {/* Encourage shopping if no item in cart */}
          <ContinueShopping />

          {/* Cart product quantity display */}
          <CartProducts />

          {/* Cart Checkout */}
          <CartCheckout />
          {/* </div> */}
        </div>
        {/* </CartWrapper> */}
      </div>
      {/* )} */}
    </div>
  );
};

export default Navbar;
