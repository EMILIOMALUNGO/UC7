import prismaClient from '../../prisma'

interface ListarUsuario{
    id: string
}

class ListarUsuarioUnicoServices{
    async execute({ id }: ListarUsuario){
        const resposta = await prismaClient.user.findUnique({
            where:{
                id: id
            },
            select:{
                id: true,
                nome: true,
                email: true
            }
        })
        return resposta
    }
}

export { ListarUsuarioUnicoServices }