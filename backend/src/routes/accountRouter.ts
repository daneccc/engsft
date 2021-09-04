import { Router, Request, Response } from "express"

const accountRouter = Router()

accountRouter.get('/info', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

accountRouter.get('/settings', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

accountRouter.post('/info', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

accountRouter.post('/settings', (req: Request, res: Response) => {
    res.status(200).send({message: ""})
})

export default accountRouter