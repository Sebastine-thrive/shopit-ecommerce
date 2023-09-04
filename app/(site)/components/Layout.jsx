import React from "react";
import { Footer, Navbar, Provider } from ".";

const Layout = ({ children }) => {
  return (
    <div className="layout bg-[#e0e8d1]">
      <header className=" ">
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer className=" max-w-[100vw] w-full h-full bottom-0 ">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
