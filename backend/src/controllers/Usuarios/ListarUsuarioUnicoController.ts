import { Request, Response } from 'express'
import { ListarUsuarioUnicoServices } from '../../services/Usuarios/ListarUsuarioUnicoServices'

class ListarUsuarioUnicoController{
    async handle(req: Request, res: Response){
        const { id } = req.params
        const listarUsuarioUnicoService = new ListarUsuarioUnicoServices()
        const resposta = await listarUsuarioUnicoService.execute({
            id
        })
        return res.json(resposta)
    }

}

export { ListarUsuarioUnicoController }