export interface Plate {
	id: string
	title: string
	description: string
	price: number
	image: string
	rating: number
	category: string
	optionals: string[]
}

export type NonEssentialPlate = Omit<
	Plate,
	'id' | 'description' | 'category' | 'optionals'
>
