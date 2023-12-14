import { Metadata } from 'next'
import BreadCrumbs from '../../../../components/Admin/BreadCrumbs/index'

export const metadata: Metadata = {
	title: 'Admin Menu',
	description: 'Este es el dashboard del administrador para el menu',
	// other metadata
}

export default function MenuAdmin() {
	return (
		<>
			<div>
				<BreadCrumbs title="Menu" />
				menu
			</div>
		</>
	)
}
