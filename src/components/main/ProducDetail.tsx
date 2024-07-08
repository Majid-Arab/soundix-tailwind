import { IconMinus, IconPlus, IconHeartFilled } from "@tabler/icons-react";
import React from "react";
import Image from "next/image";
import Product from "../../../public/headphone.png";
import Rating from "./rating";
import Button from "./button";
import ProductCount from "./productCount";

function ProducDetail() {
  return (
    // <div className="flex justify-between items-center gap-5 h-[400px] lg:w-[500px] md:w-[500px] md:flex-col md:h-auto p-4 rounded-2xl shadow-2xl md:mt-4">
    <div className="flex flex-col justify-center items-center gap-5 p-4 w-[400px] rounded-2xl shadow-2xl h-auto md:w-[500px] lg:w-[650px] lg:h-[400px] lg:flex-row">
      <div className="px-5 w-60">
        <span>
          <Image src={Product} alt="" width={500} height={500} />
        </span>
        {/* </div> */}
      </div>

      <div className="flex-1">
        <h2 className="font-bold text-2xl capitalize py-2 xl:text-xl">
          Bests Studio 3 Wireless headphone
        </h2>

        <Rating />

        <p className="py-4 xl:text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem odio ullam officia eveniet nesciunt minima laboriosam
        </p>

        <span className="text-2xl py-3 text-[#00D4BC] xl:text-xl">
          Price $ 359.90
        </span>

        <div className="flex justify-between">
          <span className="flex items-center gap-3 text-2xl font-semibold py-2 xl:text-xl">
            Color
            <span className="w-6 h-6 rounded-full bg-[#047979] xl:w-5  xl:h-5"></span>
            <span className="w-6 h-6 rounded-full bg-[#191dff] xl:w-5  xl:h-5"></span>
            <span className="w-6 h-6 rounded-full bg-[#2bff18] xl:w-5  xl:h-5"></span>
            <span className="w-6 h-6 rounded-full bg-[#fa1313] xl:w-5  xl:h-5"></span>
          </span>
          <ProductCount />
        </div>

        <Button />
      </div>
    </div>
  );
}

export default ProducDetail;
