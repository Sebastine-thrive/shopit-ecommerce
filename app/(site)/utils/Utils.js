import { client } from "@/sanity/lib/client";
// import getStripe from "@/app/utils/getStripe";
import { toast, Toaster } from "react-hot-toast";
import getStripe from "./getStripe";


export async function getProducts() {
  const productQuery = `*[_type == "product"]`;
  const productData = await client.fetch(productQuery);
  if (!productData) {
    throw new Error("No product found");
  }
  return productData;
}

export async function getBestSellingProducts() {
  const productQuery = `*[_type == "product" &&  bestselling == true]`;
  const productData = await client.fetch(productQuery);
  if (!productData) {
    throw new Error("No product found");
  }
  return productData;
}


export async function getBannerData() {
  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  if (!bannerData) {
    throw new Error("No banner data found");
  }
  return bannerData;
}


export async function getElectronicsProducts() {
  const productQuery = `*[_type == "product" && category == "electronics"]`;
  const productData = await client.fetch(productQuery);
  if (!productData) {
    throw new Error("No product found");
  }
  return productData;
}


export async function getClothingProducts() {
  const productQuery = `*[_type == "product" && category == "clothing"]`;
  const productData = await client.fetch(productQuery);
  if (!productData) {
    throw new Error("No product found");
  }
  return productData;
}

 export const handleCheckout = async (cartItems) => {
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