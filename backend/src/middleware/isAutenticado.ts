import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload {
    sub: string
}

export function isAutenticado(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const autetToken = req.headers.authorization

    if (!autetToken) {
        return res.status(401).end()
    }

    const [, token] = autetToken.split(' ')

    try {

        const { sub } = verify(
            token,
            process.env.JWT_SEGREDO
        ) as Payload
        console.log(sub)
        return next()

    } catch (err) {
        return res.status(401).end()
    }

}