import React from "react";
import BasketFeature from "@features/Basket/Basket";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Plates Co - Basket",
  description:
    "Discover our collection of handcrafted ceramic plates in various colors and designs.",
};

const Basket = () => {
  return <BasketFeature />;
};

export default Basket;
