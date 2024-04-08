import { Request, Response } from 'express'
import { CriarUsuarioServices } from '../../services/Usuarios/CriarUsuariosServices'

class CriarUsuarioController{
    async handle(req: Request, res: Response){
        const { nome, email, password } = req.body

        const criarUsuarioServices = new CriarUsuarioServices()
        const usuarios = await criarUsuarioServices.execute({
            nome,
            email,
            password
        })

        return res.json(usuarios)
    }

}

export {CriarUsuarioController}