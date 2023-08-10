import React, { useState } from "react";

export default function SearchBar(props) {
  const [location, setLocation] = useState("Sola");

  function success(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    // const accuracy = pos.coords.accuracy; // Accuracy in metres
    console.log(pos);
  }

  function error(err) {
    if (err.code === 1) {
      alert("Please allow geolocation access");
      // Runs if user refuses access
    } else {
      alert("Cannot get current location");
      // Runs if there was a technical problem.
    }
  }
  function getLocation() {
    const options = {
      enableHighAccuracy: true,
      // Get high accuracy reading, if available (default false)
      timeout: 4000,
      // Time to return a position successfully before error (default infinity)
      maximumAge: 0,
      // Milliseconds for which it is acceptable to use cached position (default 0)
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
    // Fires success function immediately and when user position changes
  }
  return (
    <>
      <div className="flex justify-center">
        <div
          className={`w-[320px] relative ${props.bottom == 20 ? "mb-20" : ""} ${
            props.height == 7 ? "-top-7" : ""
          } sm:w-[350px] md:w-[410px] lg:w-[600px]  flex justify-center bg-white border rounded-md shadow-md`}
        >
          <div className=" ml-[67px] rounded-md text-black flex flex-col sm:flex-row">
            <div className=" text-black flex justify-end">
              <p className=" mt-[12px] sm:mt-[12px]  relative -left-[60px] ">
                {location}, Ahmedabad
              </p>
              <svg
                onClick={() => {
                  getLocation();
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="red"
                className="w-6 h-6 relative -left-10 top-[10px] hover:cursor-pointer"
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
    </>
  );
}
