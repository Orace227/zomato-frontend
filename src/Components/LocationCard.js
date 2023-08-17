import React from "react";

export default function LocationCard() {
  return (
    <>
    <div className="flex justify-around">

      <div className="hidden mt-5 rounded-lg border-1 shadow-2xl w-[370px] h-[430px]  lg:flex lg:flex-col lg:absolute lg:right-14 lg:top-[300px] xl:right-[220px]">
        <div className="mt-[20px] ml-[20px]">
          <div className="text-xl">Call</div>
          <div>
            <div className="text-red-300 ">
              <p>+919974987138</p>
            </div>
            <div className="text-red-300">
              <p>+919974058503</p>
            </div>
          </div>
        </div>

        <div className="mt-[10px] ml-[20px]">
          <div className="text-xl">
            <p>Direction</p>
          </div>
          <div className="w-[330px]">
            <img
              src="https://maps.zomato.com/php/staticmap?center=23.0538628210,72.5590518862&maptype=zomato&markers=23.0538628210,72.5590518862,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250"
              alt=""
            />
          </div>
        </div>

        <div className="ml-[20px]">
          <div className="text-xl">
            <p>6, Near Vishwesh Tower, Naranpura, Ahmedabad</p>
          </div>
          <div className="flex mt-[20px]">
            <div className="cursor-pointer border-1 border-gray-400 text-[14px] h-[40px] rounded-lg flex items-center w-[80px] pl-[12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#9C9C9C"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 iRDDBk "
              >
                <title>copy</title>
                <path d="M18.52 6.56c-0.040-0.080-0.1-0.16-0.16-0.22l-5.72-5.72c-0.060-0.060-0.16-0.12-0.26-0.14v0c-0.060-0.040-0.14-0.060-0.24-0.060v0h-4.28c-1.18 0-2.14 0.96-2.14 2.14v0 12.14c0 1.18 0.96 2.14 2.14 2.14v0h8.56c1.2 0 2.16-0.96 2.16-2.14v0-7.86c0 0 0 0 0 0 0-0.1-0.020-0.2-0.060-0.28v0zM12.86 2.86l3.28 3.26h-3.040c-0.14 0-0.24-0.1-0.24-0.22v0zM16.42 15.42h-8.56c-0.4 0-0.72-0.32-0.72-0.72v-12.14c0-0.4 0.32-0.72 0.72-0.72h3.56v4.060c0.020 0.92 0.76 1.66 1.68 1.66h4.040v7.14c0 0.4-0.32 0.72-0.7 0.72h-0.020zM12.86 18.28c0 0.38-0.32 0.7-0.72 0.7h-8.56c-0.4 0-0.72-0.32-0.72-0.7v-12.16c0-0.38 0.32-0.7 0.72-0.7h1.18v-1.44h-1.18c-1.2 0-2.16 0.96-2.16 2.14v0 12.16c0 1.18 0.96 2.14 2.16 2.14v0h8.56c1.18 0 2.14-0.96 2.14-2.14v0-0.48h-1.42z"></path>
              </svg>
              <p className="pl-1">Copy</p>
            </div>
            <div className="pl-2">
              <div className="cursor-pointer border-1 border-gray-400 text-[14px] h-[40px] rounded-lg flex items-center w-[100px] pl-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#EF4F5F"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 iRDDBk"
                >
                  <title>direction</title>
                  <path d="M19.2 8.44l-7.22-7.22c-0.52-0.48-1.2-0.8-1.98-0.8s-1.46 0.32-1.98 0.8v0l-7.2 7.22c-0.52 0.5-0.82 1.2-0.82 1.98s0.3 1.46 0.82 1.98l7.2 7.2c0.5 0.52 1.2 0.82 1.98 0.82s1.48-0.3 1.98-0.82l7.22-7.2c0.5-0.52 0.8-1.22 0.8-1.98s-0.3-1.48-0.8-1.98v0zM14.54 9.64l-2.34 2.32c-0.040 0.040-0.080 0.060-0.12 0.060-0.1 0-0.18-0.080-0.18-0.18 0 0 0 0 0 0v0-1.66h-3.56c-0.4 0-0.72 0.32-0.72 0.72v2.38c0 0.26-0.22 0.46-0.48 0.46v0h-0.48c-0.26 0-0.46-0.2-0.46-0.46v0-2.38c0-1.2 0.96-2.16 2.14-2.16v0h3.56v-1.66c0 0 0 0 0 0 0-0.1 0.080-0.18 0.18-0.18 0.040 0 0.080 0.020 0.12 0.060v0l2.34 2.34c0.040 0.040 0.080 0.1 0.080 0.16s-0.040 0.14-0.080 0.18v0z"></path>
                </svg>
                <p className="pl-1">Direction</p>
              </div>
            </div>
          </div>
            <div className="mt-[17px] cursor-pointer text-red-600 text-[14px]">
              <p>See all 45 La Pino'z Pizza outlets in Ahmedabad &rarr;</p>
            </div>
        </div>
      </div>
    </div>

    </>
  );
}
