"use client";

import { useCounterStore } from "@/store/zustand";

export default function Counter() {
	const { count, increment, decrement } = useCounterStore();

	// FIX: add colors to tailwind config
	return (
		<div className="w-32 py-2 px-6 font-semibold shadow-2xl my-4 bg-[#EBEBEB] text-[#1A1A1A] rounded-3xl text-base flex items-center gap-2 justify-between">
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
