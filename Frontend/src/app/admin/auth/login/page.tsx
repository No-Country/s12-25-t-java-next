'use client'
import Button1 from '@/components/Admin/Buttons/Button1'
import Input1 from '@/components/Admin/Inputs/Input1'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function LoginPage() {
	const [hide, setHide] = useState(true)

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault()
	}

	return (
		<div className="z-10 w-1/3 h-[35rem] rounded-xl shadow-form bg-white bg-none">
			<div className="flex w-full h-full justify-center items-center">
				<div className="flex flex-col w-2/3">
					<h2 className="text-3xl font-semibold text-font">Inicia Sesión</h2>
					<p className="text-xs font-normal leading-6 tracking-wider mt-1">
						¿Eres un usuario nuevo?{' '}
						<a className="text-secondary-100 underline">Crear una cuenta</a>
					</p>
					<form onSubmit={handleSubmit}>
						<Input1
							type="email"
							required={true}
							placeholder="Usuario o Correo Electrónico"
						/>
						<div className="relative">
							<Input1
								type={hide ? 'password' : 'text'}
								required={true}
								placeholder="Contraseña"
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
						<div className="mt-9">
							<Button1
								type="submit"
								style="outline"
								text="Ingresar"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
export default LoginPage
