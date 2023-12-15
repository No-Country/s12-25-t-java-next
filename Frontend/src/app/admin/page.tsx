'use client'
import { redirect } from 'next/navigation'

function page() {
	// localStorage.setItem('user', '{"name":"usuario", "token":"123456789"}')

	// const user = localStorage.getItem('user')
	const user = ''
	!user ? redirect('admin/auth/login') : redirect('admin/dashboard/menu')
}
export default page
