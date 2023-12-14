import BreadCrumbs from '@/components/Admin/BreadCrumbs'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Admin | Alacartaapp',
	description:
		'Este es el dashboard del administrador para actualizar los pagos',
	// other metadata
}

export default function PayAdmin() {
	return (
		<>
			<div>
				<BreadCrumbs title="Pagos" />
				Pagos
			</div>
		</>
	)
}
