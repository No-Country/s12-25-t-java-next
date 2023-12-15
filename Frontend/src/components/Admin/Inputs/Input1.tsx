import { HTMLInputTypeAttribute } from 'react'

function Input1({
	id,
	name,
	type,
	required,
	placeholder,
	autoFocus,
}: {
	id?: string
	name?: string
	type: HTMLInputTypeAttribute
	required: boolean
	placeholder: string
	autoFocus?: boolean
}) {
	return (
		<input
			id={id}
			name={name}
			autoFocus={autoFocus}
			type={type}
			required={required}
			placeholder={placeholder}
			className="flex w-full h-10 border border-[#666] rounded-lg py-3 pl-5 items-center mt-7 text-sm font-normal placeholder-[#666] focus:outline-none focus:border-primary-100"
		/>
	)
}
export default Input1
