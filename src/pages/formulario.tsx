/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import styles from '@/styles/formulario.module.css';
import { IUserCreate } from '@/types/user';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function Form() {
	const {
		register,
		handleSubmit,
		formState,
	  } = useForm<IUserCreate>({mode: 'onBlur'})
	  
	const handleSubmitEvent: SubmitHandler<IUserCreate> = async(data: IUserCreate) => {
		try {
			const response = await fetch('/api/users/create',{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const result = await response.json();
			alert('Cadastrado');
		}
		catch(error) {
			console.error(error);
		}
		console.log('submit');
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit(handleSubmitEvent)}>
					<input type="text" placeholder="Name" 
						{
							...register('name', 
							{
								required: 
								{
									value: true,
									message: 'Este campo é obrigatório'
								}
							})
						}
					/>
					{formState.errors.name && <span>{formState.errors.name.message}</span>}
					<input type="email" placeholder="E-mail" 
						{...register('email', {
							required: {
								value: true, 
								message: 'Este campo é obrigatório'
							}, 
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
								message: 'insira um email valido'
							}
						})}
					/>
					{formState.errors.email && <span>{formState.errors.email.message}</span>}

					<button type="submit" disabled={!formState.isValid} data-type="confirm">
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
}
