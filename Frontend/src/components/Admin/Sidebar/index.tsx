'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import Image from 'next/image'
import { useSideBarStore } from '@/store/sidebar'

const Sidebar = () => {
	const pathname = usePathname()
	const router = useRouter()
	const trigger = useRef<HTMLButtonElement>(null);
	const sidebar = useRef<HTMLDivElement>(null);
	const { setSidebarOpen, sidebarOpen } = useSideBarStore()

	  // close on click outside
	  useEffect(() => {
		const clickHandler = ({ target }: MouseEvent) => {
		  if (!sidebar.current || !trigger.current) return;
	
		  if (
			!sidebarOpen ||
			sidebar.current.contains(target as Node) ||
			trigger.current.contains(target as Node)
		  ) {
			return;
		  }
	
		  setSidebarOpen(false);
		};
	
		document.addEventListener('click', clickHandler);
	
		return () => document.removeEventListener('click', clickHandler);
	  }, [sidebarOpen, setSidebarOpen]);

	const handleLinkClick = (route: string) => {
		// Navigate to the "/admin/mesas" route
		router.push(`/admin/dashboard/${route}`)

		// Close the sidebar after the navigation is complete
		setSidebarOpen(false)
	}

	return (
		<aside
		ref={sidebar}
			className={`absolute left-0 top-0 z-[99] flex h-screen w-full md:w-[19.5rem] flex-col overflow-y-hidden bg-whiteSidebar duration-300 ease-linear  lg:static lg:translate-x-0 ${
				sidebarOpen ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			<div className="flex items-center justify-between gap-2 px-6 py-[2rem] lg:py-6.5">
				<Link 
				className='flex '
				href="/admin/dashboard">
					<Image alt={'logo'}
					src={'/icon/admin/logo.svg'}
					 height={30}
					 width={30}/>
					<h1 className="text-primary-100 text-[1.875rem] ml-2 font-bold">CartApp</h1>
				</Link>

				<button
					type="button"
					ref={trigger}
					onClick={() => setSidebarOpen(false)}
					aria-controls="sidebar"
					aria-expanded={sidebarOpen}
					className="block lg:hidden"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
						/>
						<title>volver</title>
					</svg>
				</button>
			</div>

			<ul className="mb-6  flex flex-col gap-1.5">
				{/* <!-- Menu Item Chart --> */}
				<li>
					<button
						type="button"
						onClick={() => handleLinkClick('menu')}
						aria-controls="sidebar"
						aria-expanded={false}
						className="block w-full "
					>
						<Link
							href="/admin/dashboard/menu"
							className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary-400  ${
								pathname.includes('/admin/dashboard/menu') &&
								'bg-primary-400 border-r-4 border-primary-200'
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 30 30"
								fill="none"
							>
								<path
									d="M23.3077 12.597H22.5834C22.4094 10.7937 21.5352 9.11744 20.1323 7.89701C18.7294 6.67657 16.899 6 15 6C13.101 6 11.2706 6.67657 9.86767 7.89701C8.46475 9.11744 7.59059 10.7937 7.41663 12.597H6.69231C6.5087 12.597 6.33261 12.6665 6.20277 12.7903C6.07294 12.9141 6 13.0821 6 13.2572C6.00304 14.8272 6.45614 16.3666 7.31029 17.7089C8.16444 19.0511 9.38714 20.1451 10.8462 20.8726V21.1796C10.8462 21.5298 10.992 21.8656 11.2517 22.1133C11.5114 22.3609 11.8635 22.5 12.2308 22.5H17.7692C18.1365 22.5 18.4886 22.3609 18.7483 22.1133C19.008 21.8656 19.1538 21.5298 19.1538 21.1796V20.8726C20.6129 20.1451 21.8356 19.0511 22.6897 17.7089C23.5439 16.3666 23.997 14.8272 24 13.2572C24 13.0821 23.9271 12.9141 23.7972 12.7903C23.6674 12.6665 23.4913 12.597 23.3077 12.597ZM21.191 12.597H16.7412C17.5805 11.3961 18.8503 10.5285 20.3126 10.1567C20.7907 10.8983 21.0907 11.7317 21.191 12.597ZM18.9358 8.65474C19.0944 8.77853 19.2464 8.90919 19.3918 9.04673C17.5489 9.66497 16.0259 10.9356 15.1385 12.5953H12.5856C13.0183 11.4387 13.8149 10.4376 14.8666 9.72892C15.9183 9.02023 17.1738 8.63846 18.4615 8.63576C18.6199 8.63576 18.7783 8.64318 18.9358 8.65474ZM15 7.31535C15.5555 7.3157 16.1085 7.38703 16.6442 7.52744C15.3396 7.83606 14.1433 8.46719 13.176 9.35721C12.2087 10.2472 11.5045 11.3647 11.1343 12.597H8.80904C8.98077 11.1452 9.70672 9.80454 10.8485 8.83047C11.9903 7.8564 13.468 7.31709 15 7.31535ZM18.1725 19.8592C18.0517 19.9121 17.9495 19.997 17.878 20.1039C17.8065 20.2107 17.7687 20.3349 17.7692 20.4616V21.1796H12.2308V20.4616C12.2313 20.3349 12.1935 20.2107 12.122 20.1039C12.0505 19.997 11.9483 19.9121 11.8275 19.8592C10.61 19.3249 9.5613 18.4947 8.78663 17.4517C8.01196 16.4088 7.5386 15.1899 7.41404 13.9174H22.5834C22.4591 15.1896 21.9861 16.4084 21.2119 17.4513C20.4377 18.4942 19.3895 19.3246 18.1725 19.8592Z"
									fill="#FF6711"
									stroke="#FF6711"
									stroke-width="0.5"
								/>
								<title>menu</title>
								<circle
									cx="15"
									cy="15"
									r="14"
									stroke="#FF6711"
									stroke-width="2"
								/>
							</svg>
							<div>
								<h2 className="text-xl text-left font-semibold text-black"> Menu</h2>
								<p className="text-[0.8125rem] font- text text-black">
									Modifica item y precios
								</p>
							</div>
						</Link>
					</button>
				</li>
				<li>
					<button
						type="button"
						onClick={() => handleLinkClick('personal')} // Close sidebar
						aria-controls="sidebar"
						aria-expanded={false}
						className="block w-full "
					>
						<Link
							href="/admin/dashboard/personal"
							className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary-400  ${
								pathname.includes('/admin/dashboard/personal') &&
								'bg-primary-400 border-r-4 border-primary-200'
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-[2.275rem] h-[2.275rem] text-primary-100"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<title>personal</title>
							</svg>

							<div>
								<h2 className="text-xl text-left font-semibold text-black">Personal</h2>
								<p className="text-[0.8125rem] text-left font- text text-black">
									Agrega o edita personal{' '}
								</p>
							</div>
						</Link>
					</button>
				</li>
				<li>
					<button
						type="button"
						onClick={() => handleLinkClick('mesas')} // Close sidebar
						aria-controls="sidebar"
						aria-expanded={false}
						className="block w-full "
					>
						<Link
							href="/admin/dashboard/mesas"
							className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary-400  ${
								pathname.includes('/admin/dashboard/mesas') &&
								'bg-primary-400 border-r-4 border-primary-200'
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 30 30"
								fill="none"
							>
								<path
									d="M22.3406 14.2594L22.75 14.5982V14.0668V10.1786C22.75 9.40187 22.4415 8.65697 21.8922 8.10776C21.343 7.55855 20.5981 7.25 19.8214 7.25H10.1786C9.40187 7.25 8.65697 7.55855 8.10776 8.10776C7.55855 8.65697 7.25 9.40187 7.25 10.1786V19.8214C7.25 20.5981 7.55855 21.343 8.10776 21.8922C8.65697 22.4415 9.40187 22.75 10.1786 22.75H14.0668H14.5982L14.2594 22.3406C14.0242 22.0564 13.8478 21.7242 13.7448 21.3605L13.6934 21.1786H13.5043H10.1786C9.81863 21.1786 9.47344 21.0356 9.21893 20.7811C8.96441 20.5266 8.82143 20.1814 8.82143 19.8214V15.7857H13.5043H13.6934L13.7448 15.6038C13.8478 15.2401 14.0242 14.9079 14.2594 14.6237L14.4243 14.4243L14.6237 14.2594C14.9079 14.0242 15.2401 13.8478 15.6038 13.7448L15.7857 13.6934V13.5043V8.82143H19.8214C20.1814 8.82143 20.5266 8.96441 20.7811 9.21893C21.0356 9.47344 21.1786 9.81863 21.1786 10.1786V13.5043V13.6934L21.3605 13.7448C21.7242 13.8478 22.0564 14.0242 22.3406 14.2594ZM14.0668 14.2143H8.82143V10.1786C8.82143 9.81863 8.96441 9.47344 9.21893 9.21893C9.47344 8.96441 9.81863 8.82143 10.1786 8.82143H14.2143V14.0668V14.2143H14.0668ZM16.3393 14.2143C15.1662 14.2143 14.2143 15.1662 14.2143 16.3393V20.625C14.2143 21.1886 14.4382 21.7291 14.8367 22.1276C15.2352 22.5261 15.7757 22.75 16.3393 22.75H20.625C21.1886 22.75 21.7291 22.5261 22.1276 22.1276C22.5261 21.7291 22.75 21.1886 22.75 20.625V16.3393C22.75 15.1662 21.7981 14.2143 20.625 14.2143H16.3393Z"
									fill="#FF6711"
									stroke="#FF6711"
									stroke-width="0.5"
								/>
								<circle
									cx="15"
									cy="15"
									r="14"
									stroke="#FF6711"
									stroke-width="2"
								/>
								<title>mesas</title>
							</svg>

							<div>
								<h2 className="text-xl text-left font-semibold text-black">
									Salones y Mesas
								</h2>
								<p className="text-[0.8125rem] text-left font- text text-black">
									Edita cantidad{' '}
								</p>
							</div>
						</Link>
					</button>
				</li>
				<li>
					<button
						type="button"
						onClick={() => handleLinkClick('pay')} // Close sidebar
						aria-controls="sidebar"
						aria-expanded={false}
						className="block w-full "
					>
						<Link
							href="/admin/dashboard/pay"
							className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary-400  ${
								pathname.includes('/admin/dashboard/pay') &&
								'bg-primary-400 border-r-4 border-primary-200'
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
							>
								<path
									d="M16 31C24.2845 31 31 24.2845 31 16C31 7.7155 24.2845 1 16 1C7.7155 1 1 7.7155 1 16C1 24.2845 7.7155 31 16 31Z"
									stroke="#FF6711"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M19.9375 20.5C20.0867 20.5 20.2298 20.4407 20.3352 20.3352C20.4407 20.2298 20.5 20.0867 20.5 19.9375C20.5 19.7883 20.4407 19.6452 20.3352 19.5398C20.2298 19.4343 20.0867 19.375 19.9375 19.375C19.7883 19.375 19.6452 19.4343 19.5398 19.5398C19.4343 19.6452 19.375 19.7883 19.375 19.9375C19.375 20.0867 19.4343 20.2298 19.5398 20.3352C19.6452 20.4407 19.7883 20.5 19.9375 20.5ZM12.0625 12.625C12.2117 12.625 12.3548 12.5657 12.4602 12.4602C12.5657 12.3548 12.625 12.2117 12.625 12.0625C12.625 11.9133 12.5657 11.7702 12.4602 11.6648C12.3548 11.5593 12.2117 11.5 12.0625 11.5C11.9133 11.5 11.7702 11.5593 11.6648 11.6648C11.5593 11.7702 11.5 11.9133 11.5 12.0625C11.5 12.2117 11.5593 12.3548 11.6648 12.4602C11.7702 12.5657 11.9133 12.625 12.0625 12.625Z"
									fill="#FF6711"
									stroke="#FF6711"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M22 10L10 22"
									stroke="#FF6711"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<title>pagos</title>
							</svg>
							<div>
								<h2 className="text-xl text-left font-semibold text-black">Pagos</h2>
								<p className="text-[0.8125rem] text-left font- text text-black">
									Ingresos y egresos{' '}
								</p>
							</div>
						</Link>
					</button>
				</li>
				<li>
					<button
						type="button"
						onClick={() => handleLinkClick('help')} // Close sidebar
						aria-controls="sidebar"
						aria-expanded={false}
						className="block w-full "
					>
						<Link
							href="/admin/dashboard/help"
							className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary-400  ${
								pathname.includes('/admin/dashboard/help') &&
								'bg-primary-400 border-r-4 border-primary-200'
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-[2.275rem] h-[2.275rem] text-primary-100"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
								/>
								<title>help</title>
							</svg>

							<div>
								<h2 className="text-xl text-left font-semibold text-black">Ayuda</h2>
								<p className="text-[0.8125rem] text-left font- text text-black">
									Preguntas frecuentes{' '}
								</p>
							</div>
						</Link>
					</button>
				</li>
				<li>
					<button
						type="button"
						onClick={() => handleLinkClick('config')} // Close sidebar
						aria-controls="sidebar"
						aria-expanded={false}
						className="block w-full "
					>
						<Link
							href="/admin/dashboard/config"
							className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out hover:bg-primary-400  ${
								pathname.includes('/admin/dashboard/config') &&
								'bg-primary-400 border-r-4 border-primary-200'
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 30 30"
								fill="none"
							>
								<mask
									id="path-1-outside-1_1087_18"
									maskUnits="userSpaceOnUse"
									x="6.5"
									y="5"
									width="17"
									height="18"
									fill="black"
								>
									<rect
										fill="white"
										x="6.5"
										y="5"
										width="17"
										height="18"
									/>
									<path d="M15.0003 11.3072C14.26 11.3072 13.55 11.6175 13.0265 12.1699C12.503 12.7223 12.209 13.4715 12.209 14.2527C12.209 15.0338 12.503 15.783 13.0265 16.3354C13.55 16.8878 14.26 17.1981 15.0003 17.1981C15.7406 17.1981 16.4505 16.8878 16.974 16.3354C17.4975 15.783 17.7916 15.0338 17.7916 14.2527C17.7916 13.4715 17.4975 12.7223 16.974 12.1699C16.4505 11.6175 15.7406 11.3072 15.0003 11.3072ZM13.3255 14.2527C13.3255 13.7839 13.5019 13.3344 13.816 13.003C14.1301 12.6716 14.5561 12.4854 15.0003 12.4854C15.4444 12.4854 15.8704 12.6716 16.1845 13.003C16.4986 13.3344 16.675 13.7839 16.675 14.2527C16.675 14.7214 16.4986 15.1709 16.1845 15.5023C15.8704 15.8337 15.4444 16.0199 15.0003 16.0199C14.5561 16.0199 14.1301 15.8337 13.816 15.5023C13.5019 15.1709 13.3255 14.7214 13.3255 14.2527ZM13.2362 22.2809C13.814 22.4264 14.4063 22.5 15.0003 22.5C15.5937 22.499 16.185 22.4249 16.7621 22.2791C16.928 22.2379 17.0776 22.1435 17.1906 22.0089C17.3035 21.8743 17.3742 21.7061 17.393 21.5274L17.5236 20.2726C17.5362 20.1357 17.5795 20.004 17.6499 19.8883C17.7203 19.7725 17.8158 19.6762 17.9285 19.6071C18.0412 19.538 18.1678 19.4982 18.298 19.491C18.4281 19.4838 18.558 19.5094 18.677 19.5657L19.7684 20.07C19.9246 20.1425 20.0984 20.162 20.2655 20.1255C20.4327 20.0891 20.585 19.9987 20.7012 19.8667C21.5076 18.9499 22.1096 17.8543 22.4631 16.6603C22.5138 16.4876 22.5122 16.3025 22.4587 16.1308C22.4052 15.959 22.3023 15.8091 22.1644 15.7018L21.1992 14.9507C21.0937 14.8697 21.008 14.7634 20.9489 14.6407C20.8899 14.5179 20.8592 14.3822 20.8593 14.2445C20.8595 14.1069 20.8905 13.9712 20.9499 13.8486C21.0092 13.7261 21.0952 13.62 21.2008 13.5393L22.1611 12.7911C22.2998 12.6841 22.4033 12.534 22.457 12.3618C22.5108 12.1896 22.5121 12.0039 22.4608 11.8309C22.108 10.6364 21.5057 9.5407 20.6984 8.62442C20.5817 8.49273 20.4291 8.40246 20.2618 8.36606C20.0944 8.32966 19.9205 8.34892 19.7639 8.42119L18.6775 8.92545C18.5584 8.98022 18.4288 9.00466 18.2991 8.99679C18.1695 8.98892 18.0434 8.94896 17.931 8.88014C17.8187 8.81132 17.7233 8.71557 17.6525 8.60064C17.5817 8.48571 17.5376 8.35481 17.5236 8.21854L17.3918 6.96965C17.3734 6.78883 17.3017 6.61866 17.1869 6.48308C17.072 6.3475 16.9197 6.25334 16.7515 6.21384C16.1783 6.07867 15.5932 6.007 15.0058 6C14.415 6.00738 13.8265 6.07904 13.2496 6.21384C13.0813 6.25266 12.9289 6.34639 12.814 6.48173C12.6991 6.61708 12.6274 6.78717 12.6092 6.96789L12.4769 8.21795C12.4625 8.35443 12.4179 8.48544 12.3469 8.6005C12.2758 8.71555 12.1802 8.81144 12.0677 8.8805C11.9552 8.94956 11.829 8.98986 11.6991 8.99818C11.5692 9.0065 11.4392 8.9826 11.3197 8.9284L10.2333 8.42354C10.0765 8.35329 9.90315 8.33539 9.73647 8.37225C9.56979 8.40911 9.41781 8.49897 9.30099 8.62973C8.49354 9.54689 7.89078 10.6431 7.53688 11.8379C7.48651 12.0106 7.48826 12.1954 7.54187 12.3669C7.59548 12.5384 7.69831 12.6881 7.83611 12.7952L8.79911 13.5446C8.90401 13.626 8.98929 13.7324 9.04807 13.855C9.10685 13.9776 9.13747 14.1132 9.13747 14.2506C9.13747 14.388 9.10685 14.5235 9.04807 14.6462C8.98929 14.7688 8.90401 14.8752 8.79911 14.9566L7.83611 15.7077C7.69779 15.815 7.59466 15.9652 7.54112 16.1374C7.48758 16.3095 7.48629 16.495 7.53744 16.6679C7.89118 17.8636 8.49393 18.9606 9.30154 19.8785C9.37832 19.9656 9.47141 20.035 9.57491 20.0821C9.67841 20.1293 9.79006 20.1532 9.90279 20.1525C10.0161 20.1525 10.1283 20.1277 10.2327 20.08L11.3241 19.574C11.4432 19.5197 11.5726 19.4956 11.7021 19.5037C11.8315 19.5119 11.9573 19.5519 12.0695 19.6206C12.1816 19.6894 12.2769 19.7849 12.3476 19.8996C12.4184 20.0143 12.4627 20.1449 12.4769 20.2809L12.6081 21.5333C12.6272 21.711 12.6977 21.8782 12.8101 22.0121C12.9225 22.146 13.0713 22.2395 13.2362 22.2809ZM16.3071 21.1816C15.4458 21.368 14.5575 21.368 13.6962 21.1816L13.5873 20.1566C13.5341 19.6551 13.3075 19.192 12.9509 18.8559C12.6717 18.5964 12.3287 18.4256 11.9614 18.3631C11.5942 18.3005 11.2176 18.3488 10.8753 18.5024L9.97871 18.9148C9.40035 18.2159 8.95528 17.4058 8.66792 16.5289L9.46288 15.9092C9.70848 15.7182 9.90812 15.469 10.0457 15.1817C10.1833 14.8944 10.255 14.5769 10.255 14.255C10.255 13.9331 10.1833 13.6157 10.0457 13.3283C9.90812 13.041 9.70848 12.7918 9.46288 12.6008L8.66959 11.9829C8.95729 11.1068 9.40234 10.2976 9.98039 9.59938L10.8736 10.0117C11.1198 10.1265 11.386 10.1855 11.6552 10.1849C12.1344 10.1834 12.5964 9.99595 12.9533 9.65837C13.3101 9.32079 13.537 8.85658 13.5907 8.35403L13.699 7.32488C14.131 7.23651 14.5698 7.18939 15.0092 7.18349C15.4458 7.18939 15.8812 7.23651 16.3099 7.32488L16.4138 8.34991C16.4655 8.85278 16.6916 9.31773 17.0485 9.65534C17.3279 9.91635 17.6718 10.0882 18.0402 10.1507C18.4086 10.2133 18.7863 10.1641 19.1291 10.0088L20.0224 9.59643C20.6012 10.2944 21.0467 11.104 21.3343 11.9805L20.5399 12.5967C20.293 12.787 20.0922 13.0361 19.9538 13.3238C19.8153 13.6114 19.7432 13.9295 19.7432 14.2521C19.7432 14.5747 19.8153 14.8927 19.9538 15.1804C20.0922 15.468 20.293 15.7171 20.5399 15.9074L21.3337 16.526C21.0459 17.4008 20.6015 18.2092 20.0246 18.9071L19.1314 18.4947C18.8519 18.3635 18.5469 18.3039 18.2414 18.3208C17.9358 18.3378 17.6385 18.4308 17.3735 18.5922C17.1086 18.7537 16.8836 18.979 16.717 19.2497C16.5504 19.5205 16.4469 19.829 16.4149 20.1501L16.3071 21.1816Z" />
								</mask>
								<path
									d="M15.0003 11.3072C14.26 11.3072 13.55 11.6175 13.0265 12.1699C12.503 12.7223 12.209 13.4715 12.209 14.2527C12.209 15.0338 12.503 15.783 13.0265 16.3354C13.55 16.8878 14.26 17.1981 15.0003 17.1981C15.7406 17.1981 16.4505 16.8878 16.974 16.3354C17.4975 15.783 17.7916 15.0338 17.7916 14.2527C17.7916 13.4715 17.4975 12.7223 16.974 12.1699C16.4505 11.6175 15.7406 11.3072 15.0003 11.3072ZM13.3255 14.2527C13.3255 13.7839 13.5019 13.3344 13.816 13.003C14.1301 12.6716 14.5561 12.4854 15.0003 12.4854C15.4444 12.4854 15.8704 12.6716 16.1845 13.003C16.4986 13.3344 16.675 13.7839 16.675 14.2527C16.675 14.7214 16.4986 15.1709 16.1845 15.5023C15.8704 15.8337 15.4444 16.0199 15.0003 16.0199C14.5561 16.0199 14.1301 15.8337 13.816 15.5023C13.5019 15.1709 13.3255 14.7214 13.3255 14.2527ZM13.2362 22.2809C13.814 22.4264 14.4063 22.5 15.0003 22.5C15.5937 22.499 16.185 22.4249 16.7621 22.2791C16.928 22.2379 17.0776 22.1435 17.1906 22.0089C17.3035 21.8743 17.3742 21.7061 17.393 21.5274L17.5236 20.2726C17.5362 20.1357 17.5795 20.004 17.6499 19.8883C17.7203 19.7725 17.8158 19.6762 17.9285 19.6071C18.0412 19.538 18.1678 19.4982 18.298 19.491C18.4281 19.4838 18.558 19.5094 18.677 19.5657L19.7684 20.07C19.9246 20.1425 20.0984 20.162 20.2655 20.1255C20.4327 20.0891 20.585 19.9987 20.7012 19.8667C21.5076 18.9499 22.1096 17.8543 22.4631 16.6603C22.5138 16.4876 22.5122 16.3025 22.4587 16.1308C22.4052 15.959 22.3023 15.8091 22.1644 15.7018L21.1992 14.9507C21.0937 14.8697 21.008 14.7634 20.9489 14.6407C20.8899 14.5179 20.8592 14.3822 20.8593 14.2445C20.8595 14.1069 20.8905 13.9712 20.9499 13.8486C21.0092 13.7261 21.0952 13.62 21.2008 13.5393L22.1611 12.7911C22.2998 12.6841 22.4033 12.534 22.457 12.3618C22.5108 12.1896 22.5121 12.0039 22.4608 11.8309C22.108 10.6364 21.5057 9.5407 20.6984 8.62442C20.5817 8.49273 20.4291 8.40246 20.2618 8.36606C20.0944 8.32966 19.9205 8.34892 19.7639 8.42119L18.6775 8.92545C18.5584 8.98022 18.4288 9.00466 18.2991 8.99679C18.1695 8.98892 18.0434 8.94896 17.931 8.88014C17.8187 8.81132 17.7233 8.71557 17.6525 8.60064C17.5817 8.48571 17.5376 8.35481 17.5236 8.21854L17.3918 6.96965C17.3734 6.78883 17.3017 6.61866 17.1869 6.48308C17.072 6.3475 16.9197 6.25334 16.7515 6.21384C16.1783 6.07867 15.5932 6.007 15.0058 6C14.415 6.00738 13.8265 6.07904 13.2496 6.21384C13.0813 6.25266 12.9289 6.34639 12.814 6.48173C12.6991 6.61708 12.6274 6.78717 12.6092 6.96789L12.4769 8.21795C12.4625 8.35443 12.4179 8.48544 12.3469 8.6005C12.2758 8.71555 12.1802 8.81144 12.0677 8.8805C11.9552 8.94956 11.829 8.98986 11.6991 8.99818C11.5692 9.0065 11.4392 8.9826 11.3197 8.9284L10.2333 8.42354C10.0765 8.35329 9.90315 8.33539 9.73647 8.37225C9.56979 8.40911 9.41781 8.49897 9.30099 8.62973C8.49354 9.54689 7.89078 10.6431 7.53688 11.8379C7.48651 12.0106 7.48826 12.1954 7.54187 12.3669C7.59548 12.5384 7.69831 12.6881 7.83611 12.7952L8.79911 13.5446C8.90401 13.626 8.98929 13.7324 9.04807 13.855C9.10685 13.9776 9.13747 14.1132 9.13747 14.2506C9.13747 14.388 9.10685 14.5235 9.04807 14.6462C8.98929 14.7688 8.90401 14.8752 8.79911 14.9566L7.83611 15.7077C7.69779 15.815 7.59466 15.9652 7.54112 16.1374C7.48758 16.3095 7.48629 16.495 7.53744 16.6679C7.89118 17.8636 8.49393 18.9606 9.30154 19.8785C9.37832 19.9656 9.47141 20.035 9.57491 20.0821C9.67841 20.1293 9.79006 20.1532 9.90279 20.1525C10.0161 20.1525 10.1283 20.1277 10.2327 20.08L11.3241 19.574C11.4432 19.5197 11.5726 19.4956 11.7021 19.5037C11.8315 19.5119 11.9573 19.5519 12.0695 19.6206C12.1816 19.6894 12.2769 19.7849 12.3476 19.8996C12.4184 20.0143 12.4627 20.1449 12.4769 20.2809L12.6081 21.5333C12.6272 21.711 12.6977 21.8782 12.8101 22.0121C12.9225 22.146 13.0713 22.2395 13.2362 22.2809ZM16.3071 21.1816C15.4458 21.368 14.5575 21.368 13.6962 21.1816L13.5873 20.1566C13.5341 19.6551 13.3075 19.192 12.9509 18.8559C12.6717 18.5964 12.3287 18.4256 11.9614 18.3631C11.5942 18.3005 11.2176 18.3488 10.8753 18.5024L9.97871 18.9148C9.40035 18.2159 8.95528 17.4058 8.66792 16.5289L9.46288 15.9092C9.70848 15.7182 9.90812 15.469 10.0457 15.1817C10.1833 14.8944 10.255 14.5769 10.255 14.255C10.255 13.9331 10.1833 13.6157 10.0457 13.3283C9.90812 13.041 9.70848 12.7918 9.46288 12.6008L8.66959 11.9829C8.95729 11.1068 9.40234 10.2976 9.98039 9.59938L10.8736 10.0117C11.1198 10.1265 11.386 10.1855 11.6552 10.1849C12.1344 10.1834 12.5964 9.99595 12.9533 9.65837C13.3101 9.32079 13.537 8.85658 13.5907 8.35403L13.699 7.32488C14.131 7.23651 14.5698 7.18939 15.0092 7.18349C15.4458 7.18939 15.8812 7.23651 16.3099 7.32488L16.4138 8.34991C16.4655 8.85278 16.6916 9.31773 17.0485 9.65534C17.3279 9.91635 17.6718 10.0882 18.0402 10.1507C18.4086 10.2133 18.7863 10.1641 19.1291 10.0088L20.0224 9.59643C20.6012 10.2944 21.0467 11.104 21.3343 11.9805L20.5399 12.5967C20.293 12.787 20.0922 13.0361 19.9538 13.3238C19.8153 13.6114 19.7432 13.9295 19.7432 14.2521C19.7432 14.5747 19.8153 14.8927 19.9538 15.1804C20.0922 15.468 20.293 15.7171 20.5399 15.9074L21.3337 16.526C21.0459 17.4008 20.6015 18.2092 20.0246 18.9071L19.1314 18.4947C18.8519 18.3635 18.5469 18.3039 18.2414 18.3208C17.9358 18.3378 17.6385 18.4308 17.3735 18.5922C17.1086 18.7537 16.8836 18.979 16.717 19.2497C16.5504 19.5205 16.4469 19.829 16.4149 20.1501L16.3071 21.1816Z"
									fill="#FF6711"
								/>
								<path
									d="M15.0003 11.3072C14.26 11.3072 13.55 11.6175 13.0265 12.1699C12.503 12.7223 12.209 13.4715 12.209 14.2527C12.209 15.0338 12.503 15.783 13.0265 16.3354C13.55 16.8878 14.26 17.1981 15.0003 17.1981C15.7406 17.1981 16.4505 16.8878 16.974 16.3354C17.4975 15.783 17.7916 15.0338 17.7916 14.2527C17.7916 13.4715 17.4975 12.7223 16.974 12.1699C16.4505 11.6175 15.7406 11.3072 15.0003 11.3072ZM13.3255 14.2527C13.3255 13.7839 13.5019 13.3344 13.816 13.003C14.1301 12.6716 14.5561 12.4854 15.0003 12.4854C15.4444 12.4854 15.8704 12.6716 16.1845 13.003C16.4986 13.3344 16.675 13.7839 16.675 14.2527C16.675 14.7214 16.4986 15.1709 16.1845 15.5023C15.8704 15.8337 15.4444 16.0199 15.0003 16.0199C14.5561 16.0199 14.1301 15.8337 13.816 15.5023C13.5019 15.1709 13.3255 14.7214 13.3255 14.2527ZM13.2362 22.2809C13.814 22.4264 14.4063 22.5 15.0003 22.5C15.5937 22.499 16.185 22.4249 16.7621 22.2791C16.928 22.2379 17.0776 22.1435 17.1906 22.0089C17.3035 21.8743 17.3742 21.7061 17.393 21.5274L17.5236 20.2726C17.5362 20.1357 17.5795 20.004 17.6499 19.8883C17.7203 19.7725 17.8158 19.6762 17.9285 19.6071C18.0412 19.538 18.1678 19.4982 18.298 19.491C18.4281 19.4838 18.558 19.5094 18.677 19.5657L19.7684 20.07C19.9246 20.1425 20.0984 20.162 20.2655 20.1255C20.4327 20.0891 20.585 19.9987 20.7012 19.8667C21.5076 18.9499 22.1096 17.8543 22.4631 16.6603C22.5138 16.4876 22.5122 16.3025 22.4587 16.1308C22.4052 15.959 22.3023 15.8091 22.1644 15.7018L21.1992 14.9507C21.0937 14.8697 21.008 14.7634 20.9489 14.6407C20.8899 14.5179 20.8592 14.3822 20.8593 14.2445C20.8595 14.1069 20.8905 13.9712 20.9499 13.8486C21.0092 13.7261 21.0952 13.62 21.2008 13.5393L22.1611 12.7911C22.2998 12.6841 22.4033 12.534 22.457 12.3618C22.5108 12.1896 22.5121 12.0039 22.4608 11.8309C22.108 10.6364 21.5057 9.5407 20.6984 8.62442C20.5817 8.49273 20.4291 8.40246 20.2618 8.36606C20.0944 8.32966 19.9205 8.34892 19.7639 8.42119L18.6775 8.92545C18.5584 8.98022 18.4288 9.00466 18.2991 8.99679C18.1695 8.98892 18.0434 8.94896 17.931 8.88014C17.8187 8.81132 17.7233 8.71557 17.6525 8.60064C17.5817 8.48571 17.5376 8.35481 17.5236 8.21854L17.3918 6.96965C17.3734 6.78883 17.3017 6.61866 17.1869 6.48308C17.072 6.3475 16.9197 6.25334 16.7515 6.21384C16.1783 6.07867 15.5932 6.007 15.0058 6C14.415 6.00738 13.8265 6.07904 13.2496 6.21384C13.0813 6.25266 12.9289 6.34639 12.814 6.48173C12.6991 6.61708 12.6274 6.78717 12.6092 6.96789L12.4769 8.21795C12.4625 8.35443 12.4179 8.48544 12.3469 8.6005C12.2758 8.71555 12.1802 8.81144 12.0677 8.8805C11.9552 8.94956 11.829 8.98986 11.6991 8.99818C11.5692 9.0065 11.4392 8.9826 11.3197 8.9284L10.2333 8.42354C10.0765 8.35329 9.90315 8.33539 9.73647 8.37225C9.56979 8.40911 9.41781 8.49897 9.30099 8.62973C8.49354 9.54689 7.89078 10.6431 7.53688 11.8379C7.48651 12.0106 7.48826 12.1954 7.54187 12.3669C7.59548 12.5384 7.69831 12.6881 7.83611 12.7952L8.79911 13.5446C8.90401 13.626 8.98929 13.7324 9.04807 13.855C9.10685 13.9776 9.13747 14.1132 9.13747 14.2506C9.13747 14.388 9.10685 14.5235 9.04807 14.6462C8.98929 14.7688 8.90401 14.8752 8.79911 14.9566L7.83611 15.7077C7.69779 15.815 7.59466 15.9652 7.54112 16.1374C7.48758 16.3095 7.48629 16.495 7.53744 16.6679C7.89118 17.8636 8.49393 18.9606 9.30154 19.8785C9.37832 19.9656 9.47141 20.035 9.57491 20.0821C9.67841 20.1293 9.79006 20.1532 9.90279 20.1525C10.0161 20.1525 10.1283 20.1277 10.2327 20.08L11.3241 19.574C11.4432 19.5197 11.5726 19.4956 11.7021 19.5037C11.8315 19.5119 11.9573 19.5519 12.0695 19.6206C12.1816 19.6894 12.2769 19.7849 12.3476 19.8996C12.4184 20.0143 12.4627 20.1449 12.4769 20.2809L12.6081 21.5333C12.6272 21.711 12.6977 21.8782 12.8101 22.0121C12.9225 22.146 13.0713 22.2395 13.2362 22.2809ZM16.3071 21.1816C15.4458 21.368 14.5575 21.368 13.6962 21.1816L13.5873 20.1566C13.5341 19.6551 13.3075 19.192 12.9509 18.8559C12.6717 18.5964 12.3287 18.4256 11.9614 18.3631C11.5942 18.3005 11.2176 18.3488 10.8753 18.5024L9.97871 18.9148C9.40035 18.2159 8.95528 17.4058 8.66792 16.5289L9.46288 15.9092C9.70848 15.7182 9.90812 15.469 10.0457 15.1817C10.1833 14.8944 10.255 14.5769 10.255 14.255C10.255 13.9331 10.1833 13.6157 10.0457 13.3283C9.90812 13.041 9.70848 12.7918 9.46288 12.6008L8.66959 11.9829C8.95729 11.1068 9.40234 10.2976 9.98039 9.59938L10.8736 10.0117C11.1198 10.1265 11.386 10.1855 11.6552 10.1849C12.1344 10.1834 12.5964 9.99595 12.9533 9.65837C13.3101 9.32079 13.537 8.85658 13.5907 8.35403L13.699 7.32488C14.131 7.23651 14.5698 7.18939 15.0092 7.18349C15.4458 7.18939 15.8812 7.23651 16.3099 7.32488L16.4138 8.34991C16.4655 8.85278 16.6916 9.31773 17.0485 9.65534C17.3279 9.91635 17.6718 10.0882 18.0402 10.1507C18.4086 10.2133 18.7863 10.1641 19.1291 10.0088L20.0224 9.59643C20.6012 10.2944 21.0467 11.104 21.3343 11.9805L20.5399 12.5967C20.293 12.787 20.0922 13.0361 19.9538 13.3238C19.8153 13.6114 19.7432 13.9295 19.7432 14.2521C19.7432 14.5747 19.8153 14.8927 19.9538 15.1804C20.0922 15.468 20.293 15.7171 20.5399 15.9074L21.3337 16.526C21.0459 17.4008 20.6015 18.2092 20.0246 18.9071L19.1314 18.4947C18.8519 18.3635 18.5469 18.3039 18.2414 18.3208C17.9358 18.3378 17.6385 18.4308 17.3735 18.5922C17.1086 18.7537 16.8836 18.979 16.717 19.2497C16.5504 19.5205 16.4469 19.829 16.4149 20.1501L16.3071 21.1816Z"
									stroke="#FF6711"
									mask="url(#path-1-outside-1_1087_18)"
								/>
								<circle
									cx="15"
									cy="15"
									r="14"
									stroke="#FF6711"
									stroke-width="2"
								/>
								<title>config</title>
							</svg>

							<div>
								<h2 className="text-xl text-left font-semibold text-black">
									Configuracíon
								</h2>
								<p className="text-[0.8125rem] text-left font- text text-black">
									Edita tu perfil{' '}
								</p>
							</div>
						</Link>
					</button>
				</li>
			</ul>
			<div className="absolute bottom-0 mx-7 my-5 flex items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="31"
					viewBox="0 0 30 31"
					fill="none"
				>
					<path
						d="M19.75 10.8654L18.5515 12.0404L20.7445 14.1988H12.1V15.8654H20.7445L18.5515 18.0154L19.75 19.1988L24 15.0321M8.7 9.19877H15.5V7.5321H8.7C7.765 7.5321 7 8.2821 7 9.19877V20.8654C7 21.7821 7.765 22.5321 8.7 22.5321H15.5V20.8654H8.7V9.19877Z"
						fill="#FF6711"
					/>
					<circle
						cx="15"
						cy="15.5321"
						r="14"
						stroke="#FF6711"
						stroke-width="2"
					/>
					<title>cerrar</title>
				</svg>
				<h1 className="text-lg font-semibold">Cerrar Sesion</h1>
			</div>
		</aside>
	)
}

export default Sidebar
