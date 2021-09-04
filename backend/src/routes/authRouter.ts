import { Router, Request, Response } from "express"

const authRouter = Router()

authRouter.post('/login', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

authRouter.post('/register', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

authRouter.post('/renew', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

authRouter.post('/lost-password', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

export default authRouter;