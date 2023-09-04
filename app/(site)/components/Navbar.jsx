"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from ".";
import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import logo from "./../../../public/logo/shopit-logo.png";
import "./../../globals.css";



const Navbar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();

  return (
    <div className="navbar-container bg-[#535357]">
      <p className="logo ">
        {" "}
        <Link href="/">
          <Image src={logo} width={100} height={100} alt="logo image" />
        </Link>{" "}
      </p>

      <button
        className="cart-icon"
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
      {showCart ? <Cart /> : null}
    </div>
  );
};

export default Navbar;
