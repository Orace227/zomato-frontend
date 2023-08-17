import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Tabs() {
  const [color, setColor] = useState(false);
  const [color1, setColor1] = useState(false);
  const { id } = useParams();
  return (
    <>
      <div className=":flex sm:flex-row sm:justify-center md:flex md:flex-row gap-3  md:justify-start md:ml-[130px] lg:ml-[280px] ">
        {/* Overview section */}
        <div
          className="flex flex-col justify-center items-center hover:cursor-pointer"
          onMouseEnter={() => {
            setColor1(true);
          }}
          onMouseLeave={() => {
            setColor1(false);
          }}
        >
          <Link to={`/ahmedabad/product details/overview/${id}`}>
            <div className="flex flex-row justify-center items-center mt-2">
              <div className="ml-2 w-[200px] text-2xl text-center pb-1 border-hidden hover:border-solid border-b-2 hover:border-b-red-500">
                <p className="">Overview</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Order Online section */}
        <div className="flex flex-col justify-center items-center hover:cursor-pointer">
          <Link to={`/ahmedabad/product details/order online/${id}`}>
            <div className="flex flex-row justify-center items-center mt-2">
              <div className="text-2xl w-[220px] pb-1 border-hidden hover:border-solid border-b-2 hover:border-b-red-500 text-center">
                <p className="">Order Online</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
