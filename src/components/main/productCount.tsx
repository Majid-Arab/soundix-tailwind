import { IconMinus, IconPlus } from "@tabler/icons-react";
import React from "react";

function ProductCount() {
  return (
    <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1 text-black font-semibold h-8">
      <span className="bg-white rounded-full text-black">
        <IconMinus stroke={1} />
      </span>
      <span className="px-4 text-xl">1</span>
      <span className="bg-white rounded-full text-black">
        <IconPlus stroke={1} />
      </span>
    </div>
  );
}

export default ProductCount;
