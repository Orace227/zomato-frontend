import React, { useContext, useState } from "react";
import { loginContext } from "../contexts/loginContext";

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
        <div className="flex justify-center">
          <div className="w-[320px] sm:w-[400px]  md:w-[380px] lg:w-[610px] flex justify-center bg-white border rounded-md shadow-md">
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
                    className=" relative -left-1 w-[200px] sm:w-[135px] lg:w-[270px] h-12 p-2 text-sm rounded-md outline-none"
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
