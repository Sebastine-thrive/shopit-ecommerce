import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container  max-w-[1920px] w-[100vw] bg-[#546e39] text-white">
      <p> 2023 ShopIt e-stores. All rights reserved</p>
      <p className="icons">
        <span className="icon">
        <AiFillInstagram />

        </span>
        <span className="icon">
        <AiOutlineTwitter />

        </span>
      </p>
    </div>
  );
};

export default Footer;
