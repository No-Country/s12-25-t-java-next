import { Table } from '@/types/table'
import 'server-only'

const baseUrl = process.env.BASE_URL
export async function getTables(): Promise<Table[]> {
	const url = `${baseUrl}/tables`
	const res = await fetch(url, { cache: 'no-cache' })
	return await res.json()
}
export async function getTableId(id: number): Promise<Table> {
	const url = `${baseUrl}/tables/${id}`
	const res = await fetch(url, { cache: 'no-cache' })
	return await res.json()
}
