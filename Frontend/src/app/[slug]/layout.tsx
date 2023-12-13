import FilterProducts from '@/components/FilterProducts/FilterProducts'
import Search from '@/components/FilterProducts/search'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { getProducts } from '@/lib/Products'
import NoProducts from '@/components/Products/NoProducts'

async function MenuLayout({ children }: { children: React.ReactNode }) {
	const products = await getProducts()
	const categories =
		products.length > 0
			? [
					...new Set(products.map((product) => product.category.name.toLowerCase())),
			  ]
			: []
	return (
		<div>
			<Header />
			{categories.length > 0 && <FilterProducts categories={categories} />}
			{products.length > 0 ? (
				<>
					<Search />
					<main className="min-h-[90vh]">{children}</main>
				</>
			) : (
				<NoProducts />
			)}
			<Footer />
		</div>
	)
}
export default MenuLayout
