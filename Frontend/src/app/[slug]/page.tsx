import ProductsList from '@/components/Products/ProductsList'
import { getProducts } from '@/lib/Products'
import { Product } from '@/types/Product'
import { Suspense } from 'react'

export const metadata = {
	title: 'Platos',
}

async function MenuPage({ params }: { params: { slug: string } }) {
	const products = await getProducts()
	const productsByCategory = products.filter(
		(product) => product.category.toLowerCase() === params.slug
	)

	const subcategories = [
		...new Set(productsByCategory.map((product) => product.subcategory)),
	]

	return (
		<>
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
