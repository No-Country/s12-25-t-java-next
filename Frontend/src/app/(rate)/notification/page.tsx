'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useCartStore } from '@/store/cart'
import { useSessionOrderStore } from '@/store/order'

export default function NotificationPage() {
	const { clearSessionOrder } = useSessionOrderStore()
	const { removeAll } = useCartStore()
	const route = useRouter()
	const handleHome = () => {
		route.push('/platos')
		clearSessionOrder()
		removeAll()
	}
	return (
		<div className="px-4">
			<div className="flex flex-col justify-center items-center">
				<Image
					src="/images/notification-exp.png"
					alt="notification"
					width={224}
					height={150}
					priority
					className="pt-24 pb-4"
				/>

				<h1 className="pb-16 font-semibold text-2xl text-center">
					¡Tu orden ha sido recibida!
				</h1>
				<h3 className="pb-3 text-xl font-semibold">
					Gracias por usar A la CartApp
				</h3>
				<p className="text-sm">¡Esperamos verte pronto!</p>

				<button
					type="button"
					onClick={() => handleHome()}
					className="mt-16 p-2 text-center bg-primary-100 text-white rounded-3xl w-full shadow-md shadow-grey"
				>
					Volver al menú
				</button>
			</div>
		</div>
	)
}
