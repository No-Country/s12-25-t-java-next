'use client'
import React, { useState, useEffect } from 'react'
import Loader from '@/components/Common/Loader'
import Sidebar from '@/components/admin/Sidebar'
import Header from '@/components/Header'

function AdminLayout({ children }: { children: React.ReactNode }) {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const [loading, setLoading] = useState<boolean>(true)
	useEffect(() => {
		setTimeout(() => setLoading(false), 1000)
	}, [])

	return (
		<div className=" bg-whiteAdminBackground ">
			{loading ? (
				<Loader />
			) : (
				<div className="flex h-screen overflow-hidden">
					{/* <!-- ===== Sidebar Start ===== --> */}

					<Sidebar />

					{/* <!-- ===== Content Area Start ===== --> */}
					<div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
						{/* <!-- ===== Header Start ===== --> */}

						<Header sm />
						{/* <!-- ===== Header End ===== --> */}

						<main>
							<div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
								{children}
							</div>
						</main>
						{/* <!-- ===== Main Content End ===== --> */}
					</div>
					{/* <!-- ===== Content Area End ===== --> */}
				</div>
			)}
		</div>
	)
}

export default AdminLayout
