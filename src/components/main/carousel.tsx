import React, { useState } from "react";
import Image from "next/image";
import Product1 from "../../../public/headphone.png";
import Product2 from "../../../public/headphone1.png";
import {
  IconStarFilled,
  IconPlus,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { ProductProp } from "@/app/type";
import useCartStore from "@/store/cart";

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
    count: 1,
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
    count: 1,
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
    count: 1,
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
    count: 1,
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
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="relative overflow-hidden p-4 w-full">
      <div
        className="flex gap-6 transition-transform duration-700 overflow-x-hidden"
        style={{
          transform: `translateX(-${(100 / slides.length) * activeSlide}%)`,
        }}
      >
        {slides.map((slide) => (
          <a
            key={slide.id}
            className="flex flex-col justify-between items-center gap-6 p-5 xl:gap-0 xl:p-3 flex-shrink-0 bg-white rounded-2xl shadow-2xl w-4/5 md:w-2/5 lg:w-1/4 xl:w-1/5"
            onClick={() => handleProductClick(slide)}
          >
            <div className="w-40 h-40">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={160}
                height={160}
                className="object-contain w-full h-full py-2"
              />
            </div>
            <div className="w-full text-start px-3">
              <div className="font-bold capitalize text-sm text-wrap">
                {slide.title}
              </div>
              <div className="text-sm text-gray-500 font-medium py-1 ">
                Price ${slide.price}
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-start text-[#00E0C6] gap-1 pt-2">
                  <IconStarFilled color="#00E0C6" size={18} /> {slide.rating}
                </span>
                <button
                  onClick={() => addToCart(slide)}
                  className="bg-[#009393] relative rounded-full p-1 text-white font-semibold focus:border-2 focus:border-[#009393]"
                >
                  <IconPlus stroke={2} color="white" size={18} />
                </button>
              </div>
            </div>
          </a>
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
