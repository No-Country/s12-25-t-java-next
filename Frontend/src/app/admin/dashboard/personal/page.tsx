import BreadCrumbs from '@/components/admin/BreadCrumbs'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'AdminPersonal | Alacartaapp',
	description: 'Este es el dashboard del administrador para el personal',
	// other metadata
}

export default function PersonalAdmin() {
	return (
		<>
			<div>
				<BreadCrumbs title="Personal" />
				personal
			</div>
		</>
	)
}
