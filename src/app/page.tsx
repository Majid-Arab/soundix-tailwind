"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  IconArrowRight,
  IconChevronLeft,
  IconChevronRight,
  IconHeartFilled,
  IconMinus,
  IconPlus,
  IconStarFilled,
} from "@tabler/icons-react"; 
import Rating from "@/components/main/rating";
import Product from "../../public/headphone.png";
import Slide1 from "../../public/headphone.png";
import Slide2 from "../../public/headphone1.png";

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

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex justify-between items-center gap-5 h-[400px] w-[1000px] p-4 rounded-2xl shadow-2xl">
        <div className="px-5 w-1/3">
          <span className="inline-block ">
            <Image src={Product} alt="" width={1000} height={500} />
          </span>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-2xl capitalize py-2">
            Summer headphones from top brands
          </h2>
          <Rating />
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem odio ullam officia eveniet nesciunt minima laboriosam
            quia ipsam reprehenderit autem veritatis, possimus praesentium sit
            totam corrupti modi debitis
          </p>

          <span className="text-2xl py-3 text-[#00D4BC]">Price $ 359.90</span>
          <div className="flex justify-between">
            <span className="flex items-center gap-3 text-2xl font-semibold py-2">
              Color
              <span className="w-6 h-6 rounded-full bg-[#047979]"></span>
              <span className="w-6 h-6 rounded-full bg-[#191dff]"></span>
              <span className="w-6 h-6 rounded-full bg-[#2bff18]"></span>
              <span className="w-6 h-6 rounded-full bg-[#fa1313]"></span>
            </span>
            <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1 text-black font-semibold h-8">
              <span className="bg-white rounded-full text-black">
                <IconMinus stroke={1} />
              </span>
              <span className="px-4 text-xl">1</span>
              <span className="bg-white rounded-full text-black">
                <IconPlus stroke={1} />
              </span>
            </div>
          </div>

          <div className="flex justify-start items-center gap-5 pt-5">
            <button
              type="button"
              className="relative rounded-xl p-3 text-[#047979] hover:text-[#da3535] border-2 border-[#047979] "
            >
              <span className="text-xs">
                <IconHeartFilled stroke={2} className="w-10 h-10" />
              </span>
            </button>
            <button
              type="button"
              className="relative text-2xl rounded-xl p-3 text-[#047979] border-2 border-[#047979] hover:bg-[#047979] hover:text-white "
            >
              Add to cart
            </button>
            <button
              type="button"
              className="relative text-2xl rounded-xl p-3 bg-[#047979] px-8 text-white border-2 border-[#047979] hover:bg-[#415353] "
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-[1000px] overflow-hidden  p-4">
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
              className="flex flex-col justify-between items-center gap-6 p-5 flex-shrink-0 bg-white rounded-2xl shadow-2xl shadow-l- shadow-inner-white shadow-inner-2xl"
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
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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

      <div className="flex flex-col gap-5 w-[1000px]  p-4 pb-20">
        <div className="flex gap-3">
          <span className="text-3xl font-bold text-[#016173]">
            Explore Popular Categories
          </span>
          <button
            type="button"
            className="flex items-center text-black text-sm font-semibold hover:text-[#047979] "
          >
            Sell all
            <span className="text-xs">
              <IconArrowRight stroke={2} />
            </span>
          </button>
        </div>
        <div className="flex justify-center gap-8">
          <div className="flex justify-between items-center gap-6 h-40 shadow-xl p-8 rounded-2xl bg-white">
            <div className="flex items-center space-x-[-10px] relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex -space-x-4 rtl:space-x-reverse"
                >
                  <Image
                    className="w-10 h-10 border-2 rounded-full "
                    src={slide.src}
                    alt={slide.alt}
                  />
                </div>
              ))}
            </div>
            <div className="border-l-2 border-black h-full mx-5"></div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">Popular top 10 brands</h2>
              <span className="text-gray-600">5,600+ Orders & Reviews</span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-6 h-40 shadow-xl p-8 rounded-2xl bg-white">
            <div className="flex items-center space-x-[-10px] relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex -space-x-4 rtl:space-x-reverse"
                >
                  <Image
                    className="w-10 h-10 border-2 rounded-full "
                    src={slide.src}
                    alt={slide.alt}
                  />
                </div>
              ))}
            </div>
            <div className="border-l-2 border-black h-full mx-5"></div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">Newest Seller</h2>
              <span className="text-gray-600">5,600+ Orders & Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
