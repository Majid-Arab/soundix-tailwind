"use client";
import React, { useState } from "react";
import Image from "next/image";
import Rating from "./rating";
import Button from "./button";
import ProductCount from "./productCount";
import headphone from "../../../public/headphone.png";
import { ProductProp } from "@/app/type";
import Carousel from "./carousel";
import Card from "./card";

const defaultProduct: ProductProp = {
  id: 1,
  src: headphone,
  alt: "Product1 1",
  title: "Original Bests Solo Pro",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem odio ullam officia eveniet nesciunt minima laboriosam.",
  price: 333.35,
  rating: 0,
  count: 1,
};

function ProductDetail() {
  const [ProductProp, setProductDetail] = useState<ProductProp>(defaultProduct);
  if (!ProductProp) return null;

  return (
    <div className="w-auto ">
      <div className="w-auto m-2 flex flex-col lg:flex-row items-center justify-center gap-5 p-4 rounded-2xl shadow-2xl">
        <div className="w-40 md:w-auto px-5">
          <Image
            src={ProductProp.src}
            alt={ProductProp.alt}
            width={200}
            height={200}
            className="object-cover"
          />
        </div>

        <div className="w-full lg:w-2/3 flex flex-col lg:items-start">
          <h2 className="text-center md:text-start font-bold text-lg md:text-2xl lg:text-2xl capitalize py-2">
            {ProductProp.title}
          </h2>

          <Rating />

          <p className="py-4 text-sm md:text-md lg:text-md">
            {ProductProp.description}
          </p>

          <p className="text-sm md:text-xl py-0 md:py-3 text-[#00D4BC] lg:text-xl">
            Price ${ProductProp.price}
          </p>

          <div className="flex justify-between items-center gap-5 w-full">
            <span className="flex flex-col items-start text-sm md:text-xl md:flex-row md:items-center gap-1 md:gap-3  font-semibold py-2 lg:text-xl">
              Color
              <div className="flex gap-3">
                <button className="w-3 h-3 rounded-full bg-[#037979] md:w-4 md:h-4 lg:w-6 lg:h-6"></button>
                <button className="w-3 h-3 rounded-full bg-[#191dff] md:w-4 md:h-4 lg:w-6 lg:h-6"></button>
                <button className="w-3 h-3 rounded-full bg-[#2bff18] md:w-4 md:h-4 lg:w-6 lg:h-6"></button>
                <button className="w-3 h-3 rounded-full bg-[#fa1313] md:w-4 md:h-4 lg:w-6 lg:h-6"></button>
              </div>
            </span>
            <ProductCount productId={ProductProp.id} />
          </div>

          <Button product={ProductProp} />
        </div>
      </div>
      <Carousel setSelectedProduct={setProductDetail} />
      <Card />
    </div>
  );
}

export default ProductDetail;
