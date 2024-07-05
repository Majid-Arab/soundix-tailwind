import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

function TableHead() {
  return (
    <div className="flex justify-between mx-5 mt-10">
      <h2 className="text-3xl text-[#016173]">Daily Deals</h2>
      <button
        type="button"
        className="flex items-center text-black text-lg font-semibold hover:text-[#047979] "
      >
        View all
        <span className="text-xs">
          <IconArrowRight stroke={2} />
        </span>
      </button>
    </div>
  );
}

export default TableHead;
