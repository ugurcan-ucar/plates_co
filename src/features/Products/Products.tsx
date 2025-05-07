import Container from "@/components/Container/Container";
import React from "react";
import ProductList from "./components/ProductList";

const Products = () => {
  return (
    <section className="my-4">
      <Container className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
        <div className="my-4 max-w-2xl text-center text-gray-600">
          Discover our handcrafted collection of ceramic plates, each piece
          telling its own unique story
        </div>
        <ProductList />
      </Container>
    </section>
  );
};

export default Products;
