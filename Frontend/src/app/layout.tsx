import { montserrat } from './fonts'
import './globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="es"
			className={`${montserrat.variable}`}
		>
			<body suppressHydrationWarning={true}>
				<div className=" bg-whitebackground">{children} </div>
			</body>
		</html>
	)
}
