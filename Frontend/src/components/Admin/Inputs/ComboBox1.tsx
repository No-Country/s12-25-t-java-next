'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import { Combobox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function ComboBox1({
	items,
	value,
	setValue,
}: {
	items: string[]
	value: string
	setValue: Dispatch<SetStateAction<string>>
}) {
	const [selectedItem, setSelectedItem] = useState('')
	// const [query, setQuery] = useState('')

	const filteredItems =
		value === ''
			? items
			: items.filter((item) => item.toLowerCase().includes(value.toLowerCase()))

	return (
		<div className="relative w-full mt-7">
			<Combobox
				value={value}
				onChange={setValue}
			>
				<div className="w-full overflow-hidden">
					<Combobox.Input
						onChange={(event) => setValue(event.target.value)}
						className="w-full h-10 border border-[#666] rounded-lg py-3 pl-5 items-center text-sm font-normal text-font focus:outline-none focus:border-primary-100 placeholder:text-placeholder"
						placeholder="País"
						value={value}
					/>
					<Combobox.Button className="absolute top-3 right-2">
						<ChevronDownIcon
							className="h-5 w-5 text-darkgrey"
							aria-hidden="true"
						/>
					</Combobox.Button>
					<Combobox.Options className="absolute mt-1 max-h-40 w-full overflow-auto rounded-lg bg-white py-1 text-sm">
						{filteredItems.map((item) => (
							<Combobox.Option
								key={item}
								value={item}
								className={({ active }) =>
									`text-font pl-2 hover:bg-lightgrey cursor-pointer ${
										active ? 'bg-lightgrey' : ''
									}`
								}
							>
								{item}
							</Combobox.Option>
						))}
					</Combobox.Options>
				</div>
			</Combobox>
		</div>
	)
}
export default ComboBox1
