import FooterImage from '@/components/Admin/Authentication/FooterImage'
import HeaderImage from '@/components/Admin/Authentication/HeaderImage'
import MainContent from '@/components/Admin/Authentication/MainContent'
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
