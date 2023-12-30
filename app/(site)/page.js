import React from "react";
import { FooterBanner } from "./components";
import {
  getBannerData,
  getElectronicsProducts,
  getBestSellingProducts,
  getClothingProducts,
} from "./utils/Utils";
import "./../globals.css";
import Carousel from "./components/Carousel";
import HeroBannerCarousel from "./components/HeroBannerCarousel";

export default async function Home() {
  const bestSellingProducts = await getBestSellingProducts();
  const bannerContent = await getBannerData();
  const electronics = await getElectronicsProducts();
  const clothing = await getClothingProducts();

  return (
    <div className="overflow-hidden">
      <HeroBannerCarousel heroBanner={bannerContent ? bannerContent : null} />

      <div className="best-selling-products rounded-t-md py-8">
        <div className="products-heading my-6 ">
          <h2> Best Selling Products</h2>
        </div>
        <Carousel products={bestSellingProducts} />
      </div>

      <div className="electronic-products bg-[#e0e8d1] rounded-t-md	 py-8">
        <div className="products-heading my-6">
          <h2> Electronics and gadgets</h2>
        </div>
        <Carousel products={electronics} />
      </div>

      <div className="fasion-products mb-[4rem] rounded-t-md	  py-8">
        <div className="products-heading my-6">
          <h2> Fashion and accessories</h2>
        </div>
        <Carousel products={clothing} />
      </div>

      <FooterBanner />
    </div>
  );
}
