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
		<div className="z-10 w-1/3 min-h-[35rem] flex items-center rounded-xl shadow-form bg-white bg-none">
			<div className="flex w-full h-full justify-center items-center">
				<div className="flex flex-col w-2/3 my-12">
					<h2 className="text-3xl font-semibold text-font">{title}</h2>
					<p className="text-xs font-normal leading-6 tracking-wider mt-1">
						{text}{' '}
						<a
							href={linkHref}
							className="text-secondary-100 underline"
						>
							{linkText}
						</a>
					</p>
					{children}
				</div>
			</div>
		</div>
	)
}
export default FormContainer
