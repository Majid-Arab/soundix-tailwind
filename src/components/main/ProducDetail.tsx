import { IconMinus, IconPlus, IconHeartFilled } from "@tabler/icons-react";
import React from "react";
import Image from "next/image";
import Product from "../../../public/headphone.png";
import Rating from "./rating";
import Button from "./button";
import ProductCount from "./productCount";

function ProducDetail() {
  return (
    <div className="flex justify-between items-center gap-5 h-[400px] p-4 rounded-2xl shadow-2xl">
      <div className="px-5 w-60">
        <span>
          <Image src={Product} alt="" width={500} height={500} />
        </span>
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
