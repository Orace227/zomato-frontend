import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SearchBar(props) {
  const { location, setLocation, setCordinets } = useContext(UserContext);

  async function success(pos) {
    const lat = await pos.coords.latitude;
    const lng = await pos.coords.longitude;
    await setCordinets({ x: lat, y: lng });
    // console.log(pos.coords);
    const userLocation = await axios(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
    );
    // console.log(userLocation.data);
    setLocation(userLocation.data.display_name);
    toast.success("We get your location!!");
  }

  function error(err) {
    switch (err.code) {
      case err.PERMISSION_DENIED:
        toast.error("User denied the request for Geolocation.");
        break;
      case err.POSITION_UNAVAILABLE:
        toast.error("Location information is unavailable.");
        break;
      case err.TIMEOUT:
        toast.error("The request to get user location timed out.");
        break;
      case err.UNKNOWN_ERROR:
        toast.error("An unknown error occurred.");
        break;
    }
  }
  function getLocation() {
    const options = {
      enableHighAccuracy: true,
      accuracy: 5,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <>
      <div className="flex justify-center">
        <div
          className={`flex flex-col items-center w-[330px] relative rounded-md ${
            props.bottom == 20 ? "mb-20" : ""
          } bg-white border sm:flex sm:flex-row sm:w-[510px] md:w-[600px] lg:w-[500px] ${
            props.len == "20" ? "lg:w-[600px]" : ""
          } `}
        >
          <div className="flex gap-2 p-2 justify-center  text-black">
            <div className="truncate w-[250px] ml-2"> {location}</div>
            <div>
              <svg
                onClick={() => {
                  getLocation();
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="red"
                className="w-6 h-6  hover:cursor-pointer"
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
          </div>
          <div className="border-1 sm:border-gray-300 sm:h-[26px] sm:mr-2"></div>
          <div className="flex gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="gray"
                className="w-5 h-5 mt-[13px]"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <form action="#">
                <input
                  id="search"
                  className={` text-black relative -left-1 w-[240px] sm:w-[135px] md:w-[240px] lg:w-[150px] ${
                    props.len == "20" ? "lg:w-[255px]" : ""
                  } h-12 p-2 text-sm rounded-md outline-none`}
                  maxLength={15}
                  onClick={() => {
                    let search = document.getElementById("search");
                    search.select();
                  }}
                  type="text"
                  name="search"
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
