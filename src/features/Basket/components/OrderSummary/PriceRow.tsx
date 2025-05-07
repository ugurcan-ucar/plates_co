import { priceFormatter } from "@/utils/priceFormatter";
import React from "react";
import { twMerge } from "tailwind-merge";

type PriceRowProps = {
  className?: string;
  title: string;
  price: number | string;
};

const PriceRow = ({ className, title, price }: PriceRowProps) => {
  return (
    <div className={twMerge("flex justify-between text-gray-600", className)}>
      <span>{title}</span>
      <span>{typeof price === "string" ? price : priceFormatter(price)}</span>
    </div>
  );
};

export default PriceRow;
