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
                className="max-h-[220px] max-w-[170px] ml-[9px] md:ml-[90px]  rounded-3xl"
              />
              <p className="text-[21px] font-semibold  mt-[30px] text-center md:ml-[100px] w-40">
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
      src: "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625165036.png",
      caption: "McDonald's",
    },
    {
      src: "https://b.zmtcdn.com/data/brand_creatives/logos/1b51d0bca33e149302056def63fb5fa3_1536924805.png?output-format=webp",
      caption: "La Pino's Pizza",
    },
    {
      src: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520829.png?output-format=webp",
      caption: "Subway",
    },
    {
      src: "https://b.zmtcdn.com/data/brand_creatives/logos/246cce69e468341e27e835f5bb3a535b_1568093471.png?output-format=webp",
      caption: "Jay Bhavani Vadapav",
    },
    {
      src: "https://b.zmtcdn.com/data/brand_creatives/logos/407045cc3b0e1959542a25912cd99d31_1673932014.png?output-format=webp",
      caption: "Hocco Eatery",
    },
    {
      src: "https://b.zmtcdn.com/data/brand_creatives/logos/e6e910553f67822ba525dbe9f515a700_1671005129.png?output-format=webp",
      caption: "La Milano Pizza",
    },
    {
      src: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187636.png?output-format=webp",
      caption: "Burger King",
    },
    {
      src: "https://b.zmtcdn.com/data/brand_creatives/logos/03599494c6aa23782f85b9dc127548d8_1605092896.png?output-format=webp",
      caption: "Gwalia Sweets & Fast Food",
    },
    {
      src: "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1583218253.png?output-format=webp",
      caption: "Domino's Pizza",
    },
    {
      src: "https://b.zmtcdn.com/data/brand_creatives/logos/64f933acfd78553d4e7e723defdfcf76_1568093266.png?output-format=webp",
      caption: "Shakti- The Sandwich Shop",
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
