import React from "react";
import Navbar_ahm from "./Navbar_ahm";
import Options from "./Options";
import Slider from "./Slider";
import Slider_2 from "./Slider_2";
import Login from "./Login";
import Signup from "./Signup";
import DeliveryDining from "./DeliveryDining";
import Footer from "./Footer";
import { LoginContextProvider } from "../contexts/loginContext";
import { DropdownItemContextProvider } from "../contexts/DropdownItemContext";
import Filter from "./Filter";

export default function Abd() {
  return (
    <>
      <LoginContextProvider>
        <Navbar_ahm />
        <Login />
        <Signup />
      </LoginContextProvider>
      <DeliveryDining />
      <Filter />
      <Slider />
      <Slider_2 />
      <Options />
      <DropdownItemContextProvider>
        <Footer />
      </DropdownItemContextProvider>
    </>
  );
}
