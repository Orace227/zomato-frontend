import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="border rounded-md mb-4">
        <div
          className="flex justify-between items-center px-4 py-2 cursor-pointer h-16 text-xl"
          onClick={toggleAccordion}
        >
          <h3 className="text-gray-500">{title}</h3>
          <svg
            className={`w-5 h-5 ${isOpen ? "transform rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        {isOpen && <div className="px-4 py-2 bg-white">{content}</div>}
      </div>
    </>
  );
};

const CityGrid = () => {
  const cities = [
    "Delhi",
    "NCR",
    "Kolkata",
    "Mumbai",
    "Bengaluru",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Lucknow",
    "Kochi",
    "Jaipur",
    "Ahmedabad",
    "Chandigarh",
    "Goa",
    "Indore",
    "Gangtok",
    "Nashik",
    "Ooty",
    "Shimla",
    "Ludhiana",
    "Guwahati",
    "Amritsar",
    "Kanpur",
    "Allahabad",
    "Aurangabad",
    "Bhopal",
    "Ranchi",
    "Visakhapatnam",
    "Bhubaneswar",
    "Coimbatore",
    "Mangalore",
    "Vadodara",
    "Nagpur",
    "Agra",
    "Dehradun",
    "Mysore",
    "Puducherry",
    "Surat",
    "Varanasi",
    "Patna",
    "Udaipur",
    "Srinagar",
    "Khajuraho",
    "Neemrana",
    "Cuttack",
    "Trivandrum",
    "Haridwar",
    "Leh",
    "Pushkar",
    "Rajkot",
    "Madurai",
    "Kozhikode",
    "Alappuzha",
    "Thrissur",
    "Manipal",
    "Vijayawada",
    "Jodhpur",
    "Kota",
    "Ajmer",
    "Mussoorie",
    "Rishikesh",
    "Jalandhar",
    "Jammu",
    "Manali",
    "Dharamshala",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {cities.map((city, index) => (
        <div key={index} className="p-4 text-center">
          {city}
        </div>
      ))}
    </div>
  );
};

const Appp = () => {
  return (
    <div className="flex justify-center container-md">
      <div className="w-[300px] overflow-hidden md:w-[1200px] ">
        <h2 className="text-2xl font-semibold mt-16">
          Explore options near me
        </h2>
        <div className="pt-4 md:pt-[50px] w-full  text-gray-500 text-[17px]">
          <AccordionItem
            title="Popular cuisines near me"
            content="Bakery food near me • Beverages food near me • Biryani food near me • Burger food near me • Chinese food near me • Coffee food near me • Continental food near me • Desserts food near me • Gujarati food near me • Ice Cream food near me • Italian food near me • Mughlai food near me • North Indian food near me • Pasta food near me • Pizza food near me • Sandwich food near me • Shake food near me • Sichuan food near me • South Indian food near me • Street food near me"
          />
        </div>
        <div className="mb-4 pt-4 md:pt-[10px] w-full  text-gray-500 text-[17px]">
          <AccordionItem
            title="Popular restaurant types near me"
            content="Bakeries near me • Beverage Shops near me • Bhojanalya near me • Cafés near me • Casual Dining near me • Dessert Parlors near me • Dhabas near me • Fine Dining near me • Food Courts near me • Food Trucks near me • Kiosks near me • Lounges near me • Paan Shop near me • Quick Bites near me • Sweet Shops near me"
          />
        </div>
        <div className="mb-4 pt-4 md:pt-[10px] w-full  text-gray-500 text-[17px]">
          <AccordionItem
            title="Top Restaurant Chains"
            content="Bikanervala • BurgerKing • BurgerSinghDunkin • DonutsKFC"
          />
        </div>
        <div className="mb-4 pt-4 md:pt-[10px] w-full  text-gray-500 text-[17px]">
          <AccordionItem title="Cities We Deliver To" content={<CityGrid />} />
        </div>
      </div>
    </div>
  );
};

export default Appp;
