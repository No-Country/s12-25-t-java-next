import { Dispatch, SetStateAction, useState } from 'react'
import Input1 from './Input1'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

function InputPass({
	placeholder,
	value,
	setValue,
}: {
	placeholder: string
	value: string
	setValue: Dispatch<SetStateAction<string>>
}) {
	const [hide, setHide] = useState(true)
	return (
		<div className="relative">
			<Input1
				type={hide ? 'password' : 'text'}
				required={true}
				placeholder={placeholder}
				value={value}
				setValue={setValue}
			/>
			<button
				type="button"
				className="absolute top-2 right-2"
				onClick={() => {
					setHide(!hide)
				}}
			>
				{hide ? (
					<EyeSlashIcon className="w-6 h-6 text-inactive" />
				) : (
					<EyeIcon className="w-6 h-6 text-inactive" />
				)}
			</button>
		</div>
	)
}
export default InputPass
