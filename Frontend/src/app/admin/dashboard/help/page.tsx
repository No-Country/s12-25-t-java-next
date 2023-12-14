import BreadCrumbs from '@/components/Admin/BreadCrumbs'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Admin | Alacartaapp',
	description: 'Este es el dashboard del administrador para ayuda',
	// other metadata
}

export default function HelpAdmin() {
	return (
		<>
			<div>
				<BreadCrumbs title="Ayuda" />
				Ayuda
			</div>
		</>
	)
}
