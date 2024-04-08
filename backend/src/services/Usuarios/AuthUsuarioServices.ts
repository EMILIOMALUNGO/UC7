import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthLogin{
    email: string
    password: string
}

class AuthUsuarioServices{
    async execute({ email, password }: AuthLogin){

        const usuario = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(!usuario){
            throw new Error('Usuário/Senha Incorretos')
        }
        const autenticado = await compare(password, usuario.senha)
        if(!autenticado){
            throw new Error('Usuário/Senha Incorretos')
        }

        const token = sign(
            {
                id: usuario.id,
                email: usuario.email
            },
            process.env.JWT_SEGREDO,
            {
                subject: usuario.id,
                expiresIn: '1h'
            }
        )
        
        return {
            id: usuario.id,
            email: usuario.email,
            token: token
        }
        
    }
}

export { AuthUsuarioServices }