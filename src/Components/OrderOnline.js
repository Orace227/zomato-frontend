import React from "react";
import Category from "./Category";
import Products from "./Products";

export default function OrderOnline() {
  return (
    <>
      <div className="container-md md:w-[1000px]">
        <hr className="mt-3 " />
        <div className="flex flex-col sm:flex sm:flex-row gap-3">
          <div className=" hidden sm:block border-r-2 py-3 px-3 w-[290px]">
            <Category />
          </div>
          <Products />
        </div>
      </div>
    </>
  );
}
