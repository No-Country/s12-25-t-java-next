'use client'
import FormContainer from '@/components/Admin/Authentication/FormContainer'
import Button1 from '@/components/Admin/Buttons/Button1'
import ComboBox1 from '@/components/Admin/Inputs/ComboBox1'
import Input1 from '@/components/Admin/Inputs/Input1'
import InputPass from '@/components/Admin/Inputs/InputPass'
import { countries } from '@/data/countries'
import { useState } from 'react'

function RegisterPage() {
	const [accept, setAccept] = useState('')

	return (
		<FormContainer
			title="Crea tu cuenta"
			text="¿Ya sos usuario?"
			linkText="Inicia Sesión"
			linkHref=""
		>
			<form>
				<Input1
					type="text"
					required={true}
					placeholder="Nombre completo"
				/>
				<Input1
					type="text"
					required={true}
					placeholder="Nombre del Negocio"
				/>
				<ComboBox1 items={countries} />
				<Input1
					type="tel"
					required={true}
					placeholder="Teléfono"
				/>
				<Input1
					type="email"
					required={true}
					placeholder="Email"
				/>
				<InputPass placeholder="Contraseña" />
				<InputPass placeholder="Repite la contraseña" />
				<div className="flex items-center gap-1 my-5">
					<input
						type="checkbox"
						id="terms"
						onChange={() => {
							setAccept('terms accepted')
						}}
						value={accept}
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
					/>
				</div>
			</form>
		</FormContainer>
	)
}
export default RegisterPage
