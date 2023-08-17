import React, { useContext, useState } from "react";
import { loginContext } from "../contexts/loginContext";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProfileDropdown(props) {
  const { setClickEditProfile } = useContext(loginContext);
  const [hamburgur, setHamBurgur] = useState(false);
  const [dropdownInformation, setdropdownInformation] = useState(false);
  const { username, loggedUser } = useContext(UserContext);

  return (
    <>
      <li className=" flex flex-row gap-2 my-1 cursor-pointer p-1">
        <div className=" flex items-center relative -top-2 text-lg md:border-3  p-[5px] px-[13px] text-white rounded-full bg-red-500">
          {loggedUser.username.charAt(0).toUpperCase()}
        </div>
        <div>
          <button
            id="dropdownInformationButton"
            data-dropdown-toggle="dropdownInformation"
            className={`${
              props.color == "1" ? "text-white" : ""
            } text-black  font-medium rounded-lg text-sm text-center flex items-center `}
            type="button"
            onClick={() => {
              dropdownInformation
                ? setdropdownInformation(false)
                : setdropdownInformation(true);
            }}
          >
            {loggedUser.username.charAt(0).toUpperCase()}
            {loggedUser.username.slice(1)}
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
            } bg-white absolute text-black rounded-lg shadow w-40 `}
          >
            <div className="px-4 py-3 text-sm text-gray-900">
              <div>
                {loggedUser.username.charAt(0).toUpperCase()}
                {loggedUser.username.slice(1)}
              </div>
              <div className="font-medium truncate">{loggedUser.email}</div>
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
                <a href="/" className="block px-4 py-2 hover:bg-gray-100  ">
                  Notification
                </a>
              </li>
              <li>
                <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                  Bookmarks
                </a>
              </li>
              <li>
                <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                  Network
                </a>
              </li>
              {props.color !== "1" && (
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setClickEditProfile(true);
                      setHamBurgur(false);
                    }}
                  >
                    Edit Your Profile
                  </a>
                </li>
              )}
            </ul>
            <hr />
            <div className="py-2">
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                onClick={(e) => {
                  e.preventDefault();
                  axios.get("/logout", { withCredentials: true }).then(() => {
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
      </li>
    </>
  );
}
