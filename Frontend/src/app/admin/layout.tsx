import Image from 'next/image'
import React from 'react'

function LoginLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-screen">
			<Image
				src="/images/ellipse_1.png"
				alt=""
				width={686.24}
				height={464.16}
				className="absolute right-0 top-0"
			/>
			<Image
				src="/images/ellipse_2.png"
				alt=""
				width={849.92}
				height={304}
				className="absolute left-0 bottom-0"
			/>
			<div className="absolute top-56 left-48 w-[24.625rem] flex flex-col items-center">
				<h1 className="text-5xl leading-[4.875rem] font-semibold text-primary-100 mb-4">
					A la CartApp
				</h1>
				<p className="text-[1.625rem] font-semibold text-font text-center">
					Optimiza la atención al cliente y simplifica la gestión de pedidos en tu
					restaurante
				</p>
				<Image
					src="/images/eating.png"
					alt=""
					width={434}
					height={364}
					className="mt-8"
					priority={true}
				/>
			</div>
			{children}
		</div>
	)
}
export default LoginLayout
