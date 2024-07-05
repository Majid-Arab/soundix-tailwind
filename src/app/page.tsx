"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  IconArrowRight,
  IconChevronLeft,
  IconChevronRight,
  IconHeartFilled,
  IconMinus,
  IconPlus,
  IconStarFilled,
} from "@tabler/icons-react";
import Rating from "@/components/main/rating";
import ProductDetail from "@/components/main/ProducDetail";
import Product from "../../public/headphone.png";
import Slide1 from "../../public/headphone.png";
import Slide2 from "../../public/headphone1.png";
import Carousel from "@/components/main/carousel";
import Card from "@/components/main/card";

function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      <ProductDetail />

      <Carousel />

      <Card />
    </div>
  );
}

export default Home;
