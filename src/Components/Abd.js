import React from "react";
import NabarAhm from "./NavbarAhm";
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
import Card from "./Card";

export default function Abd() {
  document.title = "Ahmedabad | Zomato";
  return (
    <>
      <LoginContextProvider>
        <NabarAhm />
        <Login />
        <Signup />
      </LoginContextProvider>
      <DeliveryDining />
      <Filter />
      <Slider />
      <Slider_2 />
      <Card />
      <Options />
      <DropdownItemContextProvider>
        <Footer />
      </DropdownItemContextProvider>
    </>
  );
}
