'use client'
import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

// const items: string[] = [
// 	'Argentina',
// 	'Bolivia',
// 	'Chile',
// 	'Colombia',
// 	'Costa Rica',
// 	'Cuba',
// 	'República Dominicana',
// 	'Ecuador',
// 	'El Salvador',
// 	'Guatemala',
// 	'Honduras',
// 	'México',
// 	'Nicaragua',
// 	'Panamá',
// 	'Paraguay',
// 	'Perú',
// 	'España',
// 	'Uruguay',
// 	'Venezuela',
// ]

function ComboBox1({ items }: { items: string[] }) {
	const [selectedItem, setSelectedItem] = useState('')
	const [query, setQuery] = useState('')

	const filteredItems =
		query === ''
			? items
			: items.filter((item) => item.toLowerCase().includes(query.toLowerCase()))

	return (
		<div className="relative w-full mt-7">
			<Combobox
				value={selectedItem}
				onChange={setSelectedItem}
			>
				<div className="w-full overflow-hidden">
					<Combobox.Input
						onChange={(event) => setQuery(event.target.value)}
						className="w-full h-10 border border-[#666] rounded-lg py-3 pl-5 items-center text-sm font-normal text-font focus:outline-none focus:border-primary-100 placeholder:text-placeholder"
						placeholder="País"
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
