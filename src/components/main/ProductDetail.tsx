import React from "react";
import Image from "next/image";
import Product from "../../../public/headphone.png";
import Rating from "./rating";
import Button from "./button";
import ProductCount from "./productCount";

function ProductDetail() {
  return (
    <div className="flex flex-col items-center md:w-[500px] lg:w-[1000px] lg:flex-row  lg:items-start justify-center gap-5 p-4 w-full max-w-screen-lg rounded-2xl shadow-2xl h-auto">
      <div className="max-w-[200px] md:max-w-[300px] lg:w-full px-5">
        <Image
          src={Product}
          alt="Product Image"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>

      <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start">
        <h2 className="font-bold text-lg md:text-2xl lg:text-2xl  capitalize py-2">
          Best Studio 3 Wireless Headphone
        </h2>

        <Rating />

        <p className="py-4 text-sm md:text-md lg:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem odio ullam officia eveniet nesciunt minima laboriosam.
        </p>

        <p className="text-lg py-3 text-[#00D4BC] md:text-2xl md:text-center lg:text-2xl">
          Price $359.90
        </p>

        <div className="flex  lg:flex-row justify-between items-center lg:items-start gap-5 w-full">
          <span className="flex items-center gap-3 text-lg font-semibold py-2 lg:text-2xl">
            Color
            <button className="w-4 h-4 rounded-full bg-[#047979] lg:w-6 lg:h-6"></button>
            <button className="w-4 h-4 rounded-full bg-[#191dff] lg:w-6 lg:h-6"></button>
            <button className="w-4 h-4 rounded-full bg-[#2bff18] lg:w-6 lg:h-6"></button>
            <button className="w-4 h-4 rounded-full bg-[#fa1313] lg:w-6 lg:h-6"></button>
          </span>
          <ProductCount />
        </div>

        <Button />
      </div>
    </div>
  );
}

export default ProductDetail;
