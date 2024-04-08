import { Request, Response} from 'express'
import { AuthUsuarioServices } from '../../services/Usuarios/AuthUsuarioServices'


class AuthUsuarioController{
    async handle(req: Request, res: Response){
        const { email, password } = req.body
        const authUsuarioServices = new AuthUsuarioServices()
        const resposta = await authUsuarioServices.execute({
            email,
            password
        })
        return res.json(resposta)
    }
}

export { AuthUsuarioController }