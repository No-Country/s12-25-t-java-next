import { Product } from "@/types/Product";
import ProductCard from "./ProductCard";
import Link from "next/link";

function ProductsList({ products }: { products: Product[] }) {
	//FIX: maybe not necesary
	// let baseUrl = "";
	// if (products[0].category === "Platos") {
	// 	baseUrl = "/dishes";
	// } else if (products[0].category === "Postres") {
	// 	baseUrl = "/desserts";
	// } else {
	// 	baseUrl = "/drinks";
	// }
	return (
		<div>
			<h2 className="mb-2 font-semibold text-lg">{products[0].subcategory}</h2>
			<ul className="flex gap-4 overflow-x-auto scrollbar-hide">
				{products.map((product) => (
					<li key={product.id}>
						<Link href={`/product/${product.id}`}>
							<ProductCard
								title={product.title}
								price={product.price}
								image={product.image}
								rating={product.rating}
								category={product.category}
							/>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
export default ProductsList;
