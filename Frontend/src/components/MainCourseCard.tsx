import { StarIcon } from '@heroicons/react/20/solid'
import { NonEssentialPlate } from '../types'
import Image from 'next/image'

function MainCourseCard({ title, price, image, rating }: NonEssentialPlate) {
	return (
		<div className="w-44 h-36 rounded-lg shadow-2xl px-2 pt-2">
			<Image
				alt=""
				src={image}
				height="88"
				width="160"
				className="rounded-lg"
			/>
			<div className="mt-1 flex justify-between items-baseline">
				<h2 className="text-black text-xs">{title}</h2>
				<div className="flex items-baseline justify-center w-6 h-3 bg-lightgrey rounded">
					<StarIcon className="w-2 h-2 text-tertiary-100" />
					<p className="text-[0.5rem] text-black">{rating}</p>
				</div>
			</div>
			<p className="text-black text-sm font-semibold ">${price}</p>
		</div>
	)
}
export default MainCourseCard
