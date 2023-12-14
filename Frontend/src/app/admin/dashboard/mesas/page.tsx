import BreadCrumbs from '@/components/Admin/BreadCrumbs'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Admin mesas ',
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
