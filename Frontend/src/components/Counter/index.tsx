"use client";

import Image from "next/image";
import { useCounterStore } from "@/store/zustand";

export default function Counter() {
	const { count, increment, decrement } = useCounterStore();

	// FIX: add colors to tailwind config
	return (
		<div className="w-max p-2 text-2xl gap-8 font-semibold font-montserrat shadow-2xl bg-[#EBEBEB] text-[#1A1A1A] rounded-3xl flex items-center gap-2 justify-around">
			<button
				type="button"
				className="w-8 h-8 text-center text-3xl flex items-center justify-center text-white font-bold rounded-full"
				onClick={decrement}
			>
				<Image width={32} height={32} src={"/minusIcon.svg"} alt="minus icon" />
			</button>
			<span>{count}</span>
			<button
				type="button"
				className="w-8 h-8 flex text-3xl items-center justify-center text-white font-bold rounded-full"
				onClick={increment}
			>
				<Image width={32} height={32} src={"/plusIcon.svg"} alt="minus icon" />
			</button>
		</div>
	);
}