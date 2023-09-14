import { Layout } from "./components";
import { StateContext } from "./context/StateContext";
import "./../globals.css";
import Head from "next/head";

export const metadata = {
  title: "ShopIt",
  description: "Shop and buy genuine products with ease at fair prices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {" "}
        <link
          href="https://fonts.cdnfonts.com/css/gilroy-bold"
          rel="stylesheet"
        />{" "}
      </Head>
      <body>
        <StateContext>
          <Layout>{children}</Layout>
        </StateContext>
      </body>
    </html>
  );
}
