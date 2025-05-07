import Container from "@/components/Container/Container";
import React from "react";
import BasketPanel from "./components/BasketPanel";

const Basket = () => {
  return (
    <Container className="my-8">
      <h1 className="text-3xl font-bold text-gray-800">Shopping Basket</h1>
      <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row">
        <BasketPanel />
      </div>
    </Container>
  );
};

export default Basket;
