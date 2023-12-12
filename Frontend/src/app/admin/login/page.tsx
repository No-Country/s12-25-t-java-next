'use client'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function LoginPage() {
	const [hide, setHide] = useState(true)

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault()
	}

	return (
		<div className="absolute w-1/3 h-[35rem] rounded-xl shadow-form bg-white right-[6.5vw] top-1/4 bg-none">
			<h2 className="text-3xl font-semibold text-font">Inicia Sesión</h2>
			<p className="text-xs font-normal">
				¿Eres un usuario nuevo?{' '}
				<a className="text-secondary-100 underline">Crear una cuenta</a>
			</p>
			<form onSubmit={handleSubmit}>
				<div className="flex w-2/3 h-10 border border-[#666] rounded-lg py-3 pl-5 items-center">
					<input
						placeholder="Usuario o Correo Electrónico"
						className="w-full text-xs font-normal placeholder-[#666]"
					/>
				</div>
				<div className="flex w-2/3 h-10 border border-[#666] rounded-lg py-3 pl-5 items-center">
					<input
						placeholder="Contraseña"
						className="w-64 text-xs font-normal placeholder-[#666]"
					/>
					<button
						type="button"
						onClick={() => {
							setHide(!hide)
						}}
					>
						{hide ? (
							<EyeSlashIcon className="w-6 h-6 text-inactive" />
						) : (
							<EyeIcon className="w-6 h-6 text-inactive" />
						)}
					</button>
				</div>
				<div>
					<a>¿Has olvidado tu contraseña? </a>
				</div>
				<button type="submit">Ingresar</button>
			</form>
		</div>
	)
}
export default LoginPage
