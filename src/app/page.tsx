import React from "react";
import Image from "next/image";
import Product from "../../public/headphone.png";
import {
  IconArrowNarrowRight,
  IconHeartFilled,
  IconMinus,
  IconPlus,
  IconPointFilled,
} from "@tabler/icons-react";
import Rating from "@/components/rating";
import Slide from "../../public/avatar.png";
import Slide1 from "../../public/headphone.png";
import Slide2 from "../../public/headphone1.png";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify- items-center gap-5 h-[400px] w-[1000px] p-4 rounded-2xl shadow-2xl">
        <div className="px-5 ">
          <span className="">
            <Image src={Product} alt="" width={600} height={500} />
          </span>
        </div>
        <div>
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

          <span className="text-2xl py-3  text-[#00D4BC]">Price $ 359.90</span>
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
              className="relative text-2xl rounded-xl p-3 text-[#047979]  border-2 border-[#047979] hover:bg-[#047979] hover:text-white "
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

      <div
        id="controls-carousel"
        className="relative w-full"
        data-carousel="static"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              src={Slide}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <Image
              src={Slide}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              src={Slide1}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              src={Slide2}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              src={Slide}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Home;
