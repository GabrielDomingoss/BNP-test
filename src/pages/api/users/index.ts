/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from 'next/types';

import { IUser } from '@/types/user.d';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const users: Array<IUser> = [];

	const usersList:IUser[] =  [
		{id:1, name: 'Gabriel', email: 'gabriel-gdps@hotmail.com'},
		{id:2, name: 'Domingos', email: 'gdomingoss11@gmail.com'}
	];

	users.push(usersList[0], usersList[1]);

	if(req.method === 'GET') {
		return res.status(200).json(users);
	}
	else {
		return res.status(500).json(users);
	}
};
