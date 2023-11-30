import ProductsList from '@/components/Products/ProductsList'
import { getProducts } from '@/lib/Products'
import { Product } from '@/types/Product'

export const metadata = {
	title: 'Platos',
}

async function MainsPage() {
	const products = await getProducts()
	const mains = products.filter((product) => product.category === 'Platos')
	const subcategories = [
		...new Set(mains.map((mainCourse) => mainCourse.subcategory)),
	]

	return (
		<>
			{subcategories.map((subcategory) => {
				const mainsByCategory: Product[] = mains.filter(
					(mainCourse) => mainCourse.subcategory === subcategory
				)

				return (
					<div
						key={subcategory}
						className="pl-4"
					>
						<ProductsList products={mainsByCategory} />
					</div>
				)
			})}
		</>
	)
}
export default MainsPage
