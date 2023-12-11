import 'server-only'

import { Product } from '@/types/Product'

const baseUrl = process.env.BASE_URL
	
export async function getProducts(searchTerm?: string): Promise<Product[]> {
	const url = `${baseUrl}/v1/products`
	const res = await fetch(url, { cache: 'no-cache' })
	return await res.json()
}

export async function getProductById(id: string): Promise<Product> {
	const url = `${baseUrl}/v1/products/${id}`
	const res = await fetch(url)
	return await res.json()
}
