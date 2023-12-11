import FilterSelected from "@/components/FilterProducts/filterSelected";
import ProductsList from "@/components/Products/ProductsList";
import { Product } from "@/types/Product";
import { productsAndSubcats } from "@/utils/productBreakdown";
import { filterProducts, filterProductsBySubcategory } from "@/utils/searchLogic/filterBySubcategory";
import React from "react";
import { Suspense } from "react";
import unorm from "unorm";

export const metadata = {
  title: "Platos",
};
interface MenuPageProps {
  params: { slug: string };
  searchParams?: { query: string | undefined , sort: string | undefined }
}


async function MenuPage({
  params,
  searchParams,
}: MenuPageProps) {
  const { productsByCategory, subcategories } = await productsAndSubcats(
    params.slug,
    searchParams?.query
  );
  
  const productsBySubcategories: Product[][] = subcategories.map((subcategory) => {
    if (searchParams?.sort && !searchParams.sort.includes(subcategory)) {
      return [];}
    
    const filteredProductsBySubcategory = filterProductsBySubcategory(
      subcategory,
      productsByCategory,
      searchParams
    );
    const filteredProducts = filterProducts(productsByCategory, searchParams);
  
    return filteredProducts.length > 0 ? filteredProducts : filteredProductsBySubcategory;
  });
  
  const hasProducts = productsBySubcategories.some(
    (products) => products.length > 0
  );
  
console.log(productsBySubcategories)
  return (
    <>
      <FilterSelected />
      <Suspense fallback={<p>Carajo...</p>}>
        {hasProducts ? (
          productsBySubcategories.map((products, index) => (
            <div key={subcategories[index]} className="pl-5">

              <ProductsList
                products={products}
                listCarousel={subcategories.length > 1 ? true : false}
              />
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
