import BreadCrumbs from '@/components/Admin/BreadCrumbs'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Admin Perfil ',
	description: 'Este es el dashboard del administrador para editar su perfil',
	// other metadata
}

export default function HelpAdmin() {
	return (
		<>
			<div>
				<BreadCrumbs title="Configuracion" />
				Editar perfil
			</div>
		</>
	)
}
