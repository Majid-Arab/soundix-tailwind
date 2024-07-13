import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Product1 from "../../../public/headphone.png";
import Product2 from "../../../public/headphone1.png";
import {
  IconStarFilled,
  IconPlus,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

export type ProductProp = {
  id: number;
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
  price: number;
  rating: number;
};

const slides: ProductProp[] = [
  {
    id: 1,
    src: Product2,
    alt: "Product 1",
    title: "Wireless Headphones",
    description:
      "Experience high-quality sound with our wireless headphones. Enjoy your music without the hassle of wires.",
    price: 199.99,
    rating: 4.5,
  },
  {
    id: 2,
    src: Product1,
    alt: "Product 2",
    title: "Noise Cancelling Headphones",
    description:
      "Block out the noise and immerse yourself in your music with our noise-cancelling headphones.",
    price: 299.99,
    rating: 4.7,
  },
  {
    id: 3,
    src: Product2,
    alt: "Product 3",
    title: "Sports Earbuds",
    description:
      "Perfect for your workout sessions. These sports earbuds are sweat-resistant and provide a secure fit.",
    price: 89.99,
    rating: 4.2,
  },
  {
    id: 4,
    src: Product1,
    alt: "Product 4",
    title: "Over-Ear Headphones",
    description:
      "Comfortable over-ear headphones with exceptional sound quality. Ideal for long listening sessions.",
    price: 249.99,
    rating: 4.6,
  },
];

interface CarouselProps {
  setSelectedProduct: (product: ProductProp) => void;
}

function Carousel({ setSelectedProduct }: CarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleProductClick = (product: ProductProp) => {
    setSelectedProduct(product);
    console.log(product);
  };

  return (
    <div className="relative overflow-hidden p-4 md:w-[500px] lg:w-[1000px]">
      <div
        className="flex gap-6 transition-transform duration-700"
        style={{
          transform: `translateX(-${(100 / slides.length) * activeSlide}%)`,
        }}
      >
        {slides.map((slide) => (
          <button
            key={slide.id}
            className="flex flex-col justify-between items-center gap-6 p-5 xl:gap-0 xl:p-3 flex-shrink-0 bg-white rounded-2xl shadow-2xl w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4"
            onClick={() => handleProductClick(slide)}
          >
            <Image
              src={slide.src}
              className="w-40 h-40 object-contain xl:w-24 "
              alt={slide.alt}
            />
            <div>
              <div className="font-bold capitalize xl:text-xs">
                {slide.title}
              </div>
              <div className="text-sm font-medium py-1 xl:text-xs">
                Price ${slide.price}
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-start text-[#00E0C6] gap-1 pt-2">
                  <IconStarFilled color="#00E0C6" size={18} /> {slide.rating}
                </span>
                <div className="bg-[#009393] relative rounded-full p-1 text-white font-semibold">
                  <IconPlus stroke={2} color="white" size={18} />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-gray shadow-lg group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
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
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-gray shadow-lg group-hover:bg-white dark:group-hover:bg-gray-400/60">
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
