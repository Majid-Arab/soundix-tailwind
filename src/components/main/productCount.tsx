import { IconMinus, IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";

function ProductCount() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="flex items-center gap-1 md:gap-3 bg-gray-100 rounded-full p-1 text-black font-semibold h-10 xl:h-8">
      <button
        className="bg-white rounded-full text-black p-1"
        onClick={decrementCount}
      >
        <IconMinus stroke={2} size={16} />
      </button>
      <span className="px-4 xl:px-2 text-md md:text-lg">{count}</span>
      <button
        className="bg-white rounded-full text-black p-1"
        onClick={incrementCount}
      >
        <IconPlus stroke={2} size={16} />
      </button>
    </div>
  );
}

export default ProductCount;
