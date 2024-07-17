import { ProductProp } from "@/app/type";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
interface ProductDetailProps {
  productId: number;
}

function ProductCount({productId}: ProductDetailProps) {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 0 ? count - 1 : 0);

  useEffect(() => {
    setCount(0);
  }, [productId]);

  return (
    <div className="flex items-center gap-1 md:gap-3 bg-gray-100 rounded-full p-1 text-black font-semibold h-6 md:h-10 xl:h-8">
      <button
        className="bg-white rounded-full text-black p-0 md:p-1"
        onClick={decrementCount}
      >
        <IconMinus stroke={2} className="size-4" />
      </button>
      <span className="px-4 xl:px-2 text-md md:text-lg">{count}</span>
      <button
        className="bg-white rounded-full text-black p-0 md:p-1"
        onClick={incrementCount}
      >
        <IconPlus stroke={2} className="size-4" />
      </button>
    </div>
  );
}

export default ProductCount;
