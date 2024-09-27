import React, { useState, useEffect } from "react";
import signInImage1 from "../../assets/svg/Art.svg";
import signInImage2 from "../../assets/svg/Art.svg";
import signInImage3 from "../../assets/svg/Art.svg";

const ImageCarousel = () => {
  const images = [
    {
      src: signInImage1,
      title: "Welcome to our shop",
      subtitle: "Purchase imported shoes",
    },
    {
      src: signInImage2,
      title: "Sign in to explore",
      subtitle: "Personalized offers for you",
    },
    {
      src: signInImage3,
      title: "Your career, our mission",
      subtitle: "Tailored job suggestions",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval); // Clean up interval on component unmount
    };
  }, [images.length]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {/* Image */}
      <div className="flex justify-center items-center">
        <img
          src={images[currentIndex].src}
          alt="Carousel"
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>

      {/* Two Text Lines under the image */}
      <div className="mt-4 text-center">
        {/* Title */}
        <p className="text-white text-2xl font-semibold">
          {images[currentIndex].title}
        </p>
        {/* Subtitle */}
        <p className="text-white text-lg font-normal mt-1">
          {images[currentIndex].subtitle}
        </p>
      </div>

      {/* Styled Dots under the text */}
      <div className="flex space-x-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`relative p-2 rounded-full ${
              index === currentIndex ? "bg-gray-500" : "bg-purple-300"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-purple-300"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
