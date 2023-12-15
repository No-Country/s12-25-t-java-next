import Image from 'next/image'

function MainContent() {
	return (
		<div className="hidden md:flex z-10 flex-col items-center">
			<h1 className="text-5xl text-center leading-[4.875rem] font-semibold text-primary-100 mb-4">
				A la CartApp
			</h1>
			<div className="w-4/5 md:w-[30vw]">
				<p className="text-lg leading-tight md:text-[1.625rem] font-medium text-font text-center px-5">
					<span className="font-semibold">Optimiza la atención</span> al cliente y{' '}
					<span className="font-semibold">simplifica la gestión</span> de pedidos en
					tu restaurante
				</p>
				<Image
					src="/images/eating.png"
					alt="couple-eating-picture"
					width={434}
					height={364}
					className="hidden md:block mt-8"
					priority={true}
				/>
			</div>
		</div>
	)
}
export default MainContent
