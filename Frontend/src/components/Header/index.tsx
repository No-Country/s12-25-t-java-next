import Image from 'next/image'
import Logo from '../../../public/images/Logo.png'

type Props = {
	sm?: boolean
}
const Header = ({ sm = false }: Props) => {
	return (
		<header
			className={`${
				sm ? 'lg:hidden  ' : 'sticky top-0 z-[1] '
			} flex  justify-center items-center w-screen h-[6.5rem] bg-primary-100 overflow-hidden`}
		>
			<Image
				alt=""
				src={Logo}
				width={192}
				height={32}
			/>
			{/* <h1 className="text-white text-[1.625rem] md:text-xl"> {sm ?"A la CartApp" : "CartApp"} </h1> */}
		</header>
	)
}

export default Header
