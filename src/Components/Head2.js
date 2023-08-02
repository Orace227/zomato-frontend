import React from "react";

export default function Head2() {
  return (
    <>
      <div className=" mt-10 overflow-hidden flex flex-col items-center justify-center ">
        <div className=" mt-10 pl-4 pr-14 ">
          <p className="text-4xl font-semibold tracking-wider 	">Collections</p>
          <p className="text-xl pt-3 text-justify">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Ahmedabad, based on trends
            <a className="pl-10 text-red-500 hover:text-red-800" href="/">
              All Collections in Ahmedabad &rarr;
            </a>
          </p>

          <div className="flex justify-center flex-col md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden">
              <img
                src="https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1675250239.jpg?output-format=webp"
                alt=""
                className="w-full h-full object-cover inline-block"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 w-full flex justify-between p-4 text-white">
                <div>
                  <p className="inline-block">7 Picturesque Cafes</p>
                </div>
                <div>
                  <p className="inline-block">6 Places</p>
                </div>
              </div>
            </div>

            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden">
              <img
                src="https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg?output-format=webp"
                alt=""
                className="w-full h-full object-cover inline-block"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 w-full flex justify-between p-4 text-white">
                <div>
                  <p className="inline-block">Winner of Zomato Resta...</p>
                </div>
                <div>
                  <p className="inline-block">8 Places</p>
                </div>
              </div>
            </div>

            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden">
              <img
                src="https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1675250022.jpg?output-format=webp"
                alt=""
                className="w-full h-full object-cover inline-block"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 w-full flex justify-between p-4 text-white">
                <div>
                  <p className="inline-block">Newly Opened...</p>
                </div>
                <div>
                  <p className="inline-block">10 Places</p>
                </div>
              </div>
            </div>

            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden">
              <img
                src="https://b.zmtcdn.com/data/collections/038023025a7859881a3fa3b3b1c93416_1675250152.jpg?output-format=webp"
                alt=""
                className="w-full h-full object-cover inline-block"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 w-full flex justify-between p-4 text-white">
                <div>
                  <p className="inline-block">7 Great Buffets</p>
                </div>
                <div>
                  <p className="inline-block">6 Places</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
