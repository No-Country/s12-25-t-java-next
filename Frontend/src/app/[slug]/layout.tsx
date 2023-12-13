import FilterProducts from '@/components/FilterProducts/FilterProducts'
import Search from '@/components/FilterProducts/search'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { getProducts } from '@/lib/Products'
import { IProduct } from '@/types/order'
import React from 'react'

async function MenuLayout({ children }: { children: React.ReactNode }) {
  const products = await getProducts()
  console.log('prueba')
  console.log('productos', products)
  const categories = [
    ...new Set(products.map(product => product.category.name.toLowerCase())),
  ]
  return (
    <div>
      <Header />
      <FilterProducts categories={categories} />
      <Search />
      {children}
      <Footer />
    </div>
  )
}
export default MenuLayout
