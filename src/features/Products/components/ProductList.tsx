import { MOCK_CATALOG } from "@/constants/mockData";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {MOCK_CATALOG.map((product) => (
        <ProductCard key={product.code} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
