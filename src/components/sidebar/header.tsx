"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";

function Header() {
  return (
    <div className="relative flex items-center">
      <div className=" flex justify-start items-center black gap-3 text-black">
        <div className="relative rounded-md bg-[#D8F9FF] p-2 text-[#047979] focus:outline-none focus:ring-2 focus:ring-[#047979] focus:ring-offset-2 ml-5">
          <Image
            className="h-10 w-10"
            src={Logo}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <h1 className="text-[#016173] font-bold text-xl">Soundix.</h1>
      </div>
    </div>
  );
}

export default Header;
