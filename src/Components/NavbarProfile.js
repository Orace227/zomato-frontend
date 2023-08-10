import React, { useContext, useState } from "react";
import { loginContext } from "../contexts/loginContext";
import SearchBar from "./SearchBar";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Actions from "./Actions";

export default function NavbarProfile() {
  const { setclickLogin, setclickSignup } = useContext(loginContext);
  const [hamburgur, setHamBurgur] = useState(false);
  const [dropdownInformation, setdropdownInformation] = useState(false);
  const { username, loggedUser } = useContext(UserContext);

  return (
    <>
      <div className=" flex flex-col md:flex-row justify-center md:gap-4 items-center">
        <div className=" relative -left-[145px] top-8 md:hidden hover:cursor-pointer ">
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
        <Link to="/">
          <img
            className="inline-block w-[150px] mt-2 mb-3 invert "
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            alt="zomato"
            onClick={() => {
              document.title = "Zomato | India";
            }}
          />
        </Link>
        <SearchBar height="0" />
        <nav>
          <ul className="md:flex gap-7 p-2 mt-[5px] ">
            {username && (
              <li className=" flex flex-row gap-2 my-1 cursor-pointer p-1">
                <div className=" flex items-center relative -top-2 text-lg md:border-3  p-[5px] px-[13px] text-white rounded-full bg-red-500">
                  {username.charAt(0).toUpperCase()}
                </div>
                <div>
                  <button
                    id="dropdownInformationButton"
                    data-dropdown-toggle="dropdownInformation"
                    className=" text-black  font-medium rounded-lg text-sm text-center flex items-center "
                    type="button"
                    onClick={() => {
                      dropdownInformation
                        ? setdropdownInformation(false)
                        : setdropdownInformation(true);
                    }}
                  >
                    {username.charAt(0).toUpperCase()}
                    {username.slice(1)}
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="dropdownInformation"
                    className={`z-10 ${
                      dropdownInformation ? "" : "hidden"
                    } bg-white absolute text-black rounded-lg shadow w-44`}
                  >
                    <div className="px-4 py-3 text-sm text-gray-900">
                      <div>
                        {username.charAt(0).toUpperCase()}
                        {username.slice(1)}
                      </div>
                      <div className="font-medium truncate">
                        {loggedUser.email}
                      </div>
                    </div>
                    <hr />
                    <ul
                      className="py-2 text-sm text-gray-700 "
                      aria-labelledby="dropdownInformationButton"
                    >
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => {
                            document.title = "Profile | Zomato";
                          }}
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block px-4 py-2 hover:bg-gray-100  "
                        >
                          Notification
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Bookmarks
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Network
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Find Friends
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>
                    <hr />
                    <div className="py-2">
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        onClick={(e) => {
                          e.preventDefault();
                          axios
                            .get("/logout", { withCredentials: true })
                            .then(() => {
                              localStorage.removeItem("loggedUser");
                              window.location.reload();
                            });
                        }}
                      >
                        Log out
                      </a>
                    </div>
                  </div>
                </div>
                <div></div>
              </li>
            )}
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
        <div className={`${hamburgur ? "sidebar1" : "hidden"}`}>
          <div>
            <div className="md:hidden inline-block relative left-[250px] p-3  hover:cursor-pointer">
              <svg
                onClick={() => {
                  setHamBurgur(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentcolor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <Actions />
          </div>
        </div>
      </div>
    </>
  );
}
