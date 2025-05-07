"use client";
import React from "react";
import ShoppingBasket from "./ShoppingBasket";
import OrderSummary from "./OrderSummary/OrderSummary";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";

const BasketPanel = () => {
  const basketItems = useSelector((state: RootState) => state.basket.products);
  const router = useRouter();
  
  if (basketItems.length === 0) {
    return (
      <div className="flex w-full flex-col items-center justify-center">
        <h2>Your Basket Is Empty</h2>
        <button
          onClick={() => {
            router.push("/");
          }}
          className="mt-3 flex w-max cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:bg-blue-600"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <>
      <ShoppingBasket />
      <OrderSummary />
    </>
  );
};

export default BasketPanel;
