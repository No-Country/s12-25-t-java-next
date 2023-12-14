import Image from 'next/image'

function MainContent() {
	return (
		<div className="z-10 flex flex-col items-center">
			<h1 className="text-5xl text-center leading-[4.875rem] font-semibold text-primary-100 mb-4">
				A la CartApp
			</h1>
			<div className="w-[30vw]">
				<p className="text-lg leading-tight md:text-[1.625rem] font-medium text-font text-center px-5">
					<span className="font-semibold">Optimiza la atención</span> al cliente y{' '}
					<span className="font-semibold">simplifica la gestión</span> de pedidos en
					tu restaurante
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
