import React, { useContext, useState } from "react";
import { loginContext } from "../contexts/loginContext";
import SearchBar from "./SearchBar";

export default function Navbar_ahm() {
  const [location, setLocation] = useState("Sola");
  const { setclickLogin, setclickSignup } = useContext(loginContext);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-2 items-center">
        <div className="relative">
          <img
            className="inline-block w-[150px] invert "
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            alt="zomato"
          />
        </div>
        <SearchBar height="0" />
        <div>
          <nav className=" md:relative md:left-3 lg:ml-20">
            <ul className="flex flex-row gap-3 text-lg text-gray-500 ">
              <li
                className="cursor-pointer p-1"
                onClick={() => {
                  setclickLogin(true);
                }}
              >
                Log in
              </li>
              <li
                className="cursor-pointer p-1"
                onClick={() => {
                  setclickSignup(true);
                }}
              >
                Sign up
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
