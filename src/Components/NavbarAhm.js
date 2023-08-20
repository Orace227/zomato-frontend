import React, { useContext, useState } from "react";
import { loginContext } from "../contexts/loginContext";
import SearchBar from "./SearchBar";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Category from "./Category";
import { DropdownItemContext } from "../contexts/DropdownItemContext";
import ProfileDropdown from "./ProfileDropdown";

export default function NavbarAhm(props) {
  const { setclickLogin, setclickSignup } = useContext(loginContext);
  const { hamburgur, setHamBurgur } = useContext(DropdownItemContext);

  const [dropdownInformation, setdropdownInformation] = useState(false);
  const { username, loggedUser } = useContext(UserContext);

  return (
    <>
      <div className=" flex flex-col lg:flex-row   justify-center gap-4 mt-2 items-center">
        {props.isOrder && (
          <div className=" relative -left-[145px] top-8 sm:hidden hover:cursor-pointer ">
            <svg
              onClick={() => {
                setHamBurgur(true);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        )}

        <div className="relative">
          <Link to="/">
            <img
              className="inline-block w-[150px] invert "
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              alt="zomato"
              onClick={() => {
                document.title = "Zomato | India";
              }}
            />
          </Link>
        </div>

        <SearchBar w="10" />
        <div>
          <nav>
            <ul className="md:flex gap-7 p-2 mt-[5px] ">
              {username && <ProfileDropdown color="1" />}
              {!username && (
                <ul className="md:flex gap-7">
                  <li
                    className="cursor-pointer p-1 md:hover:scale-125 hover:transition-all delay-100"
                    onClick={() => {
                      setclickLogin(true);
                      setclickSignup(false);
                      setHamBurgur(false);
                    }}
                  >
                    Log in
                  </li>
                  <li
                    className="cursor-pointer p-1 md:hover:scale-125 hover:transition-all delay-100"
                    onClick={() => {
                      setclickSignup(true);
                      setclickLogin(false);
                      setHamBurgur(false);
                    }}
                  >
                    Sign up
                  </li>
                </ul>
              )}
            </ul>
          </nav>
        </div>
        <div className={`${hamburgur ? "sidebar1" : "hidden"}`}>
          <div>
            <div className="md:hidden inline-block relative left-[245px] p-3  hover:cursor-pointer">
              <svg
                onClick={() => {
                  setHamBurgur(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <Category />
          </div>
        </div>
      </div>
    </>
  );
}
