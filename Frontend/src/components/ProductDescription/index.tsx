'use client'

import Image from 'next/image'
import { useCartStore } from '@/store/cart'
import { Product } from '@/types/Product'
import { useRouter } from 'next/navigation'
import Button from '../Button'
import Counter from '../Counter'
import { format } from '@/utils/currency'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

type Props = {
	product: Product
}

export default function ProductDescription({ product }: Props) {
	const { add } = useCartStore()
	const [counter, setCounter] = useState(1)
	const router = useRouter()

	const handleAddToCart = (product: Product) => {
		console.log('contador', counter)
		console.log('produc', product)
		add(product, counter)
		router.back()
	}

	const { name, images, description, price } = product

	return (
		<div className="w-full h-screen overflow-hidden">
			<button
				onClick={() => router.back()}
				type="button"
				className="absolute w-8 h-8 top-2 left-2 z-10 bg-darkgrey opacity-50 rounded-full"
			>
				<ArrowLeftIcon className="w-full h-full fill-white" />
			</button>
			<div className="relative h-1/3">
				<Image
					alt={name}
					src={images[0].imageUrl}
					fill
					sizes="100vw"
					className="object-cover"
				/>
				<div className=" w-full h-6 absolute inset-x-0 bottom-0 bg-whitebackground rounded-t-3xl" />
			</div>
			<div className="w-full h-full flex flex-col justify-between z-10 py-2 px-5">
				<div className="w-full h-full flex text-font flex-col justify-start gap-2">
					<h2 className="text-2xl font-semibold">{name}</h2>
					<p className="text-darkgrey text-sm">{description}</p>
					<span className="font-bold text-lg">${price}</span>
				</div>
				<div className="w-full flex flex-col gap-1.5 fixed bottom-0 inset-x-0 p-5">
					<p className="text-font text-base font-medium">Notas Opcionales</p>
					<textarea
						name="notes"
						id="notes"
						rows={2}
						placeholder="Agrega detalles de tu pedido"
						className="w-full h-full border border-darkgrey placeholder-darkgrey rounded-[10px] px-3 py-4 font-medium text-sm"
					/>
					<div className="w-full flex gap-2 mt-4 justify-between items-center">
						<Counter
							counter={counter}
							product={product}
							handleAdd={() => setCounter((n) => n + 1)}
							handleRemove={() => setCounter((n) => n - 1)}
						/>
						<Button
							text={`Agregar ${format(product.price * counter)}`}
							variant="primary"
							onClick={() => handleAddToCart(product)}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
