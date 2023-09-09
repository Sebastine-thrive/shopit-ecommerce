import Link from "next/link";
import React from "react";
import { Product, FooterBanner, HeroBanner } from "./components";

import { Suspense } from "react";
import {
  getProducts,
  getBannerData,
  getElectronicsProducts,
  getBestSellingProducts,
  getClothingProducts,
} from "./utils/Utils";
import Loading from "./components/LoadingComponent";
import "./../globals.css";
import Carousel from "./components/Carousel";
import HeroBannerCarousel from "./components/HeroBannerCarousel";


export default async function Home() {
  const bestSellingProducts = await getBestSellingProducts();
  const products = await getProducts();
  const bannerContent = await getBannerData();
  const electronics = await getElectronicsProducts();
  const clothing = await getClothingProducts();

  return (
    <div className="">
      <HeroBannerCarousel heroBanner={bannerContent ? bannerContent : null} />
      <div>
        <div className="products-heading my-6">
          <h2> Best Selling Products</h2>
        </div>
        <Carousel products={bestSellingProducts} />
      </div>
       
      <div>
        <div className="products-heading my-6">
          <h2> Electronics and gadgets</h2>
        </div>
        <Carousel products={electronics} />
      </div>

      <div>
        <div className="products-heading my-6">
          <h2> Fashion and accessories</h2>
        </div>
        <Carousel products={clothing} />
      </div>

      {/* <Suspense fallback={<Loading />}>
        <div className="products-container">
          {products?.map((product) => (
            <Product key={product?._id} product={product} />
          ))}
        </div>
      </Suspense> */}

      <FooterBanner />
    </div>
  );
}
