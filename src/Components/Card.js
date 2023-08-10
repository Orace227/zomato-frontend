import React from "react";

export default function Card() {
  const cardsData = [
    {
      imageSrc:
        "https://b.zmtcdn.com/data/dish_photos/0f8/ab9e3477c1af452fb61c4da6ae99d0f8.jpg",
      discount: "50% OFF up to 100",
      name: "Taco Bell",
      cuisine: "Mexican, Fast Food, Wrap...",
      rating: "3.5",
      price: "₹200 for one",
      time: "28 min",
    },
    {
      imageSrc:
        "https://b.zmtcdn.com/data/dish_photos/ef6/bad6ce25e7d36c07f29c53ce4104bef6.jpg?output-format=webp",
      discount: "80% OFF up to 200",
      name: "La Pino'z Pizza",
      cuisine: "Pizza, Pasta, Italian, Fast F...",
      rating: "4.0",
      price: "₹200 for one",
      time: "20 min",
    },
    {
      imageSrc:
        "https://b.zmtcdn.com/data/dish_photos/b3c/8d366154b96e4fcef801a8d698bb5b3c.png?output-format=webp",
      discount: "20% OFF up to 150",
      name: "McDonald's",
      cuisine: "Burger, Fast Food, Dess...",
      rating: "4.0",
      price: "₹200 for one",
      time: "15 min",
    },
    {
      imageSrc:
        "https://b.zmtcdn.com/data/pictures/6/18749716/09676fcacce6817e673dc19473ff25c8_o2_featured_v2.jpg",
      discount: "60% OFF up to 300",
      name: "Kovallam",
      cuisine: "South Indian, Beverages",
      rating: "4.4",
      price: "₹100 for one",
      time: "20 min",
    },
    {
      imageSrc:
        "https://b.zmtcdn.com/data/dish_photos/ef6/bad6ce25e7d36c07f29c53ce4104bef6.jpg?output-format=webp",
      discount: "80% OFF up to 200",
      name: "La Pino'z Pizza",
      cuisine: "Pizza, Pasta, Italian, Fast F...",
      rating: "4.0",
      price: "₹200 for one",
      time: "20 min",
    },
  ];

  return (
    <div className="container-md md:container-md flex flex-col sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3  justify-around">
      {cardsData.map((cardData, index) => (
        <div className=" p-3 rounded-lg  hover:shadow-xl hover:border  ">
          <div className=" relative">
            <img
              src={cardData.imageSrc}
              alt="card img"
              className="sm:w-[700px] rounded-lg"
            />
            <h1 className="absolute top-1 left-1 w-[120px] text-white text-xs p-2 bg-blue-600 rounded-lg">
              {cardData.discount}
            </h1>
          </div>
          <div className="flex flex-col ">
            <div className=" font-bold  flex justify-between">
              <div className="truncate w-[280px]">{cardData.name}</div>
              <div className="flex bg-green-700 text-white px-1 mt-1 rounded-md">
                4.1
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
              <div className="">{cardData.cuisine}</div>
              <div>{cardData.price}</div>
            </div>
            <div className="flex justify-end ">{cardData.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
