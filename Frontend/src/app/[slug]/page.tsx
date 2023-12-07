
import FilterSelected from '@/components/FilterProducts/filterSelected'
import ProductsList from '@/components/Products/ProductsList'
import { Product } from '@/types/Product'
import { productsAndSubcats } from '@/utils/productBreakdown'
import { Suspense } from 'react'



export const metadata = {
	title: 'Platos',
}

async function MenuPage({ params}: { params: { slug: string } }) {
	const { productsByCategory, subcategories } = await productsAndSubcats(
		params.slug
	)
	
	return (
		<>
		    <FilterSelected />
			{subcategories.map((subcategory) => {
				const productsBySubCategory: Product[] = productsByCategory.filter(
					(product) => product.subcategory === subcategory
				)
				return (
					<div
						key={subcategory}
						className="pl-4"
					>
						
						<Suspense fallback={<p>Carajo...</p>}>
							<ProductsList products={productsBySubCategory} />
						</Suspense>
					</div>
				)
			})}
		</>
	)
}
export default MenuPage
