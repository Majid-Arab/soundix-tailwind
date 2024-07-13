import React from "react";
import Image from "next/image";
import Rating from "./rating";
import Button from "./button";
import ProductCount from "./productCount";
import { ProductProp } from "./carousel";

interface ProductDetailProps {
  product: ProductProp | null;
}

function ProductDetail({ product }: ProductDetailProps) {
  if (!product) return null;

  return (
    <div className="flex flex-col items-center md:w-[500px] lg:w-[1000px] lg:flex-row lg:items-start justify-center gap-5 p-4 w-full max-w-screen-lg rounded-2xl shadow-2xl h-auto">
      <div className="max-w-[200px] md:max-w-[300px] lg:w-full px-5">
        <Image
          src={product.src}
          alt={product.alt}
          width={500}
          height={500}
          className="object-cover"
        />
      </div>

      <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start">
        <h2 className="font-bold text-lg md:text-2xl lg:text-2xl capitalize py-2">
          {product.title}
        </h2>

        <Rating />

        <p className="py-4 text-sm md:text-md lg:text-lg">
          {product.description}
        </p>

        <p className="text-lg py-3 text-[#00D4BC] md:text-2xl md:text-center lg:text-2xl">
          Price ${product.price}
        </p>

        <div className="flex lg:flex-row justify-between items-center lg:items-start gap-5 w-full">
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
