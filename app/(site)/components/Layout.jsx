import React from "react";
import { Footer, Navbar, Provider } from ".";

const Layout = ({ children }) => {
  return (
    <div className= "min-h-[100vh] flex flex-col">
      <header className="mt-0">
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer className="mt-auto mb-0 ">
        <Footer />
      </footer>
    </div>

  );
};

export default Layout;
