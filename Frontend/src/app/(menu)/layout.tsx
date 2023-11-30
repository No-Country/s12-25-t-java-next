import FilterProducts from '@/components/FilterProducts/FilterProducts'
import React from 'react'

function MenuLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<FilterProducts />
			{children}
		</div>
	)
}
export default MenuLayout
