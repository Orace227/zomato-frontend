import React from "react";
import Footer from "./Footer";
import Tabs from "./Tabs";
import NavbarAhm from "./NavbarAhm";
export default function CardPage(props) {
  return (
    <>
      <NavbarAhm isOrder="true" />

      <Tabs />
      {props.component}
      <Footer />
    </>
  );
}
