import Image from "next/image";
import { Button, Counter } from "..";

type Props = {
	name: string;
	description: string;
	image: string;
	price: number;
};

export default function ProductDescription({
	name,
	description,
	image,
	price,
}: Props) {
	return (
		<div className="w-full h-screen">
			<div className="relative h-2/3">
				<Image
					alt={name}
					src={image}
					fill
					sizes="(min-width: 808px) 50vw, 100vw"
					className="object-cover bottom-4"
				/>
				<div className=" w-full h-12 absolute inset-x-0 bottom-0 bg-white rounded-t-3xl" />
			</div>
			<div className="w-full h-full flex flex-col justify-between z-10 shadow-2xl p-8">
				<div className="w-full h-full flex text-[#1A1A1A] flex-col justify-start gap-2">
					<h2 className="text-2xl font-semibold">{name}</h2>
					<p className="text-darkgrey text-sm">{description}</p>
					<span className="font-bold text-lg">{price}</span>
				</div>
				<div className="w-full flex gap-10 justify-between items-center">
					<Counter />
					<Button text={`Agregar ${price}`} />
				</div>
			</div>
		</div>
	);
}
