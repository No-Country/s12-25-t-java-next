import Image from 'next/image'

function HeaderImage() {
	return (
		<Image
			src="/images/ellipse_1.png"
			alt=""
			width={1300}
			height={900}
			className="absolute right-0 top-0 w-1/2"
		/>
	)
}
export default HeaderImage
