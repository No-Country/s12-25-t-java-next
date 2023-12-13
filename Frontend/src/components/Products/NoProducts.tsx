import { FaceFrownIcon } from '@heroicons/react/24/outline'

function NoProducts() {
	return (
		<div className="min-h-[75vh] flex flex-col items-center justify-center text-center">
			<FaceFrownIcon className="h-24 w-24 text-grey" />
			<p>
				Lo sentimos, no pudimos obtener el menú de productos de nuestro servidor.
			</p>
		</div>
	)
}
export default NoProducts
