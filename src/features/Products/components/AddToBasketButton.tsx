"use client";
import React from "react";
import BasketIcon from "@components/Icons/BasketIcon";
import { useDispatch } from "react-redux";
import { addToBasket } from "@features/Basket/redux/slices/basketSlice";
import { twMerge } from "tailwind-merge";

type AddToBasketButtonProps = {
  productCode: string;
  className?: string;
};

const AddToBasketButton = ({
  productCode,
  className,
}: AddToBasketButtonProps) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(addToBasket(productCode));
      }}
      className={twMerge(
        "flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white/90 py-3 font-medium text-gray-900 backdrop-blur-sm transition-colors duration-300 hover:bg-white",
        className,
      )}
    >
      <BasketIcon />
      Add to Cart
    </button>
  );
};

export default AddToBasketButton;
