import 'server-only'

import { Product } from '@/types/Product'

const baseUrl = process.env.BASE_URL

export async function getProducts(searchTerm?: string): Promise<Product[]> {
	const url = `${baseUrl}/products`
	const res = await fetch(url, { cache: 'no-cache' })
	if (res.ok) {
		return await res.json()
	}
	console.log('No backend server connection!!!')
	return []
}

export async function getProductById(id: string): Promise<Product> {
	const url = `${baseUrl}/products/${id}`
	const res = await fetch(url)
	return await res.json()
}
