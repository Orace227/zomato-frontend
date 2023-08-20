import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import cards from "../utils/cards";
import axios from "axios";

export default function Card() {
  const [cardsData, setCardsData] = useState([]);
  const GetProducts = async () => {
    try {
      const Products = await axios.post("/GetProducts");
      setCardsData(Products.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <div className="container-md md:container-md flex flex-col sm:grid md:grid sm:grid-cols-2 lg:grid lg:grid-cols-3  justify-around">
      {Array.isArray(cardsData)
        ? cardsData.map((cardData) => (
            <Link
              to={`/ahmedabad/product details/${cardData.id}`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              key={cardData.id}
            >
              <div className=" p-3 rounded-lg  hover:shadow-xl hover:border">
                <div className=" relative">
                  <img
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cardData.cloudinaryImageId}`}
                    alt="card img"
                    className=" sm:w-[700px] sm:h-[300px] md:h-[300px] rounded-lg"
                  />
                  <h1 className="absolute top-1 left-1 w-[140px] text-center text-white text-xs p-2 bg-blue-600 rounded-lg">
                    {cardData.aggregatedDiscountInfoV3?.header
                      ? cardData.aggregatedDiscountInfoV3?.header
                      : " No Offer"}{" "}
                    {cardData.aggregatedDiscountInfoV3?.subHeader}
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <div className=" font-bold  flex justify-between">
                    <div className="truncate w-[280px]">{cardData.name}</div>
                    <div className="flex bg-green-700 text-white px-1 mt-1 rounded-md">
                      {cardData.avgRating}+
                      <svg
                        className="w-3 h-3 text-white  mt-[6px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="-6 4 29 10"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-gray-400 flex justify-between">
                    <div className="">
                      {cardData.locality},{cardData.areaName}
                    </div>
                    <div>{cardData.sla.slaString}</div>
                  </div>
                  <div className="flex justify-end ">{cardData.costForTwo}</div>
                </div>
              </div>
            </Link>
          ))
        : "loading.."}
    </div>
  );
}
