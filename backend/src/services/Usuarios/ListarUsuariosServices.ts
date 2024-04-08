import prismaClient from '../../prisma'

class ListarUsuariosServices{
    async execute(){
        const listarUsuarios = await prismaClient.user.findMany({
            select:{
               id: true,
               nome: true,
               email: true,
               create_at: true,
               update_at: true
            }
        })
        return (listarUsuarios)
    }
}

export { ListarUsuariosServices }