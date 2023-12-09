import FilterSelected from "@/components/FilterProducts/filterSelected";
import Search from "@/components/FilterProducts/search";
import ProductsList from "@/components/Products/ProductsList";
import { Product } from "@/types/Product";
import { productsAndSubcats } from "@/utils/productBreakdown";
import { Suspense } from "react";

export const metadata = {
  title: "Platos",
};

async function MenuPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { query: string };
}) {
  const { productsByCategory, subcategories } = await productsAndSubcats(
    params.slug,
    searchParams?.query
  );
  const productsBySubcategories: Product[][] = subcategories.map(
    (subcategory) => {
      return !searchParams?.query
        ? productsByCategory.filter(
            (product) => product.subcategory === subcategory
          )
        : productsByCategory.filter(
            (product) =>
              product.subcategory === subcategory &&
              product.title
                ?.toLowerCase()
                .includes(searchParams?.query.toLowerCase())
          );
    }
  );

  const hasProducts = productsBySubcategories.some(
    (products) => products.length > 0
  );

  return (
    <>
      <Search />
      <FilterSelected />
      <Suspense fallback={<p>Carajo...</p>}>
        {hasProducts ? (
          productsBySubcategories.map((products, index) => (
            <div key={subcategories[index]} className="pl-4">
              <ProductsList products={products} />
            </div>
          ))
        ) : (
          <p className="text-center">
            No se ha encontrado “{searchParams?.query}” en esta sección.
          </p>
        )}
      </Suspense>
      )
    </>
  );
}
export default MenuPage;
