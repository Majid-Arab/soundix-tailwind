import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import Avatar from "../../public/headphone1.png";

function AsideBar() {
  return (
    <div>
      <div className="relative flex justify-around flex-col gap-2 p-4 m-5 bg-[#41DEDB] text-[#047979] rounded-2xl">
        <h2 className="text-[#016173] font-bold text-2xl">
          Summer headphones from top brands
        </h2>
        <span className="absolute right-0 bottom-0">
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
          className="flex items-center text-black text-sm font-semibold hover:text-[#047979] "
        >
          Buy it now{" "}
          <span className="text-xs">
            <IconArrowNarrowRight stroke={2} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default AsideBar;
