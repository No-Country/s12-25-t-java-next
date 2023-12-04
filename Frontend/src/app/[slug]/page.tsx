import ProductsList from '@/components/Products/ProductsList'
import { getProducts } from '@/lib/Products'
import { Product } from '@/types/Product'

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
						<ProductsList products={productsBySubCategory} />
					</div>
				)
			})}
		</>
	)
}
export default MenuPage
