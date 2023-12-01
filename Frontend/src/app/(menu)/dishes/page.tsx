import ProductsList from "@/components/Products/ProductsList";
import { getProducts } from "@/lib/Products";
import { Product } from "@/types/Product";

export const metadata = {
  title: "Platos",
};

async function DishesPage() {
	const products = await getProducts()
	const dishes = products.filter((product) => product.category === 'Platos')
	const subcategories = [
		...new Set(dishes.map((mainCourse) => mainCourse.subcategory)),
	]
console.log(products)
	return (
		<>
			{subcategories.map((subcategory) => {
				const dishesByCategory: Product[] = dishes.filter(
					(mainCourse) => mainCourse.subcategory === subcategory
				)
				return (
					<div
						key={subcategory}
						className="pl-4"
					>
						<ProductsList products={dishesByCategory} />
					</div>
				)
			})}
		</>
	)
}
export default DishesPage
