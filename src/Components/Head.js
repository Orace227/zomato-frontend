import React from "react";
import { Link } from "react-router-dom";

export default function Head() {
  return (
    <>
      <div className=" mt-20 flex justify-around items-center">
        <div className="flex flex-wrap gap-20 items-center justify-around">
          <Link to="/ahmedabad">
            <div
              className="pl-2 pr-2"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow transition-transform hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img
                    className="rounded-t-lg w-full"
                    src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                    alt=""
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div
                  className="p-5"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Order online
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Stay home and order at your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ahmedabad">
            <div
              className="pl-2 pr-2 sm:mt-0"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow transition-transform hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img
                    className="rounded-t-lg w-full"
                    src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                    alt=""
                  />
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
          </Link>
        </div>
      </div>
    </>
  );
}
