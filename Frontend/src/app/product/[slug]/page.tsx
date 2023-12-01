import { ProductDescription } from "@/components";
import { getProductById } from "@/lib/Products";
import React from "react";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
	const product = await getProductById(params.slug);

	return (
		<div>
			<ProductDescription product={product} />
		</div>
	);
};

export default ProductPage;
