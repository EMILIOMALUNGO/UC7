import prismaClient from '../../prisma'

interface AlterarUsuario{
    id: string
    alteraNome: string
    alteraEmail: string
}

class AlterarUsuarioServices{
    async execute({ id, alteraNome, alteraEmail }: AlterarUsuario){
        const data = new Date(Date.now())
        await prismaClient.user.update({
            where:{
                id: id
            },
            data:{
                nome: alteraNome,
                email: alteraEmail,
                update_at: data
            }
        })
        return {dados: 'Dados Alterados com Sucesso'}
    }
}

export { AlterarUsuarioServices }