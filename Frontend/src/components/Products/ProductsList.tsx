import { Product } from "@/types/Product";
import ProductCard from "./ProductCard";
import Link from "next/link";

function ProductsList({
  products,
  listCarousel,
}: {
  products: Product[];
  listCarousel: boolean;
}) {
  // let baseUrl = products[0].category.toLowerCase();

  const listStyle = !listCarousel
    ? "flex-wrap"
    : "overflow-x-auto scrollbar-hide";

  return (
    <div>
      <h2 className="mb-2 font-semibold text-lg">
        {products[0]?.subCategory.name}
      </h2>
      <ul className={`flex gap-4 ${listStyle}`}>
        {products.map(
          (product) =>
            product.state && (
              <li key={product.id}>
                <Link href={`/product/${product.id}`}>
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    images={product.images}
                    rating={product.rating}
                    category={product.category}
                  />
                </Link>
              </li>
            ),
        )}
      </ul>
    </div>
  );
}
export default ProductsList;
