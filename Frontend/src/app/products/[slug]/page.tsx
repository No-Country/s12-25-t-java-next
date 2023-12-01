import { ProductDescription } from "@/components";
import { useCartStore } from "@/store/cart";
import { products } from "@/utils/data";
import React from "react";

const ProductPage = () => {
  return (
    <div>
      <ProductDescription product={products[0]} {...products[0]} />
    </div>
  );
};

export default ProductPage;
