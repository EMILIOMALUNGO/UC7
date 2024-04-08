import prismaClient from '../../prisma'

interface ApagarUsuarios{
    remover: string
}

class ApagarUsuariosServices{
    async execute({remover}: ApagarUsuarios){
        
        const id_testado = await prismaClient.user.findFirst({
            where: {
                id: remover
            }
        })
        console.log(id_testado)
        if(!id_testado){
            return{info: 'Id Não encontrado'}
        }
        await prismaClient.user.delete({
            where:{
                id: remover
            }
        })
        return{dados: 'Registro Apagado com Sucesso'}        
    }

}

export { ApagarUsuariosServices }