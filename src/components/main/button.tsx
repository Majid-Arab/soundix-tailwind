import { ProductProp } from "@/app/type";
import useCartStore from "@/store/cart";
import useCountStore from "@/store/count";
import { IconHeartFilled } from "@tabler/icons-react";
import React from "react";

type Prop = {
  product: ProductProp;
};

function Button({ product }: Prop) {
  const addToCart = useCartStore((state) => state.addToCart);
  const updateCount = useCountStore((state) => state.updateQuantity);

  const handleAddToCart = () => {
    const productWithcount = { ...product, count: 1 };
    addToCart(productWithcount);
  };

  const handleUpdateCount = (count: number) => {
    updateCount(product.id, count);
  };

  return (
    <div className="flex justify-start items-center gap-2 md:gap-5 pt-5">
      <button
        type="button"
        className="relative rounded-xl p-2 md:p-3 lg:p-4 text-sm text-[#047979] hover:text-[#da3535] border-2 border-[#047979]"
        onClick={() => handleUpdateCount(product.count - 1)}
      >
        <span>
          <IconHeartFilled stroke={2} className="w-6" />
        </span>
      </button>
      <button
        type="button"
        onClick={handleAddToCart}
        className="relative text-md rounded-xl p-2 md:p-3 lg:p-5 text-[#047979] border-2 border-[#047979] hover:bg-[#047979] hover:text-white"
      >
        Add to cart
      </button>
      <button
        type="button"
        className="relative text-md rounded-xl p-2 md:p-3 lg:p-5 bg-[#047979] px-8 text-white border-2 border-[#047979] hover:bg-[#415353]"
      >
        Buy now
      </button>
    </div>
  );
}

export default Button;
