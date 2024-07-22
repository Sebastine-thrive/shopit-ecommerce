import { client } from "@/sanity/lib/client";
import ProductDetails from "../../components/ProductDetailsComponents/ProductDetails";
import { getProducts } from "../../utils/Utils";

export async function generateStaticParams() {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);
  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

export async function generateMetadata({ params: { slug } }) {
  return {
    title: "ShopIt e-store",
    description: `{Buy genuine ${slug} with ease at fair prices}`,
  };
}

async function displayOtherProducts(arr, slugValue) {
  return arr.filter((obj) => obj.slug.current !== slugValue);
}


export default async function ProductDetailsPage({ params: { slug } }) {
  const query =
    `*[_type == "product" && slug.current == '${slug}'][0]`;
  
  const product = await client.fetch(query);


  const allProducts = await getProducts();
  const otherProducts = await displayOtherProducts(allProducts, slug);

  return <ProductDetails product={product} products={otherProducts} slug={slug} />;
}
