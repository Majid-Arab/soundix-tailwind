"use client";
import React, { useState } from "react";
import ProductDetail from "@/components/main/ProductDetail";
import Carousel from "@/components/main/carousel";
import headphone from "../../public/headphone.png";
import Card from "@/components/main/card";
import { ProductProp } from "./type";

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
function Home() {
  const [selectedProduct, setSelectedProduct] = useState<ProductProp | null>(
    defaultProduct
  );

  return (
    <div className="flex flex-col items-center gap-10">
      <ProductDetail product={selectedProduct} />

      <Carousel setSelectedProduct={setSelectedProduct} />

      {/* <Card /> */}
    </div>
  );
}

export default Home;
