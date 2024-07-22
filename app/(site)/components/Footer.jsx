import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container  max-w-[1920px] w-[100vw] bg-[#546e39] text-white">
      <p> <span>2023 ShopIt e-stores </span>  | <span>   All rights reserved </span>
</p>
      <p className="footer-icons">
        <span className="footer-icon">
        <AiFillInstagram />

        </span>
        <span className="footer-icon">
        <AiOutlineTwitter />

        </span>
      </p>
    </div>
  );
};

export default Footer;
