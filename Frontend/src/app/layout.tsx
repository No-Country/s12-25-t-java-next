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
			<body>
				<div className=" bg-whitebackground">{children}</div>
			</body>
		</html>
	)
}
