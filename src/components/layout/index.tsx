import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <div className="fixed right-0 z-20">
        <Header />
      </div>
      <div className="">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
