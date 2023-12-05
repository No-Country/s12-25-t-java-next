import ProductDescription from "@/components/ProductDescription";
import { getProductById } from "@/lib/Products";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: 'Producto',
}
const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductById(params.slug);

  return (
    <div>
      <ProductDescription product={product} />
    </div>
  );
};

export default ProductPage;
