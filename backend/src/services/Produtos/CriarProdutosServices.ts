import prismaClient from '../../prisma'

interface CriarProdutos{
    nome: string
    fabricante: string
    quantidade: string
    banner: string
    preco: string
}

class CriarProdutosServices{
    async execute({
        nome,
        fabricante,
        quantidade,
        banner,
        preco
    }: CriarProdutos){
      if(!nome || !fabricante || !quantidade || !banner || !preco){
        throw new Error('Existem campos em Branco')
      }

        await prismaClient.produtos.create({
          data:{
            nome: nome,
            fabricante: fabricante,
            quantidade: quantidade,
            banner: banner,
            preco: preco
          }  
        })
        return {dados: 'Produto Cadastrado com Sucesso'}
    }

}

export { CriarProdutosServices }