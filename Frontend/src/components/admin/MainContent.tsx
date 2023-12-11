import Image from 'next/image'

function MainContent() {
	return (
		<div className="relative z-10 top-[22vh] left-[8vw] w-[40vw] flex flex-col items-center">
			<h1 className="text-5xl text-center leading-[4.875rem] font-semibold text-primary-100 mb-4">
				A la CartApp
			</h1>
			<div className="w-[30vw]">
				<p className="text-lg md:text-[1.625rem] font-semibold text-font text-center px-5">
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
		</div>
	)
}
export default MainContent
