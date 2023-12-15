import FooterImage from '@/components/Admin/Authentication/FooterImage'
import HeaderImage from '@/components/Admin/Authentication/HeaderImage'
import MainContent from '@/components/Admin/Authentication/MainContent'
import React from 'react'

function LoginLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="md:relative min-h-screen md:h-screen flex flex-col bg-desktopwhitebackground">
			<HeaderImage />
			<div className="md:absolute w-screen h-full md:h-full ">
				<div className="flex flex-col md:flex-row w-full h-full pt-6 items-center md:justify-around">
					<MainContent />
					{children}
				</div>
			</div>
			<FooterImage />
		</div>
	)
}
export default LoginLayout
