import ActiveButton from './activeButton'
import Search from './search'

export default function FilterProducts({
	categories,
}: {
	categories: string[]
}) {
	const getCategoriesData = () => {
		return categories.map((category) => {
			return {
				id: category,
				title: category.charAt(0).toUpperCase() + category.slice(1),
			}
		})
	}

	const categoriesData = getCategoriesData()
	console.log(categoriesData)

	return (
		<section className="w-full ">
			<div className="flex flex-row items-center justify-between px-4 mt-4">
				{categoriesData.map((data) => (
					<ActiveButton
						slug={`/${data.id}`}
						key={data.id}
					>
						<div className="flex justify-center items-center h-full">
							<span> {data.title} </span>
						</div>
					</ActiveButton>
				))}
			</div>
			<Search />
		</section>
	)
}
