import React from "react";
import Navbar_ahm from "./Navbar_ahm";
import Slider from "./Slider";
import Slider_2 from "./Slider_2";
import { LoginContextProvider } from "../contexts/loginContext";
import Login from "./Login";
import Signup from "./Signup";

export default function Abd() {
  return (
    <>
      <LoginContextProvider>
        <Navbar_ahm />
        <Login />
        <Signup />
      </LoginContextProvider>
      <Slider />
      <Slider_2 />
    </>
  );
}
