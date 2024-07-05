import React, { useState } from "react";
import Image from "next/image"
import Product from "../../../public/headphone.png";
import Slide1 from "../../../public/headphone.png";
import Slide2 from "../../../public/headphone1.png";
import { IconStarFilled, IconPlus, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const slides = [
  {
    src: Slide2,
    alt: "Slide1 1",
    title: "original bests solo pro",
    price: 333.35,
    rating: 0,
  },
  {
    src: Slide1,
    alt: "Slide 1",
    title: "original bests solo pro",
    price: 333.35,
    rating: 0,
  },
  {
    src: Slide2,
    alt: "Slide 1",
    title: "original bests solo pro",
    price: 333.35,
    rating: 0,
  },
  {
    src: Slide1,
    alt: "Slide 1",
    title: "original bests solo pro",
    price: 333.35,
    rating: 0,
  },
];

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative overflow-hidden p-4">
      <div
        className="flex gap-6 transition-transform duration-700"
        style={{
          width: `calc(100% * ${slides.length / 3.5})`,
          transform: `translateX(-${(100 / slides.length) * activeSlide}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center gap-6 p-5 flex-shrink-0 bg-white rounded-2xl shadow-2xl"
            style={{
              width: `calc(100% / 4.5)`,
            }}
          >
            <Image
              src={slide.src}
              className="w-40 h-40 object-contain"
              alt={slide.alt}
            />
            <div>
              <div className="font-bold capitalize">{slide.title}</div>
              <div className="text-sm font-medium py-1">
                Price ${slide.price}
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-start text-[#00E0C6] gap-1 pt-2">
                  <IconStarFilled color="#00E0C6" size={20} /> {slide.rating}
                </span>
                <div className="bg-[#009393] relative rounded-full p-1 text-white font-semibold">
                  <IconPlus stroke={2} color="white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-gray shadow-lg  group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <IconChevronLeft
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            stroke={3}
          />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-gray shadow-lg  group-hover:bg-white dark:group-hover:bg-gray-400/60">
          <IconChevronRight
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            stroke={3}
          />

          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
