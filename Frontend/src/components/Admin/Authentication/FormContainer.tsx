import RegisterLink from './RegisterLink'

function FormContainer({
	children,
	title,
	text,
	linkText,
	linkHref,
}: {
	children: React.ReactNode
	title: string
	text: string
	linkText: string
	linkHref: string
}) {
	return (
		<div className="md:z-10 w-11/12 md:w-1/3 min-h-fit md:min-h-[35rem] flex items-center md:rounded-xl md:shadow-form md:bg-white bg-none">
			<div className="flex w-full h-full justify-center items-center">
				<div className="flex flex-col min-h-full w-full md:w-2/3 md:my-12">
					<main className="grow w-full">
						<h2 className="hidden md:block text-3xl font-semibold text-font">
							{title}
						</h2>
						<h2 className="md:hidden text-xl font-semibold text-font">
							Te damos la bienvenida
						</h2>
						<div className="hidden md:block">
							<RegisterLink
								text={text}
								linkText={linkText}
								linkHref={linkHref}
							/>
						</div>
						<p className="md:hidden text-lg font-semibold text-font">{title}</p>
						{children}
					</main>
					<footer className="md:hidden text-center mb-10">
						<RegisterLink
							text={text}
							linkText={linkText}
							linkHref={linkHref}
						/>
					</footer>
				</div>
			</div>
		</div>
	)
}
export default FormContainer
