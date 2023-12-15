function RegisterLink({
	text,
	linkText,
	linkHref,
}: {
	text: string
	linkText: string
	linkHref: string
}) {
	return (
		<p className="text-xs font-normal leading-6 tracking-wider mt-1">
			{text}{' '}
			<a
				href={linkHref}
				className="text-secondary-100 underline"
			>
				{linkText}
			</a>
		</p>
	)
}
export default RegisterLink
