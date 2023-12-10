import { getProducts } from '@/lib/Products'

export async function productsAndSubcats(category: string) {
	const products = await getProducts()
	const productsByCategory = products.filter(
		(product) => product.category.name.toLowerCase() === category
	)

	const subcategories = [
		...new Set(productsByCategory.map((product) => product.subCategory.name)),
	]

	return {
		productsByCategory,
		subcategories,
	}
}
