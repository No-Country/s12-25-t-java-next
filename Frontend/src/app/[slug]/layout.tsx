import { Footer, Header } from '@/components'
import FilterProducts from '@/components/FilterProducts/FilterProducts'
import { getProducts } from '@/lib/Products'
import React from 'react'

async function MenuLayout({ children }: { children: React.ReactNode }) {
	const products = await getProducts()
	const categories = [
		...new Set(products.map((product) => product.category.toLowerCase())),
	]

	return (
		<div>
			<Header />
			<FilterProducts categories={categories} />
			{children}
			<Footer />
		</div>
	)
}
export default MenuLayout
