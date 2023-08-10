import React from "react";
import Actions from "./Actions";
import NavbarProfile from "./NavbarProfile";
import { LoginContextProvider } from "../contexts/loginContext";
import Login from "./Login";
import Signup from "./Signup";
import { DropdownItemContextProvider } from "../contexts/DropdownItemContext";
import Footer from "./Footer";

export default function ProfilePage(props) {
  document.title = "Profile | Zomato";
  return (
    <>
      <LoginContextProvider>
        <NavbarProfile />
        <Login />
        <Signup />
      </LoginContextProvider>
      <div className="container-sm flex ">
        <div className="hidden md:block">
          <Actions />
        </div>
        {props.component}
      </div>
      <DropdownItemContextProvider>
        <Footer />
      </DropdownItemContextProvider>
    </>
  );
}
