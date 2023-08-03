import React from "react";

export default function Filter() {
  return (
    <>
      <hr className="" />
      <div className="flex flex-row ml-[270px] gap-3 mt-4">
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
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 mt-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}
