"use client"
import {usePathname, useRouter } from "next/navigation";
import FilterIcon from "./icons";
import Link from "next/link";



export default function FilterButton() {
	const pathname = usePathname()
	
	return (
		<Link
			href={{
				pathname : "/filterbycategory",
				query: {subcategories:`${pathname.substring(1)}`}
			}}
			className=" w-10 h-10 bg-[#C8C8C8] rounded-full border 
        border-[#E5E5E5] flex items-center justify-center"
		
		>
			<span >
				<FilterIcon />
			</span>
		</Link>
	)
}
