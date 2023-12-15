import Image from 'next/image'

function HeaderImage() {
	return (
		<>
			<Image
				src="/images/ellipse_1.png"
				alt=""
				width={1300}
				height={900}
				className="hidden md:block absolute right-0 top-0 w-1/2"
				priority={true}
			/>
			<div className="md:hidden h-36 bg-gradient-to-b from-[#FF965B] to-[#e5590a] flex justify-center items-center">
				<h2 className="text-white text-3xl font-semibold">A la CartApp</h2>
			</div>
		</>
	)
}
export default HeaderImage
