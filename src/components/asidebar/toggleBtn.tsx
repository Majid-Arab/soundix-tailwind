"use client";

import React, { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import AsideBar from "./index";

function ToggleBtn() {
  const [openedAside, setOpenedAside] = useState(true);

  const toggleAside = () => {
    setOpenedAside((prev) => !prev);
  };
  return (
    <div className="relative flex flex-1 h-full">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 lg:-left-5 sm:left-0"
        onClick={toggleAside}
      >
        {openedAside ? (
          <IconChevronLeft className="w-full h-full" stroke={1.5} />
        ) : (
          <IconChevronRight className="w-full h-full" stroke={1.5} />
        )}
      </button>
      <div className="flex-1">{openedAside && <AsideBar />}</div>
    </div>
  );
}

export default ToggleBtn;
