import Carousel from "react-multi-carousel";
import Slide1 from "../assets/Slide1.png";
import Slide2 from "../assets/Slide2.png";
import { commentsData, responsive, responsive2 } from "../data/data";
import { useEffect, useState } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Slide1, Slide2];

  const handleNavDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleAutoPlay = () => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIdex) => (prevIdex + 1) % images.length);
    }, 1000);

    return () => clearInterval(intervalId);
  };

//   useEffect(() => {
//     const intervalId = handleAutoPlay();
//     // return () => clearInterval(intervalId);
//   });

  return (
    <section className="overflow-hidden relative w-full">
      <div
        className="flex items-center transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img className="w-full object-cover" src={image} alt="" key={index} />
        ))}
      </div>

      <div className="flex justify-center items-center absolute bottom-0 left-0 right-0">
        {images.map((_, index) => (
          <div
            className={`nav-dot w-3 h-3 bg-white rounded-full my-0 mx-1 cursor-pointer ${
              index === currentIndex ? "active" : ""
            }`}
                onClick={() => handleNavDotClick(index)}
                key={index}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
