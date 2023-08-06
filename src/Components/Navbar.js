import React, { useContext, useState } from "react";
import { loginContext } from "../contexts/loginContext";
import SearchBar from "./SearchBar";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

export default function Navbar() {
  const [hamburgur, setHamBurgur] = useState(false);
  const [dropdownInformation, setdropdownInformation] = useState(false);
  const { setclickLogin, setclickSignup } = useContext(loginContext);
  const { username } = useContext(UserContext);

  return (
    <>
      {/* hamburgur icon */}
      <div className="overflow-hidden back text-white w-full">
        <div className="md:hidden  absolute m-3 hover:cursor-pointer ">
          <svg
            onClick={() => {
              setHamBurgur(true);
              setclickSignup(false);
              setclickLogin(false);
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

        {/* navBar */}
        <div
          className={`md:flex md:justify-evenly md:w-full md:text-center md:m-3 md:text-base ${
            hamburgur ? "absolute sidebar" : "hidden"
          }`}
        >
          <div className="p-3 cursor-pointer md:hover:scale-125 hover:transition-all delay-100">
            <p className="flex flex-row text-sm">
              <span>
                <svg
                  className=" w-6 h-6 flex items-center "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </span>
              get the app
            </p>

            <div className="md:hidden absolute right-3 top-4 hover:cursor-pointer">
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
          </div>
          <nav>
            <ul className="md:flex gap-7 p-2 mt-[5px] ">
              <li className="cursor-pointer p-1 md:hover:scale-125 hover:transition-all delay-100">
                Investor Relations
              </li>
              <li className="cursor-pointer p-1 md:hover:scale-125 hover:transition-all delay-100">
                Add restaurant
              </li>
              {username && (
                <li className=" flex flex-row gap-2 my-1 cursor-pointer p-1">
                  <div className=" flex items-center relative -top-2 text-lg md:border-3  p-[5px] px-[13px]  rounded-full bg-red-500">
                    {username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <button
                      id="dropdownInformationButton"
                      data-dropdown-toggle="dropdownInformation"
                      className=" text-black md:text-white font-medium rounded-lg text-sm text-center flex items-center "
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
                          name@flowbite.com
                        </div>
                      </div>
                      <hr />
                      <ul
                        className="py-2 text-sm text-gray-700 "
                        aria-labelledby="dropdownInformationButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100  "
                          >
                            Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100  "
                          >
                            Notification
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Bookmarks
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Network
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Find Friends
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
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
                            axios.get("/logout").then(() => {
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
        </div>

        <div>
          <div className="flex items-center m-10 flex-col gap-7 ">
            <img
              className=" w-[270px] mt-20"
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              alt="zomato"
            />
            <p className="text-3xl">
              Discover the best food & drinks in Ahmedabad
            </p>
          </div>
          <SearchBar height="7" bottom="20" />
        </div>
      </div>
    </>
  );
}
