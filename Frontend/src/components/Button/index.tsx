export default function Button({ text }: { text: string }) {
	return (
		<button
			type="button"
			className="w-full py-5 px-3 bg-primary-100 rounded-3xl text-white"
		>
			{text}
		</button>
	);
}
