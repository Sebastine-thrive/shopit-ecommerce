import React from "react";
import Link from "next/link";
import Faq from "./FaqComponents/Faq";

const FooterBanner = ({ footerBanner }) => {
  const { saletime, discount, product, buttonText } = footerBanner;
  return (
    <div className="footer-banner-container">
      <Faq />
    </div>
  );
};

export default FooterBanner;
