import React from "react";

export default function Filter() {
  return (
    <>
      <div className="flex flex-row justify-center lg:justify-center lg:-ml-[470px] gap-3 mt-4">
        <button className="btn border-1 border-gray-300 text-gray-400 rounded-md">
          Filters
        </button>
        <button className="btn border-1 border-gray-300 text-gray-400 rounded-md">
          Rating 4.0+
        </button>
        <button className="btn border-1 flex gap-2 border-gray-300 text-gray-400 rounded-md">
          Cuisines{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}
