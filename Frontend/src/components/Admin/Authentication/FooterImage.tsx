import Image from 'next/image'

function FooterImage() {
	return (
		<div className="absolute bottom-0 w-7/12">
			<Image
				src="/images/ellipse_2.png"
				alt=""
				width={849.92}
				height={304}
				className="hidden md:block h-auto w-full"
			/>
		</div>
	)
}
export default FooterImage
