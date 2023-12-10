
import FilterSelected from '@/components/FilterProducts/filterSelected'
import ProductsList from '@/components/Products/ProductsList'
import { Product } from '@/types/Product'
import { productsAndSubcats } from '@/utils/productBreakdown'
import { Suspense } from 'react'
import unorm from 'unorm';



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
        : productsByCategory.filter((product) => {
          const subcategoryNormalized = unorm.nfd(product.subCategory.name.toLowerCase()).replace(/[\u0300-\u036f]/g, '');
  const searchSubcategoryNormalized = unorm.nfd(subcategory.toLowerCase()).replace(/[\u0300-\u036f]/g, '');

  const subcategoryMatch = subcategoryNormalized === searchSubcategoryNormalized;
  const sensitiveSearchParams = unorm.nfd(searchParams?.query.toLowerCase()).replace(/[\u0300-\u036f]/g, '');
  const sensitiveProduct = unorm.nfd(product.name.toLowerCase()).replace(/[\u0300-\u036f]/g, '');
  console.log(`Product Name: ${sensitiveProduct}, Query: ${sensitiveSearchParams}`);

  const nameMatch = sensitiveProduct.includes(sensitiveSearchParams);
  const descriptionMatch = product.description?.toLowerCase().includes(sensitiveSearchParams);

  console.log(`${product.name}: Subcategory Match - ${subcategoryMatch}, Name Match - ${nameMatch}, Description Match - ${descriptionMatch}`);

  return subcategoryMatch && (nameMatch || descriptionMatch);
        });
         
    }
  );
  console.log(productsByCategory)

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
