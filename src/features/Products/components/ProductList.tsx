import { MOCK_DATA } from "@/constants/mockData";
import Image from "next/image";
import React from "react";
import AddToBasketButton from "./AddToBasketButton";

const ProductList = () => {
  return (
    <div className="grid w-full grid-cols-3 gap-5">
      {MOCK_DATA.map((product) => (
        <div
          className="group min-h-[60px] rounded-lg bg-white shadow-md"
          key={product.code}
        >
          <div className="relative aspect-square overflow-hidden rounded-tl-lg rounded-tr-lg">
            <Image
              fill
              src={product.img}
              alt={product.name}
              className="object-cover transition duration-400 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute right-0 bottom-0 left-0 translate-y-full transform p-4 transition-transform duration-500 group-hover:translate-y-0">
              <AddToBasketButton product={product} />
            </div>
          </div>
          <div className="p-5">
            <div className="flex justify-between">
              <span className="font-semibold">{product.name}</span>
              <span className="font-semibold">${product.price}</span>
            </div>
            <span className="text-sm">{product.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
