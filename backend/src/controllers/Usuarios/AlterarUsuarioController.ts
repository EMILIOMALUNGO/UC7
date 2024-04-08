import { Request, Response } from 'express'
import { AlterarUsuarioServices } from '../../services/Usuarios/AlterarUsuarioServices'


class AlterarUsuarioController{
    async handle(req: Request, res: Response ){
        const { id, alteraNome, alteraEmail } = req.body
        const alterarUsuarioService = new AlterarUsuarioServices()
        const resposta = await alterarUsuarioService.execute({
            id,
            alteraNome,
            alteraEmail
        })
        return res.json(resposta)
    }
}

export { AlterarUsuarioController }