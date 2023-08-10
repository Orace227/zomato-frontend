import React, { useState } from "react";

export default function DeliveryDining() {
  const [color, setColor] = useState(false);
  const [color1, setColor1] = useState(false);
  return (
    <>
      <div className=" sm:flex sm:flex-row sm:justify-center md:flex md:flex-row gap-4 md:justify-start md:ml-[290px] ">
        {/* delivery section */}
        <div
          className="flex flex-col justify-center items-center hover:cursor-pointer"
          onMouseEnter={() => {
            setColor1(true);
          }}
          onMouseLeave={() => {
            setColor1(false);
          }}
        >
          <div className="flex flex-row justify-center items-center mt-3">
            <div
              className={`border p-3 inline-block rounded-full 
              ${color1 ? "bg-yellow-100" : ""}`}
            >
              <img
                className="w-10 h-10 "
                src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
                alt="bike"
              />
            </div>
            <div className="ml-2 text-2xl">
              <p className={`${color1 ? " text-red-600" : ""}`}>Delivery</p>
            </div>
          </div>
          <div
            className={`border-b-[3px] rounded-full w-[200px] mt-2
             ${color1 ? "border-red-500" : ""}  transition-all delay-100`}
          ></div>
        </div>

        {/* Dining out section */}
        <div
          className="flex flex-col justify-center items-center hover:cursor-pointer"
          onMouseEnter={() => {
            setColor(true);
          }}
          onMouseLeave={() => {
            setColor(false);
          }}
        >
          <div className="flex flex-row justify-center items-center mt-3">
            <div
              className={`border p-3 inline-block rounded-full 
              ${color ? "bg-blue-100" : ""}`}
            >
              <img
                className="w-10 h-10 transition-all delay-100"
                src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                alt="bike"
              />
            </div>
            <div className="ml-2 text-2xl">
              <p className={`${color ? "text-red-600" : ""}`}>Dining Out</p>
            </div>
          </div>
          <div
            className={`border-b-[3px] rounded-full w-[220px] mt-2
            ${color ? "border-red-500" : ""}  transition-all delay-100 `}
          ></div>
        </div>
      </div>
    </>
  );
}
