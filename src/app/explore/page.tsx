"use client";

import useCartStore from "@/store/cart";
import { IconPlus, IconStarFilled } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { ProductProp } from "../type";
import Image from "next/image";

type ApiProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
  };
};

function transformApiProductToProductProp(apiProduct: ApiProduct): ProductProp {
  return {
    id: apiProduct.id,
    src: apiProduct.image,
    alt: apiProduct.title,
    title: apiProduct.title,
    description: apiProduct.title,
    price: apiProduct.price,
    rating: apiProduct.rating.rate,
    count: 1,
  };
}

function Explore() {
  const [products, setProducts] = useState<ProductProp[]>([]);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => {
        const transformedProducts = json.map((product: ApiProduct) =>
          transformApiProductToProductProp(product)
        );
        setProducts(transformedProducts);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 w-60 shadow-lg"
        >
          <img
            src={product.src}
            alt={product.alt}
            width={240}
            height={160}
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="mt-2 font-semibold">{product.title}</h2>
          <p className="text-green-600 font-bold">
            Price ${product.price.toFixed(2)}
          </p>

          <div className="flex items-center justify-between">
            <span className="flex items-start text-[#00E0C6] gap-1 pt-2">
              <IconStarFilled color="#00E0C6" size={18} /> {product.rating.toFixed(1)}
            </span>
            <button
              onClick={() => addToCart(product)}
              className="bg-[#009393] relative rounded-full p-1 text-white font-semibold focus:border-2 focus:border-[#009393]"
            >
              <IconPlus stroke={2} color="white" size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Explore;
