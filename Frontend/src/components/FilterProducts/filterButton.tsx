import FilterIcon from "./icons";


export default function FilterButton() {
	return (
		<button
			type="button"
			className=" w-10 h-10 bg-[#C8C8C8] rounded-full border 
        border-[#E5E5E5] flex items-center justify-center"
		>
			<span >
				<FilterIcon />
			</span>
		</button>
	)
}
