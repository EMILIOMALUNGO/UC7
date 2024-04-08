import { Request, Response } from 'express'
import { ListarClientesServices } from '../../services/Clientes/ListarClientesServices'


class ListarClientesController{
    async handle(req: Request, res: Response){
        const listarClientesServices = new ListarClientesServices()
        const  clientes = await listarClientesServices.execute()
        return res.json(clientes)
    }

}

export { ListarClientesController }