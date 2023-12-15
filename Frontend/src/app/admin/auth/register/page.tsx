'use client'
import FormContainer from '@/components/Admin/Authentication/FormContainer'
import Button1 from '@/components/Admin/Buttons/Button1'
import ComboBox1 from '@/components/Admin/Inputs/ComboBox1'
import Input1 from '@/components/Admin/Inputs/Input1'
import InputPass from '@/components/Admin/Inputs/InputPass'
import { countries } from '@/data/countries'
import { SyntheticEvent, useState } from 'react'

function RegisterPage() {
	const [name, setName] = useState('')
	const [businessName, setBusinessName] = useState('')
	const [country, setCountry] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repassword, setRepassword] = useState('')
	const [accept, setAccept] = useState(false)

	const [alert, setAlert] = useState('')

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault()
		if (password !== repassword) {
			setAlert('Las contraseñas no coinciden')
			setTimeout(() => {
				setAlert('')
			}, 2000)
			return
		}
	}

	return (
		<FormContainer
			title="Crea tu cuenta"
			text="¿Ya sos usuario?"
			linkText="Inicia Sesión"
			linkHref="/admin/auth/login"
		>
			<form onSubmit={handleSubmit}>
				<Input1
					type="text"
					required={true}
					placeholder="Nombre completo"
					value={name}
					setValue={setName}
				/>
				<Input1
					type="text"
					required={true}
					placeholder="Nombre del Negocio"
					value={businessName}
					setValue={setBusinessName}
				/>
				<ComboBox1
					items={countries}
					value={country}
					setValue={setCountry}
				/>
				<Input1
					type="tel"
					required={true}
					placeholder="Teléfono"
					value={phone}
					setValue={setPhone}
				/>
				<Input1
					type="email"
					required={true}
					placeholder="Email"
					value={email}
					setValue={setEmail}
				/>
				<InputPass
					placeholder="Contraseña"
					value={password}
					setValue={setPassword}
				/>
				<p className="text-error text-xs pt-2 absolute">{alert}</p>
				<InputPass
					placeholder="Repite la contraseña"
					value={repassword}
					setValue={setRepassword}
				/>
				<div className="flex items-center gap-1 my-5">
					<input
						type="checkbox"
						id="terms"
						onChange={() => {
							setAccept(!accept)
						}}
						value={accept ? 'accepted' : ''}
					/>
					<label className="text-xs font-medium text-font">
						Acepto los términos y condiciones de A la CartApp
					</label>
				</div>
				<div className="">
					<Button1
						type="submit"
						style="outline"
						text="Finalizar"
						disabled={!accept}
					/>
				</div>
			</form>
		</FormContainer>
	)
}
export default RegisterPage
