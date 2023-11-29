import { StarIcon } from '@heroicons/react/20/solid'
import { NonEssentialMainCourse } from '../../types/mainCourse'
import Image from 'next/image'

function MainCourseCard({
	title,
	price,
	image,
	rating,
}: NonEssentialMainCourse) {
	return (
		<div className="w-44 h-36 rounded-lg shadow-card px-2 pt-2 mb-5">
			<Image
				alt=""
				src={image}
				height="88"
				width="160"
				className="rounded-lg"
				priority={true}
			/>
			<div className="mt-1 flex justify-between items-baseline">
				<h2 className="text-black text-xs">{title}</h2>
				<div className="flex items-baseline justify-around w-6 h-3 px-[0.125rem] py-[0.0625rem] bg-lightgrey rounded">
					<StarIcon className="w-2 h-2 text-tertiary-100" />
					<p className="text-[0.5rem] text-black">{rating}</p>
				</div>
			</div>
			<p className="text-black text-sm font-semibold ">${price}</p>
		</div>
	)
}
export default MainCourseCard
