import React from "react";
import { Link } from "react-router-dom";

export default function Actions() {
  let style = {
    "background-image":
      "linear-gradient(to right, #ffffff, #f6d5f7, #ffa2cc, #ff6f7f, #eb5012);",
  };
  return (
    <>
      <div className="flex flex-col relative gap-4 justify-center md:justify-start">
        {/* ACTIVITY */}
        <div className="border shadow-md rounded-md py-3  px-3 w-[290px]">
          <div className="">
            <h1 className="text-gray-400 mb-2 tracking-widest">ACTIVITY</h1>
            <ul className="flex flex-col gap-2 relative">
              <li>
                <Link
                  className="px-[100px] li text-start py-2"
                  
                  to="/profile/reviews"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link className="px-[103px] li py-2"  to="/profile/photos">
                  Photos
                </Link>
              </li>
              <li>
                <Link
                  className="px-[95px] li py-2"
                  
                  to="/profile/followers"
                >
                  Followers
                </Link>
              </li>
              <li>
                <Link
                  className="px-[70px] li py-2"
                  
                  to="/profile/recently viewed"
                >
                  Recently Viewed
                </Link>
              </li>
              <li>
                <Link
                  className="px-[88px] li py-2"
                  
                  to="/profile/bookmarks"
                >
                  Bookmarks
                </Link>
              </li>
              <li>
                <Link
                  className="px-[90px] li py-2"
                  
                  to="/profile/blog posts"
                >
                  Blog Posts
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* online ordering */}
        <div className="border shadow-md rounded-md py-3  px-3 w-[290px]">
          <div className="">
            <h1 className="text-gray-400 mb-2 tracking-widest">
              ONLINE ORDERING
            </h1>
            <ul className="flex flex-col relative gap-2 left-2 ">
              <li>
                <Link
                  className="px-[77px] li py-2"
                  
                  to="/profile/order history"
                >
                  Order History
                </Link>
              </li>
              <li>
                <Link
                  className="px-[75px] li py-2"
                  
                  to="/profile/my addresses"
                >
                  My Addresses
                </Link>
              </li>
              <li>
                <Link
                  className="px-[69px] li py-2"
                  
                  to="/profile/favorite orders"
                >
                  Favorite Orders
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
