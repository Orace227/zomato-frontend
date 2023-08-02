import React from "react";

export default function Head() {
  return (
    <>
      <div className=" mt-20 ">
        <div className="flex flex-wrap gap-20 justify-center">
          <div className="pl-2 pr-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-transform hover:scale-105 overflow-hidden">
              <div className="relative">
                <a href="/">
                  <img
                    className="rounded-t-lg w-full"
                    src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                    alt=""
                  />
                </a>
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="p-5">
                <a href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Order online
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Stay home and order at your doorstep.
                </p>
              </div>
            </div>
          </div>

          <div className="pl-2 pr-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:mt-0">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-transform hover:scale-105 overflow-hidden">
              <div className="relative">
                <a href="/">
                  <img
                    className="rounded-t-lg w-full"
                    src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                    alt=""
                  />
                </a>
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="p-5">
                <a href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Dining
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  View the city's favourite dining venues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
