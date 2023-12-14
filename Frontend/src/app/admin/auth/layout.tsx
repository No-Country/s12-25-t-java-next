import FooterImage from '@/components/Admin/FooterImage'
import HeaderImage from '@/components/Admin/HeaderImage'
import MainContent from '@/components/Admin/MainContent'
import React from 'react'

function LoginLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative h-screen bg-desktopwhitebackground">
			<HeaderImage />
			<div className="absolute w-screen h-screen">
				<div className="flex w-full h-full items-center justify-around">
					<MainContent />
					{children}
				</div>
			</div>
			<FooterImage />
		</div>
	)
}
export default LoginLayout