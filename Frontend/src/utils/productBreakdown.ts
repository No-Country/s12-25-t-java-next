import { getProducts } from '@/lib/Products'

export async function productsAndSubcats(category: string, searchTerm?: string) {
	const products = await getProducts(searchTerm)
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
