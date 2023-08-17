import React from "react";
import LocationCard from "./LocationCard";
import { useParams } from "react-router-dom";

export default function Overview() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div className="container-md md:w-[980px]">
        <LocationCard />
        <div>
          <div className="text-2xl font-normal tracking-wider mt-5">
            About this place
          </div>
          <div className="flex flex-col gap-2 items-center sm:flex sm:flex-row ml-4">
            <div className=" mt-3 border flex justify-start items-center gap-3  w-[270px] md:w-[270px] p-1 rounded-lg shadow-md">
              <div>
                <img
                  className="w-[50px]"
                  src="https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png"
                  alt="small card img"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-xs text-gray-400">
                  RESTAURANT SAFETY MEASURE
                </div>
                <div className="text-sm">Well Sanitized Kitchen</div>
              </div>
            </div>

            <div className=" mt-3 border flex justify-start items-center gap-3 w-[270px] p-1 rounded-lg shadow-md">
              <div>
                <img
                  className="w-[50px]"
                  src="https://b.zmtcdn.com/data/o2_assets/fa7443fb81df3ff2c54186672599c3db1585754076.png"
                  alt="small card img"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-xs text-gray-400">
                  RESTAURANT SAFETY MEASURE
                </div>
                <div className="text-sm">Rider Hand Wash</div>
              </div>
            </div>

            <div className=" mt-3 border flex justify-start items-center gap-3 w-[270px] p-1 rounded-lg shadow-md">
              <div>
                <img
                  className="w-[50px]"
                  src="https://b.zmtcdn.com/data/o2_assets/8ecc61badb80ea685f0afc71a4d721671585754288.png"
                  alt="small card img"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-xs text-gray-400">
                  RESTAURANT SAFETY MEASURE
                </div>
                <div className="text-sm">Daily Temp. Checks</div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[580px]">
          <div className="text-2xl font-normal tracking-wider mt-4 mb-3">
            Cuisines
          </div>
          <div className="flex gap-2 ml-4 flex-wrap">
            <div className="text-sky-400 font-normal border p-2 rounded-2xl">
              Continental
            </div>
            <div className="text-sky-400 font-normal border p-2 rounded-2xl">
              Oriental
            </div>
            <div className="text-sky-400 font-normal border p-2 rounded-2xl">
              Asian
            </div>
            <div className="text-sky-400 font-normal border p-2 rounded-2xl">
              Healthy Food
            </div>
            <div className="text-sky-400 font-normal border p-2 rounded-2xl">
              Sandwich
            </div>
            <div className="text-sky-400 font-normal border p-2 rounded-2xl">
              Continental
            </div>
            <div className="text-sky-400 font-normal border p-2 rounded-2xl">
              Continental
            </div>
          </div>
        </div>

        <div>
          <div className="text-2xl mt-5 font-normal">
            People Say This Place Is Known For
          </div>
          <div className="text-gray-700 text mt-1 ml-4 ">
            Tamper Proof Packaging, Packing, Meals, Portions, Flavour, Great
            Food
          </div>
        </div>

        <div>
          <div className="text-2xl font-normal tracking-wider mt-5">
            Average Cost
          </div>
          <div className="ml-4 mt-1 text-gray-600 ">
            <div className="text-lg ">₹250 for one order (approx.)</div>
            <div className="text-xs text-gray-400 -mt-1">
              Exclusive of applicable taxes and charges, if any
            </div>
          </div>
        </div>

        <div>
          <div className="text-2xl font-normal tracking-wider mt-5">
            More Info
          </div>
          <div className="flex justify-evenly gap-3 mt-3 w-[320px]">
            <div className=" flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#119199"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 iRDDBk"
                >
                  <path d="M1.5 10C1.5 5.3125 5.3125 1.5 10 1.5C14.6875 1.5 18.5 5.3125 18.5 10C18.5 14.6875 14.6875 18.5 10 18.5C5.3125 18.5 1.5 14.6875 1.5 10ZM0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10ZM13.75 7.25L8.75 12.1875L6.25 9.75C5.9375 9.4375 5.5 9.4375 5.1875 9.75C4.875 10 4.875 10.5 5.1875 10.8125L8.1875 13.8125C8.3125 13.9375 8.5 14.0625 8.75 14.0625C8.9375 14.0625 9.125 14 9.25 13.8125L14.75 8.3125C15.0625 8 15.0625 7.5625 14.75 7.25C14.4375 6.9375 14 6.9375 13.75 7.25Z"></path>
                </svg>
                Breakfast
              </div>

              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#119199"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 iRDDBk"
                >
                  <path d="M1.5 10C1.5 5.3125 5.3125 1.5 10 1.5C14.6875 1.5 18.5 5.3125 18.5 10C18.5 14.6875 14.6875 18.5 10 18.5C5.3125 18.5 1.5 14.6875 1.5 10ZM0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10ZM13.75 7.25L8.75 12.1875L6.25 9.75C5.9375 9.4375 5.5 9.4375 5.1875 9.75C4.875 10 4.875 10.5 5.1875 10.8125L8.1875 13.8125C8.3125 13.9375 8.5 14.0625 8.75 14.0625C8.9375 14.0625 9.125 14 9.25 13.8125L14.75 8.3125C15.0625 8 15.0625 7.5625 14.75 7.25C14.4375 6.9375 14 6.9375 13.75 7.25Z"></path>
                </svg>
                Keto Options
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#119199"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 iRDDBk"
                >
                  <path d="M1.5 10C1.5 5.3125 5.3125 1.5 10 1.5C14.6875 1.5 18.5 5.3125 18.5 10C18.5 14.6875 14.6875 18.5 10 18.5C5.3125 18.5 1.5 14.6875 1.5 10ZM0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10ZM13.75 7.25L8.75 12.1875L6.25 9.75C5.9375 9.4375 5.5 9.4375 5.1875 9.75C4.875 10 4.875 10.5 5.1875 10.8125L8.1875 13.8125C8.3125 13.9375 8.5 14.0625 8.75 14.0625C8.9375 14.0625 9.125 14 9.25 13.8125L14.75 8.3125C15.0625 8 15.0625 7.5625 14.75 7.25C14.4375 6.9375 14 6.9375 13.75 7.25Z"></path>
                </svg>
                Delivery Only
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#EF4F5F"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 iRDDBk"
                >
                  <path d="M1.5 10C1.5 5.3125 5.3125 1.5 10 1.5C14.6875 1.5 18.5 5.3125 18.5 10C18.5 14.6875 14.6875 18.5 10 18.5C5.3125 18.5 1.5 14.6875 1.5 10ZM0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10ZM13.375 6.625C13.0625 6.3125 12.625 6.3125 12.3125 6.625L10 8.9375L7.6875 6.625C7.4375 6.3125 6.9375 6.3125 6.625 6.625C6.3125 6.9375 6.3125 7.375 6.625 7.6875L8.9375 10L6.625 12.3125C6.3125 12.5625 6.3125 13.0625 6.625 13.375C6.75 13.5 6.9375 13.625 7.1875 13.625C7.375 13.625 7.5625 13.5625 7.6875 13.375L10 11.0625L12.3125 13.375C12.4375 13.5 12.625 13.625 12.8125 13.625C13 13.625 13.1875 13.5625 13.375 13.375C13.6875 13.0625 13.6875 12.625 13.375 12.3125L11.0625 10L13.375 7.6875C13.6875 7.375 13.6875 6.9375 13.375 6.625Z"></path>
                </svg>
                No Seating Available
              </div>
            </div>
          </div>
        </div>

        <div className="border mt-5 p-3 rounded-lg bg-gray-200 shadow-md">
          <div className="text-3xl font-semibold ">Are you a food blogger?</div>
          <div className="text-red-500 mt-1 hover:cursor-pointer">
            Add a Zomato spoonback to your blog &rarr;
          </div>
        </div>
        <div>
          <div className="text-2xl font-normal tracking-wider mt-4 mb-3">
            Review Highlights
          </div>
          <div className="flex gap-2 ml-4 flex-wrap">
            <div className=" font-normal border p-2 rounded-2xl">
              Tamper Proof Packaging
            </div>
            <div className=" font-normal border border-gray-400 p-2 rounded-full">
              Packing
            </div>
            <div className=" font-normal border border-gray-400 p-2 rounded-full">
              Meals
            </div>
            <div className=" font-normal border border-gray-400 p-2 rounded-full">
              Portions
            </div>
            <div className=" font-normal border border-gray-400 p-2 rounded-full">
              Flavour
            </div>
            <div className=" font-normal border border-gray-400 p-2 rounded-full">
              Great Food
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
