import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from 'react'

function Input1({
	id,
	name,
	type,
	required,
	placeholder,
	autoFocus,
	value,
	setValue,
}: {
	id?: string
	name?: string
	type: HTMLInputTypeAttribute
	required: boolean
	placeholder: string
	autoFocus?: boolean
	value: string
	setValue: Dispatch<SetStateAction<string>>
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
			value={value}
			onChange={(event) => setValue(event.target.value)}
		/>
	)
}
export default Input1
