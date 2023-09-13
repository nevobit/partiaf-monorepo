import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Nav from "./Layout/Nav";
import Principal from "./Layout/Principal";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Principal>{children}</Principal>
    </>
  );
};

export default Layout;
