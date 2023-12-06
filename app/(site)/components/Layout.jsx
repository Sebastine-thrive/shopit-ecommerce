import React from "react";
import { Footer, Navbar, Provider } from ".";

const Layout = ({ children }) => {
  return (
    <div className= "min-h-[100vh] flex flex-col m-0">
      <header className="m-0">
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
