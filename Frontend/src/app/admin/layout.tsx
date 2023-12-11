import FooterImage from '@/components/admin/FooterImage'
import HeaderImage from '@/components/admin/HeaderImage'
import MainContent from '@/components/admin/MainContent'
import React from 'react'

function LoginLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen">
			<HeaderImage />
			<MainContent />
			{children}
			<FooterImage />
		</div>
	)
}
export default LoginLayout
