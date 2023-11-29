"use client";

import { useCounterStore } from "@/store/zustand";

export default function Counter() {
	const { count, increment, decrement } = useCounterStore();

	// FIX: add colors to tailwind config
	return (
		<div className="w-full py-5 px-3 font-semibold shadow-2xl bg-[#EBEBEB] text-[#1A1A1A] rounded-3xl text-base flex items-center gap-2 justify-around">
			<button type="button" onClick={decrement}>
				-
			</button>
			<span>{count}</span>
			<button type="button" onClick={increment}>
				+
			</button>
		</div>
	);
}
