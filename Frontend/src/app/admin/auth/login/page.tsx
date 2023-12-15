'use client'
import FormContainer from '@/components/Admin/Authentication/FormContainer'
import Button1 from '@/components/Admin/Buttons/Button1'
import Input1 from '@/components/Admin/Inputs/Input1'
import InputPass from '@/components/Admin/Inputs/InputPass'
import { useState } from 'react'

function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault()
	}

	return (
		<FormContainer
			title="Inicia Sesión"
			text="¿Eres un usuario nuevo?"
			linkText="Crear una cuenta"
			linkHref="/admin/auth/register"
		>
			<form onSubmit={handleSubmit}>
				<Input1
					type="email"
					required={true}
					placeholder="Usuario o Correo Electrónico"
					value={email}
					setValue={setEmail}
				/>
				<InputPass
					placeholder="Contraseña"
					value={password}
					setValue={setPassword}
				/>
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
						disabled={false}
					/>
				</div>
			</form>
		</FormContainer>
	)
}
export default LoginPage
