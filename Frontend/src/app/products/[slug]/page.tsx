import ProductDescription from "@/components/ProductDescription";
import { getProductById } from "@/lib/Products";
import React from "react";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductById(params.slug);
  console.log(product);
  return (
    <div>
      <ProductDescription product={product} />
    </div>
  );
};

export default ProductPage;
