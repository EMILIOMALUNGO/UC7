import prismaClient from '../../prisma'

class ListarClientesServices{
        async execute(){
            const clientes = await prismaClient.clients.findMany({})
            return (clientes)
        }
}

export { ListarClientesServices }