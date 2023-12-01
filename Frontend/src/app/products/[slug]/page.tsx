import { ProductDescription } from "@/components";
import { getProductById } from "@/lib/Products";
import { products } from "@/utils/data";
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
