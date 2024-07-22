import { Layout } from "./components";
import { StateContext } from "./context/StateContext";
import "./../globals.css";


export const metadata = {
  title: "ShopIt",
  description: "Shop and buy genuine products with ease at fair prices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StateContext>
          <Layout>{children}</Layout>
        </StateContext>
      </body>
    </html>
  );
}
