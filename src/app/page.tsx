"use client";

import React from "react";
import ProductDetail from "@/components/main/ProducDetail";
import Carousel from "@/components/main/carousel";
import Card from "@/components/main/card";

function Home() {
  return (
    <div className="flex flex-col items-center gap-10 w-[1000px] xl:w-[650px] lg:w-[500px] md:w-[500px]">
      <ProductDetail />

      <Carousel />

      <Card />
    </div>
  );
}

export default Home;
