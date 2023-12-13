'use client'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function LoginPage() {
	const [hide, setHide] = useState(true)

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault()
	}

	return (
		<div className=" w-1/3 h-[35rem] rounded-xl shadow-form bg-white right-[6.5vw] top-1/4 bg-none">
			<div className="flex w-full h-full justify-center items-center">
				<div className="flex flex-col w-2/3">
					<h2 className="text-3xl font-semibold text-font">Inicia Sesión</h2>
					<p className="text-xs font-normal leading-6 tracking-wider mt-1">
						¿Eres un usuario nuevo?{' '}
						<a className="text-secondary-100 underline">Crear una cuenta</a>
					</p>
					<form onSubmit={handleSubmit}>
						<input
							type="email"
							required
							placeholder="Usuario o Correo Electrónico"
							className="flex w-full h-10 border border-[#666] rounded-lg py-3 pl-5 items-center mt-7 text-sm font-normal placeholder-[#666] focus:outline-none focus:border-primary-100"
						/>
						<div className="relative">
							<input
								type={hide ? 'password' : 'text'}
								required
								placeholder="Contraseña"
								className="flex w-full h-10 border border-[#666] rounded-lg py-3 pl-5 mt-4 text-sm font-normal placeholder-[#666] focus:outline-none  focus:border-primary-100"
							/>
							<button
								type="button"
								className="absolute top-2 right-2"
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
						<div className="flex w-full justify-end mt-2">
							<a className="text-xs font-normal text-darkgrey underline leading-6 tracking-wider">
								¿Has olvidado tu contraseña?{' '}
							</a>
						</div>
						<button
							type="submit"
							className="text-base font-medium text-primary-100 border border-primary-100 rounded-full w-full h-10 mt-9 hover:text-white hover:bg-primary-100"
						>
							Ingresar
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
export default LoginPage
