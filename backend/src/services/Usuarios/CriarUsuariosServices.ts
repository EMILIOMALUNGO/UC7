import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface CriarUsuario {
    nome: string
    email: string
    password: string
}

class CriarUsuarioServices {
    async execute({ nome, email, password }: CriarUsuario) {

        if (!nome || !email || !password) {
            throw new Error('Campos em Branco não são Permitidos')
        }
        const emailCadastrado = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if (emailCadastrado) {
            throw new Error('Email já esta Cadastrado')
        }

        const senhaCrypt = await hash(password, 8)

        const usuario = await prismaClient.user.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCrypt
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })      

        return { dados: usuario }

    }
}

export { CriarUsuarioServices }