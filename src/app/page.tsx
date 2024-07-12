"use client";

import React from "react";
import ProductDetail from "@/components/main/ProductDetail";
import Carousel from "@/components/main/carousel";
import Card from "@/components/main/card";

function Home() {
  return (
    <div className="flex flex-col items-center gap-10 ">
      <ProductDetail />

      <Carousel />

      {/* <Card /> */}
    </div>
  );
}

export default Home;
