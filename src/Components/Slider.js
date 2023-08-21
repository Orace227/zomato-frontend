import React, { useState, useEffect } from "react";

const NextIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
};

const PreviousIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
};

const ImageSlider = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);
  const [prevStartIndex, setPrevStartIndex] = useState(null);
  const [scaleValue, setScaleValue] = useState(0);

  useEffect(() => {
    function updateVisibleImages() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setVisibleImages(4);
      } else if (screenWidth >= 768) {
        setVisibleImages(2);
      } else if (screenWidth >= 320) {
        setVisibleImages(1);
      }
    }

    updateVisibleImages();

    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  const handleNext = () => {
    setPrevStartIndex(startIndex);
    setScaleValue(0); // Reset scale when changing image
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, images.length - visibleImages)
    );
  };

  const handlePrev = () => {
    setPrevStartIndex(startIndex);
    setScaleValue(0); // Reset scale when changing image
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scaleValue < 100) {
        setScaleValue((prevScale) => Math.min(prevScale + 5, 100)); // Increase scale by 5, max 100
      }
    }, 1); // Interval every 20ms

    return () => clearInterval(interval);
  }, [scaleValue]);

  return (
    <div className="flex align-center justify-center mt-5">
      <button
        className="text-5xl transition-transform transform hover:scale-110 focus:outline-none"
        onClick={handlePrev}
        disabled={startIndex === 0}
      >
        <PreviousIcon className="w-6 h-6" />
      </button>
      <div className="flex overflow-hidden">
        {images
          .slice(startIndex, startIndex + visibleImages)
          .map((image, index) => (
            <div
              key={index}
              className={`flex flex-col items-center transition-all duration-500 ${
                startIndex > prevStartIndex ? "slide-in" : "slide-out"
              }`}
              style={{
                transition: `transform ${scaleValue * 0.01}s ease`, // Scale transition
                transform: `scale(${scaleValue * 0.01})`, // Apply scale
              }}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="max-h-[220px] max-w-[170px] m-[10px] ml-[12px] md:ml-[90px] rounded-full transition-transform transform hover:scale-110"
              />
              <p className="text-[21px] font-semibold ml-[px] md:ml-[60px]">
                {image.caption}
              </p>
            </div>
          ))}
      </div>
      <button
        className="text-5xl md:ml-12 transition-transform transform hover:scale-110 focus:outline-none"
        onClick={handleNext}
        disabled={startIndex + visibleImages >= images.length}
      >
        <NextIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

const App = () => {
  const images = [
    {
      src: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
      caption: "Thali",
    },
    {
      src: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
      caption: "Biryani",
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      caption: "Pizza",
    },
    {
      src: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      caption: "Burger",
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
      caption: "Sandwich",
    },
    {
      src: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
      caption: "Cake",
    },
    {
      src: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      caption: "Chicken",
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
      caption: "Fried rice",
    },
    {
      src: "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
      caption: "Idli",
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
      caption: "North Indian",
    },
    {
      src: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
      caption: "Rolls",
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
      caption: "Dosa",
    },
  ];

  return (
    <div className="mt-9 bg-gray-50 h-[350px]">
      <h1 className="text-3xl ml-16 font-semibold">
        Inspiration for your first order
      </h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default App;
