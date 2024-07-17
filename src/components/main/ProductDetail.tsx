import React from "react";
import Image from "next/image";
import Rating from "./rating";
import Button from "./button";
import ProductCount from "./productCount";
import { ProductProp } from "@/app/type";

interface ProductDetailProps {
  product: ProductProp | null;
}

function ProductDetail({ product }: ProductDetailProps) {
  if (!product) return null;

  return (
    <div className="w-auto m-2 flex flex-col lg:flex-row items-center justify-center gap-5 p-4 rounded-2xl shadow-2xl h-auto">
      <div className="w-40 md:w-auto px-5">
        <Image
          src={product.src}
          alt={product.alt}
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      <div className="w-full lg:w-2/3 flex flex-col lg:items-start">
        <h2 className="text-center md:text-start font-bold text-lg md:text-2xl lg:text-2xl capitalize py-2">
          {product.title}
        </h2>

        <Rating />

        <p className="py-4 text-sm md:text-md lg:text-md">
          {product.description}
        </p>

        <p className="text-sm md:text-xl py-0 md:py-3 text-[#00D4BC] lg:text-xl">
          Price ${product.price}
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
          <ProductCount productId={product.id} />
        </div>

        <Button product={product} />
      </div>
    </div>
  );
}

export default ProductDetail;
