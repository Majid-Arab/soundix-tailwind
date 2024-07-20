"use client"

import { useState } from "react";
import useCartStore from "../../store/cart";
import Image from "next/image";
import ProductCount from "@/components/main/productCount";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const [selection, setSelection] = useState<string[]>([]);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

  const toggleAll = () => {
    setSelection((current) =>
      current.length === cart.length
        ? []
        : cart.map((product) => product.id.toString())
    );
  };

  const rows = cart.map((product) => {
    const selected = selection.includes(product.id.toString());
    return (
      <tr key={product.id} className={selected ? "bg-gray-100" : ""}>
        <td className="p-4">
          <input
            type="checkbox"
            checked={selected}
            onChange={() => toggleRow(product.id.toString())}
            className="form-checkbox"
          />
        </td>
        <td className="p-4">
          <div className="flex items-center gap-4">
            <Image
              src={product.src}
              alt={product.title}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm font-medium">{product.title}</span>
          </div>
        </td>
        <td className="p-4">{product.description}</td>
        <td className="p-4">{product.price}</td>
        <td className="p-4">
          <ProductCount productId={product.count} />
        </td>
        <td className="p-4">
          <button
            onClick={() => removeFromCart(product.id)}
            className="px-4 py-2 text-xs font-medium text-white uppercase bg-red-500 rounded hover:bg-red-600"
          >
            Remove from cart
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="p-4">
              <input
                type="checkbox"
                checked={selection.length === cart.length}
                onChange={toggleAll}
                className="form-checkbox"
              />
            </th>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Quantity</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Cart;
