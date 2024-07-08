import React from "react";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import Slide1 from "../../../public/headphone.png";
import Slide2 from "../../../public/headphone1.png";

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

const cardData = [
  {
    title: "Popular top 10 brands",
    description: "5,600+ Orders & Reviews",
  },
  {
    title: "Newest Seller",
    description: "5,600+ Orders & Reviews",
  },
];

function Card() {
  return (
    <div className="flex flex-col gap-5 p-4 pb-20 xl:px-0">
      <div className="flex gap-3">
        <span className="text-3xl font-bold text-[#016173] xl:text-2xl">
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
      <div className="flex justify-center gap-8 xl:gap-4">
        {cardData.map((card, index) => (
          <div key={index} className="flex justify-between items-center gap-6 xl:gap-0 xl:grow h-40 shadow-xl p-8 rounded-2xl bg-white">
            <div className="flex items-center space-x-[-10px] relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex -space-x-4 rtl:space-x-reverse"
                >
                  <Image
                    className="w-10 h-10 xl:w-8 xl:h-8 rounded-full "
                    src={slide.src}
                    alt={slide.alt}
                  /> 
                </div>
              ))}
            </div>
            <div className="border-l-2 border-black h-full mx-5"></div>
            <div className="flex flex-col gap-4 ">
              <h2 className="font-bold text-lg xl:text-sm">
                {card.title}
              </h2>
              <span className="text-gray-600 xl:text-sm">
                {card.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
