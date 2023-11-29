import { MainCourse } from '@/types/mainCourse'
import 'server-only'

const baseUrl = process.env.BASE_URL

export async function getMainCourses(): Promise<MainCourse[]> {
	const url = `${baseUrl}/api/mains`
	const res = await fetch(url)
	return await res.json()
}
