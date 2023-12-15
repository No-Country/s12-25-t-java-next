import { ButtonProps } from '@/types/button'

function Button1({ type, style, text, disabled }: ButtonProps) {
	const styleClass =
		style === 'solid'
			? {
					noHover: 'text-white bg-primary-100 shadow-button',
					hoverText: 'hover:text-primary-100',
					hoverBg: 'hover:bg-white',
					hoverShadow: 'hover:shadow-none',
			  }
			: {
					noHover: 'text-primary-100 bg-white',
					hoverText: 'hover:text-white',
					hoverBg: 'hover:bg-primary-100',
					hoverShadow: 'hover:shadow-button',
			  }

	return (
		<button
			type={type}
			disabled={disabled}
			className={`disabled:opacity-30 text-base font-medium border border-primary-100 rounded-full w-full h-10 ${styleClass.noHover} ${styleClass.hoverText} ${styleClass.hoverBg} ${styleClass.hoverShadow}`}
		>
			{text}
		</button>
	)
}
export default Button1
