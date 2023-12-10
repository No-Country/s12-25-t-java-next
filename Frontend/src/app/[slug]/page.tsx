
import FilterSelected from '@/components/FilterProducts/filterSelected'
import ProductsList from '@/components/Products/ProductsList'
import { Product } from '@/types/Product'
import { productsAndSubcats } from '@/utils/productBreakdown'
import { Suspense } from 'react'


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
            (product) => product.subCategory.name === subcategory
          )
        : productsByCategory.filter(
            (product) =>
              product.subCategory.name === subcategory &&
              product.subCategory.name && product.name && product.description
                ?.toLowerCase().includes(searchParams?.query.toLowerCase())
          );
    }
  );

  const hasProducts = productsBySubcategories.some(
    (products) => products.length > 0
  );

  return (
    <>
      <FilterSelected />
      <Suspense fallback={<p>Carajo...</p>}>
        {hasProducts ? (
          productsBySubcategories.map((products, index) => (
            <div key={subcategories[index]} className="pl-5">
              <ProductsList products={products} 
			  	listCarousel={subcategories.length > 1 ? true : false}/>
			  
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
