import React, { useContext, useState } from "react";
import { loginContext } from "../contexts/loginContext";
export default function Navbar() {
  const [hamburgur, setHamBurgur] = useState(false);
  const { setclickLogin, setclickSignup } = useContext(loginContext);
  const [location, setLocation] = useState("Sola");
  return (
    <>
      {/* hamburgur icon */}
      <div className="overflow-hidden back text-white w-full">
        <div className="md:hidden  absolute m-3 hover:cursor-pointer ">
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
              <li
                className="cursor-pointer p-1 md:hover:scale-125 hover:transition-all delay-100"
                onClick={() => {
                  setclickLogin(true);
                }}
              >
                Log in
              </li>
              <li
                className="cursor-pointer p-1 md:hover:scale-125 hover:transition-all delay-100"
                onClick={() => {
                  setclickSignup(true);
                }}
              >
                Sign up
              </li>
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
          <div className="flex justify-center">
            <div className="w-[320px] relative -top-7 md:w-[410px] lg:w-[600px]  flex justify-center bg-white border rounded-md shadow-md">
              <div className=" ml-[67px] rounded-md text-black flex flex-col sm:flex-row">
                <div className=" text-black flex justify-end">
                  <p className=" mt-[12px] sm:mt-[12px]  relative -left-[60px] ">
                    {location}, Ahmedabad
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="red"
                    className="w-6 h-6 relative -left-10 top-[10px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div className="hidden md:block relative -left-6 md:top-[12px] border-l-2 border-gray-300 h-6"></div>

                <div>
                  <form action="/" className="flex flex-row ">
                    <span className="mt-[14px] relative -left-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="gray"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <input
                      className=" relative -left-1 w-[240px] sm:w-[135px] lg:w-[270px] h-12 p-2 text-sm rounded-md outline-none"
                      maxLength={15}
                      value={location}
                      onChange={(ev) => {
                        setLocation(ev.target.value);
                      }}
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search for restaurant, cuisine or a dish"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
