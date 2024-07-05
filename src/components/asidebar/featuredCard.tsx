import React from "react";
import Image from "next/image"
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Headphone from "../../../public/headphone1.png"

function FeaturedCard() {
  return (
    <div className="relative h-48 flex justify-between  flex-col gap-2 p-4 m-5 bg-[#41DEDB] text-[#047979] rounded-2xl">
      <h2 className="text-[#016173] font-bold text-2xl capitalize">
        Summer Headphones from top brands
      </h2>
      <span className="absolute right-0 bottom-3 rotate-12">
        <Image
          className="h-32 w-32 rounded-full   "
          src={Headphone}
          alt="Featured Product"
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
  );
}

export default FeaturedCard;
