import React from "react";
import { FaqWrapper } from "./components";
import {
  getBannerData,
  getElectronicsProducts,
  getBestSellingProducts,
  getClothingProducts,
} from "./utils/Utils";
import "./../globals.css";
import Carousel from "./components/Carousel";
import HeroBannerCarousel from "./components/HeroBannerCarousel";
import HeroContent from "./components/HeroContent/HeroContent";

export default async function Home() {
  const bestSellingProducts = await getBestSellingProducts();
  const bannerContent = await getBannerData();
  const electronics = await getElectronicsProducts();
  const clothing = await getClothingProducts();

  return (
    <div className="overflow-hidden bg-[#e0e8d1]">
      {/* <HeroBannerCarousel heroBanner={bannerContent ? bannerContent : null} /> */}

      <div className="flex justify-cente bg-transparent">
        <HeroContent heroBannerArray={bannerContent ? bannerContent : null} />
      </div>

      <div className="best-selling-products rounded-t-md py-4 bg-white">
        <div className="product-wrap ">
          <div className="products-heading my-6 ">
            <h2> Best Selling Products</h2>
          </div>
          <Carousel products={bestSellingProducts} />
        </div>
      </div>

      <div className="electronic-products bg-[#e0e8d1] rounded-t-md py-4">
        <div className="products-heading my-6">
          <h2> Electronics and gadgets</h2>
        </div>
        <Carousel products={electronics} />
      </div>

      <div className="fasion-products  rounded-t-md py-4 bg-white">
        <div className="product-wrap">
          <div className="products-heading my-6">
            <h2> Fashion and accessories</h2>
          </div>
          <Carousel products={clothing} />
        </div>
      </div>
      <div className="flex justify-center bg-[#e0e8d1]">
        <FaqWrapper />
      </div>
    </div>
  );
}
