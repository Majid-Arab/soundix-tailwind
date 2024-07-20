import { create } from "zustand";
import { ProductProp } from "../../src/app/type";
import { persist } from "zustand/middleware";

type CartState = {
  cart: ProductProp[];
  updateQuantity: (productId: number, quantity: number) => void;
};

const useCountStore = create<CartState>()(
    persist(
      (set) => ({
        cart: [],
        updateQuantity: (productId, quantity) =>
          set((state) => ({
            cart: state.cart.map((product) =>
              product.id === productId ? { ...product, quantity } : product
            ),
          })),
      }),
      {
        name: "cart-storage",
      }
    )
  );
  
  export default useCountStore;