import prismaClient from '../../prisma'

interface CriarClientes {
    nome: string
    cpf_cnpj: string
    rg_ie: string
    celular: string
    fixo: string
    rua: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
}

class CriarClientesServices {
    async execute({
        nome,
        cpf_cnpj,
        rg_ie,
        celular,
        fixo,
        rua,
        complemento,
        bairro,
        cidade,
        estado
    }: CriarClientes) {

        if (!nome || !cpf_cnpj || !rg_ie || !celular || !rua || !bairro || !cidade || !estado) {
            throw new Error('Campos em Branco não são Permitidos')
        }

        const docCadastrado = await prismaClient.clients.findFirst({
            where: {
                OR: [
                    {
                        cpf_cnpj: cpf_cnpj
                    },
                    {
                        rg_ie: rg_ie
                    }
                ]
            }

        })
        if (docCadastrado) {
            throw new Error('CPF/CNPJ - RG/IE já esta cadastrado')
        }

        await prismaClient.clients.create({
            data: {
                nome: nome,
                cpf_cnpj: cpf_cnpj,
                rg_ie: rg_ie,
                celular: celular,
                fixo: fixo,
                rua: rua,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            }
        })
        return { data: 'Dados Salvos com Sucesso' }

    }

}

export { CriarClientesServices }