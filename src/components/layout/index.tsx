import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
