import { Request, Response } from 'express'
import { ListarUsuariosServices } from '../../services/Usuarios/ListarUsuariosServices'

class ListarUsuariosController{
    async handle(req: Request, res: Response){

        const listarUsuariosServices = new ListarUsuariosServices()
        const listarUsuarios = await listarUsuariosServices.execute()
        
        return res.json(listarUsuarios)
    }

}

export { ListarUsuariosController }