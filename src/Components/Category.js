import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DropdownItemContext } from "../contexts/DropdownItemContext";

export default function Category() {
  const { hamburgur, setHamBurgur } = useContext(DropdownItemContext);

  return (
    <>
      <div
        id="category"
        className={`flex flex-col gap-4 justify-center md:justify-start`}
      >
        {/* ACTIVITY */}
        <div className="px-3 w-[290px]">
          <div className="">
            <h1 className="text-gray-400 mb-2 tracking-widest">CATEGORY</h1>

            <ul className="flex flex-col gap-2 relative">
              <li
                className="li"
                onClick={() => {
                  setHamBurgur(false);
                }}
              >
                <a href="#Baked by Nini's">Baked by Nini's (2)</a>
              </li>
              <li
                className="li"
                onClick={() => {
                  setHamBurgur(false);
                }}
              >
                <a href="#Combos">Combos (6)</a>
              </li>
              <li
                className="li"
                onClick={() => {
                  setHamBurgur(false);
                }}
              >
                <a href="#Beverages With Benifits">
                  Beverages With Benifits (6)
                </a>
              </li>
              <li
                className="li"
                onClick={() => {
                  setHamBurgur(false);
                }}
              >
                <Link className=" py-2" id="li" to="/">
                  Shakes & Smoothies (12)
                </Link>
              </li>
              <li
                className="li"
                onClick={() => {
                  setHamBurgur(false);
                }}
              >
                <Link className=" py-2" id="li" to="/">
                  Low Fat Yogurt Smoothies (2)
                </Link>
              </li>
              <li
                className="li"
                onClick={() => {
                  setHamBurgur(false);
                }}
              >
                <Link className=" py-2" id="li" to="/">
                  Fizzies (7)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
