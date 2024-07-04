import { IconArrowNarrowRight, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import Avatar from "../../public/headphone1.png";

function AsideBar() {
  return (
    <div className="flex flex-col">
      <div className="relative h-48 flex justify-between  flex-col gap-2 p-4 m-5 bg-[#41DEDB] text-[#047979] rounded-2xl">
        <h2 className="text-[#016173] font-bold text-2xl capitalize">
          Summer headphones from top brands
        </h2>
        <span className="absolute right-0 bottom-3 rotate-12">
          <Image
            className="h-32 w-32 rounded-full   "
            src={Avatar}
            alt=""
            width={500}
            height={500}
          />
        </span>
        <button
          type="button"
          className="flex items-center pb-3 text-black text-sm font-semibold hover:text-[#047979]"
        >
          Buy it now
          <span className="text-xs">
            <IconArrowNarrowRight stroke={2} />
          </span>
        </button>
      </div>

      <div className="flex justify-between mx-5 mt-10">
        <h2 className="text-3xl text-[#016173]">Daily Deals</h2>
        <button
          type="button"
          className="flex items-center text-black text-lg font-semibold hover:text-[#047979] "
        >
          View all
          <span className="text-xs">
            <IconArrowRight stroke={2} />
          </span>
        </button>
      </div>

      <ul>
        <li>
          <a
            href="#"
            className="relative flex flex-row justify-between py-1 focus:outline-none text-gray-600 hover:text-gray-800 hover:underline  border-l-4 border-transparent pr-6 my-3"
          >
            <div className="flex">
              <span className="inline-flex justify-center items-center ml-5">
                <Image
                  className="h-12 w-12 rounded-full"
                  src={Avatar}
                  alt=""
                  width={500}
                  height={500}
                />
              </span>
              <div className="ml-2">
                <span className="text-sm tracking-wide truncate font-semibold">
                  Beats new Headphone
                </span>
                <p className="text-xs">256 Reviews, 2791 Orders</p>
              </div>
            </div>
            <div className="ml-2">
              <span className="text-sm  font-semibold pr-4">Price $190</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row justify-between py-1 focus:outline-none text-gray-600 hover:text-gray-800 hover:underline  border-l-4 border-transparent pr-6 my-3"
          >
            <div className="flex">
              <span className="inline-flex justify-center items-center ml-5">
                <Image
                  className="h-12 w-12 rounded-full"
                  src={Avatar}
                  alt=""
                  width={500}
                  height={500}
                />
              </span>
              <div className="ml-2">
                <span className="text-sm tracking-wide truncate font-semibold">
                  Beats new Headphone
                </span>
                <p className="text-xs">256 Reviews, 2791 Orders</p>
              </div>
            </div>
            <div className="ml-2">
              <span className="text-sm  font-semibold pr-4">Price $190</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row justify-between py-1 focus:outline-none text-gray-600 hover:text-gray-800 hover:underline  border-l-4 border-transparent pr-6 my-3"
          >
            <div className="flex">
              <span className="inline-flex justify-center items-center ml-5">
                <Image
                  className="h-12 w-12 rounded-full"
                  src={Avatar}
                  alt=""
                  width={500}
                  height={500}
                />
              </span>
              <div className="ml-2">
                <span className="text-sm tracking-wide truncate font-semibold">
                  Beats new Headphone
                </span>
                <p className="text-xs">256 Reviews, 2791 Orders</p>
              </div>
            </div>
            <div className="ml-2">
              <span className="text-sm  font-semibold pr-4">Price $190</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row justify-between py-1 focus:outline-none text-gray-600 hover:text-gray-800 hover:underline  border-l-4 border-transparent pr-6 my-3"
          >
            <div className="flex">
              <span className="inline-flex justify-center items-center ml-5">
                <Image
                  className="h-12 w-12 rounded-full"
                  src={Avatar}
                  alt=""
                  width={500}
                  height={500}
                />
              </span>
              <div className="ml-2">
                <span className="text-sm tracking-wide truncate font-semibold">
                  Beats new Headphone
                </span>
                <p className="text-xs">256 Reviews, 2791 Orders</p>
              </div>
            </div>
            <div className="ml-2">
              <span className="text-sm  font-semibold pr-4">Price $190</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AsideBar;
