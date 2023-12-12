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
			<h2>Inicia Sesión</h2>
			<p>
				¿Eres un usuario nuevo? <a>Crear una cuenta</a>
			</p>
			<form onSubmit={handleSubmit}>
				<div>
					<input placeholder="Usuario o Correo Electrónico"></input>
				</div>
				<div>
					<input placeholder="Contraseña"></input>
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
