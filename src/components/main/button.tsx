import { ProductProp } from "@/app/type";
import useCartStore from "@/store/cart";
import { IconHeartFilled } from "@tabler/icons-react";
import React from "react";

type Prop = {
  product: ProductProp;
};

function Button({ product }: Prop) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="flex justify-start items-center gap-2 md:gap-5 pt-5 w-full">
      <button
        type="button"
        className="relative rounded-xl p-2 md:p-3 lg:p-5 text-sm text-[#047979] hover:text-[#da3535] border-2 border-[#047979] "
      >
        <span>
          <IconHeartFilled stroke={2} className="w-4 h-4 md:w-6 md:h-6" />
        </span>
      </button>
      <button
        type="button"
        onClick={() => addToCart(product)}
        className="relative grow xl:grow-0 text-xs md:text-xl rounded-xl p-2 md:p-3 lg:p-5 lg:text-lg text-[#047979] font-bold border-2 border-[#047979] hover:bg-[#047979] hover:text-white "
      >
        Add to cart
      </button>
      <button
        type="button"
        className="relative grow xl:grow-0 text-xs md:text-xl rounded-xl p-2 md:p-3 lg:p-5 lg:text-lg bg-[#047979] font-bold text-white border-2 border-[#047979] hover:bg-[#415353] "
      >
        Buy now
      </button>
    </div>
  );
}

export default Button;
