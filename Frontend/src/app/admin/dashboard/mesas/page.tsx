import BreadCrumbs from '@/components/admin/BreadCrumbs'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Admin mesas | Alacartaapp',
	description: 'Este es el dashboard del administrador para las mesas',
	// other metadata
}

export default function MesasAdmin() {
	return (
		<>
			<div>
				<BreadCrumbs title="Salones y mesas" />
				Salones y mesas
			</div>
		</>
	)
}
