export default function Button({ text }: { text: string }) {
	return (
		<button
			type="button"
			className="w-full md:w-max h-full p-2 md:py-5 md:px-6 bg-primary-100 rounded-3xl text-white shadow-2xl"
		>
			{text}
		</button>
	);
}
