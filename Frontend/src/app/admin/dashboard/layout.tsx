
import Loader from '@/components/Common/Loader'
import Header from '@/components/Header'
import Sidebar from '@/components/Admin/Sidebar'

function AdminLayout({ children }: { children: React.ReactNode }) {
	


	return (
		<div className=" bg-whiteAdminBackground ">
		
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
				<Loader />
			
		</div>
	)
}

export default AdminLayout
